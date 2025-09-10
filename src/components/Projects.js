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
import {
  Code as CodeIcon,
  Language as LanguageIcon,
  OpenInNew as OpenInNewIcon,
  Security as SecurityIcon,
  Psychology as PsychologyIcon,
} from "@mui/icons-material";

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const projects = [
    {
      title: "IDM Demos",
      description:
        "Contributed to the development of UI for IDM demos application, focusing on building user-friendly and visually appealing interfaces. Collaborated with product and design teams to deliver intuitive flows and seamless user experiences. Integrated real-time functionalities to showcase capabilities of identity verification using auto document capture and auto face capture.",
      technologies: ["React JS"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Developed a modern UI design system to ensure visual consistency and improve usability across demo applications.",
        "Integrated automatic document capture functionality using Innovatrics.",
        "Integrated automatic face capture using Innovatrics.",
        "Built interactive components such as stepper, capture previews, and progress indicators to guide users.",
        "Added user engagement features like success dialog for better UX.",
        "Designed and developed responsive layouts to ensure cross-device compatibility on desktops, tablets, and mobile phones.",
      ],
    },
    {
      title: "RAG Q&A Chatbot",
      description:
        "Built a Retrieval-Augmented Generation (RAG) chatbot that answers questions from external knowledge sources (e.g., Wikipedia, URLs, PDFs, databases). Integrated prompt engineering and external knowledge retrieval to ensure accurate and up-to-date answers.",
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
        "Developed a responsive frontend using React JS, optimized for both desktop and mobile devices.",
        "Implemented backend with Flask to handle LLM queries and serve results via APIs.",
        "Used LangChain to orchestrate document loading, splitting, and retrieval pipelines.",
        "Integrated FAISS vector database for semantic search and document retrieval.",
        "Applied HuggingFace models (Flan-T5 + Sentence Transformers) for Q&A and embeddings.",
        "Designed with prompt engineering techniques to ensure controlled and reliable outputs.",
        "Showcased example on Wikipedia data, but can be extended to latest sources like URLs, PDFs, and databases.",
      ],
    },
    {
      title: "Clustering",
      description:
        "Developed dynamic and interactive UI components using React and Redux, enabling seamless state management across the application. Focused on building reusable components and structured state logic to ensure scalability. Enhanced the user experience by implementing smooth loading transitions using skeletons.",
      technologies: ["React JS", "Redux"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Implemented Redux for effective state management and predictable data flow across components.",
        "Developed modular UI components to promote reusability and maintainable design architecture.",
        "Integrated Material UI Skeleton loader to improve user experience during data fetch and render delays.",
        "Built interactive UI elements like expandable lists and filters to enhance usability and engagement.",
      ],
    },

    {
      title: "Acquiring",
      description:
        "Engineered robust UI components using React and TypeScript to improve reliability and maintainability of the frontend. Emphasized type safety and clear interfaces to prevent runtime errors and improve developer productivity. Leveraged Redux for structured global state handling.",
      technologies: ["React", "TypeScript", "Redux"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Built modular and maintainable UI components aligned with project standards and design system.",
        "Applied TypeScript to ensure strong typing and avoid runtime issues through compile-time checks.",
        "Wrote type-safe and scalable code with clear interface definitions and consistent prop typing.",
        "Utilized modern React practices such as hooks, functional components, and context-driven state management.",
      ],
    },
    {
      title: "KYC Update Portal",
      description:
        "Led UI enhancements and integrated new functionalities for the KYC update portal using React JS and Redux. Integrated auto document capture and auto face capture using Innovatrics. Improved performance and user satisfaction through optimized components and responsive layouts.",
      technologies: ["React JS", "Redux"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Built modular UI components to streamline KYC processes and improve user navigation.",
        "Integrated Innovatrics for automatic document capture to eliminate manual uploads and speed up verification.",
        "Implemented automatic face detection and capture using Innovatrics SDK for secure and fast onboarding.",
        "Enhanced user experience with clean design, intuitive flow, and feedback mechanisms.",
        "Optimized React components for better performance and reduced re-renders.",
        "Designed responsive layouts ensuring consistent behavior across desktops, tablets, and mobile devices.",
      ],
    },
    {
      title: "TrueID Image Verification Portal",
      description:
        "Developed a web-based tool that enables users to upload images for real-time verification against AI-generated / face morphed content. Leveraged React JS for front-end development and integrated APIs for backend image analysis. Focused on intuitive UI and cross-device compatibility.",
      technologies: ["React JS"],
      icon: <CodeIcon />,
      category: "Frontend",
      features: [
        "Created a user-friendly image upload interface with drag-and-drop and preview capabilities.",
        "Integrated real-time REST APIs to analyze uploaded images and return verification results.",
        "Displayed clear feedback labels such as 'AI-Generated' or 'Real Image' based on analysis response.",
        "Built responsive design to support seamless usage across devices and screen sizes.",
      ],
    },
    {
      title:
        "Custom Object Training and Segmentation for Drone Imagery Using YOLO Model",
      description:
        "Trained a customized YOLOv11x model for object segmentation on drone imagery, targeting features such as multi-storey buildings, road width, curvature, trees, pedestrians, dividers, footpaths, parked vehicles, guardrails, and solid/dashed lines. Leveraged segmentation masks annotated in Label Studio and executed model training and prediction on GPU servers.",
      technologies: ["Label Studio", "E2ENetworks TIR", "Python", "YOLO"],
      icon: <CodeIcon />,
      category: "AI/ML",
      features: [
        "Used advanced annotation with segmentation masks for precise object labeling via Label Studio",
        "Exported and prepared masked datasets for training YOLOv11x on custom drone imagery",
        "Utilized pretrained YOLOv11x model, fine-tuned on E2ENetworks GPU instances for high-performance computation",
        "Focused segmentation on diverse, domain-specific categories relevant to road and urban analysis",
        "Deployed trained model for accurate real-time segmentation and detection in aerial drone images",
      ],
    },
    {
      title:
        "Training and prediction of AI Deepfake Vs Real face image detection model",
      description:
        "Developed a customized model using a pre-trained Vision Transformer to detect and classify deepfakes, AI-generated images, face morphs, face swaps, and digitally injected faces. Implemented with PyTorch in Python, with training and inference executed on AWS GPU instances for efficient computation and accurate real-time detection",
      technologies: ["Linux", "GitBash GUI", "Python"],
      icon: <CodeIcon />,
      category: "AI/ML",
      features: [
        "Customized classification for detecting AI-generated vs. real images, including deepfakes, morphs, swaps, digitally injected faces, and duplicate image identification",
        "Utilized pre-trained Vision Transformer architecture for enhanced detection accuracy and robust image analysis",
        "Leveraged AWS GPU instances for server deployment, management, training, inference, and server-side image processing",
        "Incorporated Linux command-line tools for efficient image analysis and processing workflows",
        "Employed GitBash scripting for automation of tasks, streamlining development and deployment processes",
      ],
    },
    {
      title: "Sentiment Analysis Classifier for IMDb Movie Reviews",
      description:
        "Developed and trained a Long Short-Term Memory (LSTM) neural network from scratch using PyTorch to classify movie reviews as positive or negative. Built a complete text preprocessing pipeline, including tokenization, vocabulary creation, and sequence padding, and implemented a trainable embedding layer for semantic representation learning. Achieved an accuracy of [Your Accuracy, e.g., 85%] on the test set, demonstrating proficiency in recurrent neural architectures and end-to-end model development.",
      technologies: ["Python", "Pandas", "PyTorch", "NLP"],
      icon: <CodeIcon />,
      category: "AI/ML",
      features: [
        "Implemented an LSTM-based architecture for binary sentiment classification of IMDb movie reviews",
        "Designed a robust preprocessing pipeline with tokenization, vocabulary creation, and sequence padding",
        "Developed a trainable embedding layer to learn and capture semantic relationships in text data",
        "Trained, validated, and evaluated the model using PyTorch, achieving [Your Accuracy, e.g., 85%] accuracy on the test set",
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
