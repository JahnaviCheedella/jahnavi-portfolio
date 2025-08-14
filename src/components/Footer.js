import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  KeyboardArrowUp as ArrowUpIcon,
} from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        py: 4,
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 0.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              &copy; {new Date().getFullYear()} Portfolio. Designed and
              developed by Jahnavi Cheedella
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.disabled",
                fontSize: "0.9rem",
              }}
            >
              React & Generative AI Developer passionate about creating amazing user experiences
            </Typography>
          </Box>

          <IconButton
            onClick={scrollToTop}
            sx={{
              width: 50,
              height: 50,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
              },
            }}
          >
            <ArrowUpIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
