'use client'
import React, { useEffect, useState } from 'react';

const Title = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate an asynchronous operation, e.g., fetching data
        setTimeout(() => {
            setLoaded(true); // Mark as loaded after a delay (simulating async load)
        }, 1000); // Adjust the delay time as needed

        // Clean up effect (optional)
        return () => {
            // Cleanup code if needed
        };
    }, []);

    return (
        <h1 className={`text-2xl font-bold pb-2 ${loaded ? 'border-b-2 border-gray-400' : ''}`}>
            Your Title Here
        </h1>
    );
};

export default Title;
