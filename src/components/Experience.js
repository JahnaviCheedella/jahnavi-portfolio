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
      position: "React & Generative AI Developer",
      duration: "October 10th, 2024 - Present",
      location: "On-site",
      description:
        "Working on building responsive, accessible, and high-performance web applications using React, TypeScript, and Redux, while also exploring Generative AI technologies and Prompt & Context Engineering in projects to develop intelligent, automated solutions.",
      achievements: [
        "Developed and maintained multiple responsive React applications with clean, scalable architectures",
        "Implemented Redux for efficient and predictable state management",
        "Used TypeScript to ensure type-safe and maintainable code",
        "Collaborated in agile teams to deliver user-friendly and performance-optimized solutions",
        "Enhanced UI/UX by applying modern design patterns and accessibility best practices",
        "Independently worked on projects using LangChain, NLP, and Generative AI to build intelligent features and automation workflows",
        "Gaining experience with AI tools and techniques, including text processing and context-aware content generation",
        "Applied Prompt & Context Engineering to optimize AI interactions and enhance model understanding in automation projects",
      ],
    },
    {
      company: "TrueID",
      position: "React JS Intern",
      duration: "July 10th, 2024 - October 10th, 2024",
      location: "On-site",
      description:
        "Completed a hands-on internship focused on building and enhancing UI components in React JS, gaining practical experience with modern web development workflows and collaborative coding practices.",
      achievements: [
        "Developed and optimized reusable UI components and page layouts using React JS",
        "Applied best practices for responsive design, accessibility, and maintainable code",
        "Worked with modern React features such as hooks and state management",
        "Collaborated with the development team through code reviews, daily stand-ups, and sprint planning",
        "Integrated third-party libraries and APIs to enhance application functionality",
        "Improved application performance by identifying and fixing UI bottlenecks",
      ],
    },
    {
      company: "BVM CS IT Services",
      position: "HTML & CSS Intern",
      duration: "June 10th, 2024 - July 10th, 2024",
      location: "On-site",
      description:
        "Began my professional journey in web development by mastering the core building blocks of the web: HTML and CSS. Developed and styled static web pages from scratch, applying best practices in semantic markup and responsive design. Successfully created web pages, laying a strong foundation for future frontend development.",
      achievements: [
        "Gained hands-on experience with semantic HTML5 elements to structure content meaningfully and improve accessibility.",
        "Styled web pages using modern CSS3 features for clean and responsive layouts.",
        "Implemented mobile responsive design techniques to ensure cross-device compatibility.",
        "Built pixel-perfect static websites with attention to typography, color schemes, and spacing.",
        "Understood and applied fundamental web development principles including the box model, positioning, and media queries.",
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
