import { Grid, Chip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import InfoCard from "../components/InfoCard.tsx";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import InsightsIcon from "@mui/icons-material/Insights";
import SectionHeading from "../components/SectionHeading.tsx";
import ImageSlider from "../components/ImageSlider.tsx";

const problemStatement = [
  "Fragmented experience across multiple AI tools",
  "Time lost due to constant context switching",
  "Difficulty managing long conversations and previous chats",
  "Complex interfaces increase cognitive load for enterprise users",

];
const FeatureList = [

  "Design System Consistency",
  "Component & Interaction Design",
  "Design System Consistency",
];

const slides = [
  "/images/MultiBot AI/GenAI landing page.png",
  "/images/MultiBot AI/HR Assist landing page.png",
  "/images/MultiBot AI/LawKM landing page.png",
  "/images/MultiBot AI/DataChat landing page.png",
  "/images/MultiBot AI/GenAI Chat page.png",
  "/images/MultiBot AI/GenAI Chat page-Multifile Upload.png",
  "/images/MultiBot AI/History.png",
];
const results = [
  "Reduced dependency on multiple AI platforms",
  "Improved workflow efficiency for enterprise users",
  "Better readability and navigation experience",
  "Created a scalable and reusable AI interface system",
];

const MultiChatAI = () => {
  const navigate = useNavigate();
  return (
    <div className="Project-detail section-top-margin">
      <div className="container">

        <a
          className="back-link"
          rel="noreferrer"
          onClick={() => navigate("/")}
        >
          <span>← Back</span>
        </a>

        <div className="tags">

          <span>Conversational AI</span>
          <span>Enterprise Application</span>
        </div>


        <h1 className="title">MultiChat Conversational AI Platform</h1>
        <p className="subtitle">Unified AI Platform for Enterprise Users</p>


        <div className="hero-image">
          <img src="/images/MultiBot AI/MutltiChat-hero.png" alt="Hero Image" className="Project-hero-img" />
        </div>

        <div>
          <div className="section section-top-margin overviewsection">
            <SectionHeading
              tagline="Project Details"
              restText=""
              highlightText="Overview"

            />
            <p>
              MultiChat Bot AI is an enterprise chatbot platform designed to bring multiple AI assistants into one unified experience. The platform allows users to access different bots such as GenAI, HR, Legal, and Data Chat from a single interface, helping teams complete tasks faster without switching between multiple tools.

              The goal of the project was to create a simple, scalable, and user-friendly AI experience for enterprise users with different technical backgrounds.
            </p>

            <div className="info-grid">
              <div>
                <p className="label">ROLE</p>
                <span>Product Designer & UX Lead</span>
              </div>
              <div>
                <p className="label">TOOLS</p>
                <span>Figma</span>
              </div>
            </div>
          </div>
          <div className="section section-top-margin">
            <SectionHeading
              tagline="Discovery"
              restText="User"
              highlightText="research"

            />
            <Grid container spacing={2} className="research-grid">
              <Grid size={{ xs: 12, md: 4 }}>
                <InfoCard
                  title="Research Methods"
                  icon={<SearchIcon color="primary" />}
                  items={[
                    "User flow analysis",
                    "Competitive analysis of existing AI chat platforms",
                    "Stakeholder discussions",
                    "Observing common enterprise workflows",
                    "UX pattern research for conversational interfaces",
                  ]}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <InfoCard
                  title="Target Users"
                  icon={<PeopleIcon color="primary" />}
                  items={[
                    "Employees using AI tools for daily productivity",
                    "Non-technical users needing quick assistance",
                    "Technical users working with data or SQL queries",
                    "Teams requiring HR or legal support through AI assistants",
                  ]}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <InfoCard
                  title="Key Insights"
                  icon={<InsightsIcon color="primary" />}
                  items={[
                    "Users frequently switch between multiple tools for different tasks",
                    "Many users feel confused when starting a conversation with AI",
                    "Users prefer simple and familiar chat experiences",
                    "Gamification boosts engagement",
                  ]}
                />
              </Grid>
            </Grid>

          </div>
          <div className="section section-top-margin">
            <SectionHeading
              tagline="The Problem"
              restText="The "
              highlightText="key challenges"

            />
            <p>
              Enterprise users rely on different tools for tasks like content creation, data queries, and internal support.
              Switching between tools breaks flow, wastes time, and creates a fragmented experience.
              There was a need for a single, seamless platform to access all AI capabilities.
            </p>
            <section className="section key-results">
              <div className="results-grid">
                {problemStatement.map((item, index) => (
                  <div
                    key={index}
                    className="result-card"
                    tabIndex={0}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="section section-top-margin">
          <SectionHeading
            tagline="The Solution"
            restText="What I"
            highlightText="shipped"

          />
          <p>
            The solution was designed as a unified multi-assistant platform that brings different AI capabilities into one seamless experience. Instead of making users switch between multiple tools, MultiChat AI allows them to access GenAI, HR, Legal, and Data Chat assistants from a single interface. The platform was built with a clean and minimal chat experience to reduce cognitive load and make interactions feel familiar and intuitive.
          </p>
          <p>To improve usability for both technical and non-technical users, starter prompts were introduced to help users begin conversations quickly without confusion. Features like file upload support, conversation history, and structured AI responses were added to create a smoother and more contextual workflow. Special attention was given to readability, navigation, and consistency across all assistants, ensuring the experience remains simple, scalable, and easy to use as more AI tools are added in the future.</p>
          <div className="Feature">
            <h6 className="Feature-list-title">Key Features:</h6>
            <div className="Feature-list">
              {FeatureList.map((FeatureList) => (
                <Chip
                  key={FeatureList}
                  label={FeatureList}
                  variant="outlined"
                  className="List-item"
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="ProjectDetail-imgGrid">

        <section>

          <ImageSlider images={slides} autoPlay={true} interval={2500} />
        </section>
      </div>
      <div className="container">
        <div className="section key-results section-top-margin">
          <SectionHeading
            tagline="Results"
            restText="Key"
            highlightText="outcomes"

          />
          <div className="results-grid">
            {results.map((item, index) => (
              <div
                key={index}
                className="result-card"
                tabIndex={0}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="divider" />
          <div className="case-navigation">
            <button onClick={() => navigate("/YardMap")}>
              ← YardMap
            </button>

            <button onClick={() => navigate("/kidslearning")}>
              RIF - Kids Learning →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiChatAI;