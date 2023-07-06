import { styled } from "@mui/material";
import { SectionHeader } from "./SectionHeader";
import { SectionWrapper } from "./SectionWrapper";
import { projects } from "../utils/constants/info";
import { Project } from "./Project";

const ProjectsContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3.2rem',
    '@media (max-width:768px)':{
        gridTemplateColumns: '1fr'
    }
});

function Projects(){
    return (
        <SectionWrapper id="projects">
            <SectionHeader title="Projects" dir="l"/>
            <ProjectsContainer>
                {projects.map(project =>{return <Project key={project.title} {...project}/>})}
            </ProjectsContainer>
        </SectionWrapper>
    );
};

export default Projects;