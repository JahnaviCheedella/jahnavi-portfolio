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
      title: "Frontend Development",
      description:
        "Specialized in creating responsive and interactive user interfaces using React JS, TypeScript, and Redux.",
    },
    {
      icon: <LaptopIcon />,
      title: "UI/UX Design",
      description:
        "Passionate about creating intuitive and visually appealing user experiences that enhance user engagement.",
    },
    {
      icon: <RocketIcon />,
      title: "Generative AI",
      description:
        "Building intelligent solutions using Generative AI technologies like LangChain to create context-aware and agentic applications.",
    },
    {
      icon: <PeopleIcon />,
      title: "AI/ML Tools & Frameworks",
      description:
        "Passionate about integrating AI into modern applications, with a foundation in PyTorch, Pandas, and NumPy to support intelligent, data-driven solutions.",
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
                I’m Jahnavi Cheedella — a Frontend Developer and Generative AI
                enthusiast with a foundation in HTML5, CSS3, JavaScript,
                and a passion for building responsive, dynamic interfaces using
                React JS, TypeScript, and Redux. I specialize in crafting clean,
                scalable UIs that deliver seamless user experiences across
                devices.
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
                Currently, I work at TrueID, where I’ve contributed to
                real-world projects focused on UI development, state management,
                and performance optimization. My role has strengthened my
                ability to collaborate in agile teams, follow modern React
                patterns, and deliver maintainable, user-friendly web
                applications.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                  fontSize: "1.1rem",
                }}
              >
                In parallel, I explore the world of Generative AI, building
                intelligent features with tools like LangChain, PyTorch, Pandas,
                and NumPy. I’m passionate about merging UI development with
                smart technologies to create solutions that are both functional
                and forward-thinking.
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
