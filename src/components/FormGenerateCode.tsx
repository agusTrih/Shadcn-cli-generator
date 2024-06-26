"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { componentsList } from "@/data/componentList";
import PopUpCopy from "./PopUpCopy";
import { Input } from "./ui/input";
import { useState } from "react";

const FormSchema = z.object({
	items: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: "You have to select at least one component.",
	}),
	name: z
		.string()
		.min(1, {
			message: "Please fill out this field.",
		})
		.max(20, { message: "Maximum characters allowed: 20." }),
});

export default function FormGenerateCode() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			items: [],
		},
	});
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function onSubmit(data: z.infer<typeof FormSchema>) {
		setIsOpen(true);
		// alert(data?.items?.map((item: string) => <div key={item}> {item}</div>));
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem className='max-w-fit'>
							<FormLabel>
								Name<sup>*</sup>
							</FormLabel>
							<FormControl>
								<Input placeholder='Favorite name..' {...field} />
							</FormControl>
							<FormDescription>
								If you save this CLI, then this name will become its title.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='items'
					render={() => (
						<FormItem>
							<div className='mb-4'>
								<FormLabel className='text-base'>
									<a
										href='https://ui.shadcn.com/docs/components'
										target='_blank'
										rel='noopener noreferrer'
										className='underline'
									>
										Shadcn Components
									</a>{" "}
								</FormLabel>
								<FormDescription>
									Select the components you want to add to your project
								</FormDescription>
							</div>
							<div className='grid grid-cols-2  md:gap-x-4 lg:gap-x-8  gap-y-6'>
								{componentsList?.map((group) => {
									return (
										<div
											key={group?.id}
											className='col-span-full md:col-span-1'
										>
											<h3 className='font-bold text-xl mb-2'>{group?.title}</h3>
											<div>
												{group?.components?.map((component) => {
													return (
														<FormField
															key={component?.id}
															control={form.control}
															name='items'
															render={({ field }) => {
																return (
																	<FormItem
																		key={component?.id}
																		className='flex flex-row items-start space-x-3 space-y-0 mb-2'
																	>
																		<FormControl>
																			<Checkbox
																				checked={field.value?.includes(
																					component?.slug
																				)}
																				onCheckedChange={(checked) => {
																					return checked
																						? field.onChange([
																								...field.value,
																								component?.slug,
																						  ])
																						: field.onChange(
																								field.value?.filter(
																									(value) =>
																										value !== component.slug
																								)
																						  );
																				}}
																			/>
																		</FormControl>
																		<FormLabel className='font-normal text-neutral-600'>
																			{component?.title}{" "}
																			{component?.isNew && (
																				<span className='bg-green-100 text-green-600 py-0 px-1 rounded-2xl text-xs font-medium'>
																					new
																				</span>
																			)}
																		</FormLabel>
																	</FormItem>
																);
															}}
														/>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>

							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='w-full flex justify-center'>
					<PopUpCopy
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						name={form.getValues("name")}
						items={form.getValues("items")}
					>
						<Button type='submit' className=' w-fit'>
							Generate CLI Components
						</Button>
					</PopUpCopy>
				</div>
			</form>
		</Form>
	);
}
