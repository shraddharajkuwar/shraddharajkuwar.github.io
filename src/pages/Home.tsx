import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import CaseStudies from "../components/CaseStudies.tsx";
import LinkButton from "../components/LinkButton.tsx";
import { useLocation } from "react-router-dom";

const HeroSection: React.FC = () => {
  const roles = [
    "UX Designer",
    "UI Developer",
    "Accessibility Specialist",
  ];

  const caseStudiesRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (caseStudiesRef.current) {
      const yOffset = -100;

      const y =
        caseStudiesRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
      } else {
        setText(current.substring(0, text.length - 1));
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#case-studies") {
      const element = document.getElementById("case-studies");

      setTimeout(() => {
        element?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location]);

  return (
    <Box>
      <div className="hero">
        <Container maxWidth="md" disableGutters>
          <Grid
            container
            spacing={4}
            alignItems="center"
            className="hero-container"
          >
            <Grid size={{ xs: 12, md: 10 }}>
              <Box className="hero-left">
                <Typography className="hero-title" component="h1">
                  Turning <span className="strike-word">complexity</span> into{" "}
                  <span className="highlight-word">clarity</span>
                </Typography>
                <Typography className="hero-description">
                  I'm Shraddha Rajkuwar - Bringing digital products to life with thoughtful experience and clean frontend execution.
                </Typography>

                <LinkButton
                  text="View selected work"
                  onClick={handleScroll}
                  link="#case-studies"
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <div
                ref={caseStudiesRef}
                className="case-studies-wrapper"
              >
                <CaseStudies />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container maxWidth="md">


      </Container>

    </Box>
  );
};

export default HeroSection;