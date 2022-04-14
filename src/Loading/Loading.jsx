import React from 'react';
import { motion } from 'framer-motion';

export const Loading = ({}) => {
    const spinTransition = {
        loop: Infinity,
        ease: "linear",
        duration: 1,
    }
    const circleStyle = {
        display: "block",
        width: "18px",
        height: "18px",
        border: "3px solid #e9e9e9",
        borderTop: "3px solid #3498db",
        borderRadius: "50%",
        boxSizing: "border-box",
    };
    return (<>
        <div style={{width: '100%', margin: "10px 0 0", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h2 style={{margin: "15px"}}>Loading</h2>
            <motion.span
                            style={circleStyle}
                            animate={{ rotate: 360 }}
                            transition={spinTransition}
                        />
        </div>
    </>);
};