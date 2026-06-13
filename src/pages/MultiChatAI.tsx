import { Grid, Chip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.tsx";
import ImageSlider from "../components/ImageSlider.tsx";

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

const MultiChatAI = () => {
  const navigate = useNavigate();
  return (
    <div className="Project-detail section-top-margin">
      <div className="container overviewsection">

       <div className="Casestudy-header">
         <div className="tags">

          <span>Conversational AI</span>
          <span>Enterprise Application</span>
        </div>


        <h1 className="title">A unified workspace for every model an enterprise team uses.</h1>

       </div>

        <div>
          <div className="section section-top-margin overviewsection">
            <SectionHeading
              tagline="Project Details"
              restText=""
              highlightText="Overview"

            />
            <p>
              Built for teams that need governance, comparison, and speed without the tab chaos.
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
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 5 }} >
                <div className="research-card card-1">
                  <div className="tape"></div>

                  <h3 className="research-card-title">Research Methods</h3>

                  <ul>
                    <li>User flow analysis</li>
                    <li>Competitive analysis of existing AI chat platforms</li>
                    <li>Stakeholder discussions</li>
                    <li>Observing common enterprise workflows</li>
                    <li>UX pattern research for conversational interfaces</li>
                  </ul>
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }} className="card-2-grid">
                <div className="research-card card-2">
                  <div className="tape"></div>

                  <h3 className="research-card-title">Target Users</h3>

                  <ul>
                    <li>Employees using AI tools for daily productivity</li>
                    <li>Non-technical users needing quick assistance</li>
                    <li>Technical users working with data or SQL queries</li>
                    <li>Teams requiring HR or legal support through AI assistants</li>
                  </ul>
                </div>
                <div className="research-card card-3">
                  <div className="tape"></div>

                  <h3 className="research-card-title">Key Insights</h3>

                  <ul>
                    <li>Users frequently switch between multiple tools</li>
                    <li>Many users feel confused when starting conversations</li>
                    <li>Users prefer simple and familiar chat experiences</li>
                    <li>Gamification boosts engagement</li>
                  </ul>
                </div>
              </Grid>
            </Grid>

          </div>
          <div className="section section-top-margin">
            <SectionHeading
              tagline="The Problem"
              restText="The "
              highlightText="challenges"

            />
            <p>
              Enterprise users rely on different tools for tasks like content creation, data queries, and internal support.
              Switching between tools breaks flow, wastes time, and creates a fragmented experience.
              There was a need for a single, seamless platform to access all AI capabilities.
            </p>
            <section className="section key-results">
              <ul className="list-items">
                <li>Fragmented experience across multiple AI tools</li>
                <li>Time lost due to constant context switching</li>
                <li>Difficulty managing long conversations and previous chats</li>
                <li>Complex interfaces increase cognitive load for enterprise users</li>
              </ul>
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

      <div className="ProjectDetail-imgGrid-desktop">

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
          <section className="section key-results">
            <ul className="list-items">
              <li>Reduced dependency on multiple AI platforms</li>
              <li>Improved user experience with a unified interface</li>
              <li>Increased productivity by streamlining workflows</li>
              <li>Enhanced collaboration across different departments</li>
            </ul>
          </section>
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