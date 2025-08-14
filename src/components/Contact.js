import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Option 1: Using mailto (opens default email client)
      const mailtoLink = `mailto:cheedellajahnavi@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoLink);
      
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: "Email",
      value: "cheedellajahnavi@gmail.com",
      link: "mailto:cheedellajahnavi@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      title: "Phone",
      value: "+91 7981064354",
      link: "tel:+917981064354",
    },
    {
      icon: <LocationIcon />,
      title: "Location",
      value: "Hyderabad, Telangana, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jahnavi-cheedella-299510264/",
      color: "#0077B5",
    },
    {
      icon: <GitHubIcon />,
      name: "GitHub",
      url: "https://github.com/JahnaviCheedella",
      color: "#333",
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #1a1a2e 0%, #0f0f23 100%)",
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
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              mb: 4,
            }}
          >
            Let's work together
          </Typography>
        </Box>

        <Grid container spacing={4}>
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
                Contact Information
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                I'm always open to discussing new opportunities, interesting
                projects, or creative ideas. Feel free to reach out!
              </Typography>

              <Box sx={{ mb: 4 }}>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      p: 2,
                      borderRadius: 2,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateX(5px)",
                        borderColor: "primary.main",
                        background: "rgba(102, 126, 234, 0.1)",
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        mr: 2,
                      }}
                    >
                      {info.icon}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          mb: 0.5,
                        }}
                      >
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <Typography
                          component="a"
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "text.secondary",
                            textDecoration: "none",
                            "&:hover": {
                              color: "primary.main",
                            },
                          }}
                        >
                          {info.value}
                        </Typography>
                      ) : (
                        <Typography
                          sx={{
                            color: "text.secondary",
                          }}
                        >
                          {info.value}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                  mb: 2,
                  textAlign: {xs: "center", md: "left" },
                }}
              >
                Follow Me
              </Typography>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: { xs: "center", md: "flex-start" } }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
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
                        background: social.color,
                        transform: "translateY(-3px)",
                        boxShadow: `0 10px 20px ${social.color}40`,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: "primary.main",
                  }}
                >
                  Send Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    name="email"
                    label="Your Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    name="message"
                    label="Your Message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 20px rgba(102, 126, 234, 0.3)",
                      },
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "success.main",
                        mt: 2,
                        textAlign: "center",
                      }}
                    >
                      Email client opened! Please send the email manually.
                    </Typography>
                  )}
                  
                  {submitStatus === 'error' && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "error.main",
                        mt: 2,
                        textAlign: "center",
                      }}
                    >
                      Error occurred. Please try again.
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
