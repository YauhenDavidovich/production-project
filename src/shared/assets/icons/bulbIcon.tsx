import React, { FC } from 'react';

type BulbIconTypes = {
    width?: string;
    height?: string;
}

export const BulbIcon: FC<BulbIconTypes> = ({ width = '24px', height = '24px' }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="#F9FBF4"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.996-3.826 1.968-5.513.913-1.585 1.774-3.083
             1.774-4.753 0-3.108-2.518-4.734-5.004-4.734-2.483 0-4.996 1.626-4.996 4.734 0 1.67.862 3.168 1.774
              4.753.971 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734
              6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0
              .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276
              0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0
              .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.753.341h-1.093c-.288
              0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659zm-3.205-18.673c-.559
               0-1.013.454-1.013 1.013 0 .56.454 1.013 1.013 1.013.56 0 1.013-.454 1.013-1.013
               0-.559-.454-1.013-1.013-1.013zm3.812 0c-.56 0-1.013.454-1.013 1.013 0 .56.454 1.013
               1.013 1.013s1.013-.454 1.013-1.013c0-.559-.453-1.013-1.013-1.013zm1.307 3.36c-.882.697-1.852
                1.127-3.213 1.127s-2.331-.43-3.213-1.126l-.287.286c.657 1.003 1.866 2.081 3.5 2.081s2.843-1.077
                3.5-2.081l-.287-.287z"
        />
    </svg>
);
