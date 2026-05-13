export interface Project {
  title: string;
  route: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  image?: string;
}

export const projects: Project[] = [
  
  {
    title: "MultiChat Conversational AI Platform",
    route: "/multichat-ai",
    subtitle: "",
    description: "Unified AI Platform for Enterprise Users.",
    tags: ["AI/ML", "SaaS"],
    image:  "/images/MultiBot AI/GenAI landing page.png",
  },
  // {
  //   title: "Fitness App Redesign",
  //   route: "/yardmap",
  //   subtitle: "",
  //   description: "A fitness tracking app redesign.",
  //   tags: ["Mobile", "UX Research", "UI Design"],
  //   image: "/images/MultiBot AI/GenAI landing page.png",
  // },  
  {
    title: "RIF - Kids Learning",
    route: "/kidsLearning",
    subtitle: "",
    description: "Interactive Learning Platform for Children",
    tags: ["Education", "Web App"],
    image:  "/images/Rif/1.1.png",
  },
];