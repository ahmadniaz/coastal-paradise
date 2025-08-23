'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Location', href: '/location' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'House Rules', href: '/house-rules' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontFamily: 'var(--font-playfair)' }}>
          Coastal Paradise
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} component={Link} href={item.href}>
            <ListItemText 
              primary={item.label} 
              sx={{ 
                '& .MuiTypography-root': { 
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 500 
                } 
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(0, 0, 0, 0.3)',
          backdropFilter: scrolled ? 'blur(10px)' : 'blur(8px)',
          boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : '0 2px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h5"
                component={Link}
                href="/"
                sx={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  color: scrolled ? 'primary.main' : 'white',
                  textDecoration: 'none',
                  textShadow: scrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.8)',
                  '&:hover': {
                    color: scrolled ? 'primary.dark' : 'primary.light',
                  },
                }}
              >
                Coastal Paradise
              </Typography>
            </motion.div>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {navItems.map((item) => (
                      <Button
                        key={item.label}
                        component={Link}
                        href={item.href}
                        sx={{
                          color: scrolled ? 'text.primary' : 'white',
                          fontFamily: 'var(--font-poppins)',
                          fontWeight: 500,
                          textShadow: scrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.8)',
                          '&:hover': {
                            color: scrolled ? 'primary.main' : 'primary.light',
                            backgroundColor: 'transparent',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Box>
                </motion.div>


              </Box>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: scrolled ? 'text.primary' : 'white',
                  textShadow: scrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.8)',
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 250,
              backgroundColor: 'background.paper',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar /> {/* Spacer for fixed AppBar */}
    </>
  );
}
