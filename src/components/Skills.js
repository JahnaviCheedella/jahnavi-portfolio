import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import react from "../assets/React.png";
import ts from "../assets/ts.png";
import js from "../assets/js.png";
import redux from "../assets/redux.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import python from "../assets/python.png";
import pandas from "../assets/pandas.png";
import numpy from "../assets/numpy.png";
import pytorch from "../assets/pytorch.png";
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

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const categorizedSkills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: html },
        { name: "CSS3", icon: css },
        { name: "JavaScript", icon: js },
        { name: "TypeScript", icon: ts },
        { name: "React.js", icon: react },
        { name: "Next.js", icon: next },
        { name: "Redux(RTK)", icon: redux },
        { name: "REST APIs", icon: api },
      ],
    },
    {
      category: "AI / ML",
      items: [
        { name: "Python", icon: python },
        { name: "NumPy", icon: numpy },
        { name: "Pandas", icon: pandas },
        { name: "PyTorch", icon: pytorch },
        { name: "NLP", icon: nlp },
        { name: "Gen AI", icon: genai },
        { name: "RAG", icon: rag },
        { name: "LangChain", icon: langchain },
        { name: "Prompt/Context Engineering", icon: promptEng },
      ],
    },
    {
      category: "Backend / Full Stack",
      items: [
        { name: "Node.js", icon: node },
        { name: "Express.js", icon: express },
        { name: "Mongo DB", icon: mongo },
      ],
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 6,
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5, position: "relative" }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background:
                "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", md: "2.5rem" },
              textShadow: "0 0 30px rgba(102, 126, 234, 0.3)",
            }}
          >
            Technical Skills
          </Typography>

          {/* <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              mb: 3,
              fontSize: "1rem",
              fontWeight: 300,
            }}
          >
            Technologies I work with
          </Typography> */}
        </Box>
        <Box sx={{ mb: 5 }}>
          <Grid container spacing={2}>
            {categorizedSkills.map((group, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Card
                  sx={{
                    height: "100%",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 2,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {group.category}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {group.items.map((item, i) => (
                        <Chip
                          key={`${item.name}-${i}`}
                          icon={
                            <img
                              src={item.icon}
                              alt={item.name}
                              style={{ width: 20, height: 20 }}
                            />
                          }
                          label={item.name}
                          size={isMobile ? "small" : "medium"}
                          variant="outlined"
                          sx={{
                            px: 1.25,
                            borderRadius: 2,
                            borderColor: "rgba(255,255,255,0.22)",
                            color: "text.primary",
                            transition: "all 0.25s ease",
                            "& .MuiChip-icon": { color: item.color },
                            "&:hover": {
                              transform: "translateY(-1px)",
                              boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                              borderColor: "rgba(255,255,255,0.22)",
                              background: `linear-gradient(145deg, ${item.color}22 0%, rgba(255,255,255,0.05) 100%)`,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
