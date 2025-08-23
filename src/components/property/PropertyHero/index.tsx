'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion, useScroll, useTransform } from 'framer-motion';
import { KeyboardArrowDown } from '@mui/icons-material';
import { propertyData } from '@/lib/constants/propertyData';
import { propertyImages } from '@/lib/utils/propertyImages';

export default function PropertyHero() {
  const theme = useTheme();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          y,
          opacity,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'primary.main',
            background: `linear-gradient(135deg, 
              rgba(0, 0, 0, 0.4) 0%, 
              rgba(0, 0, 0, 0.2) 50%, 
              rgba(0, 0, 0, 0.4) 100%
            ), 
            url('${propertyImages.exterior[1]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundAttachment: { xs: 'scroll', md: 'fixed' },
            backgroundRepeat: 'no-repeat',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)',
            },
          }}
        />
      </motion.div>

      {/* Content */}
      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '80vh', width: '100%' }}>
          {/* Centered Content */}
          <Grid size={{ xs: 12, md: 10, lg: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                align="center"
                sx={{
                  color: 'white',
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '5rem' },
                  lineHeight: 1.1,
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                {propertyData.name}
              </Typography>

              <Typography
                variant="h4"
                align="center"
                sx={{
                  color: 'white',
                  fontFamily: 'var(--font-dancing)',
                  fontWeight: 400,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  mb: 3,
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                }}
              >
                Where Luxury Meets Paradise
              </Typography>

              <Typography
                variant="h6"
                align="center"
                sx={{
                  color: 'white',
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 400,
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  mb: 4,
                  maxWidth: { xs: '100%', md: '500px', lg: '600px' },
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                  lineHeight: 1.6,
                  mx: 'auto',
                }}
              >
                {propertyData.description.short}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    href="/contact"
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      borderRadius: 3,
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 30px rgba(255, 152, 0, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Contact Us
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    href="/gallery"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 500,
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      borderRadius: 3,
                      '&:hover': {
                        borderColor: 'primary.light',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    View Gallery
                  </Button>
                </motion.div>
              </Box>

              {/* Property Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 2, sm: 3, md: 4 },
                    mt: 6,
                    flexWrap: 'wrap',
                    maxWidth: { xs: '100%', md: '500px', lg: '600px' },
                    justifyContent: 'center',
                    mx: 'auto',
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: 'white',
                          fontFamily: 'var(--font-playfair)',
                          fontWeight: 700,
                          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                          mr: 1,
                        }}
                      >
                        {propertyData.rating}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {[...Array(5)].map((_, index) => (
                          <Box
                            key={index}
                            component="span"
                            sx={{
                              color: index < Math.floor(propertyData.rating) ? '#FFD700' : 'rgba(255, 255, 255, 0.3)',
                              fontSize: '1.5rem',
                              lineHeight: 1,
                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                              filter: index < Math.floor(propertyData.rating) ? 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.3))' : 'none',
                            }}
                          >
                            ★
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 500,
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                        fontSize: '0.875rem',
                      }}
                    >
                      {propertyData.reviewCount} reviews
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {propertyData.bedrooms}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        fontFamily: 'var(--font-poppins)',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      Bedrooms
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {propertyData.bathrooms}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        fontFamily: 'var(--font-poppins)',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      Bathrooms
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      ${propertyData.price.base}+
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        fontFamily: 'var(--font-poppins)',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      per night for whole house
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <KeyboardArrowDown
            sx={{
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))',
            }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              });
            }}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
}
