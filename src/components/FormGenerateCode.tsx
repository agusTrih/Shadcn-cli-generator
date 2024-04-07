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

const FormSchema = z.object({
	items: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: "You have to select at least one item.",
	}),
});

export default function FormGenerateCode() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			items: [],
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		alert(data?.items?.map((item: string) => <div key={item}> {item}</div>));
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='items'
						render={() => (
							<FormItem>
								<div className='mb-4'>
									<FormLabel className='text-base'>Sidebar</FormLabel>
									<FormDescription>
										Select the items you want to display in the sidebar.
									</FormDescription>
								</div>
								<div className='grid grid-cols-2  md:gap-x-4 lg:gap-x-8  gap-y-6'>
									{componentsList?.map((group) => {
										return (
											<div key={group?.id}>
												<h3 className='font-bold text-xl mb-2'>
													{group?.title}
												</h3>
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
																			<FormLabel className='font-normal'>
																				{component?.title}
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
							title='Generate CLI Components'
							items={form.watch("items")}
						/>
						{/* <Button type='submit' className=' w-fit'>
							Add to Favorite
						</Button> */}
					</div>
				</form>
			</Form>
		</>
	);
}
