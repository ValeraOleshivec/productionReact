import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button onClick={() => setError(true)} className={classNames('', {}, [className])}>
            throw error
        </Button>
    );
};
