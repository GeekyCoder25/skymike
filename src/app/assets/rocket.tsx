import * as React from 'react';
import type {SVGProps} from 'react';
const RocketIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={25}
		fill="none"
		{...props}
	>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m12 15.5-3-3m3 3a22.4 22.4 0 0 0 4-2m-4 2v5s3.03-.55 4-2c1.08-1.62 0-5 0-5m-7-1a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2.5c0 2.72-.78 7.5-6 11m-7-1H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M4.5 17c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91A2.18 2.18 0 0 0 4.5 17"
		/>
	</svg>
);
export default RocketIcon;
