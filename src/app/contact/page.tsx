'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  TextField,
  Button,
  useTheme,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
  Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (973) 747-6448',
    description: 'Call us for immediate assistance',
    href: 'tel:+19737476448',
  },
  {
    icon: LocationOn,
    title: 'Address',
    value: '324 Tequesta Dr, Jupiter, FL 33469, USA',
    description: 'Our beautiful coastal location',
    href: '/location',
  },
  {
    icon: AccessTime,
    title: 'Response Time',
    value: 'Less than 24 hours',
    description: 'We typically respond quickly',
  },
];

export default function ContactPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error'
      });
      return;
    }

    try {
      // Create email body
      const emailBody = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
      `;

      // Open default email client with pre-filled data
      const mailtoLink = `mailto:nfahimi@yahoo.com?subject=${encodeURIComponent(formData.subject || 'Contact from Coastal Paradise Website')}&body=${encodeURIComponent(emailBody)}`;
      
      window.open(mailtoLink, '_blank');
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Email client opened successfully! Please send the email.',
        severity: 'success'
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to open email client. Please try again.',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          pt: 12,
          pb: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          },
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              align="center"
              sx={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 700,
                mb: 2,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontFamily: 'var(--font-dancing)',
                fontWeight: 400,
                opacity: 0.9,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              We're Here to Help Make Your Stay Perfect
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Content */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8 }}>
          {/* Contact Form - Left Column */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 6,
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 4,
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: '4px 4px 0 0',
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 700,
                    mb: 1,
                    color: 'primary.main',
                    textAlign: 'center',
                  }}
                >
                  Send us a Message
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    mb: 4,
                    color: 'text.secondary',
                    textAlign: 'center',
                  }}
                >
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                  {/* Row 1: First Name and Last Name */}
                  <Box sx={{ display: 'flex', gap: 3, mb: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <TextField
                      fullWidth
                      label="First Name *"
                      variant="outlined"
                      value={formData.firstName}
                      onChange={handleInputChange('firstName')}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&.Mui-focused': {
                            color: 'primary.main',
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Last Name *"
                      variant="outlined"
                      value={formData.lastName}
                      onChange={handleInputChange('lastName')}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&.Mui-focused': {
                            color: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Row 2: Email and Phone */}
                  <Box sx={{ display: 'flex', gap: 3, mb: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <TextField
                      fullWidth
                      label="Email *"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&.Mui-focused': {
                            color: 'primary.main',
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Phone"
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&.Mui-focused': {
                            color: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Row 3: Subject */}
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      value={formData.subject}
                      onChange={handleInputChange('subject')}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&.Mui-focused': {
                            color: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Row 4: Message - Full Width and Bigger */}
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      label="Message *"
                      multiline
                      rows={8}
                      variant="outlined"
                      value={formData.message}
                      onChange={handleInputChange('message')}
                      required
                      placeholder="Tell us about your inquiry, questions, or special requests..."
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          fontFamily: 'var(--font-poppins)',
                          '&.Mui-focused': {
                            color: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Submit Button */}
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    type="submit"
                    startIcon={<Send />}
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 600,
                      py: 2,
                      fontSize: '1.1rem',
                      borderRadius: 2,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 30px rgba(255, 152, 0, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Box>

          {/* Contact Information - Right Column */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  mb: 3,
                  color: 'primary.main',
                }}
              >
                Get in Touch
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 5,
                  color: 'text.secondary',
                }}
              >
                Have questions about your upcoming stay? Need recommendations for local attractions? 
                We're here to help ensure your Coastal Paradise experience is everything you dreamed of.
              </Typography>

              {/* Contact Info Cards */}
              <Box sx={{ mb: 5 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        p: 3,
                        mb: 3,
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 3,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                          borderColor: 'primary.main',
                        },
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          backgroundColor: 'primary.main',
                          transform: 'scaleY(0)',
                          transition: 'transform 0.3s ease',
                        },
                        '&:hover::before': {
                          transform: 'scaleY(1)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            backgroundColor: 'primary.light',
                            color: 'primary.main',
                            mr: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: 48,
                            height: 48,
                          }}
                        >
                          <info.icon sx={{ fontSize: '1.5rem' }} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 600,
                              color: 'primary.main',
                              mb: 0.5,
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              color: 'text.secondary',
                              mb: 1,
                            }}
                          >
                            {info.description}
                          </Typography>
                          <Typography
                            variant="body1"
                            component={info.href ? 'a' : 'div'}
                            href={info.href}
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 500,
                              color: info.href ? 'primary.main' : 'text.primary',
                              textDecoration: info.href ? 'none' : 'inherit',
                              '&:hover': {
                                color: info.href ? 'primary.dark' : 'inherit',
                              },
                              transition: 'color 0.2s ease',
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                ))}
              </Box>

              
            </motion.div>
          </Box>
        </Box>
      </Container>

      <Footer />
      
      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
