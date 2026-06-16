import React, { useEffect, useRef, useState } from "react";
import { Container, Typography, Box, Grid, Chip } from "@mui/material";
import {
  Visibility as ViewIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const categoryColors = {
  "Frontend + Node.js": { color: "#61dafb", bg: "rgba(97,218,251,0.1)" },
  // Fullstack: { color: "#68a063", bg: "rgba(104,160,99,0.1)" },
  "Full Stack + Generative AI": {
    color: "#f093fb",
    bg: "rgba(240,147,251,0.1)",
  },
  "Fullstack + AI": { color: "#f093fb", bg: "rgba(240,147,251,0.1)" },
  "Full Stack (MERN)": { color: "#68a063", bg: "rgba(104,160,99,0.1)" },
  "Full Stack": { color: "#667eea", bg: "rgba(102,126,234,0.1)" },
  Frontend: { color: "#61dafb", bg: "rgba(97,218,251,0.1)" },
  "AI/ML": { color: "#ffd166", bg: "rgba(255,209,102,0.1)" },
  "Generative AI": { color: "#f093fb", bg: "rgba(240,147,251,0.1)" },
};

const FILTERS = ["All", "Fullstack", "Generative AI", "AI/ML", "Frontend"];

const filterMatch = (category, filter) => {
  if (filter === "All") return true;
  if (filter === "Fullstack")
    return [
      "Fullstack",
      "Full Stack (MERN)",
      "Full Stack + Generative AI",
      "Fullstack + AI",
      "Full Stack",
      "Frontend + Node.js",
    ].includes(category);
  if (filter === "Generative AI")
    return [
      "Full Stack + Generative AI",
      "Fullstack + AI",
      "Generative AI",
      "Full Stack",
    ].includes(category);
  if (filter === "AI/ML")
    return [
      "AI/ML",
      "Full Stack + Generative AI",
      "Fullstack + AI",
      "Generative AI",
    ].includes(category);
  if (filter === "Frontend")
    return ["Frontend", "Frontend + Node.js"].includes(category);
  return false;
};

const ProjectModal = ({ project, onClose }) => {
  const c = categoryColors[project.category] || {
    color: "#667eea",
    bg: "rgba(102,126,234,0.1)",
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        animation: "scaleIn 0.25s ease",
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: "100%",
          maxWidth: 560,
          background: "linear-gradient(145deg, #12103a, #0d0d2b)",
          border: `1px solid ${c.color}35`,
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 40px ${c.color}20`,
          animation: "slide-in-bottom 0.3s ease",
        }}
      >
        <Box
          sx={{
            height: 4,
            background: `linear-gradient(90deg, ${c.color}, #667eea)`,
          }}
        />
        <Box sx={{ p: 3.5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.2,
                  mb: 0.5,
                }}
              >
                {project.title}
              </Typography>
              <Chip
                label={project.category}
                size="small"
                sx={{
                  background: c.bg,
                  color: c.color,
                  border: `1px solid ${c.color}40`,
                  fontWeight: 700,
                  fontSize: "0.68rem",
                }}
              />
            </Box>
            <Box
              onClick={onClose}
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
                "&:hover": {
                  background: "rgba(255,100,100,0.15)",
                  borderColor: "rgba(255,100,100,0.3)",
                },
                transition: "all 0.2s ease",
              }}
            >
              <CloseIcon
                sx={{ fontSize: 16, color: "rgba(255,255,255,0.5)" }}
              />
            </Box>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              mb: 2.5,
              fontSize: "0.9rem",
            }}
          >
            {project.description}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: c.color,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              display: "block",
              mb: 1.5,
            }}
          >
            Key Contributions
          </Typography>
          <Box sx={{ mb: 2.5 }}>
            {project.features.map((f, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mb: 1,
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: c.color,
                    boxShadow: `0 0 6px ${c.color}`,
                    flexShrink: 0,
                    mt: 0.6,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                    fontSize: "0.84rem",
                  }}
                >
                  {f}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.35)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              display: "block",
              mb: 1.2,
            }}
          >
            Tech Stack
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
            {project.technologies.map((t, i) => (
              <Chip
                key={i}
                label={t}
                size="small"
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ProjectCard = ({ project, index, visible, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const c = categoryColors[project.category] || {
    color: "#667eea",
    bg: "rgba(102,126,234,0.1)",
  };

  return (
    <Box
      className={`animate-on-scroll ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      sx={{
        borderRadius: "18px",
        background: hovered
          ? `linear-gradient(145deg, ${c.color}10, rgba(255,255,255,0.04))`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? c.color + "45" : "rgba(255,255,255,0.07)"}`,
        p: 2.5,
        cursor: "pointer",
        transition: "all 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered
          ? `0 16px 40px rgba(0,0,0,0.4), 0 0 20px ${c.color}15`
          : "none",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${c.color}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 1.2,
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              color: "rgba(255,255,255,0.92)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.3,
              mb: 0.6,
            }}
          >
            {project.title}
          </Typography>
          <Chip
            label={project.category}
            size="small"
            sx={{
              background: c.bg,
              color: c.color,
              border: `1px solid ${c.color}35`,
              fontWeight: 700,
              fontSize: "0.64rem",
              height: 20,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.4,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s ease",
            color: c.color,
            flexShrink: 0,
            ml: 1,
          }}
        >
          <ViewIcon sx={{ fontSize: 13 }} />
          <Typography
            variant="caption"
            sx={{ color: "inherit", fontWeight: 700, fontSize: "0.7rem" }}
          >
            View
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.42)",
          fontSize: "0.79rem",
          lineHeight: 1.6,
          mb: 1.5,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          flexGrow: 1,
        }}
      >
        {project.description}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6, mt: "auto" }}>
        {project.technologies.map((t, i) => (
          <Box
            key={i}
            sx={{
              px: 1,
              py: 0.25,
              borderRadius: "6px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.68rem",
                fontWeight: 600,
              }}
            >
              {t}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const projects = [
    {
      title: "IDM Dashboards",
      description:
        "Dynamic analytics dashboard with reusable components and dropdown-based data switching for identity management workflows.",
      technologies: [
        "React.js",
        "Material UI (MUI)",
        "ApexCharts",
        "Node.js",
        "REST APIs",
      ],
      category: "Frontend + Node.js",
      features: [
        "Developed a dynamic analytics dashboard with reusable components and dropdown-based data switching.",
        "Integrated multiple APIs and implemented real-time data visualization using ApexCharts with filters like date range and operator selection.",
      ],
    },
    {
      title: "Real-Time Messaging Platform",
      description:
        "Full-stack real-time messaging platform featuring sub-100ms message delivery and live presence tracking.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Socket.io",
        "JWT",
        "Material UI",
      ],
      category: "Full Stack",
      features: [
        "Full-stack real-time messaging using React.js, Node.js, and Socket.io with sub-100ms delivery and live presence tracking.",
        "Persistent chat history with PostgreSQL and JWT-based authentication via React Context API.",
      ],
    },
    {
      title: "AI Task Assistant",
      description:
        "Agentic AI assistant that uses Gemini to understand user requests and dynamically execute tools through natural language.",
      technologies: [
        "React.js",
        "FastAPI",
        "Python",
        "Google Gemini API",
        "REST APIs",
      ],
      category: "Full Stack + Generative AI",
      features: [
        "Agentic AI assistant using React and FastAPI that understands natural language and executes tools via LLM function calling.",
        "Tool orchestration for task management, weather retrieval, and calculations with multi-step workflows.",
      ],
    },
    {
      title: "Mind Vault",
      description:
        "Full-stack RAG-powered knowledge base using FastAPI and ChromaDB with semantic search and AI-generated answers.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Python",
        "FastAPI",
        "Chroma DB",
        "Gemini API",
      ],
      category: "Full Stack + AI",
      features: [
        "RAG-powered knowledge base with FastAPI, React.js and ChromaDB with semantic search via Gemini API.",
        "End-to-end ingestion pipeline — chunking, embedding, and vector storage with cited source snippets.",
      ],
    },
    {
      title: "E-Commerce Application",
      description:
        "Secure e-commerce platform with authentication, product catalog, cart, and real-time inventory updates.",
      technologies: [
        "React.js",
        "Redux Toolkit (RTK)",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
      ],
      category: "Full Stack (MERN)",
      features: [
        "Secure e-commerce platform with authentication, product catalog, cart, and real-time inventory updates.",
        "Backend APIs and real-time features ensuring data consistency and system reliability.",
      ],
    },
    {
      title: "Image Labs",
      description:
        "Production-grade portal to verify real vs AI-generated images with real-time backend updates. Scaled to 600+ daily verifications.",
      technologies: ["React.js", "Python", "PostgreSQL", "Firebase"],
      category: "Full Stack",
      features: [
        "Production-grade portal to verify real vs AI-generated images with real-time backend updates.",
        "Scaled to support 600+ daily verifications with responsive UI performance.",
      ],
    },
    {
      title: "RAG Q&A Chatbot",
      description:
        "Retrieval-Augmented Generation chatbot to answer queries from documents, URLs, and databases with high accuracy.",
      technologies: [
        "React.js",
        "Python",
        "Flask",
        "LangChain",
        "FAISS",
        "HuggingFace",
        "Prompt Engineering",
      ],
      category: "Full Stack",
      features: [
        "RAG chatbot answering queries from documents, URLs, and databases.",
        "High accuracy across user Q&A sessions through effective prompt and context engineering.",
      ],
    },
    {
      title: "Enterprise Frontend Systems",
      description:
        "Multiple enterprise portals (Identity Management, Adjudication, Acquiring, Clustering) using modular React architecture.",
      technologies: [
        "React.js",
        "TypeScript",
        "Redux Toolkit (RTK)",
        "Material UI",
      ],
      category: "Frontend",
      features: [
        "Multiple enterprise portals using modular React architecture with REST API integration.",
        "Improved performance and maintainability via efficient state management and component reuse.",
      ],
    },
    {
      title: "AI Vision & Computer Vision",
      description:
        "Custom Object Training and Segmentation for Drone Imagery using YOLO. Deepfake detection with 97% accuracy.",
      technologies: [
        "Python",
        "YOLO",
        "Label Studio",
        "E2ENetworks TIR",
        "Linux",
        "AWS GPU",
      ],
      category: "AI/ML",
      features: [
        "Custom Object Training and Segmentation for Drone Imagery using YOLOv11x models.",
        "AI model detecting real vs AI-generated faces with 97% testing accuracy.",
      ],
    },
    {
      title: "AI Research & Report Agent",
      description:
        "AI-powered research agent that retrieves information from multiple sources and presents structured summaries with source attribution.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "FastAPI",
        "Python",
        "LLM APIs",
      ],
      category: "Full Stack",
      features: [
        "React frontend for topic-driven multi-query research workflows.",
        "FastAPI backend aggregating data from multiple external sources and LLM APIs with transparent source attribution.",
      ],
    },
    {
      title: "AI Image Generator",
      description:
        "Text-to-image generation application converting user prompts into high-quality images using Google Gemini API.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "Google Gemini API",
        "Prompt Engineering",
      ],
      category: "Generative AI",
      features: [
        "Responsive React frontend for prompt-based image generation with Google Gemini API.",
        "Optimized prompts to improve image quality and consistency with smooth user experience.",
      ],
    },
  ];

  const filtered = projects.filter((p) =>
    filterMatch(p.category, activeFilter),
  );

  return (
    <Box
      id="projects"
      ref={sectionRef}
      sx={{
        py: 10,
        background:
          "linear-gradient(180deg, #0f0f23 0%, #12103a 40%, #16213e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        className="orb"
        sx={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(102,126,234,0.12) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
          animationDuration: "20s",
        }}
      />
      <Box
        className="orb"
        sx={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(240,147,251,0.08) 0%, transparent 70%)",
          bottom: "5%",
          left: "-5%",
          animationDuration: "16s",
          animationDirection: "reverse",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          className={`animate-on-scroll ${visible ? "visible" : ""}`}
          sx={{ textAlign: "center", mb: 5 }}
        >
          <Box className="section-divider" />
          <Typography
            variant="h2"
            component="h2"
            className="section-title"
            sx={{ fontFamily: "'Space Grotesk', sans-serif", mb: 3 }}
          >
            Projects
          </Typography>
          {/* <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.4)", mb: 3 }}>
            {projects.length} projects — click any card to explore
          </Typography> */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {FILTERS.map((f) => {
              const active = f === activeFilter;
              const count =
                f === "All"
                  ? projects.length
                  : projects.filter((p) => filterMatch(p.category, f)).length;
              return (
                <Box
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  sx={{
                    px: 2.5,
                    py: 0.9,
                    borderRadius: "50px",
                    border: `1px solid ${active ? "#667eea" : "rgba(255,255,255,0.1)"}`,
                    background: active
                      ? "linear-gradient(135deg, rgba(102,126,234,0.25), rgba(118,75,162,0.2))"
                      : "rgba(255,255,255,0.03)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    boxShadow: active
                      ? "0 0 15px rgba(102,126,234,0.3)"
                      : "none",
                    "&:hover": {
                      borderColor: "#667eea",
                      background: "rgba(102,126,234,0.1)",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: active ? "#fff" : "rgba(255,255,255,0.45)",
                      fontWeight: active ? 700 : 500,
                      fontSize: "0.85rem",
                    }}
                  >
                    {f}
                  </Typography>
                  <Box
                    sx={{
                      minWidth: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: active ? "#667eea" : "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: active ? "#fff" : "rgba(255,255,255,0.4)",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                      }}
                    >
                      {count}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Grid container spacing={2}>
          {filtered.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.title}>
              <ProjectCard
                project={project}
                index={index}
                visible={visible}
                onClick={() => setSelectedProject(project)}
              />
            </Grid>
          ))}
        </Grid>

        {/* <Box
          className={`animate-on-scroll ${visible ? "visible" : ""}`}
          sx={{ textAlign: "center", mt: 4 }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "0.8rem",
            }}
          >
            Click any project card to see full details & tech stack
          </Typography>
        </Box> */}
      </Container>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Box>
  );
};

export default Projects;
