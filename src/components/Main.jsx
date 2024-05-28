'use client';

import React from 'react';
import clsx from 'clsx';

const Main = ({ children }) => {
    const [didAnimationStart, setDidAnimationStart] = React.useState(false);
    const [didAnimationEnd, setDidAnimationEnd] = React.useState(false);

    return (
        <main
            className={clsx('h-full', {
                'overflow-hidden': (didAnimationStart && !didAnimationEnd),
            })}
            onAnimationStart={() => setDidAnimationStart(true)}
            onAnimationEnd={() => setDidAnimationEnd(true)}
        >
            {children}
        </main>
    );
};

export default Main;
