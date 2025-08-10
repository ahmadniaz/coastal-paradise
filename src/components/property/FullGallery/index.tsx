'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Close,
  NavigateBefore,
  NavigateNext,
  ZoomIn,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
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
      id={`gallery-tabpanel-${index}`}
      aria-labelledby={`gallery-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const galleryCategories = [
  { id: 'exterior', name: 'Exterior', images: propertyImages.exterior },
  { id: 'living', name: 'Living Room', images: propertyImages.living },
  { id: 'kitchen', name: 'Kitchen', images: propertyImages.kitchen },
  { id: 'bedroom', name: 'Bedrooms', images: [...propertyImages.bedroom.master, ...propertyImages.bedroom.second, ...propertyImages.bedroom.third] },
  { id: 'bathroom', name: 'Bathrooms', images: propertyImages.bathroom },
  { id: 'dining', name: 'Dining Area', images: propertyImages.dining },
  { id: 'outdoor', name: 'Outdoor', images: propertyImages.outdoor },
  { id: 'additional', name: 'Additional', images: propertyImages.additional },
];

export default function FullGallery() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedCategory(newValue);
  };

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const currentImages = galleryCategories[selectedCategory].images;
    const nextIndex = (currentImageIndex + 1) % currentImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(currentImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentImages = galleryCategories[selectedCategory].images;
    const prevIndex = currentImageIndex === 0 ? currentImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(currentImages[prevIndex]);
  };

  const getImagesByCategory = (categoryId: string) => {
    const category = galleryCategories.find(cat => cat.id === categoryId);
    return category ? category.images : [];
  };

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
          background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('${propertyImages.living[1]}')`,
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
            Property Gallery
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
            Explore Every Corner of Coastal Paradise
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
            {galleryCategories.map((category, index) => (
              <Tab
                key={category.id}
                label={category.name}
                id={`gallery-tab-${index}`}
                aria-controls={`gallery-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>

        {/* Gallery Content */}
        {galleryCategories.map((category, index) => (
          <TabPanel key={category.id} value={selectedCategory} index={index}>
            <Grid container spacing={3}>
              {getImagesByCategory(category.id).map((image, imageIndex) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={imageIndex}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: imageIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: '280px',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                          '& .MuiCardMedia-root': {
                            transform: 'scale(1.05)',
                          },
                          '& .zoom-overlay': {
                            opacity: 1,
                          },
                        },
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => handleImageClick(image, imageIndex)}
                    >
                      <Box sx={{ position: 'relative', height: '100%' }}>
                        <CardMedia
                          component="img"
                          image={image}
                          alt={`${category.name} ${imageIndex + 1}`}
                          sx={{
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                        />
                        <Box
                          className="zoom-overlay"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                          }}
                        >
                          <ZoomIn sx={{ color: 'white', fontSize: '2rem' }} />
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        ))}

        {/* Image Dialog */}
        <Dialog
          open={!!selectedImage}
          onClose={handleCloseDialog}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
        >
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            <IconButton
              onClick={handleCloseDialog}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                zIndex: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <Close />
            </IconButton>

            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <NavigateBefore />
            </IconButton>

            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <NavigateNext />
            </IconButton>

            <AnimatePresence mode="wait">
              {selectedImage && (
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt="Property"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '80vh',
                    objectFit: 'contain',
                    borderRadius: 8,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 3,
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
                mb: 2,
              }}
            >
              Ready to Experience It Yourself?
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
              Book your stay at Coastal Paradise and experience the luxury and comfort 
              you've seen in these images. Your perfect coastal getaway awaits.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
