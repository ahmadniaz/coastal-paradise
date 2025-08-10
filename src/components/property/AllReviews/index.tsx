'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Button,
  useTheme,
  Chip,
} from '@mui/material';
import {
  FormatQuote,
  CheckCircle,
  Key,
  ChatBubble,
  LocationOn,
  LocalOffer,
  CleaningServices,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { reviews, reviewStats } from '@/lib/constants/reviews';

export default function AllReviews() {
  const theme = useTheme();
  const [showAllReviews, setShowAllReviews] = useState(false);

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 12);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
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

        {/* Rating Summary Section */}
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

        {/* Reviews Grid */}
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {displayedReviews.map((review, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={review.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
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
                  <CardContent sx={{ p: 3 }}>
                    {/* Quote Icon */}
                    <Box sx={{ mb: 2 }}>
                      <FormatQuote
                        sx={{
                          fontSize: '2rem',
                          color: 'primary.light',
                          opacity: 0.5,
                        }}
                      />
                    </Box>

                    {/* Rating */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Rating
                        value={review.rating}
                        readOnly
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: 'secondary.main',
                          },
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          ml: 1,
                          fontFamily: 'var(--font-poppins)',
                          color: 'text.secondary',
                        }}
                      >
                        {review.rating}.0
                      </Typography>
                    </Box>

                    {/* Review Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 600,
                        mb: 2,
                        color: 'primary.main',
                      }}
                    >
                      {review.title}
                    </Typography>

                    {/* Review Comment */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'var(--font-poppins)',
                        lineHeight: 1.6,
                        mb: 3,
                        color: 'text.secondary',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {review.comment}
                    </Typography>

                    {/* Guest Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            mr: 2,
                            backgroundColor: 'primary.main',
                            fontFamily: 'var(--font-poppins)',
                            fontWeight: 600,
                          }}
                        >
                          {review.guestName.charAt(0)}
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
                            {review.guestName}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              fontFamily: 'var(--font-poppins)',
                              color: 'text.secondary',
                            }}
                          >
                            {formatDate(review.date)}
                            {review.location && ` • ${review.location}`}
                          </Typography>
                          {review.tripType && (
                            <Typography
                              variant="caption"
                              sx={{
                                fontFamily: 'var(--font-poppins)',
                                color: 'text.secondary',
                                display: 'block',
                              }}
                            >
                              {review.tripType}
                            </Typography>
                          )}
                        </Box>
                      </Box>

                      <Chip
                        label={`${review.helpful || 0} helpful`}
                        size="small"
                        sx={{
                          fontFamily: 'var(--font-poppins)',
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>

                    {/* Host Response */}
                    {review.hostResponse && (
                      <Box
                        sx={{
                          mt: 3,
                          p: 2,
                          backgroundColor: 'primary.light',
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'primary.main',
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: 'var(--font-poppins)',
                            fontWeight: 600,
                            color: 'primary.main',
                            mb: 1,
                          }}
                        >
                          Response from Nikki O'Neill
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: 'var(--font-poppins)',
                            color: 'text.secondary',
                            fontStyle: 'italic',
                          }}
                        >
                          "{review.hostResponse}"
                        </Typography>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Show More/Less Button */}
        {reviews.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => setShowAllReviews(!showAllReviews)}
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
                {showAllReviews ? 'Show Less' : `Show All ${reviews.length} Reviews`}
              </Button>
            </Box>
          </motion.div>
        )}

        {/* Summary Section */}
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
              Join Our Happy Guests
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '1.1rem',
                opacity: 0.9,
                maxWidth: '600px',
                mx: 'auto',
                mb: 3,
              }}
            >
              Experience the magic of Coastal Paradise and create your own unforgettable memories. 
              Book your stay today and become part of our story.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="/booking"
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                fontFamily: 'var(--font-poppins)',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(255, 152, 0, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Book Your Stay
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
