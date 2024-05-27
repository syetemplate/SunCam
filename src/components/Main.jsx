'use client';

import React from 'react';

const Main = ({ children }) => {
    const [didAnimationEnd, setDidAnimationEnd] = React.useState(false);

    return (
        <main
            className={`h-full ${didAnimationEnd ? '' : 'overflow-hidden'}`}
            onAnimationEnd={() => setDidAnimationEnd(true)}
        >
            {children}
        </main>
    );
};

export default Main;
