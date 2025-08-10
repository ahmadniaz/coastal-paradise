'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookingWidget from '@/components/booking/BookingWidget';
import { propertyData } from '@/lib/constants/propertyData';

const steps = ['Select Dates', 'Guest Information', 'Review & Confirm'];

export default function BookingPage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          pt: 12,
          pb: 6,
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
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
              }}
            >
              Book Your Stay
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontFamily: 'var(--font-dancing)',
                fontWeight: 400,
                opacity: 0.9,
              }}
            >
              Reserve Your Perfect Coastal Getaway
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Booking Content */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Booking Form */}
          <Grid item xs={12} lg={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  p: 4,
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                {/* Stepper */}
                <Box sx={{ mb: 4 }}>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel
                          sx={{
                            '& .MuiStepLabel-label': {
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 500,
                            },
                          }}
                        >
                          {label}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>

                {/* Step Content */}
                <Box sx={{ mt: 4 }}>
                  {activeStep === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: 'var(--font-playfair)',
                          fontWeight: 700,
                          mb: 3,
                          color: 'primary.main',
                        }}
                      >
                        Select Your Dates
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: 'var(--font-poppins)',
                          mb: 4,
                          color: 'text.secondary',
                        }}
                      >
                        Choose your check-in and check-out dates for your perfect stay at Coastal Paradise.
                      </Typography>
                      
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Check-in Date"
                            type="date"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-poppins)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Check-out Date"
                            type="date"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-poppins)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Number of Guests"
                            type="number"
                            variant="outlined"
                            inputProps={{ min: 1, max: propertyData.maxGuests }}
                            helperText={`Maximum ${propertyData.maxGuests} guests allowed`}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-poppins)',
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                    </motion.div>
                  )}

                  {activeStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: 'var(--font-playfair)',
                          fontWeight: 700,
                          mb: 3,
                          color: 'primary.main',
                        }}
                      >
                        Guest Information
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: 'var(--font-poppins)',
                          mb: 4,
                          color: 'text.secondary',
                        }}
                      >
                        Please provide your contact information for booking confirmation.
                      </Typography>
                      
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-poppins)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-poppins)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-poppins)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Phone"
                            variant="outlined"
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-poppins)',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Special Requests"
                            multiline
                            rows={3}
                            variant="outlined"
                            placeholder="Any special requests or requirements for your stay..."
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                fontFamily: 'var(--font-poppins)',
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: 'var(--font-playfair)',
                          fontWeight: 700,
                          mb: 3,
                          color: 'primary.main',
                        }}
                      >
                        Review & Confirm
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: 'var(--font-poppins)',
                          mb: 4,
                          color: 'text.secondary',
                        }}
                      >
                        Please review your booking details before confirming your reservation.
                      </Typography>
                      
                      <Card
                        sx={{
                          p: 3,
                          backgroundColor: 'background.default',
                          border: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: 'var(--font-poppins)',
                            fontWeight: 600,
                            mb: 2,
                            color: 'primary.main',
                          }}
                        >
                          Booking Summary
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontFamily: 'var(--font-poppins)',
                                color: 'text.secondary',
                              }}
                            >
                              Check-in:
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontFamily: 'var(--font-poppins)',
                                fontWeight: 500,
                              }}
                            >
                              March 15, 2024
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontFamily: 'var(--font-poppins)',
                                color: 'text.secondary',
                              }}
                            >
                              Check-out:
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontFamily: 'var(--font-poppins)',
                                fontWeight: 500,
                              }}
                            >
                              March 20, 2024
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontFamily: 'var(--font-poppins)',
                                color: 'text.secondary',
                              }}
                            >
                              Guests:
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontFamily: 'var(--font-poppins)',
                                fontWeight: 500,
                              }}
                            >
                              4 guests
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontFamily: 'var(--font-poppins)',
                                color: 'text.secondary',
                              }}
                            >
                              Total:
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontFamily: 'var(--font-playfair)',
                                fontWeight: 700,
                                color: 'primary.main',
                              }}
                            >
                              $1,250
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 500,
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        backgroundColor: 'secondary.main',
                        color: 'white',
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'secondary.dark',
                        },
                      }}
                    >
                      {activeStep === steps.length - 1 ? 'Confirm Booking' : 'Next'}
                    </Button>
                  </Box>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Booking Widget Sidebar */}
          <Grid item xs={12} lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BookingWidget />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
