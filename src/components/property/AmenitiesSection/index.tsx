'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Tabs,
  Tab,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { amenities, amenityCategories } from '@/lib/constants/amenities';
import { propertyImages } from '@/lib/utils/propertyImages';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`amenities-tabpanel-${index}`}
      aria-labelledby={`amenities-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function AmenitiesSection() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedCategory(newValue);
  };

  const getAmenitiesByCategory = (categoryId: string) => {
    return amenities.filter(amenity => amenity.category === categoryId);
  };

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
          background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${propertyImages.kitchen[0]}')`,
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
            Everything You Need
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
            Premium Amenities for Your Perfect Stay
          </Typography>
        </motion.div>

        {/* Category Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontFamily: 'var(--font-poppins)',
                fontWeight: 500,
                fontSize: '1rem',
                textTransform: 'none',
                minWidth: 'auto',
                px: 3,
                py: 2,
              },
            }}
          >
            {amenityCategories.map((category, index) => (
              <Tab
                key={category.id}
                label={category.name}
                id={`amenities-tab-${index}`}
                aria-controls={`amenities-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>

        {/* Amenities Content */}
        {amenityCategories.map((category, index) => (
          <TabPanel key={category.id} value={selectedCategory} index={index}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Grid container spacing={3} sx={{ maxWidth: '1200px', width: '100%' }}>
                {getAmenitiesByCategory(category.id).map((amenity, amenityIndex) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={amenity.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: amenityIndex * 0.1 }}
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
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              backgroundColor: 'primary.light',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 2,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: '1.2rem',
                                color: 'primary.main',
                                fontWeight: 600,
                              }}
                            >
                              {amenity.icon.charAt(0).toUpperCase()}
                            </Typography>
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 600,
                              color: 'primary.main',
                            }}
                          >
                            {amenity.name}
                          </Typography>
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
                          {amenity.description}
                        </Typography>

                        <Chip
                          label={amenity.available ? 'Available' : 'Not Available'}
                          size="small"
                          color={amenity.available ? 'success' : 'default'}
                          sx={{
                            fontFamily: 'var(--font-poppins)',
                            fontWeight: 500,
                          }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
            </Box>
          </TabPanel>
        ))}

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
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
              All Amenities Included
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
              From essential comforts to luxury touches, every amenity is carefully selected 
              to ensure your stay at Coastal Paradise is nothing short of extraordinary.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
