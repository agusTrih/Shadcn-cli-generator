"use client";

import { KEY_NAME } from "@/constant";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { getLocalStorage } from "@/lib/utils";
import { DataStored } from "@/types";
import { CheckCircle, Copy, X } from "lucide-react";
import { FC } from "react";
import { Button } from "./ui/button";
interface FavoriteCliProps {}

const FavoriteCli: FC<FavoriteCliProps> = ({}) => {
	const { copyToClipboard, status } = useCopyToClipboard();
	const data: DataStored[] | [] = getLocalStorage(KEY_NAME) || [];
	if (!data) return <>Loading..</>;
	if (!data.length) return <div>Empty data</div>;
	return (
		<div className='mx-1'>
			{data?.map((item) => {
				return (
					<div key={item?.name} className='mb-4 p-4 rounded-md bg-background '>
						<h5 className='font-bold mb-2 text-xl border-b'>{item?.name}</h5>
						{/* code */}
						<pre className='bg-neutral-800 text-neutral-50 p-4 rounded-md relative w-full'>
							<code className='whitespace-break-spaces '>
								<div className='mr-2'>{item?.cli}</div>
							</code>
							<Button
								type='button'
								size='sm'
								className='absolute top-1 right-1 bg-opacity-10 '
								onClick={() => {
									copyToClipboard(`${item?.cli}`);
								}}
							>
								<div className='flex gap-x-1 items-center'>
									<span className='sr-only'>Copy</span>
									<Copy size={14} />
								</div>
							</Button>
						</pre>
					</div>
				);
			})}
		</div>
	);
};

export default FavoriteCli;
