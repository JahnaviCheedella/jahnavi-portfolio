import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import react from "../assets/React.png";
import ts from "../assets/ts.png";
import js from "../assets/js.png";
import redux from "../assets/redux.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import python from "../assets/python.png";
import nlp from "../assets/nlp.png";
import genai from "../assets/genai.png";
import langchain from "../assets/langchain.png";
import rag from "../assets/rag.png";
import api from "../assets/api.png";
import next from "../assets/next.png";
import node from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import mongo from "../assets/mongodb.png";
import promptEng from "../assets/promptEng.png";
import postgre from "../assets/postgre.png";
import oracle from "../assets/oracle.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import linux from "../assets/linux.png";
import firebase from "../assets/fire.png";
import charts from "../assets/bar-chart.png";

const SkillChip = ({ icon, name, color, delay, visible }) => (
  <Box
    className={`animate-on-scroll ${visible ? "visible" : ""}`}
    style={{ transitionDelay: delay }}
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 1,
      px: 1.8,
      py: 0.8,
      borderRadius: "12px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
      cursor: "default",
      transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        background: `linear-gradient(135deg, ${color || "#667eea"}15, transparent)`,
        opacity: 0,
        transition: "opacity 0.3s ease",
      },
      "&:hover": {
        transform: "translateY(-4px) scale(1.05)",
        border: `1px solid ${color || "#667eea"}50`,
        boxShadow: `0 8px 25px ${color || "#667eea"}25, 0 0 15px ${color || "#667eea"}15`,
        "&::before": { opacity: 1 },
      },
    }}
  >
    <img src={icon} alt={name} style={{ width: 20, height: 20, objectFit: "contain" }} />
    <Typography
      variant="caption"
      sx={{ color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: "0.82rem", whiteSpace: "nowrap" }}
    >
      {name}
    </Typography>
  </Box>
);

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const categorizedSkills = [
    {
      category: "Frontend",
      emoji: "🎨",
      accent: "#61dafb",
      gradient: "linear-gradient(135deg, #667eea, #61dafb)",
      items: [
        { name: "React.js", icon: react },
        { name: "Next.js", icon: next },
        { name: "JavaScript (ES6+)", icon: js },
        { name: "TypeScript", icon: ts },
        { name: "HTML5", icon: html },
        { name: "CSS3", icon: css },
        { name: "Redux Toolkit", icon: redux },
        { name: "Material UI", icon: react },
        { name: "ApexCharts", icon: charts },
      ],
    },
    {
      category: "Backend & APIs",
      emoji: "⚙️",
      accent: "#68a063",
      gradient: "linear-gradient(135deg, #764ba2, #68a063)",
      items: [
        { name: "Node.js", icon: node },
        { name: "Express.js", icon: express },
        { name: "RESTful APIs", icon: api },
        { name: "API Integration", icon: api },
        { name: "FastAPI", icon: api },
      ],
    },
    {
      category: "Databases",
      emoji: "🗄️",
      accent: "#f7931a",
      gradient: "linear-gradient(135deg, #f093fb, #f7931a)",
      items: [
        { name: "PostgreSQL", icon: postgre },
        { name: "Oracle Database", icon: oracle },
        { name: "MongoDB", icon: mongo },
        { name: "ChromaDB (Vector DB)", icon: rag },
      ],
    },
    {
      category: "AI / ML",
      emoji: "🤖",
      accent: "#f093fb",
      gradient: "linear-gradient(135deg, #667eea, #f093fb)",
      items: [
        { name: "Python", icon: python },
        { name: "Generative AI", icon: genai },
        { name: "LangChain", icon: langchain },
        { name: "RAG", icon: rag },
        { name: "NLP", icon: nlp },
        { name: "Prompt Engineering", icon: promptEng },
      ],
    },
    {
      category: "Other Tools",
      emoji: "🛠️",
      accent: "#00d4ff",
      gradient: "linear-gradient(135deg, #00d4ff, #667eea)",
      items: [
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
        { name: "Linux", icon: linux },
        { name: "Firebase", icon: firebase },
      ],
    },
  ];

  return (
    <Box
      id="skills"
      ref={sectionRef}
      sx={{
        py: 12,
        background:
          "linear-gradient(180deg, #0f0f23 0%, #12103a 40%, #0d0d2b 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      
      <Box
        className="orb"
        sx={{
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(102,126,234,0.1) 0%, transparent 70%)",
          top: "-20%",
          right: "-20%",
          animationDuration: "25s",
        }}
      />
      <Box
        className="orb"
        sx={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          bottom: "0%",
          left: "10%",
          animationDuration: "18s",
          animationDirection: "reverse",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        
        <Box
          className={`animate-on-scroll ${visible ? "visible" : ""}`}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Box className="section-divider" />
          <Typography
            variant="h2"
            component="h2"
            className="section-title"
            sx={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical Skills
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
          >
            Technologies I work with
          </Typography>
        </Box>

        
        <Grid container spacing={3}>
          {categorizedSkills.map((group, idx) => (
            <Grid size={{ xs: 12, md: 6, lg: idx < 2 ? 6 : 4 }} key={idx}>
              <Box
                className={`glow-card animate-on-scroll ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${idx * 0.12}s` }}
                sx={{
                  height: "100%",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  p: 3,
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: group.gradient,
                    borderRadius: "24px 24px 0 0",
                  },
                }}
              >
                
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "12px",
                      background: `${group.accent}15`,
                      border: `1px solid ${group.accent}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      boxShadow: `0 0 15px ${group.accent}20`,
                    }}
                  >
                    {group.emoji}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: group.gradient,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "1rem",
                    }}
                  >
                    {group.category}
                  </Typography>
                </Box>

                
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {group.items.map((item, i) => (
                    <SkillChip
                      key={`${item.name}-${i}`}
                      icon={item.icon}
                      name={item.name}
                      color={group.accent}
                      delay={`${idx * 0.12 + i * 0.06}s`}
                      visible={visible}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
