import { styled } from "@mui/material";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  title: string;
  dir?: "l" | "r";
}

const SectionHeaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '2.4rem',
  marginBottom: '2.4rem'
});

const SectionHeaderDivider = styled('div')({
  width: '100%',
  height: 1,
  background: 'var(--text)',
  opacity: 0.3
});

const SectionHeaderTitle = styled('span')({
  fontSize: '5.6rem',
  fontWeight: 900,
  textAlign: 'end',
  'span':{
    color: 'var(--brand)'
  },
  '@media (max-width: 600px)': {
    fontSize: '3.6rem'
  }
});

export const SectionHeader = ({ title, dir = "r" }: SectionHeaderProps) => {
  return (
    <SectionHeaderContainer
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <SectionHeaderDivider/>
      <h3>
        <Reveal>
          <SectionHeaderTitle>
            {title}
            <span>.</span>
          </SectionHeaderTitle>
        </Reveal>
      </h3>
    </SectionHeaderContainer>
  );
};
