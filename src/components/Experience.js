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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Work as WorkIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const experiences = [
    {
      company: "TrueID",
      position: "Full-Stack & Generative AI Engineer",
      duration: "October 2024 - present",
      location: "Hyderabad",
      description:
        "Leading the development of scalable full-stack applications and integrating advanced Generative AI solutions to automate enterprise workflows.",
      achievements: [
        "Developed and maintained enterprise platforms including Identity Management Dashboards, Image Labs and Enterprise Business Applications, supporting business-critical workflows.",
        "Built interactive analytics dashboards using React.js, TypeScript, Redux Toolkit, Material UI, and ApexCharts with real-time reporting and data visualization capabilities.",
        "Designed and implemented RESTful APIs and backend services using Node.js, PostgreSQL, and Oracle Database, enabling seamless integration across multiple business systems.",
        "Developed AI-powered workflow automation solutions using Python, Retrieval-Augmented Generation (RAG), prompt engineering, and LLM integrations.",
        "Optimized PostgreSQL and Oracle SQL queries and collaborated with Agile teams to deliver production-ready features, enhancements, and bug fixes.",
        "Applied prompt engineering and context optimization techniques, increasing AI response accuracy.",
      ],
    },
    {
      company: "TrueID",
      position: "React.js Intern",
      duration: "July 2024 - October 2024",
      location: "Hyderabad",
      description:
        "Focused on building reusable UI components and optimizing frontend performance through modern React practices.",
      achievements: [
        "Developed reusable React components and integrated REST APIs for dynamic data rendering.",
        "Implemented Redux Toolkit for scalable state management and improved maintainability.",
        "Optimized frontend performance and responsiveness to enhance user experience.",
      ],
    },
    {
      company: "BVM IT Consulting Services",
      position: "UI Developer Intern",
      duration: "June 2024 - July 2024",
      location: "Hyderabad",
      description:
        "Mastered core web technologies to create high-quality, responsive web pages with a focus on semantic HTML and CSS.",
      achievements: [
        "Developed responsive web interfaces using HTML5, CSS3, JavaScript, Flexbox, and CSS Grid.",
        "Ensured cross-browser compatibility and mobile responsiveness across multiple devices.",
        "Improved UI quality through semantic HTML and accessibility-focused development practices.",
      ],
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
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
            Work Experience
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              mb: 4,
            }}
          >
            My professional journey
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {experiences.map((exp, index) => (
            <Grid size={{ xs: 12, md: 8, lg: 6 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  transition: "all 0.3s ease",
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      sx={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        mr: 2,
                      }}
                    >
                      <WorkIcon />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: "primary.main",
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "text.primary",
                          fontWeight: 500,
                        }}
                      >
                        {exp.position}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Chip
                      icon={<CalendarIcon />}
                      label={exp.duration}
                      size="small"
                      sx={{
                        background: "rgba(102, 126, 234, 0.1)",
                        color: "primary.main",
                      }}
                    />
                    <Chip
                      icon={<LocationIcon />}
                      label={exp.location}
                      size="small"
                      sx={{
                        background: "rgba(102, 126, 234, 0.1)",
                        color: "primary.main",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {exp.description}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      mb: 1,
                    }}
                  >
                    Key Achievements:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {exp.achievements.map((achievement, idx) => (
                      <Typography
                        key={idx}
                        component="li"
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: 0.5,
                          "&::marker": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {achievement}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
