import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
} from "@mui/material";
import { Code as CodeIcon } from "@mui/icons-material";

const Projects = () => {
  const projects = [
    {
      title: "IDM Dashboards",
      description:
        "Developed a dynamic analytics dashboard with reusable components and dropdown-based data switching for identity management workflows.",
      technologies: ["React.js", "Material UI (MUI)", "ApexCharts", "Node.js", "REST APIs"],
      icon: <CodeIcon />,
      category: "Frontend + Node.js",
      features: [
        "Developed a dynamic analytics dashboard with reusable components and dropdown-based data switching.",
        "Integrated multiple APIs and implemented real-time data visualization using ApexCharts with filters like date range and operator selection.",
      ],
    },
    {
      title: "Real-Time Messaging Platform (Glassmorphic UI)",
      description:
        "Developed a full-stack real-time messaging platform featuring sub-100ms message delivery and live presence tracking.",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Socket.io", "JWT", "Material UI"],
      icon: <CodeIcon />,
      category: "Fullstack",
      features: [
        "Developed a full-stack real-time messaging platform using React.js, Node.js, and Socket.io, featuring sub-100ms message delivery and live presence tracking across concurrent user sessions.",
        "Implemented persistent chat history leveraging PostgreSQL and secured the application with JWT-based authentication and React Context API for seamless session and token management.",
      ],
    },
    {
      title: "Secure Expense Tracker",
      description:
        "Developed a secure expense tracking application with RESTful APIs for CRUD operations and relational data handling.",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
      icon: <CodeIcon />,
      category: "Full Stack",
      features: [
        "Developed a secure expense tracking application with RESTful APIs for CRUD operations and relational data handling, along with a responsive UI using Material UI.",
        "Implemented Firebase Authentication with JWT-based backend verification and optimized data processing using SQL queries for filtering and aggregation.",
      ],
    },
    {
      title: "Mind Vault",
      description:
        "Built a full-stack RAG-powered knowledge base using FastAPI and ChromaDB with semantic search and AI-generated answers.",
      technologies: ["React.js", "Redux Toolkit", "Python", "FastAPI", "Chroma DB", "Gemini API"],
      icon: <CodeIcon />,
      category: "Fullstack + AI",
      features: [
        "Built a full-stack RAG-powered knowledge base using FastAPI, React.js and ChromaDB with semantic search and AI-generated answers via Gemini API.",
        "Implemented end-to-end ingestion pipeline - chunking, embedding, and vector storage - returning cited source snippets with every AI response.",
      ],
    },
    {
      title: "E-Commerce Web Application",
      description:
        "Developed a secure e-commerce platform with authentication, product catalog, cart, and real-time inventory updates.",
      technologies: ["React.js", "Redux Toolkit(RTK)", "Node.js", "Express", "MongoDB", "Socket.io"],
      icon: <CodeIcon />,
      category: "Full Stack (MERN)",
      features: [
        "Developed a secure e-commerce platform with authentication, product catalog, cart, and real-time inventory updates.",
        "Implemented backend APIs and real-time features to ensure data consistency and system reliability.",
      ],
    },
    {
      title: "Image Labs",
      description:
        "Developed a production-grade portal to verify real vs AI-generated images with real-time backend updates.",
      technologies: ["React.js", "Python", "PostgreSQL", "Firebase"],
      icon: <CodeIcon />,
      category: "Fullstack",
      features: [
        "Developed a production-grade portal to verify real vs AI-generated images with real-time backend updates.",
        "Scaled to support 600+ daily verifications, ensuring reliability and responsive UI performance.",
      ],
    },
    {
      title: "RAG Q&A Chatbot",
      description:
        "Implemented a Retrieval-Augmented Generation chatbot to answer queries from documents, URLs, and databases.",
      technologies: ["React.js", "Python", "Flask", "LangChain", "FAISS", "HuggingFace", "Prompt Engineering"],
      icon: <CodeIcon />,
      category: "Full Stack",
      features: [
        "Implemented a Retrieval-Augmented Generation chatbot to answer queries from documents, URLs, and databases.",
        "Achieved high accuracy across user Q&A sessions through effective prompt and context engineering.",
      ],
    },
    {
      title: "Enterprise Frontend Systems (Merged Projects)",
      description:
        "Built and optimized multiple enterprise portals (Identity Management, Adjudication, Acquiring, Clustering) using modular React architecture.",
      technologies: ["React.js", "TypeScript", "Redux Toolkit(RTK)", "Material UI"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Built and optimized multiple enterprise portals (Identity Management, Adjudication, Acquiring, Clustering) using modular React architecture.",
        "Integrated REST APIs to enable dynamic data rendering and seamless frontend-backend communication.",
        "Improved application performance and maintainability through efficient state management and component reuse.",
      ],
    },
    {
      title: "AI Vision & Computer Vision Systems",
      description:
        "Worked with Custom Object Training and Segmentation for Drone Imagery Using YOLO and deepfake detection.",
      technologies: ["Python", "YOLO", "Label Studio", "E2ENetworks TIR", "Linux", "AWS GPU"],
      icon: <CodeIcon />,
      category: "AI/ML",
      features: [
        "Worked with Custom Object Training and Segmentation for Drone Imagery Using YOLO Model by Trained YOLOv11x models for complex segmentation tasks.",
        "Trained and evaluated an AI model to detect real vs AI-generated faces, achieving 97% testing accuracy.",
      ],
    },
    {
      title: "AI Research & Report Agent",
      description:
        "Built an AI-powered research agent that retrieves information from multiple sources and presents structured summaries with clear source attribution.",
      technologies: ["React.js", "Redux Toolkit", "FastAPI", "Python", "LLM APIs"],
      icon: <CodeIcon />,
      category: "Full Stack",
      features: [
        "Developed a React-based frontend for topic-driven multi-query research workflows.",
        "Built a FastAPI backend to aggregate data from multiple external sources and LLM APIs.",
        "Implemented structured summaries with transparent source attribution for better reliability.",
        "Designed fault-tolerant logic to handle API failures and latency gracefully.",
      ],
    },
    {
      title: "AI Image Generator",
      description:
        "Developed a text-to-image generation application that converts user prompts into high-quality images using Generative AI models.",
      technologies: ["React.js", "Node.js", "Express", "Google Gemini API", "Prompt Engineering"],
      icon: <CodeIcon />,
      category: "Generative AI",
      features: [
        "Built a responsive React frontend for prompt-based image generation.",
        "Integrated Google Gemini API for AI-driven image synthesis.",
        "Optimized prompts to improve image quality and consistency.",
        "Ensured reliable generation with a smooth and intuitive user experience.",
      ],
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #16213e 0%, #0f0f23 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              mb: 4,
            }}
          >
            I have worked on
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                    borderColor: "primary.main",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      }}
                    >
                      {project.icon}
                    </Avatar>
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        background: "rgba(102, 126, 234, 0.2)",
                        color: "primary.main",
                        border: "1px solid rgba(102, 126, 234, 0.3)",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "text.primary",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}
                  >
                    {project.technologies.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        sx={{
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "text.secondary",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          "&:hover": {
                            background: "rgba(102, 126, 234, 0.2)",
                            color: "primary.main",
                            borderColor: "rgba(102, 126, 234, 0.3)",
                          },
                        }}
                      />
                    ))}
                  </Box>

                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      mb: 1,
                    }}
                  >
                    Key Contributions:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                    {project.features.map((feature, idx) => (
                      <Typography
                        key={idx}
                        component="li"
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: 0.3,
                          "&::marker": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>

                  {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={<OpenInNewIcon />}
                      sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        "&:hover": {
                          background: "primary.main",
                          color: "white",
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </Box> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
