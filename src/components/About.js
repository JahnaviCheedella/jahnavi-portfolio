import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Code as CodeIcon,
  Laptop as LaptopIcon,
  People as PeopleIcon,
  Rocket as RocketIcon,
} from "@mui/icons-material";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const features = [
    {
      icon: <CodeIcon />,
      title: "Full-Stack Development",
      description:
        "Building scalable web applications using the MERN stack, with expertise in React.js, Node.js, and PostgreSQL/Oracle DB.",
    },
    {
      icon: <RocketIcon />,
      title: "Generative AI & RAG",
      description:
        "Designing intelligent solutions using LangChain, RAG systems, and Prompt Engineering to automate workflows and enhance accuracy.",
    },
    {
      icon: <LaptopIcon />,
      title: "API Integration",
      description:
        "Designing and implementing secure RESTful APIs to enable seamless data flow between complex frontend and backend systems.",
    },
    {
      icon: <PeopleIcon />,
      title: "Data Visualization",
      description:
        "Building interactive, data-driven dashboards with ApexCharts to provide real-time insights and improve decision-making.",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)",
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
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              mb: 4,
            }}
          >
            Get to know me better
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "primary.main",
                }}
              >
                Who I Am
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: "1.1rem",
                }}
              >
                I am Jahnavi Cheedella — a Full-Stack Engineer and Generative AI enthusiast
                specializing in delivering high-performance web applications.
                I specialize in building scalable systems using React.js, Node.js, and
                PostgreSQL/Oracle DB, with a strong focus on seamless API integration and
                efficient state management.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: "1.1rem",
                }}
              >
                My passion lies at the intersection of full-stack engineering and intelligent
                automation. I have extensive experience in developing Generative AI (RAG-based)
                solutions, leveraging tools like LangChain, FastAPI, and ChromaDB to automate
                complex workflows and improve system accuracy.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                  fontSize: "1.1rem",
                }}
              >
                Whether it's building interactive data-driven dashboards or optimizing backend
                queries for performance, I am dedicated to driving innovation and delivering
                production-ready features that enhance user experience and operational efficiency.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          mb: 2,
                          mx: "auto",
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "text.primary",
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
