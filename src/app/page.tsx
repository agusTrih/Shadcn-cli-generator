import FormGenerateCode from "@/components/FormGenerateCode";
import Image from "next/image";

export default function Home() {
	return (
		<div className='bg-blue-200 min-h-screen py-10'>
			<div className='max-w-5xl mx-auto  bg-white p-8 rounded-lg shadow-lg'>
				<h2 className='mb-4 text-4xl font-bold'> Pick your Components</h2>
				<FormGenerateCode />
			</div>
		</div>
	);
}
