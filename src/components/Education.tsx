import {Typography, styled} from "@mui/material";
import {EducationType} from "../types/education";

const EducationCard = styled('div')({
    backgroundColor: '#18181B',
    boxShadow: '0px 3px 6px rgba(24, 24, 27, 0.02), 0px 2px 7px rgba(24, 24, 27, 0.04)',
    padding: '16px 16px 16px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    position: 'relative',
    transition: 'box-shadow .25s',
    marginBottom: '2rem',
    '&:before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: '8px',
        backgroundColor: 'transparent'
    },
    'h4': {
        zIndex: 2,
        position: 'relative',
        margin: '2px 0 2px 0',
        fontFamily: 'Chakra Petch',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: 1.7,
        color: '#FFFFFF'
    },
    '&:hover': {
        boxShadow: '0px 3px 6px rgba(24, 24, 27, 0.05), 0px 8px 15px rgba(24, 24, 27, 0.1)'
    }
});

const EducationContentRow = styled('div')({flexDirection: 'row', justifyContent: 'space-between', display: 'flex'});

const EducationText = styled(Typography)({color: '#a9a9a9', fontFamily: 'monospace', fontSize: '1.25rem', fontWeight: 300});

export const Education = ({education} : {
    education: EducationType
}) => {
    return (
        <EducationCard className="card" onClick={() => window.open(education.link, '_blank')}>
            <h4>{education.major}</h4>
            <EducationContentRow>
                <EducationText>
                    {education.institution}
                </EducationText>
                <EducationText>
                    {education.period}
                </EducationText>
            </EducationContentRow>
            <div className="shine"></div>
            <div className="background">
                <div className="tiles">
                    {Array.from({length:10}, (_,i) =>(<div key={i} className={`tile tile-${i+1}`}></div>))}
                </div>
                {Array.from({length:3}, (_,i) =>(<div key={i} className={`line line-${i+1}`}></div>))}
            </div>
        </EducationCard>
    );
};