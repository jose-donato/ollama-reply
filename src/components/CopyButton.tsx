import { ClipboardCheck, ClipboardCopy } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

export default function CopyButton({ response }: { response: string }) {
	const [isCopied, setIsCopied] = useState(false);
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						className="absolute top-2 right-2 group-hover:block hidden w-6 h-6 p-1"
						variant="secondary"
						size="icon"
						onClick={() => {
							setIsCopied(true);
							navigator.clipboard.writeText(
								response.trim().replace(/^"|"$/g, ""),
							);
							setTimeout(() => {
								setIsCopied(false);
							}, 2000);
						}}
					>
						{isCopied ? (
							<ClipboardCheck size={16} />
						) : (
							<ClipboardCopy size={16} />
						)}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Copy to clipboard</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
