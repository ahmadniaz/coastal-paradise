'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import {
  Bed,
  Bathtub,
  Group,
  SquareFoot,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { propertyData } from '@/lib/constants/propertyData';
import { propertyImages } from '@/lib/utils/propertyImages';

export default function PropertyDetails() {
  const theme = useTheme();

  const propertyStats = [
    {
      icon: Bed,
      label: 'Bedrooms',
      value: propertyData.bedrooms,
    },
    {
      icon: Bathtub,
      label: 'Bathrooms',
      value: propertyData.bathrooms,
    },
    {
      icon: Group,
      label: 'Max Guests',
      value: propertyData.maxGuests,
    },
    {
      icon: SquareFoot,
      label: 'Size',
      value: propertyData.size,
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('${propertyImages.living[0]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Grid container spacing={6} sx={{ width: '100%' }}>
          {/* Left Content - Description */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  mb: 3,
                  color: 'primary.main',
                }}
              >
                Welcome to Coastal Paradise
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'var(--font-dancing)',
                  fontWeight: 400,
                  mb: 4,
                  color: 'secondary.main',
                }}
              >
                Where Luxury Meets Tropical Tranquility
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                  color: 'text.secondary',
                }}
              >
                {propertyData.description.long}
              </Typography>

              {/* Property Stats */}
              <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 0,
                  flexWrap: 'nowrap',
                  overflowX: 'auto',
                  '&::-webkit-scrollbar': {
                    height: 4,
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: '#f1f1f1',
                    borderRadius: 2,
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'primary.main',
                    borderRadius: 2,
                  },
                }}>
                  {propertyStats.map((stat, index) => (
                    <React.Fragment key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card
                          sx={{
                            textAlign: 'center',
                            p: 4,
                            backgroundColor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            minWidth: '200px',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <stat.icon
                            sx={{
                              fontSize: '3.5rem',
                              color: 'primary.main',
                              mb: 2,
                            }}
                          />
                          <Typography
                            variant="h3"
                            sx={{
                              fontFamily: 'var(--font-playfair)',
                              fontWeight: 700,
                              color: 'primary.main',
                              mb: 1,
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 500,
                              color: 'text.secondary',
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Card>
                      </motion.div>
                      {index < propertyStats.length - 1 && (
                        <Box
                          sx={{
                            width: '2px',
                            height: '60px',
                            backgroundColor: 'divider',
                            mx: 2,
                            borderRadius: 1,
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
            </motion.div>
              {/* Price Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    mt: 4,
                    p: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: 'var(--font-playfair)',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    ${propertyData.price.base}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 500,
                      mb: 2,
                      opacity: 0.9,
                    }}
                  >
                    per night
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'var(--font-poppins)',
                      opacity: 0.8,
                    }}
                  >
                    Flexible cancellation • No booking fees
                  </Typography>
                </Card>
              </motion.div>
          </Grid>

          {/* Right Content - Features */}
          <Grid size={{ xs: 12, lg: 6 }}>
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
                  mb: 4,
                  color: 'primary.main',
                }}
              >
                What Makes Us Special
              </Typography>

              <Grid container spacing={4} justifyContent="center" sx={{ width: '100%' }}>
                {propertyData.description.features.map((feature, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        sx={{
                          p: 4,
                          height: '100%',
                          backgroundColor: 'background.paper',
                          border: '1px solid',
                          borderColor: 'divider',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                            borderColor: 'primary.main',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <CardContent sx={{ p: 0 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 600,
                              mb: 2,
                              color: 'primary.main',
                            }}
                          >
                            {feature}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              color: 'text.secondary',
                              lineHeight: 1.6,
                            }}
                          >
                            Experience the perfect blend of comfort and luxury with our carefully curated amenities and thoughtful design.
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

            
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
