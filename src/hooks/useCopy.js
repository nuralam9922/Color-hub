import { useRef, useState } from 'react';

const useCopy = () => {
	const [isCopied, setIsCopied] = useState(false);
	const timeoutRef = useRef(null);

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
		setIsCopied(true);

		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};

	return [isCopied, copyToClipboard];
};

export default useCopy;
