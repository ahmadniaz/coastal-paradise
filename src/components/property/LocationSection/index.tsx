'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  BeachAccess,
  Restaurant,
  LocalActivity,
  Park,
  ShoppingCart,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const attractions = [
  {
    name: 'Jupiter Beach',
    category: 'Beach',
    distance: '10 min',
    icon: BeachAccess,
    description: 'Pristine white sand beaches with crystal clear waters',
  },
  {
    name: 'Jupiter Inlet Lighthouse',
    category: 'Landmark',
    distance: '15 min',
    icon: Park,
    description: 'Historic lighthouse with stunning ocean views',
  },
  {
    name: 'Loggerhead Marinelife Center',
    category: 'Attraction',
    distance: '12 min',
    icon: LocalActivity,
    description: 'Marine life conservation center and turtle hospital',
  },
  {
    name: 'Jupiter Pointe Marina',
    category: 'Marina',
    distance: '8 min',
    icon: BeachAccess,
    description: 'Full-service marina with boat rentals and charters',
  },
  {
    name: 'Downtown Jupiter',
    category: 'Shopping',
    distance: '5 min',
    icon: ShoppingCart,
    description: 'Charming downtown with shops, restaurants, and cafes',
  },
  {
    name: 'Guanabanas Restaurant',
    category: 'Restaurant',
    distance: '3 min',
    icon: Restaurant,
    description: 'Popular waterfront restaurant with live music',
  },
];

export default function LocationSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/property-images/exterior/exterior1.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 700,
              mb: 2,
              color: 'primary.main',
            }}
          >
            Perfect Location
          </Typography>

          <Typography
            variant="h5"
            align="center"
            sx={{
              fontFamily: 'var(--font-dancing)',
              fontWeight: 400,
              mb: 6,
              color: 'secondary.main',
            }}
          >
            Discover the Beauty of Jupiter, Florida
          </Typography>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: '90%',
                maxWidth: '1200px',
                mb: 6,
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1173.1341672191659!2d-80.09298074854655!3d26.95810169995403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88df29d16a62f771%3A0xaa6b884d1463065e!2s324%20Tequesta%20Dr%2C%20Jupiter%2C%20FL%2033469%2C%20USA!5e0!3m2!1sen!2s!4v1754827768557!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coastal Paradise Location"
              />
            </Box>
          </Box>
        </motion.div>

        {/* Nearby Attractions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 700,
              mb: 6,
              color: 'primary.main',
            }}
          >
            Nearby Attractions
          </Typography>

          <Grid container spacing={3}>
            {attractions.map((attraction, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'background.default',
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
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <attraction.icon
                          sx={{
                            fontSize: '2rem',
                            color: 'primary.main',
                            mr: 2,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 600,
                              color: 'primary.main',
                            }}
                          >
                            {attraction.name}
                          </Typography>
                          <Chip
                            label={attraction.distance}
                            size="small"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 500,
                              backgroundColor: 'secondary.light',
                              color: 'secondary.dark',
                            }}
                          />
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--font-poppins)',
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          mb: 2,
                        }}
                      >
                        {attraction.description}
                      </Typography>

                      <Chip
                        label={attraction.category}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontFamily: 'var(--font-poppins)',
                          fontWeight: 500,
                          borderColor: 'primary.main',
                          color: 'primary.main',
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Ready to Explore Jupiter?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '1.1rem',
                opacity: 0.9,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Book your stay at Coastal Paradise and discover all that Jupiter, Florida has to offer. 
              From pristine beaches to charming downtown, your perfect coastal adventure awaits.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
