import {Button, IconButton, styled, useTheme} from "@mui/material";
import {SectionWrapper} from "./SectionWrapper";
import {Reveal} from "./Reveal";
import React, { useContext } from "react";
import TextSpan from "./TextSpan";
import GitHubIcon from '@mui/icons-material/GitHub';
import {github} from "../utils/constants/info";
import ImageContext from "../contexts/ImageContext";
const words = "Hey, I\'m Edward".split(" ");

const HeroSectionWrapper = styled(SectionWrapper)({
    marginBottom: '2.6rem',
    '@media (max-width:600px)': {
        marginBottom: '4.8rem'
    }
});

const HeroBanner = styled('div')({
    position: 'absolute',
    top: 10,
    left: 0,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '1100px',
    width: '100%',
    '@media (max-width:600px)': {
        top: 0,
        marginBottom: '4.8rem',
        backgroundPosition: 'top',
    }
});

const HeroCopyWrapper = styled('div')({
    position: 'relative',
    zIndex: 10,
    width: 'fit-content',
    height: '53rem',
    margin: '24.8rem 0',
    '@media (max-width: 600px)': {
        height: '450px'
    }
});

const HeroTitle = styled('h1')({
    fontSize: '9.6rem',
    fontWeight: 700,
    lineHeight: 1.1,
    fontFamily: 'Teko',
    '@media (max-width: 600px)': {
        fontSize: '5.6rem'
    }
});

const HeroSubtitle = styled('h2')({
    fontSize: '3.6rem',
    fontWeight: 300,
    lineHeight: 1.1,
    marginTop: '2.6rem',
    fontFamily: 'Teko',
    'span': {
        fontWeight: 500,
        color: 'var(--brand)'
    },
    '@media (max-width: 600px)': {
        fontSize: '3.0rem',
        marginTop: '1.6rem'
    }
});

const HeroContactButton = styled(Button)({
    backgroundColor: 'rgb(10, 255, 157)',
    textDecoration: 'none',
    textTransform: 'initial',
    fontWeight: 800,
    color: '#343434',
    marginRight: 12,
    ':hover': {
        backgroundColor: 'rgba(10, 255, 157,0.6)'
    }
});

function Hero() {
    const theme = useTheme();
    const loadedImage = useContext(ImageContext);
    const HeroBannerWithImage = styled(HeroBanner)({
        backgroundImage: `radial-gradient(ellipse at center, transparent 4%, rgba(18,18,18,1) 65%), url(${loadedImage?.src || ''})`,
        '@media (max-width:600px)': {
            backgroundImage: `linear-gradient(transparent 50%, rgba(18,18,18,1) 95%), url(${loadedImage?.src || ''})`
        }
    });
    return (
        <HeroSectionWrapper>
            <HeroBannerWithImage/>
            <HeroCopyWrapper>
                <Reveal>
                    <HeroTitle>
                        {words.map((word, index) => (
                            <React.Fragment key={index}>
                                <TextSpan>{word}</TextSpan>
                                {(index === words.length - 1)
                                    ? <span
                                            style={{
                                            color: 'rgb(10, 255, 157)'
                                        }}>{"."}</span>
                                    : <span>{" "}</span>}
                            </React.Fragment>
                        ))}
                    </HeroTitle>
                </Reveal>
                <Reveal>
                    <HeroSubtitle>
                        I&apos;m a
                        <span>
                            {"\u00A0Computer Engineering Student"}</span>
                    </HeroSubtitle>
                </Reveal>
                <div
                    style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <Reveal>
                        <HeroContactButton
                            onClick={() => document.getElementById("contact")
                            ?.scrollIntoView()}>
                            Contact Me
                        </HeroContactButton>

                    </Reveal>
                    <Reveal>
                        <IconButton
                            onClick={() => window.open(github, '_blank')}
                            size="small"
                            sx={{
                            '&:hover': {
                                backgroundColor: 'rgba(10, 255, 157,0.2)'
                            }
                        }}>
                            <GitHubIcon
                                sx={{
                                fontSize: 24
                            }}/>
                        </IconButton>
                    </Reveal>
                </div>
            </HeroCopyWrapper>
        </HeroSectionWrapper>
    );
};

export default Hero;