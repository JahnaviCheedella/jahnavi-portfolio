import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from "@mui/icons-material";

const useTypingEffect = (texts, speed = 80, pause = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout;
    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
      } else {
        setDeleting(false);
        setTextIdx((i) => (i + 1) % texts.length);
      }
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  return displayed;
};

// Floating Particles
const Particles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: ((i * 11) % 3) + 1.2,
    left: (i * 37 + 13) % 100,
    delay: -((i * 7 + 3) % 18),
    duration: 18,
    color: i % 3 === 0 ? "#667eea" : i % 3 === 1 ? "#f093fb" : "#00d4ff",
  }));

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: "-10px",
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const heroRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const typed = useTypingEffect([
    "Full-Stack Engineer",
    "Generative AI Engineer",
    "React.js & Node.js Developer",
    "AI-Powered Application Builder",
    "Scalable Solutions Developer",
  ]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/Cheedella_Jahnavi_Full_Stack_GenAI_Engineer.pdf`;
    link.setAttribute(
      "download",
      "Cheedella_Jahnavi_Full_Stack_GenAI_Engineer.pdf",
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="home"
      ref={heroRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #05050f 0%, #0d0d2b 40%, #12103a 70%, #0a0a1a 100%)",
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
            "radial-gradient(circle, rgba(102,126,234,0.25) 0%, transparent 70%)",
          top: "-15%",
          right: "-10%",
          animationDuration: "20s",
        }}
      />
      <Box
        className="orb"
        sx={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(240,147,251,0.2) 0%, transparent 70%)",
          bottom: "-10%",
          left: "-5%",
          animationDuration: "15s",
          animationDirection: "reverse",
        }}
      />
      <Box
        className="orb"
        sx={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
          top: "40%",
          left: "20%",
          animationDuration: "25s",
        }}
      />

      <Particles />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(102,126,234,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102,126,234,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ maxWidth: 680 }}>
              <Box
                className={`animate-on-scroll ${loaded ? "visible" : ""}`}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  mb: 3,
                  borderRadius: "50px",
                  background: "rgba(102,126,234,0.12)",
                  border: "1px solid rgba(102,126,234,0.35)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.6s ease 0.1s",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#00d4ff",
                    boxShadow: "0 0 8px #00d4ff",
                    animation: "pulse-glow 2s ease-in-out infinite",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#00d4ff",
                    fontWeight: 600,
                    letterSpacing: 1,
                    fontSize: "0.8rem",
                  }}
                >
                  AVAILABLE FOR WORK
                </Typography>
              </Box>

              <Typography
                variant="h1"
                component="h1"
                className={`animate-on-scroll ${loaded ? "visible" : ""}`}
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem" },
                  lineHeight: 1.1,
                  mb: 2,
                  letterSpacing: "-0.03em",
                  fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                  transition: "all 0.7s ease 0.2s",
                }}
              >
                <Box component="span" sx={{ color: "rgba(255,255,255,0.9)" }}>
                  Hello, I'm{" "}
                </Box>
                <Box
                  component="span"
                  className="shimmer-text"
                  sx={{ fontFamily: "inherit" }}
                >
                  Jahnavi Cheedella
                </Box>
              </Typography>

              <Box
                className={`animate-on-scroll ${loaded ? "visible" : ""}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 3,
                  transition: "all 0.7s ease 0.35s",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1.2rem", md: "1.6rem" },
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {typed}
                </Typography>
                <Box className="typed-cursor" />
              </Box>

              <Typography
                variant="body1"
                className={`animate-on-scroll ${loaded ? "visible" : ""}`}
                sx={{
                  color: "rgba(255,255,255,0.55)",
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                  maxWidth: 580,
                  transition: "all 0.7s ease 0.5s",
                }}
              >
                Full-Stack & Generative AI Engineer skilled in building scalable
                web applications using React.js, Node.js, Python, PostgreSQL,
                and REST APIs. Experienced with RAG systems, LLM integrations,
                and AI-powered workflow automation.
              </Typography>

              <Box
                className={`animate-on-scroll ${loaded ? "visible" : ""}`}
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  mb: 2,
                  transition: "all 0.7s ease 0.65s",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  className="neon-btn"
                  onClick={() => scrollToSection("projects")}
                  sx={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "12px",
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                    boxShadow: "0 0 20px rgba(102,126,234,0.4)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow:
                        "0 15px 35px rgba(102,126,234,0.5), 0 0 30px rgba(102,126,234,0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className="neon-btn"
                  onClick={() => scrollToSection("contact")}
                  sx={{
                    borderColor: "rgba(102,126,234,0.5)",
                    color: "#667eea",
                    borderRadius: "12px",
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: "1rem",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      background: "rgba(102,126,234,0.12)",
                      borderColor: "#667eea",
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 25px rgba(102,126,234,0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  className="neon-btn"
                  onClick={downloadCV}
                  sx={{
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #667eea 100%)",
                    borderRadius: "12px",
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: "1rem",
                    boxShadow: "0 0 20px rgba(240,147,251,0.4)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 15px 35px rgba(240,147,251,0.5)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Download CV
                </Button>
              </Box>

              <Box
                className={`animate-on-scroll ${loaded ? "visible" : ""}`}
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mt: 2,
                  transition: "all 0.7s ease 0.8s",
                }}
              >
                {[
                  {
                    icon: <LinkedInIcon />,
                    href: "https://www.linkedin.com/in/jahnavi-cheedella-299510264/",
                    hover: "#0077B5",
                    shadow: "rgba(0,119,181,0.4)",
                    label: "LinkedIn",
                  },
                  {
                    icon: <GitHubIcon />,
                    href: "https://github.com/JahnaviCheedella",
                    hover: "#6e5494",
                    shadow: "rgba(110,84,148,0.4)",
                    label: "GitHub",
                  },
                  {
                    icon: <EmailIcon />,
                    href: "mailto:jahnavi.cheedella@gmail.com",
                    hover: "#EA4335",
                    shadow: "rgba(234,67,53,0.4)",
                    label: "Email",
                  },
                ].map((s, i) => (
                  <IconButton
                    key={i}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    sx={{
                      width: 48,
                      height: 48,
                      background: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                      transition:
                        "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      "&:hover": {
                        background: s.hover,
                        borderColor: s.hover,
                        color: "white",
                        transform: "translateY(-4px) scale(1.1)",
                        boxShadow: `0 10px 25px ${s.shadow}`,
                      },
                    }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Box
              className={`hero-avatar-wrapper animate-on-scroll ${loaded ? "visible" : ""}`}
              sx={{
                position: "relative",
                width: 380,
                height: 380,
                transition: "all 0.9s ease 0.3s",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: "50%",
                  border: "2px dashed rgba(102,126,234,0.3)",
                  animation: "rotate-slow 20s linear infinite",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: "50%",
                  border: "1px solid rgba(240,147,251,0.2)",
                  animation: "rotate-slow 12s linear infinite reverse",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 14,
                  height: 14,
                  marginLeft: -7,
                  marginTop: -7,
                  animation: "orbit 8s linear infinite",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "#667eea",
                    boxShadow: "0 0 15px #667eea",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 10,
                  height: 10,
                  marginLeft: -5,
                  marginTop: -5,
                  animation: "orbit 13s linear infinite reverse",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "#f093fb",
                    boxShadow: "0 0 12px #f093fb",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(102,126,234,0.15) 0%, rgba(118,75,162,0.15) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(102,126,234,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow:
                    "0 0 60px rgba(102,126,234,0.3), 0 0 120px rgba(102,126,234,0.15), inset 0 0 60px rgba(102,126,234,0.05)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(102,126,234,0.1) 50%, transparent 70%)",
                    animation: "shimmer 3s linear infinite",
                    backgroundSize: "200% 100%",
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 220,
                    height: 220,
                    fontSize: "5rem",
                    background:
                      "linear-gradient(135deg, rgba(102,126,234,0.3) 0%, rgba(240,147,251,0.3) 100%)",
                    border: "2px solid rgba(255,255,255,0.1)",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  👩‍💻
                </Avatar>
              </Box>

              {[
                {
                  label: "React.js",
                  top: "5%",
                  left: "-15%",
                  color: "#61dafb",
                },
                { label: "Gen AI", top: "5%", right: "-15%", color: "#f093fb" },
                {
                  label: "Node.js",
                  bottom: "10%",
                  left: "-18%",
                  color: "#68a063",
                },
                {
                  label: "Python",
                  bottom: "10%",
                  right: "-18%",
                  color: "#3776ab",
                },
              ].map((badge, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "absolute",
                    top: badge.top,
                    bottom: badge.bottom,
                    left: badge.left,
                    right: badge.right,
                    px: 1.5,
                    py: 0.6,
                    borderRadius: "20px",
                    background: "rgba(15,15,35,0.9)",
                    border: `1px solid ${badge.color}40`,
                    backdropFilter: "blur(10px)",
                    boxShadow: `0 0 15px ${badge.color}30`,
                    animation: `float ${5 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: badge.color,
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {badge.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
