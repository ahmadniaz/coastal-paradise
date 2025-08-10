'use client';

import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HouseRules from '@/components/property/HouseRules';

export default function HouseRulesPage() {
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
              House Rules
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
              Please treat our home with care and respect
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* House Rules Section */}
      <HouseRules />

      <Footer />
    </Box>
  );
}
