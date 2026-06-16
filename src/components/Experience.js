import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Work as WorkIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  FiberManualRecord as DotIcon,
} from "@mui/icons-material";

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const experiences = [
    {
      company: "TrueID",
      position: "Full-Stack & Generative AI Engineer",
      duration: "October 2024 – Present",
      location: "Hyderabad",
      type: "Full-time",
      color: "#667eea",
      description:
        "Leading the development of scalable full-stack applications and integrating advanced Generative AI solutions to automate enterprise workflows.",
      achievements: [
        "Developed and maintained enterprise platforms including Identity Management Dashboards, Image Labs and Enterprise Business Applications.",
        "Built interactive analytics dashboards using React.js, TypeScript, Redux Toolkit, Material UI, and ApexCharts.",
        "Designed and implemented RESTful APIs using Node.js, PostgreSQL, and Oracle Database.",
        "Developed AI-powered workflow automation using Python, RAG, prompt engineering, and LLM integrations.",
        "Optimized PostgreSQL and Oracle SQL queries and collaborated in Agile teams.",
        "Applied prompt engineering and context optimization techniques, increasing AI response accuracy.",
      ],
    },
    {
      company: "TrueID",
      position: "React.js Intern",
      duration: "July 2024 – October 2024",
      location: "Hyderabad",
      type: "Internship",
      color: "#f093fb",
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
      duration: "June 2024 – July 2024",
      location: "Hyderabad",
      type: "Internship",
      color: "#00d4ff",
      description:
        "Mastered core web technologies to create high-quality, responsive web pages.",
      achievements: [
        "Developed responsive web interfaces using HTML5, CSS3, JavaScript, Flexbox, and CSS Grid.",
        "Ensured cross-browser compatibility and mobile responsiveness.",
        "Improved UI quality through semantic HTML and accessibility-focused development practices.",
      ],
    },
  ];

  return (
    <Box
      id="experience"
      ref={sectionRef}
      sx={{
        py: 3,
        background:
          "linear-gradient(180deg, #12103a 0%, #0d0d2b 50%, #0f0f23 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        className="orb"
        sx={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(240,147,251,0.1) 0%, transparent 70%)",
          top: "20%",
          left: "-15%",
          animationDuration: "22s",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          className={`animate-on-scroll ${visible ? "visible" : ""}`}
          sx={{ textAlign: "center", mb: 10 }}
        >
          <Box className="section-divider" />
          <Typography
            variant="h2"
            component="h2"
            className="section-title"
            sx={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Work Experience
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
          >
            My professional journey
          </Typography>
        </Box>

        <Box sx={{ position: "relative" }}>
          {!isMobile && (
            <Box
              className={`animate-on-scroll ${visible ? "visible" : ""}`}
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                transform: "translateX(-50%)",
                background:
                  "linear-gradient(180deg, #667eea 0%, #f093fb 50%, #00d4ff 100%)",
                boxShadow: "0 0 15px rgba(102,126,234,0.5)",
                borderRadius: 4,
                transformOrigin: "top",
                transition: "opacity 1s ease",
              }}
            />
          )}

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <Box
                key={index}
                className={`animate-on-scroll ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
                sx={{
                  display: "flex",
                  justifyContent: isMobile
                    ? "flex-start"
                    : isLeft
                      ? "flex-start"
                      : "flex-end",
                  mb: 6,
                  position: "relative",
                }}
              >
                {!isMobile && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      top: "30px",
                      transform: "translateX(-50%)",
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: exp.color,
                      border: "3px solid #0d0d2b",
                      boxShadow: `0 0 20px ${exp.color}, 0 0 40px ${exp.color}60`,
                      zIndex: 2,
                      animation: "pulse-glow 2.5s ease-in-out infinite",
                    }}
                  />
                )}

                <Box
                  sx={{
                    width: isMobile ? "100%" : "46%",
                    ml: isMobile ? 0 : isLeft ? 0 : "auto",
                    mr: isMobile ? 0 : isLeft ? "auto" : 0,
                  }}
                >
                  <Box
                    className="glow-card gradient-border"
                    sx={{
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "20px",
                      border: `1px solid ${exp.color}25`,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        height: 4,
                        background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                        mb: 0,
                      }}
                    />

                    <Box sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          mb: 2,
                          flexWrap: "wrap",
                          gap: 1,
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 800,
                              color: exp.color,
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: "1.05rem",
                              mb: 0.5,
                            }}
                          >
                            {exp.company}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "rgba(255,255,255,0.85)",
                              fontWeight: 600,
                              fontSize: "0.95rem",
                            }}
                          >
                            {exp.position}
                          </Typography>
                        </Box>
                        <Chip
                          label={exp.type}
                          size="small"
                          sx={{
                            background: `${exp.color}20`,
                            color: exp.color,
                            border: `1px solid ${exp.color}40`,
                            fontWeight: 700,
                            fontSize: "0.7rem",
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          mb: 2.5,
                          flexWrap: "wrap",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <CalendarIcon
                            sx={{
                              fontSize: 14,
                              color: "rgba(255,255,255,0.4)",
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{ color: "rgba(255,255,255,0.4)" }}
                          >
                            {exp.duration}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <LocationIcon
                            sx={{
                              fontSize: 14,
                              color: "rgba(255,255,255,0.4)",
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{ color: "rgba(255,255,255,0.4)" }}
                          >
                            {exp.location}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.55)",
                          mb: 2.5,
                          lineHeight: 1.7,
                          fontStyle: "italic",
                        }}
                      >
                        {exp.description}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          color: exp.color,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          display: "block",
                          mb: 1.5,
                        }}
                      >
                        Key Achievements
                      </Typography>
                      <Box
                        component="ul"
                        sx={{ pl: 0, m: 0, listStyle: "none" }}
                      >
                        {exp.achievements.map((achievement, idx) => (
                          <Box
                            key={idx}
                            component="li"
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 1.2,
                              mb: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: exp.color,
                                boxShadow: `0 0 6px ${exp.color}`,
                                flexShrink: 0,
                                mt: 0.7,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255,255,255,0.55)",
                                lineHeight: 1.6,
                                fontSize: "0.85rem",
                              }}
                            >
                              {achievement}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
