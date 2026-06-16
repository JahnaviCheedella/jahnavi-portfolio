import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import {
  Code as CodeIcon,
  Laptop as LaptopIcon,
  People as PeopleIcon,
  Rocket as RocketIcon,
} from "@mui/icons-material";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let startTime = null;
          const step = (ts) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [end, duration, started]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
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

  const features = [
    {
      icon: <CodeIcon />,
      title: "Full-Stack Development",
      description:
        "Building scalable web applications using React.js, Node.js, and PostgreSQL/Oracle DB.",
      color: "#667eea",
      delay: "0.1s",
    },
    {
      icon: <RocketIcon />,
      title: "Generative AI & RAG",
      description:
        "Designing intelligent solutions using LangChain, RAG systems, and Prompt Engineering.",
      color: "#f093fb",
      delay: "0.2s",
    },
    {
      icon: <LaptopIcon />,
      title: "API Integration",
      description:
        "Designing secure RESTful APIs to enable seamless data flow between systems.",
      color: "#00d4ff",
      delay: "0.3s",
    },
    {
      icon: <PeopleIcon />,
      title: "Data Visualization",
      description:
        "Building interactive dashboards with ApexCharts for real-time insights.",
      color: "#ffd166",
      delay: "0.4s",
    },
  ];

  const stats = [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 15, suffix: "+", label: "Technologies" },
    { value: 100, suffix: "%", label: "Commitment" },
  ];

  return (
    <Box
      id="about"
      ref={sectionRef}
      sx={{
        py: 12,
        background:
          "linear-gradient(180deg, #0d0d2b 0%, #0f0f23 50%, #12103a 100%)",
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
          animationDuration: "18s",
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
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
          >
            Get to know me better
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          {stats.map((s, i) => (
            <Grid size={{ xs: 12, sm: 4 }} key={i}>
              <Box
                className={`glow-card animate-on-scroll ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
                sx={{ textAlign: "center" }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: "linear-gradient(135deg, #667eea, #f093fb)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <CountUp end={s.value} suffix={s.suffix} />
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    mt: 0.5,
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6} alignItems="start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              className={`animate-left ${visible ? "visible" : ""}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "#667eea",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: { xs: "1.6rem", md: "2rem" },
                }}
              >
                Who I Am
              </Typography>

              {[
                "I am a Full-Stack & Generative AI Engineer passionate about building scalable web applications and intelligent digital solutions. I enjoy transforming complex business requirements into efficient, user-friendly products that deliver real value.",
                "My expertise includes React.js, Node.js, Python, PostgreSQL, TypeScript, and REST APIs. I have experience developing enterprise applications, analytics dashboards, workflow automation solutions, and modern web platforms.",
                "I am passionate about Generative AI and have hands-on experience with RAG systems, LLM integrations, vector databases, and prompt engineering — continuously building innovative solutions that drive real business impact.",
              ].map((text, i) => (
                <Typography
                  key={i}
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    mb: 2.5,
                    lineHeight: 1.9,
                    fontSize: "1rem",
                    borderLeft: i === 0 ? "3px solid #667eea" : "none",
                    pl: i === 0 ? 2 : 0,
                    transition: `all 0.6s ease ${0.2 + i * 0.1}s`,
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2.5}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Card
                    className={`glow-card animate-on-scroll ${visible ? "visible" : ""}`}
                    style={{ transitionDelay: feature.delay }}
                    sx={{
                      height: "100%",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          background: `${feature.color}20`,
                          border: `2px solid ${feature.color}50`,
                          mb: 2,
                          mx: "auto",
                          color: feature.color,
                          boxShadow: `0 0 20px ${feature.color}30`,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            boxShadow: `0 0 40px ${feature.color}60`,
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: "rgba(255,255,255,0.9)",
                          fontSize: "0.95rem",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.7,
                          fontSize: "0.85rem",
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
