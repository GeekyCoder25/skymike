import * as React from 'react';
import type {SVGProps} from 'react';
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		{...props}
	>
		<path
			stroke="#020308"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M12 1.334v21.333M22.667 12H1.333"
		/>
	</svg>
);
export default PlusIcon;
