import { styled } from "@mui/material";
import { Variants, motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import SchoolIcon from '@mui/icons-material/School';
import { educations } from "../utils/constants/info";
import { Education } from "./Education";

const container: Variants = {
    hidden: {
        opacity: 0,
        y: -50
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

const EducationsContainer = styled('div')({
    position: 'relative',
    width: '100%',
});

const EducationsColumn = styled('div')({
    'h4':{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2.4rem',
        'span':{
            fontSize: '2.4rem',
            fontWeight: 'bold',
            position: 'relative',
            marginLeft: '0.8rem',
        }
    }
});

const EducationsRef = styled('div')({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
});

const EducationsSchoolIcon = styled(SchoolIcon)({
    fontSize: '2rem',
    color: 'rgb(10, 255, 157)'
});

export const Educations = () => {
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
        <EducationsContainer>
            <Reveal>
                <EducationsColumn>
                    <h4>
                        <EducationsSchoolIcon/>
                        <span>Educations</span>
                    </h4>
                </EducationsColumn>
                
            </Reveal>
            <EducationsColumn>
                <EducationsRef ref={ref}>
                <motion.div
                        initial="hidden"
                        animate={mainControls}
                        transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.8
                    }}
                        variants={container}>
                        {educations.map((education) => {
                            return (<Education education={education}/>);
                        })}
                    </motion.div>
                </EducationsRef>
            </EducationsColumn>
        </EducationsContainer>
    );
}