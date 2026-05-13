import React from "react";
import { Container, Typography, Divider, Grid } from "@mui/material";
import SectionHeading from "./SectionHeading.tsx";

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    year: "July 2021 - Present",
    role: "UX Designer",
    company: "Tata Consultancy Services, Pune",
    description: [
      "Led end-to-end UX design from research → wireframes → high-fidelity prototypes.",
      "Created wireframes and interactive prototypes for key workflows.",
      "Ensured 100% WCAG 2.1 AA compliance.",
    ],
  },
  {
    year: "April 2020 - July 2021",
    role: "UI UX Designer and Developer",
    company: "Blue-Bricks Pty Ltd, Pune",
    description: [
      "Designed and developed admin dashboards for LMS, Banking eKYC, and SSO systems.",
      "Built a custom eKYC dashboard, improving verification workflows and efficiency.",
      "Developed and customized WordPress websites with a focus on UX and performance.",
      "Delivered responsive and scalable web applications."
    ],
  },
  {
    year: "Sep 2019 to April 2020",
    role: "Assistance Front-End Designer",
    company: "The Other Fruit, Pune",
    description: [
      "Converted high-fidelity designs into pixel-perfect HTML/CSS interfaces.",
      "Built responsive layouts across devices and browsers.",
    ],
  },
  {
    year: "Aug 2017 to March 2019",
    role: "Sr. Representative",
    company: "Concentrix, Pune",
    description: [
      "Managed customer interactions and identified recurring user pain points.",
      "Built a strong foundation in user empathy and problem-solving.",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="experience section-top-margin">
      <Container maxWidth="md">
        <SectionHeading
          tagline="EXPERIENCE"
          restText="Where I've"
          highlightText="worked"

        />


        {experiences.map((exp, index) => (
          <div key={index} className="experience_item">
            <Grid container spacing={4} className="experience_item_card">
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography className="experience_year">
                  {exp.year}
                </Typography>
              </Grid>

              {/* Right - Content */}
              <Grid size={{ xs: 12, md: 9 }}>
                <Typography variant="h6" className="experience_role">
                  {exp.role}
                </Typography>

                <Typography className="experience_company">
                  {exp.company}
                </Typography>

                {/* Bullet List */}
                <ul className="experience_description">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Grid>
            </Grid>

            {index !== experiences.length - 1 && (
              <Divider className="experience_divider" />
            )}
          </div>
        ))}
      </Container>
    </section>
  );
};

export default ExperienceSection;