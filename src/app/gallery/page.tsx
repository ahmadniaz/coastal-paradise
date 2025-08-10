'use client';

import React from 'react';
import { Box } from '@mui/material';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FullGallery from '@/components/property/FullGallery';

export default function GalleryPage() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <FullGallery />
      <Footer />
    </Box>
  );
}
