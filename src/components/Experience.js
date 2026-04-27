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
      position: "Full-Stack Developer & Generative AI Engineer",
      duration: "October 2024 – present",
      location: "Hyderabad",
      description:
        "Leading the development of scalable full-stack applications and integrating advanced Generative AI solutions to automate enterprise workflows.",
      achievements: [
        "Developed scalable full-stack applications using React.js, Node.js and PostgreSQL/Oracle DB, improving overall system performance by 30%.",
        "Designed and implemented RESTful APIs, integrating multiple backend services to enable seamless and efficient data flow across systems.",
        "Optimized complex SQL queries in PostgreSQL and Oracle DB, significantly reducing response time and improving application efficiency.",
        "Built interactive data-driven dashboards with graphs and statistics using ApexCharts, enabling real-time insights and improving decision-making.",
        "Developed and integrated Generative AI (RAG-based) solutions to automate workflows, reducing manual effort by 50%.",
        "Applied prompt engineering and context optimization techniques, increasing AI response accuracy by 35%.",
        "Implemented Redux Toolkit (RTK) and TypeScript for scalable state management, improving code maintainability and reducing runtime errors.",
        "Collaborated with Agile teams to deliver production-ready features, while enhancing UI/UX performance and responsiveness, reducing user complaints by 40%.",
      ],
    },
    {
      company: "TrueID",
      position: "React.js Intern",
      duration: "July 2024 – September 2024",
      location: "Hyderabad",
      description:
        "Focused on building reusable UI components and optimizing frontend performance through modern React practices.",
      achievements: [
        "Developed reusable React components and integrated REST APIs for dynamic data rendering.",
        "Implemented Redux Toolkit (RTK) for efficient state management and scalability.",
        "Built responsive UI and optimized performance, improving load times and user experience.",
      ],
    },
    {
      company: "BVM IT Consultancy Services",
      position: "UI Developer Intern",
      duration: "April 2024 – July 2024",
      location: "Hyderabad",
      description:
        "Mastered core web technologies to create high-quality, responsive web pages with a focus on semantic HTML and CSS.",
      achievements: [
        "Created responsive web pages using HTML5, CSS3, and JavaScript with high mobile compatibility.",
        "Used Flexbox, Grid, and media queries for adaptive layouts across devices.",
        "Improved UI quality with semantic HTML and cross-browser compatibility.",
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
