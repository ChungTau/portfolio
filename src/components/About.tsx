import {keyframes, styled} from "@mui/material";
import {SectionHeader} from "./SectionHeader";
import {SectionWrapper} from "./SectionWrapper";
import {Reveal} from "./Reveal";
import {Educations} from "./Educations";
import GradeIcon from '@mui/icons-material/Grade';
import {skills} from "../utils/constants/info";

const AboutSection = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    gap: '2.4rem',
    '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr'
    }
});
const AboutWrapper = styled('div')({
    display: 'grid',
    gridTemplateRows: '1fr 180px',
    gap: '2.4rem',
    '@media (max-width: 950px)': {
        gridTemplateRows: '1fr'
    }
});

const AboutText = styled('p')({marginBottom: '2.4rem', fontSize: '1.8rem', fontFamily: 'Chakra Petch', fontWeight: 300});

const AboutHighlightFirstLetterText = styled(AboutText)({
    ':first-letter': {
        background: 'rgba(53,53,53,0.6)',
        padding: '1rem',
        borderRadius: '0.8rem',
        fontSize: '2.2rem',
        fontWeight: 'bold',
        marginRight: '0.6rem',
        float: 'left'
    }
});

const AboutRow = styled('div')({

    backgroundColor: '#18181B',
    padding: '1.5rem',
    borderRadius: '0.8rem',
    'h4': {
        display: 'flex',
        alignItems: 'center',
        'span': {
            fontSize: '2.4rem',
            fontWeight: 'bold',
            position: 'relative',
            marginLeft: '0.8rem'
        }
    }
});

const AboutSkillsRow = styled('div')({
    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', marginTop: '0.8rem', whiteSpace: 'nowrap',
    textAlign: 'center',
    '@media (max-width:950px)':{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '0.8rem',
    }
});

const bounce = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

const AboutSkillsItem = styled('div')({
    borderRadius: '1rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    backgroundColor: '#343434',
    padding: '4px 12px 4px 12px',
    margin: '4px 20px 4px 20px',
    fontFamily: 'Chakra Petch',
    fontWeight:500,
    letterSpacing: 1,
    transition: 'all 0.3s ease', // Use a transition for smoothness
    '&:hover': {
        animation: `${bounce} 0.3s linear`,
    }
});
const AboutSkillsIcon = styled(GradeIcon)({fontSize: '2rem', color: 'rgb(10, 255, 157)'});

function About() {
    return (
        <SectionWrapper id="about">
            <SectionHeader title="About" dir="l"/>
            <AboutWrapper>
                <AboutSection>
                    <div>
                        <Reveal>
                            <AboutHighlightFirstLetterText>
                                Hey! 👋 I'm Edward, and I was born in Hong Kong 🇭🇰. Currently, I'm a year 4 📚
                                student pursuing a Bachelor of Engineering in Computer Engineering 🎓 (Honors).
                                I have always been passionate 🤩 about learning new techniques and skills that
                                can help me explore and excel in my career. Even before entering university, I
                                gained experience as an app developer 👨‍💻 and have been seeking out new
                                experiences 🚀 ever since.
                            </AboutHighlightFirstLetterText>
                        </Reveal>
                        <Reveal>
                            <AboutText>
                                Aside from my academic pursuits 📚, I'm also an avid trail runner 🏃‍♂️.
                                Although I have yet to be awarded 🏆 for my efforts, I find joy 😊 in the
                                self-discipline 💪 and breathtaking views 🏞️ that come with this pursuit.
                                Overall, I am someone who is driven 🚀, curious 🧐, and always seeking out new
                                challenges and experiences 🌍.
                            </AboutText>
                        </Reveal>
                        <Reveal>
                            <AboutText>
                                I&apos;m passively looking for new positions where I can merge my love for code
                                with my love for the canvas. If you think you&apos;ve got an opening that I
                                might like, let&apos;s connect 🔗
                            </AboutText>
                        </Reveal>
                    </div>
                    <Educations/>
                </AboutSection>
                <Reveal width="100%">
                    <AboutRow>
                        <h4>
                            <AboutSkillsIcon/>
                            <span>Skills</span>
                        </h4>
                        <AboutSkillsRow>
                            {skills.map((skill) => {
                                return (
                                    <Reveal width="100%">
                                        <AboutSkillsItem>
                                        {skill}
                                    </AboutSkillsItem>
                                    </Reveal>
                                );
                            })}
                        </AboutSkillsRow>
                    </AboutRow>

                </Reveal>
            </AboutWrapper>
        </SectionWrapper>
    );
};

export default About;