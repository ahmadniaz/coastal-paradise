import React from 'react';
import { Box } from '@mui/material';
import Header from '@/components/layout/Header';
import PropertyHero from '@/components/property/PropertyHero';
import Footer from '@/components/layout/Footer';
import PropertyDetails from '@/components/property/PropertyDetails';
import PropertyGallery from '@/components/property/PropertyGallery';
import AmenitiesSection from '@/components/property/AmenitiesSection';
import ReviewsSection from '@/components/property/ReviewsSection';

export default function HomePage() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <PropertyHero />
      
      {/* Property Details Section */}
      <PropertyDetails />
      
      {/* Property Gallery Section */}
      <PropertyGallery />
      
      {/* Amenities Section */}
      <Box id="amenities">
        <AmenitiesSection />
      </Box>
      
      {/* Reviews Section */}
      <ReviewsSection />
      
      <Footer />
    </Box>
  );
}
