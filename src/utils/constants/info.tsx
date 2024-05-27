import { EducationType } from "../../types/education";
import { ExperienceType, JobType } from "../../types/experience";
import { ProjectType } from "../../types/project";

export const DEFAULT_TITLE = 'Chan Siu Chung'


export const educations: EducationType[] = [
    {
        institution:'HKUST',
        major:'BEng in Computer Engineering',
        period:'Sep 2021 - Present',
        link:'https://cpeg.hkust.edu.hk/cgi-bin/eng/index.php'
    },
    {
        institution: 'VTC IVE(TY)',
        major:'Higher Diploma in Software Engineering',
        period: 'Sep 2019 - July 2021',
        link:'https://www.vtc.edu.hk/admission/en/programme/it114105-higher-diploma-in-software-engineering/'
    },
    {
        institution: 'VTC IVE(TY)',
        major: 'Diploma of Foundation Studies - Information Technology',
        period: 'Sep 2018 - July 2019',
        link:'https://www.vtc.edu.hk/admission/en/programme/fs113002n-diploma-of-foundation-studies-information-technology/'
    }

];

export const experiences:ExperienceType[]=[
    {
        position:'Software Engineer',
        company: 'WiseSpot Company Limited',
        period: 'Sep 2023 - May 2024',
        type: JobType.PARTTIME
    },
    {
        position:'Software Engineer',
        company: 'WiseSpot Company Limited',
        period: 'Aug 2023 - Aug 2023',
        type: JobType.INTERN
    },
    {
        position:'App Developer',
        company: 'Candy Service Limited',
        period: 'Jul 2021 - Aug 2021',
        type: JobType.PARTTIME
    },
    {
        position:'App Developer',
        company: 'Onepage',
        period: 'Apr 2021 - Jul 2021',
        type: JobType.PARTTIME
    },
    {
        position:'Web Developer',
        company: 'HKSYU',
        period: 'Jul 2020 - Aug 2020',
        type: JobType.INTERN
    }
];

export const linkedIn = 'https://www.linkedin.com/in/siu-chung-chan-483142216/';
export const github = 'https://github.com/ChungTau';
export const projects:ProjectType[] = [
    {
        title: 'Sporting Event System with 3D Map',
        code: 'https://fyp.chungtau.com/',
        tech: ['Next.js', 'Mapbox', 'Keycloak', 'Typescript', 'PostgreSQL', 'Docker', 'RESTful', 'Prisma'],
        description: "The platform efficiently manages events for holders, participants, and audiences. Event holders can create, edit, and delete events, set them as public or private, and provide details. Participants can search and join events, with real-time tracking for competitive events. An interactive 3D map allows audiences to follow participants' progress and view race routes. The system offers visually appealing and user-friendly 3D maps and real-time progress updates for participants.",
        modalContent: (
            <>
               <p>
                    Pain.app is a real-time coaching app for students learning to paint.
                    This app is my baby, designed and built on my own.
                </p> 
            </>
        )
    },
    {
        title: 'React Portfolio',
        code: 'https://github.com/',
        tech: ['React', 'MUI', 'Framer-motion', 'Typescript'],
        description: 'A Portfolio website',
        modalContent: (
            <>
               <p>
                    Pain.app is a real-time coaching app for students learning to paint.
                    This app is my baby, designed and built on my own.
                </p> 
            </>
        )
    },
    {
        title: 'Flutter Smart Home App',
        code: 'https://github.com/',
        tech: ['Flutter', 'BLOC', 'Dart', 'MySQL'],
        description: 'A FYP of Higher Diploma in Software Engineering in IVE(TY).',
        modalContent: (
            <>
               <p>
                    Pain.app is a real-time coaching app for students learning to paint.
                    This app is my baby, designed and built on my own.
                </p> 
            </>
        )
    }
];

export const skills = ['React', 'React Native', 'Flutter', 'PHP', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'MongoDB', 'GraphQL', 'Spring Boot']
export const nickname = 'Edward';
export const name = 'Chan Siu Chung';
export const role = 'Computer Engineering Student';
export const email = 'scchanau@connect.ust.hk';