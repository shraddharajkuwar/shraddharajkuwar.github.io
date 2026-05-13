import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import CaseStudies from "../components/CaseStudies.tsx";
import LinkButton from "../components/LinkButton.tsx";

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
    let speed = isDeleting ? 50 : 100;

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

  return (
    <Box>
      <div className="hero">
        <Container maxWidth="lg" className="hero-container">
          <Grid container spacing={4} alignItems="center">

            <Grid size={{ xs: 12, md: 7 }}>
              <Box className="hero-left">
                <Typography className="hero-label">HELLO</Typography>

                <Typography className="hero-title" component="h1">
                  I’m Shraddha Rajkuwar
                </Typography>

                <Typography className="hero-subtitle" component="h2">
                  {text}
                  <Box
                    component="span"
                    sx={{
                      ml: "4px",
                      animation: "blink 1s infinite",
                    }}
                  >
                    |
                  </Box>
                </Typography>

                <Typography className="hero-description">
                  I design intuitive, human-centered products that bridge the gap
                  between complexity and clarity.
                </Typography>
                <button onClick={handleScroll} className="Primary-linkBtn">
                  View Work 
                </button>

              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box className="blob-wrapper">
                <div className="blob"></div>

                <img
                  src="/images/hero-img-new.png"
                  alt="profile"
                  className="profile-img"
                />
              </Box>
            </Grid>

          </Grid>
        </Container>
      </div>
      <div ref={caseStudiesRef} className="case-studies-wrapper">
        <CaseStudies />
      </div>
    </Box>
  );
};

export default HeroSection;