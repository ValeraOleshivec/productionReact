import React from 'react';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = () => (
    <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
    </div>
);
