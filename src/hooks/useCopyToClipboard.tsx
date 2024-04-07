import { useState } from "react";

type CopyToClipboardStatus = "idle" | "success" | "error";

interface CopyToClipboardHook {
	status: CopyToClipboardStatus;
	copyToClipboard: (text: string) => void;
}

function useCopyToClipboard(): CopyToClipboardHook {
	const [status, setStatus] = useState<CopyToClipboardStatus>("idle");

	const copyToClipboard = (text: string): void => {
		setStatus("idle");

		if (typeof navigator !== "undefined" && navigator.clipboard) {
			navigator.clipboard
				.writeText(text)
				.then(() => {
					setStatus("success");
				})
				.catch((error) => {
					setStatus("error");
					console.error("Failed to copy text to clipboard:", error);
				});
		} else {
			setStatus("error");
			console.error("Clipboard API is not supported");
		}
	};

	return { status, copyToClipboard };
}

export default useCopyToClipboard;
