'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  IconButton,
} from '@mui/material';
import {
  FormatQuote,
  NavigateBefore,
  NavigateNext,
  CheckCircle,
  Key,
  ChatBubble,
  LocationOn,
  LocalOffer,
  CleaningServices,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { reviews, reviewStats } from '@/lib/constants/reviews';
import Link from 'next/link';

export default function ReviewsSection() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const displayedReviews = reviews.slice(0, 5);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % displayedReviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prev) => 
      prev === 0 ? displayedReviews.length - 1 : prev - 1
    );
  };

  const categoryIcons = {
    cleanliness: CleaningServices,
    accuracy: CheckCircle,
    checkIn: Key,
    communication: ChatBubble,
    location: LocationOn,
    value: LocalOffer,
  };

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: 'background.default',
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
            What Our Guests Say
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
            Exceptional Experiences, Unforgettable Memories
          </Typography>
        </motion.div>

        {/* Rating Summary Section - Matching Image 1 Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              width: '90%',
              mx: 'auto',
              mb: 6,
              backgroundColor: 'white',
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
          >
            {/* Top Section - Overall Rating */}
            <Box
              sx={{
                textAlign: 'center',
                p: 4,
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                {/* Golden Laurel Wreath Icons */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    🌿
                  </Typography>
                </Box>
                
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 700,
                    fontSize: '3rem',
                    color: 'text.primary',
                  }}
                >
                  {reviewStats.averageRating}
                </Typography>
                
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ml: 2,
                    boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    🌿
                  </Typography>
                </Box>
              </Box>
              
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 600,
                  mb: 1,
                  color: 'text.primary',
                }}
              >
                Guest favorite
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'var(--font-poppins)',
                  color: 'text.secondary',
                  maxWidth: '400px',
                  mx: 'auto',
                }}
              >
                This home is in the <strong>top 5%</strong> of eligible listings based on ratings, reviews, and reliability.
              </Typography>
            </Box>

            {/* Bottom Section - Category Ratings */}
            <Box sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                {/* Overall Rating Bar Chart */}
                <Box sx={{ flex: '1 1 300px', minWidth: '250px' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 500,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    Overall rating
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <Box
                        key={rating}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: 'var(--font-poppins)',
                            color: 'text.secondary',
                            minWidth: '20px',
                          }}
                        >
                          {rating}
                        </Typography>
                        <Box
                          sx={{
                            height: 8,
                            backgroundColor: rating === 5 ? '#333' : '#e0e0e0',
                            borderRadius: 4,
                            flex: 1,
                            maxWidth: rating === 5 ? '100%' : '20%',
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Category Ratings with Pipes */}
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
                  {Object.entries(reviewStats.categoryRatings).map(([category, rating], index) => {
                    const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
                    if (!IconComponent) return null;
                    return (
                      <React.Fragment key={category}>
                        <Box sx={{ 
                          flex: '1 1 120px', 
                          textAlign: 'center',
                          minWidth: '120px',
                          p: 2,
                        }}>
                          <IconComponent
                            sx={{
                              fontSize: '2.5rem',
                              color: 'text.primary',
                              mb: 1,
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 700,
                              color: 'text.primary',
                              mb: 1,
                            }}
                          >
                            {rating}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 500,
                              color: 'text.primary',
                              textTransform: 'capitalize',
                            }}
                          >
                            {category}
                          </Typography>
                        </Box>
                        {index < Object.entries(reviewStats.categoryRatings).length - 1 && (
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
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Reviews Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              width: '90%',
              mx: 'auto',
              mb: 4,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
              }}
            >
              {/* Navigation Buttons */}
              <IconButton
                onClick={handlePrevReview}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                }}
              >
                <NavigateBefore />
              </IconButton>

              <IconButton
                onClick={handleNextReview}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                }}
              >
                <NavigateNext />
              </IconButton>

              {/* Review Content */}
              <Box sx={{ p: 4 }}>
                <motion.div
                  key={currentReviewIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <FormatQuote
                      sx={{
                        fontSize: '3rem',
                        color: 'primary.light',
                        opacity: 0.3,
                        mb: 2,
                      }}
                    />
                    
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 600,
                        mb: 2,
                        color: 'primary.main',
                      }}
                    >
                      {displayedReviews[currentReviewIndex]?.title || ''}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'var(--font-poppins)',
                        lineHeight: 1.6,
                        mb: 3,
                        color: 'text.secondary',
                        fontStyle: 'italic',
                      }}
                    >
                      "{displayedReviews[currentReviewIndex]?.comment || ''}"
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                      <Avatar
                        sx={{
                          width: 50,
                          height: 50,
                          backgroundColor: 'primary.main',
                          fontFamily: 'var(--font-poppins)',
                          fontWeight: 600,
                        }}
                      >
                        {displayedReviews[currentReviewIndex]?.guestName?.charAt(0) || ''}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: 'var(--font-poppins)',
                            fontWeight: 600,
                            color: 'text.primary',
                          }}
                        >
                          {displayedReviews[currentReviewIndex]?.guestName || ''}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: 'var(--font-poppins)',
                            color: 'text.secondary',
                          }}
                        >
                          {displayedReviews[currentReviewIndex]?.date ? formatDate(displayedReviews[currentReviewIndex].date) : ''}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>

                {/* Review Indicators */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                  {displayedReviews.map((_, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: index === currentReviewIndex ? 'primary.main' : 'divider',
                        cursor: 'pointer',
                      }}
                      onClick={() => setCurrentReviewIndex(index)}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* View All Reviews Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              href="/reviews"
              variant="outlined"
              size="large"
              sx={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 188, 212, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View All Reviews
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
