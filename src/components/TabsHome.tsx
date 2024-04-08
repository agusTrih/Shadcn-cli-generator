import { FC, useState } from "react";
import FavoriteCli from "@/components/FavoriteCli";
import FormGenerateCode from "@/components/FormGenerateCode";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FolderHeartIcon, Terminal } from "lucide-react";
interface TabsHomeProps {}

const TabsHome: FC<TabsHomeProps> = ({}) => {
	return (
		<Tabs defaultValue='cli' className='w-full'>
			<TabsList>
				<TabsTrigger value='cli'>
					<Terminal className='mr-1' /> Generate CLI
				</TabsTrigger>
				<TabsTrigger value='love'>
					<FolderHeartIcon className='mr-1' />
					My Favorite CLI
				</TabsTrigger>
			</TabsList>
			<TabsContent value='cli'>
				<div className='  bg-white p-4 md:p-8 mx-1 rounded-2xl shadow-lg'>
					<h2 className='mb-4 text-4xl font-bold'> Pick your Components</h2>
					<FormGenerateCode />
				</div>
			</TabsContent>
			<TabsContent value='love'>
				<FavoriteCli />
			</TabsContent>
		</Tabs>
	);
};

export default TabsHome;
