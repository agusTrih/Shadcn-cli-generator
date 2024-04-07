import { FC } from "react";
import { Bookmark, Check, CheckCircle, Copy, X } from "lucide-react";

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
	items: string[];
	name: string;
	children: React.ReactNode;
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const PopUpCopy: FC<PopUpCopyProps> = ({
	items,

	name,
	children,
	isOpen,
	setIsOpen,
}) => {
	const { copyToClipboard, status } = useCopyToClipboard();

	const codeCLI = `npx shadcn-ui@latest add ${items?.join(" ")}`;
	console.log(isOpen, " cek isOpen");

	return (
		<Dialog open={isOpen}>
			<DialogTrigger asChild>
				{children}
				{/* <Button>{title}</Button> */}
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>CLI Ready</DialogTitle>
					<DialogDescription>
						Run the following command in your terminal:
					</DialogDescription>
				</DialogHeader>
				<div className='flex items-center space-x-2'>
					<div className='grid flex-1 gap-2'>
						<Label htmlFor='link' className='sr-only'>
							Link
						</Label>
						<code className='bg-neutral-800 text-neutral-500 p-4 rounded-md relative'>
							<div>
								<span className='text-white'>npx</span> shadcn-ui@latest add{" "}
								{items?.map((item) => `${item} `)}
							</div>
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
							<div className='flex gap-x-1 items-center justify-center'>
								<CheckCircle size={14} />
								success
							</div>
						)}
						{status === "error" && <p>Gagal menyalin teks ke clipboard.</p>}
						{status === "idle" && (
							<div className='flex gap-x-1 items-center'>
								<span className='sr-only'>Copy</span>
								<Copy size={14} /> Copy to Clipboard
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
					<button
						onClick={() => {
							setIsOpen(false);
						}}
						className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
					>
						<X className='h-4 w-4' />
						<span className='sr-only'>Close</span>
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default PopUpCopy;
