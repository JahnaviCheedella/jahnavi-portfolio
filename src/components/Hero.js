import React from "react";
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
} from "@mui/icons-material";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><defs><pattern id=\\"grid\\" width=\\"10\\" height=\\"10\\" patternUnits=\\"userSpaceOnUse\\"><path d=\\"M 10 0 L 0 0 0 10\\" fill=\\"none\\" stroke=\\"rgba(255,255,255,0.03)\\" stroke-width=\\"1\\"/></pattern></defs><rect width=\\"100\\" height=\\"100\\" fill=\\"url(%23grid)\\"/></svg>")',
          opacity: 0.5,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hello, I'm{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Jahnavi Cheedella
                </Box>
              </Typography>

              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: "text.secondary",
                  mb: 3,
                }}
              >
                React & Generative AI Developer
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
                I specialize in building responsive, accessible, and engaging
                web interfaces using React JS, TypeScript, JavaScript, HTML5,
                CSS3, and Redux, creating seamless user experiences with a
                strong focus on design and performance across devices.
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
                I’m passionate about intelligent applications, with expertise in
                Generative AI, Prompt and Context Engineering, and developing models from
                scratch using PyTorch, while also leveraging LangChain, PyTorch,
                Pandas, and NumPy to build innovative AI-driven features that
                enhance user interaction and automate complex tasks.
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
                Whether it’s crafting a clean UI or integrating smart features,
                I bring a blend of creativity, technical skill, and curiosity to
                every project.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection("projects")}
                  sx={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 20px rgba(102, 126, 234, 0.3)",
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection("contact")}
                  sx={{
                    borderColor: "primary.main",
                    color: "primary.main",
                    "&:hover": {
                      background: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  href="/Resume.pdf"
                  download
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                    color: "white",
                    fontWeight: 600,
                    "&:hover": {
                      background: "#667eea",
                    },
                  }}
                >
                  Download my resume
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: { xs: 250, md: 300 },
                  height: { xs: 250, md: 300 },
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 4,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background:
                      "linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.1), transparent)",
                    animation: "rotate 6s linear infinite",
                  },
                  "@keyframes rotate": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 150, md: 200 },
                    height: { xs: 150, md: 200 },
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    fontSize: { xs: "3rem", md: "4rem" },
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  👨‍💻
                </Avatar>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{ margin: 3, display: "flex", gap: 2, justifyContent: "center" }}
        >
          <IconButton
            href="https://www.linkedin.com/in/jahnavi-cheedella-299510264/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 50,
              height: 50,
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
              "&:hover": {
                background: "#0077B5",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(0, 119, 181, 0.3)",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://github.com/JahnaviCheedella"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 50,
              height: 50,
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
              "&:hover": {
                background: "#333",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(51, 51, 51, 0.3)",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="mailto:jahnavi.cheedella@gmail.com"
            sx={{
              width: 50,
              height: 50,
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
              "&:hover": {
                background: "#EA4335",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(234, 67, 53, 0.3)",
              },
            }}
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
