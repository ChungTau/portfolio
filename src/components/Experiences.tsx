import {Variants, motion, useAnimation, useInView} from "framer-motion";
import {useEffect, useRef} from "react";
import {SectionWrapper} from "./SectionWrapper";
import {SectionHeader} from "./SectionHeader";
import {styled} from "@mui/material";
import {experiences} from "../utils/constants/info";
import { Experience } from "./Experience";

const container : Variants = {
    hidden: {
        opacity: 0,
        y: -50
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

const ExperiencesRef = styled('div')({position: "relative", width: '100%', overflow: "hidden"});

function Experiences() {
    const mainControls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);
    return (
        <SectionWrapper id="experiences">
            <SectionHeader title="Experiences" dir="r"/>
            <ExperiencesRef ref={ref}>
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay: 0.4
                }}
                    variants={container}>
                    {experiences.map((experience) => {
                        return (<Experience experience={experience}/>);
                    })}
                </motion.div>
            </ExperiencesRef>
        </SectionWrapper>
    );
};

export default Experiences;