import { Grid, Chip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.tsx";
import ImageSlider from "../components/ImageSlider.tsx";

const FeatureList = [

    "Voice-Based Interaction",
    "Child-Friendly UI",
    "Gamified Learning",
    "Progress Tracking",
];
const slides = [
    "/images/Rif/1.1.png",
    "/images/Rif/1.2.png",
    "/images/Rif/1.3.png",
    "/images/Rif/1.4.png",
    "/images/Rif/1.5.png",
    "/images/Rif/1.6.png",
    "/images/Rif/1.7.png",
    "/images/Rif/1.8.png",
    "/images/Rif/1.9.png",
    "/images/Rif/10.png",
    "/images/Rif/11.png",
    "/images/Rif/12.png",
    "/images/Rif/13.png",
];

const KidsLearning = () => {
    const navigate = useNavigate();
    return (
        <div className="Project-detail section-top-margin">
            <div className="container">
                <div className="tags">
                    <span>Mobile App</span>
                    <span>Featured Design</span>
                </div>
                <h1 className="title">Turning daily lessons into playful experiences for kids</h1>                             

                <div>
                    <div className="section section-top-margin overviewsection">
                        <SectionHeading
                            tagline="Project Details"
                            restText=" "
                            highlightText="Overview"
                        />
                        <p>
                            RIF is an interactive learning platform for children aged 5-8 with colorful, gently guided, and designed so a five-year-old can explore without an adult hovering. This project explores the design of a child-friendly mobile application aimed at improving reading skills in young learners. The focus is on enhancing pronunciation accuracy, reading speed, and overall fluency through interactive read-aloud activities.

                            This is a self-initiated concept project, where I designed the complete experience from wireframes to interaction patterns without real users or development constraints.
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
                                        <li>Secondary research (reading behavior)</li>
                                        <li>Observation of kids using apps</li>
                                        <li>Review of existing learning apps</li>                                        
                                      </ul>
                                    </div>
                                  </Grid>
                                  <Grid size={{ xs: 12, md: 7 }} className="card-2-grid">
                                    <div className="research-card card-2">
                                      <div className="tape"></div>
                    
                                      <h3 className="research-card-title">Target Users</h3>
                    
                                      <ul>
                                        <li>Kids aged 5-12</li>
                                        <li>Parents supporting learning</li>
                                        <li>Teachers in elementary schools</li>
                                      </ul>
                                    </div>
                                    <div className="research-card card-3">
                                      <div className="tape"></div>
                    
                                      <h3 className="research-card-title">Key Insights</h3>
                    
                                      <ul>
                                        <li>Visual UI works best</li>
                                        <li>Simple instructions are critical</li>
                                        <li>Instant feedback improves learning</li>
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
                            Many early learners struggle with reading due to:
                        </p>
                        <section className="section key-results">
                            <ul className="list-items">
                                <li>Lack of guided pronunciation support</li>
                                <li>Limited real-time feedback while reading</li>
                                <li>Low engagement with traditional reading methods</li>
                                <li>Difficulty in tracking progress and improvement</li>
                                <li>Parents and teachers often lack tools that are easy for kids to use independently and engaging enough to maintain attention</li>
                            </ul>                           
                        </section>
                    </div>
                </div>

                <div className="section section-top-margin">
                    <SectionHeading
                        tagline="The Solution"
                        restText="What I"
                        highlightText=" shipped"

                    />
                    <p>
                        To address the challenges faced by early readers, I designed a mobile application experience that makes reading both engaging and supportive. The app guides children through a simple and structured flow where they can select their reading level and read aloud directly from the screen.
                    </p>
                    <p>The interface is intentionally kept visually appealing, using bright colors, clear typography, and large touch-friendly elements to ensure ease of use. As children read, the system conceptually evaluates their pronunciation, reading speed, and fluency, and provides immediate, easy-to-understand feedback through visual cues and simple language.</p>
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

            

            <div className="container ProjectDetail-imgGrid">

                <section>

                    <ImageSlider images={slides} autoPlay={true} interval={2500} imagesPerSlide={3} />
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
                                <li>Improves reading confidence through guided practice</li>
                                <li>Encourages consistent learning habits with structured flow</li>
                                <li>Makes reading more engaging for kids</li>
                                <li>Simplifies feedback so children can easily understand mistakes</li>                               
                            </ul>                           
                        </section>                 

                    <div className="divider" />
                    <div className="case-navigation">
                        <button onClick={() => navigate("/YardMap")}>
                            ← YardMap
                        </button>

                        <button onClick={() => navigate("/multichat-ai")}>
                            MultiChat Conversational AI Platform →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsLearning;