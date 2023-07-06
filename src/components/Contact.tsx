import {Divider, styled} from "@mui/material";
import {SectionWrapper} from "./SectionWrapper";
import {Reveal} from "./Reveal";
import {Link} from "react-router-dom";
import {email, linkedIn} from "../utils/constants/info";

const ContactWrapper = styled('div')({maxWidth: '700px', margin: 'auto', marginTop: '14rem', borderRadius: '1.2rem'});

const ContactTitle = styled('h4')({
    fontSize: '9.6rem',
    textAlign: 'center',
    fontWeight: 900,
    lineHeight: 1,
    'span': {
        color: 'var(--brand)'
    },
    '@media (max-width: 600px)': {
        fontSize: '5.6rem'
    }
});

const ContactCopy = styled('p')({
    textAlign: 'center',
    fontWeight: 200,
    margin: '2.4rem 0',
    'a': {
        color: 'var(--brand)'
    },
    'a:hover': {
        textDecoration: 'underline'
    }
});

const ContactEmail = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    width: 'fit-content',
    fontSize: '2.2rem',
    margin: 'auto',
    transition: '0.25s color',
    fontFamily:'Chakra Petch',
    '&:hover':{
        color: 'var(--brand)'
    }
});

function Contact() {
    return (
        <SectionWrapper id="contact">
            <Divider/>
            <ContactWrapper>
                <Reveal width="100%">
                    <ContactTitle>
                        Contact<span>.</span>
                    </ContactTitle>
                </Reveal>
                <Reveal width="100%">
                    <ContactCopy>
                        Shoot me an email if you want to connect! You can also find me on{" "}
                        <Link to={linkedIn} target="_blank" rel="nofollow">
                            Linkedin
                        </Link>{" "}

                        if that&apos;s more your speed.
                    </ContactCopy>
                </Reveal>
                <Reveal width="100%">
                    <Link to={`mailto:${email}`}>
                        <ContactEmail>
                            <span>{email}</span>
                        </ContactEmail>
                    </Link>
                </Reveal>
            </ContactWrapper>
        </SectionWrapper>
    );
}

export default Contact;