import React from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { projects, Project } from "../data/projects.ts";
import SectionHeading from "./SectionHeading.tsx";
import LinkButton from "./LinkButton.tsx";

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="case-studies" id="case-studies">
      <div className="container">
        <SectionHeading
          tagline="SELECTED WORK"
          restText=" "
          highlightText="Case Studies"

        />

        <Grid container spacing={2} alignItems="center" className="case-studies-grid">
          {projects.map((project: Project, index: number) => (
            <Grid size={{ xs: 12, md: 6 }}
              key={index}
              className="card"
              onClick={() => navigate(project.route)}
            >
              <div className="card-content">
                <h6>
                  {project.title} <span>{project.subtitle}</span>
                </h6>
                <span>{project.description}</span>
              </div>
              <div>
                <LinkButton
                  text="View case study"
                  link={project.route}
                />
              </div>
              <div className="card-image d-flex flex-column-reverse" >
                <img src={project.image} alt={project.title} className="img-fluid object-fit-contain object-fit-position" />
              </div>

            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default CaseStudies;