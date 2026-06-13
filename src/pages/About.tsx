import React from "react";
import { Box, Container, Typography, Chip } from "@mui/material";
import Grid from "@mui/material/Grid";
import ExperienceSection from "../components/ExperienceSection.tsx";
import SectionHeading from "../components/SectionHeading.tsx";

const skills = [

  "User Research",
  "Wireframing",
  "Prototyping",
  "Figma",
  "Usability Testing",
  "Interaction Design",
  "HTML & CSS",
  "Bootstrap",
  "SCSS",
  "ReactJS",
  "MUI",
  "Accessibility Testing",
  "WCAG",
  "AI-Assisted UX Research",
  "Prompt Engineering",
  "AI-Driven UI Design",
];

const About: React.FC = () => {
  return (
    <Box component="section" className="about">
      <Container maxWidth="md" className="about-herosection section-top-margin">
        <Grid container className="about_container">
          <Grid size={{ md: 6, xs: 12 }} className="about_content">
            <SectionHeading
              tagline="ABOUT"
              restText=" A bit "
              highlightText="about me"
            />

            <Typography className="about_Info">
              I’m Shraddha Rajkuwar, a human-centered UI/UX designer and developer with 7+ years of experience crafting digital products that people genuinely enjoy using. I believe great design is invisible, it gets out of the way and lets people accomplish their goals with ease. <br /> I’ve worked across enterprise applications, chatbot platforms, e-learning systems, and admin dashboards, helping teams simplify complex workflows and elevate user experience through strong design thinking and clean frontend execution.
            </Typography>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }} className="about_content">
            <img
                  src="/images/AboutMe.png"
                  alt="profile"
                  className="profile-img"
                />
          </Grid>
        </Grid>

      </Container>
      <section className="section_bigTitle_container section-top-margin">
        <Container maxWidth="md" >
          <Grid size={{ xs: 12, md: 12 }} >
            <SectionHeading
              tagline=" SKILLS & TOOLS"
              restText="What I bring to the "
              highlightText=" table"

            />

            <div className="about_skills-list">
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  className="about_skill"
                />
              ))}
            </div>
          </Grid>
        </Container>
      </section>
      <ExperienceSection />
    </Box>
  );
};

export default About;
