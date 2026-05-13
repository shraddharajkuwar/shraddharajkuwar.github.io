import { Grid, Chip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import InfoCard from "../components/InfoCard.tsx";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import InsightsIcon from "@mui/icons-material/Insights";
import SectionHeading from "../components/SectionHeading.tsx";

const problemStatement = [
    "Lack of guided pronunciation support",
    "Limited real-time feedback while reading",
    "Low engagement with traditional reading methods",
    "Difficulty in tracking progress and improvement",
    "Parents and teachers often lack tools that are easy for kids to use independently and engaging enough to maintain attention",
];
const FeatureList = [

    "Voice-Based Interaction",
    "Child-Friendly UI",
    "Gamified Learning",
    "Progress Tracking",
];
const imageList = [
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
const results = [
    "Improves reading confidence through guided practice",
    "Encourages consistent learning habits with structured flow",
    "Makes reading more engaging for kids",
    "Simplifies feedback so children can easily understand mistakes",
];

const KidsLearning = () => {
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

                    <span>Mobile App</span>
                    <span>Featured Design</span>
                </div>


                <h1 className="title">RIF - Kids Learning</h1>
                <p className="subtitle">Interactive Learning Platform for Children</p>


                <div className="hero-image">
                    <img src="/images/rif/hero.png" alt="Kids Learning Hero" className="Project-hero-img" />
                </div>

                <div>
                    <div className="section section-top-margin overviewsection">
                        <SectionHeading
                            tagline="Project Details"
                            restText=" "
                            highlightText="Overview"

                        />
                        <p>
                            This project explores the design of a child-friendly mobile application aimed at improving reading skills in young learners. The focus is on enhancing pronunciation accuracy, reading speed, and overall fluency through interactive read-aloud activities.

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
                        <Grid container spacing={2} className="research-grid">
                            <Grid size={{ xs: 12, md: 4 }}>
                                <InfoCard
                                    title="Research Methods"
                                    icon={<SearchIcon color="primary" />}
                                    items={[
                                        "Secondary research (reading behavior)",
                                        "Observation of kids using apps",
                                        "Review of existing learning apps",
                                    ]}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <InfoCard
                                    title="Target Users"
                                    icon={<PeopleIcon color="primary" />}
                                    items={[
                                        "Children aged 4–8 years",
                                        "Early-stage readers",
                                        "Parents supporting learning",
                                    ]}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <InfoCard
                                    title="Key Insights"
                                    icon={<InsightsIcon color="primary" />}
                                    items={[
                                        "Visual UI works best",
                                        "Simple instructions are critical",
                                        "Instant feedback improves learning",
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
                            Many early learners struggle with reading due to:
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

            <div className="ProjectDetail-imgGrid">
                <Grid container spacing={2} className="solutionImages-grid">
                    {imageList.map((img, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <img src={img} alt={`Solution ${index + 1}`} className="grid-image" />
                        </Grid>
                    ))}
                </Grid>
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