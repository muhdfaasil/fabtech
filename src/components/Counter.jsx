import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2, className = '' }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(from);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, to, {
                duration: duration,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, from, to, duration, motionValue]);

    useEffect(() => {
        return motionValue.on("change", (latest) => {
            if (ref.current) {
                const value = Math.floor(latest);
                ref.current.textContent = value.toLocaleString() + "+";
            }
        });
    }, [motionValue]);

    return <span ref={ref} className={className} />;
};

export default Counter;
