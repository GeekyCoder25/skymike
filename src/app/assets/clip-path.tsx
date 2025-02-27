import * as React from 'react';
import type {SVGProps} from 'react';
const ClipPathIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={41}
		height={41}
		fill="none"
		{...props}
	>
		<mask
			id="a"
			width={41}
			height={41}
			x={0}
			y={0}
			maskUnits="userSpaceOnUse"
			style={{
				maskType: 'luminance',
			}}
		>
			<path fill="#fff" d="M.677.5h40v40h-40z" />
		</mask>
		<g mask="url(#a)">
			<path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
				strokeWidth={1.5}
				d="M9.01 38.833H6.345a4 4 0 0 1-4-4v-2.666m30 6.666h2.667a4 4 0 0 0 4-4v-2.666m0-23.334V6.167a4 4 0 0 0-4-4h-2.667m-23.333 0H6.344a4 4 0 0 0-4 4v2.666m7.667-1.666h4.666a2.667 2.667 0 0 1 2.667 2.666V14.5a2.667 2.667 0 0 1-2.667 2.667h-4.666A2.667 2.667 0 0 1 7.344 14.5V9.833a2.667 2.667 0 0 1 2.667-2.666m0 16.666h4.666a2.667 2.667 0 0 1 2.667 2.667v4.667a2.667 2.667 0 0 1-2.667 2.666h-4.666a2.667 2.667 0 0 1-2.667-2.666V26.5a2.667 2.667 0 0 1 2.667-2.667M26.678 7.167h4.666a2.667 2.667 0 0 1 2.667 2.666V14.5a2.667 2.667 0 0 1-2.667 2.667h-4.667a2.667 2.667 0 0 1-2.666-2.667V9.833a2.667 2.667 0 0 1 2.666-2.666m0 16.666h4.666a2.667 2.667 0 0 1 2.667 2.667v4.667a2.667 2.667 0 0 1-2.667 2.666h-4.667a2.667 2.667 0 0 1-2.666-2.666V26.5a2.667 2.667 0 0 1 2.666-2.667"
			/>
		</g>
	</svg>
);
export default ClipPathIcon;
