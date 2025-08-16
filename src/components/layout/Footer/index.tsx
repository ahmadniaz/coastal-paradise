'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Footer() {

  const footerSections = [
    {
      title: 'Property',
      links: [
        { label: 'Overview', href: '/' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Amenities', href: '/amenities' },
        { label: 'Location', href: '/location' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'House Rules', href: '/house-rules' },
      ],
    },
    {
      title: 'Booking',
      links: [
        { label: 'Reserve Now', href: '/booking' },
        { label: 'Availability', href: '/booking' },
        { label: 'Pricing', href: '/booking' },
        { label: 'House Rules', href: '/contact' },
        { label: 'Cancellation', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/contact' },
        { label: 'Check-in Guide', href: '/contact' },
        { label: 'Local Guide', href: '/location' },
        { label: 'Emergency', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const contactInfo = [
    {
      icon: Email,
      label: 'Email',
      value: 'hello@coastalparadise.com',
      href: 'mailto:hello@coastalparadise.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (973) 747-6448',
      href: 'tel:+15551234567',
    },
    {
      icon: LocationOn,
      label: 'Location',
      value: 'Jupiter, Florida, United States',
      href: '/location',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ width: '100%' }}>
          {/* Property Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Coastal Paradise
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'var(--font-poppins)',
                  mb: 3,
                  lineHeight: 1.6,
                  opacity: 0.9,
                }}
              >
                Experience the perfect blend of modern luxury and tropical tranquility. 
                Your coastal paradise awaits in beautiful Jupiter, Florida.
              </Typography>

              {/* Contact Info */}
              <Box sx={{ mb: 3 }}>
                {contactInfo.map((contact, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1,
                    }}
                  >
                    <contact.icon
                      sx={{
                        mr: 2,
                        color: 'secondary.main',
                        fontSize: '1.2rem',
                      }}
                    />
                    <Link
                      href={contact.href}
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-poppins)',
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    >
                      {contact.value}
                    </Link>
                  </Box>
                ))}
              </Box>

              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      href={social.href}
                      sx={{
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          backgroundColor: 'secondary.main',
                          color: 'white',
                        },
                      }}
                    >
                      <social.icon />
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <Grid size={{ xs: 12, sm: 6, md: 2 }} key={sectionIndex}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 600,
                    mb: 2,
                    color: 'secondary.main',
                  }}
                >
                  {section.title}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {section.links.map((link, linkIndex) => (
                    <Box component="li" key={linkIndex} sx={{ mb: 1 }}>
                      <Link
                        href={link.href}
                        sx={{
                          color: 'white',
                          textDecoration: 'none',
                          fontFamily: 'var(--font-poppins)',
                          fontSize: '0.9rem',
                          opacity: 0.8,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: 'secondary.main',
                            opacity: 1,
                            paddingLeft: '4px',
                          },
                        }}
                      >
                        {link.label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-poppins)',
              opacity: 0.8,
            }}
          >
            © 2024 Coastal Paradise. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="/privacy"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'var(--font-poppins)',
                fontSize: '0.875rem',
                opacity: 0.8,
                '&:hover': {
                  color: 'secondary.main',
                  opacity: 1,
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'var(--font-poppins)',
                fontSize: '0.875rem',
                opacity: 0.8,
                '&:hover': {
                  color: 'secondary.main',
                  opacity: 1,
                },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
