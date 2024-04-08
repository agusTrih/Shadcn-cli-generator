import { useState } from "react";
import { toast } from "sonner";

type CopyToClipboardStatus = "idle" | "success" | "error";

interface CopyToClipboardHook {
	status: CopyToClipboardStatus;
	copyToClipboard: (text: string) => void;
}

function useCopyToClipboard(): CopyToClipboardHook {
	const [status, setStatus] = useState<CopyToClipboardStatus>("idle");

	const copyToClipboard = async (text: string): Promise<void> => {
		setStatus("idle");

		try {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				await navigator.clipboard.writeText(text);
				setStatus("success");
				toast.success("Success Copy CLI to clipboard");
			} else {
				throw new Error("Clipboard API is not available");
			}
		} catch (error) {
			setStatus("error");
			toast.error(`Failed to copy text to clipboard: ${error}`);
		} finally {
			const TIMEOUT_DELAY_MS = 5000;
			// Setelah 5 detik, kembalikan status ke 'idle'
			setTimeout(() => {
				setStatus("idle");
			}, TIMEOUT_DELAY_MS);
		}
	};

	return { status, copyToClipboard };
}

export default useCopyToClipboard;
