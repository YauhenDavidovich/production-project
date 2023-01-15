import React, { FC } from 'react';

type SideBarIconTypes = {
    width?: string;
    height?: string;
}

export const SideBarIcon: FC<SideBarIconTypes> = ({ width = '25px', height = '25px' }) => (
    <svg
        fill="none"
        height={height}
        viewBox="0 0 48 48"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="#ffc248">
            <path d="m48 6.99219h-48v6.85711h48z" />
            <path d="m48 20.5742h-48v6.8572h48z" />
            <path d="m48 34.1523h-48v6.8572h48z" />
        </g>
    </svg>
);
