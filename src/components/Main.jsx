'use client';

import React from 'react';
import clsx from 'clsx';

const Main = ({ className, children }) => {
    const [didAnimationStart, setDidAnimationStart] = React.useState(false);
    const [didAnimationEnd, setDidAnimationEnd] = React.useState(false);

    return (
        <main
            className={clsx('h-full', 'min-h-[calc(100vh-769px)]', {
                'overflow-hidden': (didAnimationStart && !didAnimationEnd),
            }, [className])}
            onAnimationStart={() => setDidAnimationStart(true)}
            onAnimationEnd={() => setDidAnimationEnd(true)}
        >
            {children}
        </main>
    );
};

export default Main;
