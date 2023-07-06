import {HTMLMotionProps, Variants, motion} from "framer-motion";
import {DEFAULT_TITLE} from "../utils/constants/info";
import { useCallback } from "react";
import { styled } from "@mui/material";

interface LoaderProps extends HTMLMotionProps < "div" > {
    setLoading: React.Dispatch < React.SetStateAction < boolean >>;
    delay?: number;
    replay: boolean;
    duration?: number;
}
const LoaderContainer = styled(motion.div)({
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Monoton',
    overflow: 'hidden',
    minWidth: '100vw'
});

const LoaderInner = styled(motion.h1)({
    display: 'flex',
    overflow: 'hidden',
    fontSize: '72px',
    '@media (max-width: 600px)': {
        fontSize: '32px'
    }
});

const child : Variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 4,
            stiffness: 400
        } // You can adjust the duration as needed.
    },
    hidden: {
        opacity: 0,
        y: 20
    }
};

function Loader({
    setLoading,
    delay = 0.1,
    replay,
    duration = 0.1
} : LoaderProps) {
    const letters = Array.from(DEFAULT_TITLE);
    const onAnimationComplete = useCallback(() => {
        setTimeout(() => setLoading(false), 50)
    }, [setLoading]);
    const container : Variants = {
        hidden: {
            opacity: 0
        },
        visible: (i : number = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: duration,
                delayChildren: i * delay
            }
        }),
        exit: {
            opacity: 1
        }
    };
    return (
        <LoaderContainer
            className="loader"
            initial='hidden'
            animate={replay
            ? "visible"
            : "hidden"}>
            <LoaderInner
                layoutId="main-title-container"
                variants={container}
                onAnimationComplete={onAnimationComplete}>
                {letters.map((letter, index) => (
                    <motion.span variants={child} key={index}>
                        {letter === " "
                            ? "\u00A0\u00A0\u00A0"
                            : letter}
                    </motion.span>
                ))}
            </LoaderInner>
        </LoaderContainer>
    );
}

export default Loader;