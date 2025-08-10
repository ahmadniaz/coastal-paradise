'use client';

import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationSection from '@/components/property/LocationSection';

export default function LocationPage() {
  const theme = useTheme();

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
              Location & Area
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
              Discover the Beauty of Jupiter, Florida
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Location Section */}
      <LocationSection />

      <Footer />
    </Box>
  );
}
