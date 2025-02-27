import * as React from 'react';
import type {SVGProps} from 'react';
const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		{...props}
	>
		<path
			fill="#fff"
			d="M8 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2zm-7-2a10 10 0 1 1 5.18 8.764l-3.888 1.184A1 1 0 0 1 2.044 20.7l1.184-3.894A10 10 0 0 1 2 12m10-8a8 8 0 0 0-6.834 12.16 1 1 0 0 1 .102.812l-.766 2.518 2.514-.766a1 1 0 0 1 .814.104A8.001 8.001 0 1 0 12 4"
		/>
	</svg>
);
export default ChatIcon;
