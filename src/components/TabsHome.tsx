import { FC, useState } from "react";
import FavoriteCli from "@/components/FavoriteCli";
import FormGenerateCode from "@/components/FormGenerateCode";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FolderHeartIcon, Info, InfoIcon, Terminal } from "lucide-react";
import InfoPreview from "./InfoPreview";
interface TabsHomeProps {}

const TabsHome: FC<TabsHomeProps> = ({}) => {
	return (
		<Tabs defaultValue='cli' className='w-full'>
			<TabsList>
				<TabsTrigger value='cli'>
					<Terminal size={16} className='mr-1' />{" "}
					<span className='hidden sm:block'>Generate CLI</span>
				</TabsTrigger>
				<TabsTrigger value='love'>
					<FolderHeartIcon size={16} className='mr-1' />
					<span className='hidden sm:block'>My Favorite CLI</span>
				</TabsTrigger>
				<TabsTrigger value='info'>
					<InfoIcon size={16} className='mr-1' />
					<span className='hidden sm:block'>Info</span>
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
			<TabsContent value='info'>
				<InfoPreview />
			</TabsContent>
		</Tabs>
	);
};

export default TabsHome;
