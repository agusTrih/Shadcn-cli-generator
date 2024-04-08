import { FC } from "react";

interface InfoPreviewProps {}

const InfoPreview: FC<InfoPreviewProps> = ({}) => {
	return (
		<div className='prose w-full'>
			<h4>Hello, thanks to visit Shadcn CLI generator</h4>
			<p>
				I hope you like this, and also, you can tell me some great ideas you
				have about the Shadcn CLI Generator.
			</p>
			<p>
				Please feel free to send an email to me at{" "}
				<a href='mailto:agustrihanton97@gmail.com?subject=Shadcn%20CLI%20Generator'>
					agus trihanton
				</a>
			</p>
			<h5 className='font-semibold'>The reason I created Shadcn</h5>
			<p>
				The first reason for creating the Shadcn CLI Generator is because I
				frequently use Shadcn-UI in my frontend development process. The second
				reason is that although we can easily add desired components through the
				terminal using the command `npx shadcn-ui@latest add [component]`, the
				main difference with Shadcn CLI Generator is that we can save several
				favorite CLIs to reuse when developing the same project in the future.
			</p>
			<h5 className='font-semibold'>Upcoming Update</h5>
			<ul>
				<li>Pagination Favorite List</li>
				<li>Search Favorite List</li>
				<li>Reset Form CLI Generator</li>
				<li>Add bun cli and pnpm</li>
				<li>Select All Components</li>
			</ul>
			<h5 className='font-semibold'>Thanks to:</h5>
			<ul>
				<li>
					<a href='https://ui.shadcn.com/'>Shadcn/ui</a>
				</li>
				<li>
					<a href='https://www.create-next-stack.com/'>Create Next Stack</a>
				</li>
			</ul>
		</div>
	);
};

export default InfoPreview;
