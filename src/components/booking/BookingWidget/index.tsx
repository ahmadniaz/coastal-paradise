'use client';

import React, { useState } from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  CalendarToday,
  Person,
  Add,
  Remove,
  DateRange,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useBookingStore } from '@/lib/stores/bookingStore';
import { propertyData } from '@/lib/constants/propertyData';

export default function BookingWidget() {
  const {
    checkIn,
    checkOut,
    guests,
    setCheckIn,
    setCheckOut,
    setGuests,
  } = useBookingStore();

  const handleDateSelect = (type: 'checkIn' | 'checkOut') => {
    // In a real app, this would open a date picker
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (type === 'checkIn') {
      setCheckIn(today);
    } else {
      setCheckOut(tomorrow);
    }
  };

  const handleGuestChange = (increment: boolean) => {
    const newCount = increment ? guests + 1 : guests - 1;
    if (newCount >= 1 && newCount <= propertyData.maxGuests) {
      setGuests(newCount);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return 'Select date';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const nights = checkIn && checkOut
    ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 2.5,
          borderRadius: 3,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 700,
            mb: 1,
            color: 'primary.main',
          }}
        >
          Book Your Stay
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            mb: 3,
            color: 'text.secondary',
          }}
        >
          ${propertyData.price.base} per night
        </Typography>

        {/* Check-in Date */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 500,
              mb: 1,
              color: 'text.primary',
            }}
          >
            Check-in
          </Typography>
          <TextField
            fullWidth
            placeholder="Select check-in date"
            value={formatDate(checkIn)}
            onClick={() => handleDateSelect('checkIn')}
            InputProps={{
              readOnly: true,
              startAdornment: <CalendarToday sx={{ mr: 1, color: 'primary.main' }} />,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: 'background.paper',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              },
            }}
          />
        </Box>

        {/* Check-out Date */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 500,
              mb: 1,
              color: 'text.primary',
            }}
          >
            Check-out
          </Typography>
          <TextField
            fullWidth
            placeholder="Select check-out date"
            value={formatDate(checkOut)}
            onClick={() => handleDateSelect('checkOut')}
            InputProps={{
              readOnly: true,
              startAdornment: <DateRange sx={{ mr: 1, color: 'primary.main' }} />,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: 'background.paper',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              },
            }}
          />
        </Box>

        {/* Guests */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 500,
              mb: 1,
              color: 'text.primary',
            }}
          >
            Guests
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              borderRadius: 2,
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Person sx={{ mr: 1, color: 'primary.main' }} />
              <Typography
                sx={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 500,
                }}
              >
                {guests} {guests === 1 ? 'guest' : 'guests'}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                size="small"
                onClick={() => handleGuestChange(false)}
                disabled={guests <= 1}
                sx={{
                  color: guests <= 1 ? 'text.disabled' : 'primary.main',
                }}
              >
                <Remove />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => handleGuestChange(true)}
                disabled={guests >= propertyData.maxGuests}
                sx={{
                  color: guests >= propertyData.maxGuests ? 'text.disabled' : 'primary.main',
                }}
              >
                <Add />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Price Summary */}
        {nights > 0 && (
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 500,
                }}
              >
                ${propertyData.price.base} × {nights} nights
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 600,
                }}
              >
                ${propertyData.price.base * nights}
              </Typography>
            </Box>
            {guests > 4 && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 500,
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                  }}
                >
                  Guest fee ({guests} guests)
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 600,
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                  }}
                >
                  +${Math.round(propertyData.price.base * nights * 0.2)}
                </Typography>
              </Box>
            )}
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                }}
              >
                Total
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  color: 'primary.main',
                }}
              >
                ${totalPrice}
              </Typography>
            </Box>
          </Box>
        )}

        {/* Book Button */}
        <Button
          fullWidth
          variant="contained"
          size="large"
          disabled={!checkIn || !checkOut}
          href="/booking"
          sx={{
            backgroundColor: 'secondary.main',
            color: 'white',
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            py: 1.5,
            borderRadius: 2,
            fontSize: '1.1rem',
            '&:hover': {
              backgroundColor: 'secondary.dark',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(255, 152, 0, 0.3)',
            },
            '&:disabled': {
              backgroundColor: 'action.disabledBackground',
              color: 'action.disabled',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {checkIn && checkOut ? 'Reserve Now' : 'Select Dates'}
        </Button>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            textAlign: 'center',
            mt: 2,
            color: 'text.secondary',
            fontFamily: 'var(--font-poppins)',
          }}
        >
          You won't be charged yet
        </Typography>
      </Paper>
    </motion.div>
  );
}
