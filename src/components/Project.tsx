import {styled} from "@mui/material";
import {motion, useAnimation, useInView} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {Reveal} from "./Reveal";
import {ProjectType} from "../types/project";

const ProjectImage = styled('div')({
    width: '100%',
    aspectRatio: 16 / 9,
    cursor: 'pointer',
    position: 'relative',
    background: 'var(--background-light)',
    borderRadius: '0.8rem',
    overflow: 'hidden',
    'img': {
        width: '85%',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        translate: '-50% 20%',

        transition: '0.25s all',

        borderRadius: '0.4rem'
    }
});

const ProjectCopy = styled('div')({margin: '1.6rem 0'});

const ProjectTitle = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
    'h4': {
        fontWeight: 'bold',
        fontSize: '2.4rem',
        flexShrink: 0,
        maxWidth: 'calc(100% = 150px)'
    },
    'a': {
        opacity: 0.75,
        transition: '0.25s opacity'
    },
    'a:hover': {
        opacity: 1
    }
});

const ProjectTitleLine = styled('div')({width: '100%', height: '1px', background: 'rgb(235, 236, 243)', opacity: 0.3});

const ProjectTech = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.2rem',
    fontSize: '1.6rem',
    color: 'var(--brand)',
    fontFamily: 'Chakra Petch',
    fontWeight: 600
});

const ProjectDescription = styled('p')({
    fontFamily: 'Chakra Petch',
    fontWeight: 500,
    'span': {
        display: 'inline-block',
        fontSize: '1.6rem',
        color: 'var(--brand)',
        cursor: 'pointer'
    },
    'span:hover': {
        textDecoration: 'underline'
    }
});

export const Project = ({
    modalContent,
    description,
    imgSrc,
    title,
    code,
    tech
} : ProjectType) => {
    const [hovered,
        setHovered] = useState(false);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return ( <> <motion.div
        ref={ref}
        variants={{
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }}
        initial="hidden"
        animate={controls}
        transition={{
        duration: 0.75
    }}>
        <a href={code} target="_blank" rel="noopener noreferrer">
        <ProjectImage
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img
                src={'example-project.jpg'}
                alt={`An image of the ${title} project.`}
                style={{
                width: hovered
                    ? "90%"
                    : "85%",
                rotate: hovered
                    ? "2deg"
                    : "0deg"
            }}/>
        </ProjectImage>
        </a>
        <ProjectCopy>
            <Reveal width="100%">
                <ProjectTitle>
                    <h4>{title}</h4>
                    <ProjectTitleLine/>
                </ProjectTitle>
            </Reveal>
            <Reveal>
                <ProjectTech>{tech.join(" - ")}</ProjectTech>
            </Reveal>
            <Reveal>
                <ProjectDescription>
                    {description}{" "}
                    <span>Learn more {">"}</span>
                </ProjectDescription>
            </Reveal>
        </ProjectCopy>
    </motion.div> </>
    );
};