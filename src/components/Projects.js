import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Code as CodeIcon } from "@mui/icons-material";

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const projects = [
    {
      title: "IDM Demos",
      description:
        "Built responsive UI for IDM demo applications with real-time document and face capture using Innovatrics, delivering intuitive and seamless user experiences.",
      technologies: ["React JS"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Created a consistent design system for demo applications",
        "Integrated automatic document and face capture using Innovatrics",
        "Developed interactive stepper, previews, and progress indicators",
        "Built responsive layouts for desktop, tablet, and mobile devices",
      ],
    },
    {
      title: "RAG Q&A Chatbot",
      description:
        "Developed a RAG chatbot that answers questions from external sources using React, Flask, LangChain, FAISS, and HuggingFace models.",
      technologies: [
        "React JS",
        "Python",
        "Flask",
        "LangChain",
        "FAISS",
        "HuggingFace",
      ],
      icon: <CodeIcon />,
      category: "Fullstack",
      features: [
        "Built responsive frontend and Flask backend to handle queries",
        "Integrated LangChain and FAISS for document retrieval and semantic search",
        "Applied prompt engineering for controlled and accurate outputs",
        "Showcased dynamic Q&A from Wikipedia and other external sources",
      ],
    },
    {
      title: "Clustering",
      description:
        "Created dynamic React components with Redux for state management and smooth user experience enhancements.",
      technologies: ["React JS", "Redux"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Implemented Redux for predictable state management",
        "Built modular, reusable UI components",
        "Added skeleton loaders and interactive lists for better UX",
      ],
    },
    {
      title: "Acquiring",
      description:
        "Engineered robust UI components using React and TypeScript, ensuring type safety, maintainability, and structured state management.",
      technologies: ["React", "TypeScript", "Redux"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Developed modular, type-safe components with clear interfaces",
        "Applied TypeScript to prevent runtime errors",
        "Used modern React patterns like hooks and functional components",
      ],
    },
    {
      title: "KYC Update Portal",
      description:
        "Enhanced UI and integrated auto document/face capture for faster, seamless KYC processing using React and Redux.",
      technologies: ["React JS", "Redux"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Built modular components to streamline KYC workflow",
        "Integrated Innovatrics for automatic document and face capture",
        "Optimized components and responsive layouts for better performance",
      ],
    },
    {
      title: "TrueID Image Verification Portal",
      description:
        "Developed a web tool for real-time verification of uploaded images against AI-generated or morphed content using React.",
      technologies: ["React JS"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Created drag-and-drop image upload with previews",
        "Integrated APIs for real-time image verification",
        "Built responsive interface for consistent experience across devices",
      ],
    },
    {
      title: "Custom Object Training & Segmentation for Drone Imagery",
      description:
        "Trained YOLOv11x model for segmentation of buildings, roads, trees, vehicles, and other features in drone imagery using labeled datasets.",
      technologies: ["Label Studio", "E2ENetworks TIR", "Python", "YOLO"],
      icon: <CodeIcon />,
      category: "AI/ML",
      features: [
        "Annotated datasets with segmentation masks via Label Studio",
        "Fine-tuned YOLOv11x for accurate object detection",
        "Deployed model for real-time aerial image segmentation",
      ],
    },
    {
      title: "AI Deepfake vs Real Face Detection",
      description:
        "Developed a model using pre-trained Vision Transformer to detect deepfakes, morphs, swaps, and digitally injected faces.",
      technologies: ["Linux", "GitBash GUI", "Python"],
      icon: <CodeIcon />,
      category: "AI/ML",
      features: [
        "Customized detection for AI-generated and real images",
        "Leveraged Vision Transformer architecture for high accuracy",
        "Used AWS GPU instances for training, inference, and deployment",
      ],
    },
    {
      title: "Sentiment Analysis Classifier for IMDb Reviews",
      description:
        "Built an LSTM-based model in PyTorch for classifying movie reviews as positive or negative, with full preprocessing and embedding pipeline.",
      technologies: ["Python", "Pandas", "PyTorch", "NLP"],
      icon: <CodeIcon />,
      category: "AI/ML",
      features: [
        "Implemented LSTM architecture for binary classification",
        "Designed preprocessing pipeline with tokenization and embedding layer",
        "Achieved [Your Accuracy]% on test data",
      ],
    },
    {
      title: "E-Commerce Web Application",
      description:
        "Developed a full-stack e-commerce app with React frontend, Node.js/Express backend, and MongoDB database for secure and responsive shopping experience.",
      technologies: ["React.js", "Redux(RTK)", "Node.js", "Express", "MongoDB"],
      icon: <CodeIcon />,
      category: "Full Stack (MERN)",
      features: [
        "Built responsive UI with Redux-managed state for auth, products, and cart",
        "Implemented secure signup/signin flows with password hashing",
        "Developed backend APIs for product and cart management",
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
