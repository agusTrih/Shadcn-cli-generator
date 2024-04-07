import FormGenerateCode from "@/components/FormGenerateCode";
import Image from "next/image";

export default function Home() {
	return (
		<div className='bg-blue-50 min-h-screen py-10'>
			<div className='max-w-xl  md:max-w-4xl lg:max-w-5xl mx-auto'>
				<div className='max-w-3xl mx-auto mb-8'>
					<h1 className='text-6xl font-black text-center '>
						Shadcn CLI Generator
					</h1>
					<p className='text-base font-black text-center mb-4 text-neutral-700'>
						Add and Save Your Favorite Shadcn UI Components!
					</p>
					{/* <div className='prose max-w-full  prose-p:text-neutral-400 text-sm'>
						<p>
							Shadcn Component CLI Hub is your go-to platform for discovering,
							adding, and saving UI components from Shadcn. With its
							user-friendly interface, you can seamlessly integrate Shadcn
							extensive collection of components into your projects using the
							Command Line Interface (CLI). Save your favorite components for
							future use and boost your UI development productivity with Shadcn
							Component CLI Hub!
						</p>
					</div> */}
				</div>
				{/* section form */}
				<div className='  bg-white p-4 md:p-8 mx-1 rounded-2xl shadow-lg'>
					<h2 className='mb-4 text-4xl font-bold'> Pick your Components</h2>
					<FormGenerateCode />
				</div>
			</div>
		</div>
	);
}
