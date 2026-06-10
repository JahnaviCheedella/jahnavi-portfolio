import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  CheckCircle as CheckIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";

const ContactCard = ({ icon, title, value, link, color, delay, visible }) => {
  const [hovered, setHovered] = useState(false);

  const content = (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`animate-left ${visible ? "visible" : ""}`}
      style={{ transitionDelay: delay }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2.5,
        borderRadius: "16px",
        background: hovered
          ? `linear-gradient(135deg, ${color}18, rgba(255,255,255,0.04))`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? color + "50" : "rgba(255,255,255,0.08)"}`,
        cursor: link ? "pointer" : "default",
        transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transform: hovered ? "translateX(8px)" : "translateX(0)",
        boxShadow: hovered ? `0 8px 30px ${color}20, 0 0 15px ${color}10` : "none",
        textDecoration: "none",
        backdropFilter: "blur(10px)",
        mb: 2,
      }}
      component={link ? "a" : "div"}
      href={link || undefined}
      target={link && link.startsWith("http") ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
    >
      
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: "14px",
          background: hovered ? color : `${color}20`,
          border: `1px solid ${color}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.35s ease",
          boxShadow: hovered ? `0 0 20px ${color}60` : "none",
          color: hovered ? "#fff" : color,
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography
          variant="caption"
          sx={{
            color: color,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.2,
            fontSize: "0.7rem",
            display: "block",
            mb: 0.3,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)",
            fontWeight: 500,
            fontSize: "0.9rem",
            transition: "color 0.3s ease",
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );

  return content;
};

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const mailtoLink = `mailto:cheedellajahnavi@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoLink);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="small" />,
      title: "Email",
      value: "cheedellajahnavi@gmail.com",
      link: "mailto:cheedellajahnavi@gmail.com",
      color: "#667eea",
    },
    {
      icon: <PhoneIcon fontSize="small" />,
      title: "Phone",
      value: "+91-7981064354",
      link: "tel:+917981064354",
      color: "#f093fb",
    },
    {
      icon: <LocationIcon fontSize="small" />,
      title: "Location",
      value: "Hyderabad, Telangana, India",
      link: null,
      color: "#00d4ff",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jahnavi-cheedella-299510264/",
      color: "#0077B5",
      shadow: "rgba(0,119,181,0.5)",
    },
    {
      icon: <GitHubIcon />,
      name: "GitHub",
      url: "https://github.com/JahnaviCheedella",
      color: "#6e5494",
      shadow: "rgba(110,84,148,0.5)",
    },
  ];

  const textFieldSx = (name) => ({
    mb: 3,
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      background: "rgba(255,255,255,0.03)",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease",
      "& fieldset": {
        borderColor:
          focusedField === name
            ? "#667eea"
            : "rgba(255,255,255,0.1)",
        transition: "border-color 0.3s ease",
      },
      "&:hover fieldset": { borderColor: "rgba(102,126,234,0.5)" },
      "&.Mui-focused fieldset": {
        borderColor: "#667eea",
        boxShadow: "0 0 0 3px rgba(102,126,234,0.15)",
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,0.4)",
      "&.Mui-focused": { color: "#667eea" },
    },
    "& .MuiOutlinedInput-input": { color: "#fff" },
    "& .MuiOutlinedInput-inputMultiline": { color: "#fff" },
    transform: focusedField === name ? "translateY(-2px)" : "none",
    transition: "transform 0.3s ease",
    boxShadow: focusedField === name
      ? "0 8px 25px rgba(102,126,234,0.15)"
      : "none",
  });

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{
        py: 2,
        background:
          "linear-gradient(180deg, #0d0d2b 0%, #12103a 40%, #0f0f23 100%)",
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
            "radial-gradient(circle, rgba(102,126,234,0.15) 0%, transparent 70%)",
          top: "-10%",
          left: "-15%",
          animationDuration: "22s",
        }}
      />
      <Box
        className="orb"
        sx={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(240,147,251,0.12) 0%, transparent 70%)",
          bottom: "-10%",
          right: "-10%",
          animationDuration: "18s",
          animationDirection: "reverse",
        }}
      />
      <Box
        className="orb"
        sx={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
          top: "50%",
          right: "20%",
          animationDuration: "14s",
        }}
      />

      
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle, rgba(102,126,234,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          opacity: 0.4,
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
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "1.1rem",
              maxWidth: 500,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            I'm always open to new opportunities and conversations.{" "}
            <Box component="span" sx={{ color: "#667eea", fontWeight: 600 }}>
              Let's build something amazing together!
            </Box>
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="flex-start">
          
          <Grid size={{ xs: 12, md: 5 }}>
            <Box>
              <Typography
                variant="h5"
                className={`animate-left ${visible ? "visible" : ""}`}
                style={{ transitionDelay: "0.05s" }}
                sx={{
                  fontWeight: 800,
                  mb: 1.5,
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "linear-gradient(135deg, #667eea, #f093fb)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Contact Information
              </Typography>
              <Typography
                variant="body2"
                className={`animate-left ${visible ? "visible" : ""}`}
                style={{ transitionDelay: "0.1s" }}
                sx={{
                  color: "rgba(255,255,255,0.45)",
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                I'm always open to discussing new opportunities, interesting
                projects, or creative ideas. Feel free to reach out!
              </Typography>

              
              {contactInfo.map((info, index) => (
                <ContactCard
                  key={index}
                  {...info}
                  delay={`${0.15 + index * 0.1}s`}
                  visible={visible}
                />
              ))}

              
              <Box
                className={`animate-left ${visible ? "visible" : ""}`}
                style={{ transitionDelay: "0.5s" }}
                sx={{ mt: 3 }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    fontWeight: 700,
                    display: "block",
                    mb: 1.5,
                  }}
                >
                  Connect With Me
                </Typography>
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  {socialLinks.map((s, i) => (
                    <IconButton
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      sx={{
                        width: 46,
                        height: 46,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.6)",
                        borderRadius: "14px",
                        transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        "&:hover": {
                          background: s.color,
                          borderColor: s.color,
                          color: "#fff",
                          transform: "translateY(-5px) scale(1.1)",
                          boxShadow: `0 10px 25px ${s.shadow}`,
                        },
                      }}
                    >
                      {s.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              className={`animate-right ${visible ? "visible" : ""}`}
              style={{ transitionDelay: "0.1s" }}
              sx={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                p: { xs: 3, md: 4.5 },
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background:
                    "linear-gradient(90deg, #667eea, #f093fb, #00d4ff)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 4s linear infinite",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  mb: 0.8,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Send a Message
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.35)", mb: 3.5 }}
              >
                Fill out the form below and I'll get back to you as soon as
                possible.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      sx={textFieldSx("name")}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Your Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      sx={textFieldSx("email")}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  name="subject"
                  label="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  sx={textFieldSx("subject")}
                />

                <TextField
                  fullWidth
                  name="message"
                  label="Your Message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  sx={textFieldSx("message")}
                />

                
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  disabled={isSubmitting}
                  className="neon-btn"
                  startIcon={
                    isSubmitting ? null : submitStatus === "success" ? (
                      <CheckIcon />
                    ) : submitStatus === "error" ? (
                      <ErrorIcon />
                    ) : (
                      <SendIcon
                        sx={{
                          transition: "transform 0.3s ease",
                          ".MuiButton-root:hover &": {
                            transform: "translateX(4px) rotate(-30deg)",
                          },
                        }}
                      />
                    )
                  }
                  sx={{
                    py: 1.8,
                    borderRadius: "14px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    background:
                      submitStatus === "success"
                        ? "linear-gradient(135deg, #00b09b, #00d4ff)"
                        : submitStatus === "error"
                        ? "linear-gradient(135deg, #f44336, #ff6b6b)"
                        : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    boxShadow:
                      submitStatus === "success"
                        ? "0 0 25px rgba(0,212,255,0.4)"
                        : "0 0 25px rgba(102,126,234,0.4)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 15px 35px rgba(102,126,234,0.55)",
                    },
                    "&:disabled": {
                      background: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.4)",
                    },
                  }}
                >
                  {isSubmitting
                    ? "Opening Email Client..."
                    : submitStatus === "success"
                    ? "Email Client Opened! ✓"
                    : submitStatus === "error"
                    ? "Error — Try Again"
                    : "Send Message"}
                </Button>

                
                {submitStatus === "success" && (
                  <Box
                    sx={{
                      mt: 2.5,
                      p: 2,
                      borderRadius: "12px",
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      animation: "slide-in-bottom 0.4s ease",
                    }}
                  >
                    <CheckIcon sx={{ color: "#00d4ff", fontSize: 20 }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      Your email client should have opened. Please send the
                      email from there!
                    </Typography>
                  </Box>
                )}
                {submitStatus === "error" && (
                  <Box
                    sx={{
                      mt: 2.5,
                      p: 2,
                      borderRadius: "12px",
                      background: "rgba(244,67,54,0.08)",
                      border: "1px solid rgba(244,67,54,0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      animation: "slide-in-bottom 0.4s ease",
                    }}
                  >
                    <ErrorIcon sx={{ color: "#f44336", fontSize: 20 }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      Something went wrong. Please email me directly at{" "}
                      <Box
                        component="a"
                        href="mailto:cheedellajahnavi@gmail.com"
                        sx={{ color: "#667eea", textDecoration: "none" }}
                      >
                        cheedellajahnavi@gmail.com
                      </Box>
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
