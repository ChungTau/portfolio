import { motion, useAnimationControls } from 'framer-motion';
import { ReactNode, useState } from 'react';

const TextSpan = ({ children }: { children: ReactNode }) => {
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);
    const rubberBand =()=> {
        controls.start({
            transform: ["scale3d(1,1,1)","scale3d(1.2,.75,1)","scale3d(.85,1.15,1)","scale3d(1.15,.95,1)","scale3d(.9,1.05,1)","scale3d(1,1,1)"]
        });
    };
    
    return (
        <motion.span
            animate={controls}
            onMouseOver={()=>{
                if (!isPlaying)
                    rubberBand();
            }}
            onAnimationComplete={()=>setIsPlaying(false)}
            style={{display:'inline-block', whiteSpace: 'nowrap'}}
        >
            {children}
        </motion.span>
    );
}

export default TextSpan;
