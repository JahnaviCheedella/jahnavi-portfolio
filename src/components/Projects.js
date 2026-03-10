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
      title: "Mind Vault",
      description:
        "Built a full-stack AI-powered knowledge base that lets users save notes and URLs, then ask natural language questions over their personal content using a RAG pipeline with semantic search and cited answers.",
      technologies: ["React.js","Redux Toolkit", "Python", "FastAPI", "ChromaDB", "Gemini API"],
      icon: <CodeIcon />,
      category: "Fullstack + AI",
      features: [
        "Designed a React.js UI with Redux Toolkit for state management, enabling users to ingest text notes and URLs with real-time feedback.",
        "Built a FastAPI backend with a RAG pipeline — chunking, embedding via Gemini API, and semantic search using ChromaDB vector storage.",
        "Implemented server-side URL fetching and HTML parsing to extract clean content from any web page for ingestion.",
        "Returned AI-generated answers with cited source snippets, giving users full transparency on where each answer came from.",
      ],
    },

    {
      title: "Image Labs",
      description:
        "Developed a production-grade image verification portal to identify real versus AI-generated images, supporting high-volume daily usage with real-time backend updates.",
      technologies: ["React.js", "Python", "PostgreSQL", "Firebase"],
      icon: <CodeIcon />,
      category: "Fullstack",
      features: [
        "Built an interactive React.js UI for seamless image upload and verification workflows.",
        "Integrated backend APIs using Python to process and validate image authenticity.",
        "Designed scalable data storage using PostgreSQL and Firebase for real-time updates.",
        "Supported 600+ daily verifications with reliable performance and responsive UI.",
      ],
    },
    {
      title: "RAG Q&A Chatbot",
      description:
        "Implemented a Retrieval-Augmented Generation (RAG) chatbot capable of answering user questions by retrieving relevant information from documents, URLs, and databases.",
      technologies: [
        "React.js",
        "Python",
        "Flask",
        "LangChain",
        "FAISS",
        "HuggingFace",
        "Prompt Engineering",
      ],
      icon: <CodeIcon />,
      category: "Generative AI",
      features: [
        "Built a conversational React interface for document-based Q&A interactions.",
        "Implemented LangChain and FAISS for efficient document retrieval and context grounding.",
        "Integrated HuggingFace models for accurate natural language responses.",
        "Achieved 98% accuracy through effective prompt and context engineering.",
      ],
    },
    {
      title: "AI Image Generator",
      description:
        "Developed a text-to-image generation application that converts user prompts into high-quality images using Generative AI models.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "Google Gemini API",
        "Prompt Engineering",
      ],
      icon: <CodeIcon />,
      category: "Generative AI",
      features: [
        "Built a responsive React frontend for prompt-based image generation.",
        "Integrated Google Gemini API for AI-driven image synthesis.",
        "Optimized prompts to improve image quality and consistency.",
        "Ensured reliable generation with a smooth and intuitive user experience.",
      ],
    },
    {
      title: "E-Commerce Web Application",
      description:
        "Created a full-stack e-commerce platform with secure authentication, real-time inventory management, and responsive UI for seamless online shopping.",
      technologies: [
        "React.js",
        "Redux Toolkit(RTK)",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
      ],
      icon: <CodeIcon />,
      category: "Full Stack (MERN)",
      features: [
        "Developed React-based UI with product catalog, cart, and checkout features.",
        "Implemented secure authentication and REST APIs using Node.js and Express.",
        "Integrated real-time inventory updates with Socket.io to reduce stock mismatches.",
        "Improved data reliability, reducing inventory errors by 60% and maintaining 99.5% API uptime.",
      ],
    },
    {
      title: "AI Research & Report Agent",
      description:
        "Built an AI-powered research agent that retrieves information from multiple sources for any given topic and presents structured summaries with clear source attribution. The system is designed to handle real-world constraints such as API failures and network latency.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "FastAPI",
        "Python",
        "LLM APIs",
      ],
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
      title: "Enterprise Frontend Systems (Merged Projects)",
      description:
        "Designed and optimized multiple enterprise-grade frontend portals used for identity management, adjudication, acquiring, and clustering workflows.",
      technologies: [
        "React.js",
        "TypeScript",
        "Redux Toolkit(RTK)",
        "Material UI",
      ],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Built modular and reusable React components using TypeScript and Redux Toolkit.",
        "Integrated RESTful APIs using Axios and Redux Async Thunks to manage asynchronous data fetching, error handling, and state updates across enterprise workflows.",
        "Optimized state management to ensure consistent behavior across complex workflows.",
        "Reduced user navigation time by 50% through improved UI flows.",
      ],
    },
    {
      title: "AI Vision & Computer Vision Systems",
      description:
        "Worked on computer vision systems involving object detection, segmentation, and deepfake detection using deep learning models and GPU-based training.",
      technologies: [
        "Vision Transformer",
        "YOLO",
        "Label Studio",
        "E2ENetworks TIR",
        "Linux",
        "AWS GPU",
      ],
      icon: <CodeIcon />,
      category: "AI/ML",
      features: [
        "Trained YOLOv11x models for drone imagery segmentation to detect buildings, roads, and vehicles.",
        "Performed custom object training and annotation using Label Studio.",
        "Built and evaluated a deepfake detection model to identify real vs AI-generated faces.",
        "Achieved 97% testing accuracy using AWS GPU-based training and inference.",
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
