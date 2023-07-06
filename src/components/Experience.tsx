import {Typography, styled} from "@mui/material";
import {ExperienceType} from "../types/experience";
import {motion, useMotionValue, useTransform, useSpring} from "framer-motion"
import {Reveal} from "./Reveal";

const ExperienceCard = styled(motion.div)(({theme}) => ({
    width: '100%',
    minHeight: '200px',
    backgroundColor: 'rgba(0,0,0,0.25)',
    backdropFilter: 'blur(8px)',
    borderRadius: '30px',
    padding: '40px 40px 24px 40px',
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '160px 40px'
}));

const ExperienceCardWrapper = styled('div')({perspective: 1000, padding: '2%'});

const ExperienceCardTitle = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
    'h4': {
        fontFamily:'Teko',
        fontWeight: 400,
        letterSpacing: 1.2,
        fontSize: '3.6rem',
        flexShrink: 0,
        maxWidth: 'calc(100% = 150px)',
        opacity: 0.7,
        transition: '0.25s opacity'
    },
    'h4:hover': {
        opacity: 1
    }
});

const ExperienceCardPosition = styled('div')({
    marginTop: '10px',
    'h5': {
        fontWeight: 400,
        fontFamily:'Teko',
        letterSpacing: 1.5,
        fontSize: '2.4rem',
        flexShrink: 0,
        maxWidth: 'calc(100% = 150px)',
        color: 'var(--brand)'
    }
});

const ExperienceCardFooter = styled('div')({display: 'flex', justifyContent: 'space-between', alignItems: 'center'});

export const Experience = ({experience} : {
    experience: ExperienceType
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = {
        damping: 70,
        stiffness: 150
    };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);
    const rotateX = useTransform(springY, [
        -50, 50
    ], [2, -2]);
    const rotateY = useTransform(springX, [
        -50, 50
    ], [-2, 2]);

    return (
        <ExperienceCardWrapper
            onMouseMove={event => {
            const rect = event
                .currentTarget
                .getBoundingClientRect();
            x.set(event.clientX - rect.left - rect.width / 2);
            y.set(event.clientY - rect.top - rect.height / 2);
        }}
            onMouseLeave={() => {
            x.set(0);
            y.set(0);
        }}>
            <ExperienceCard
                style={{
                rotateX,
                rotateY,
                transformPerspective: 5000,
                scale: 1.03,
                z: -70
            }}
                whileHover={{
                boxShadow: "0px 0px 30px rgba(5,5,5,0.4)"
            }}>
                <div>
                    <Reveal>
                        <ExperienceCardTitle>
                            <h4>
                                {experience.company}
                            </h4>
                        </ExperienceCardTitle>
                    </Reveal>
                    <Reveal>
                        <ExperienceCardPosition>
                            <h5>
                                {experience.position}
                            </h5>
                        </ExperienceCardPosition>
                    </Reveal>
                </div>
                <Reveal width="100%">
                    <ExperienceCardFooter>
                        <Typography sx={{fontSize: '1.5rem', fontFamily:'monospace'}}>{experience.period}</Typography>
                        <Typography sx={{fontSize: '2.6rem', fontFamily: 'Teko',letterSpacing:1.5}}>{experience.type}</Typography>
                    </ExperienceCardFooter>
                </Reveal>
            </ExperienceCard>
        </ExperienceCardWrapper>
    );
}
