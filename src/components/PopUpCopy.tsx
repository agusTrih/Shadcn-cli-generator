import { FC } from "react";
import { Bookmark, Check, CheckCircle, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

interface PopUpCopyProps {
	title: string;
	items: string[];
}

const PopUpCopy: FC<PopUpCopyProps> = ({ items, title }) => {
	const { copyToClipboard, status } = useCopyToClipboard();

	const codeCLI = "npx shadcn-ui@latest add brown";
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>{title}</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Share link</DialogTitle>
					<DialogDescription>
						Anyone who has this link will be able to view this.
					</DialogDescription>
				</DialogHeader>
				<div className='flex items-center space-x-2'>
					<div className='grid flex-1 gap-2'>
						<Label htmlFor='link' className='sr-only'>
							Link
						</Label>
						<code className='bg-blue-100 p-4 rounded-md'>
							npx shadcn-ui@latest add {items?.map((item) => `${item} `)}
						</code>
					</div>
				</div>
				<DialogFooter className='sm:justify-start'>
					<Button
						type='button'
						size='sm'
						className='px-3 '
						onClick={() => {
							copyToClipboard(`${codeCLI}`);
						}}
					>
						{status === "success" && (
							<div className='flex gap-x-1 items-center'>
								<CheckCircle size={16} />
								success
							</div>
						)}
						{status === "error" && <p>Gagal menyalin teks ke clipboard.</p>}
						{status === "idle" && (
							<div className='flex gap-x-1'>
								<span className='sr-only'>Copy</span>
								<Copy className='h-4 w-4' /> Copy to Clipboard
							</div>
						)}
					</Button>
					<Button
						type='button'
						className='flex gap-x-1  mb-2 md:mb-0'
						size='sm'
					>
						<Bookmark className=' text-primary-foreground h-4 w-4' /> Add to
						Favorite
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default PopUpCopy;
