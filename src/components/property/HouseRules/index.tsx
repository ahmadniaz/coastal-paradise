'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from '@mui/material';
import {
  CheckCircle,
  Schedule,
  People,
  Pets,
  SmokingRooms,
  Event,
  CameraAlt,
  CleaningServices,
  Power,
  Lock,
  Home,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { propertyData } from '@/lib/constants/propertyData';
import { propertyImages } from '@/lib/utils/propertyImages';

export default function HouseRules() {
  const theme = useTheme();

  const ruleSections = [
    {
      title: "General",
      icon: Home,
      rules: propertyData.houseRules.general,
      color: theme.palette.primary.main,
    },
    {
      title: "Checking In & Out",
      icon: Schedule,
      rules: propertyData.houseRules.checkInOut,
      color: theme.palette.secondary.main,
    },
    {
      title: "During Your Stay",
      icon: People,
      rules: propertyData.houseRules.duringStay,
      color: theme.palette.primary.light,
    },
    {
      title: "Before You Leave",
      icon: CleaningServices,
      rules: propertyData.houseRules.beforeLeave,
      color: theme.palette.secondary.light,
    },
  ];

  const getRuleIcon = (rule: string) => {
    if (rule.includes('pets')) return Pets;
    if (rule.includes('smoking')) return SmokingRooms;
    if (rule.includes('parties') || rule.includes('events')) return Event;
    if (rule.includes('photography')) return CameraAlt;
    if (rule.includes('turn things off')) return Power;
    if (rule.includes('lock')) return Lock;
    return CheckCircle;
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
          background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('${propertyImages.additional[0]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        },
      }}
    >
              <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, pt: 4 }}>
 

          <Grid container spacing={4} justifyContent="center">
          {ruleSections.map((section, sectionIndex) => (
            <Grid item xs={12} sm={6} lg={3} key={sectionIndex}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
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
                      borderColor: section.color,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: `${section.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <section.icon
                          sx={{
                            fontSize: '1.5rem',
                            color: section.color,
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: 'var(--font-playfair)',
                          fontWeight: 700,
                          color: 'primary.main',
                        }}
                      >
                        {section.title}
                      </Typography>
                    </Box>

                    <List sx={{ p: 0 }}>
                      {section.rules.map((rule, ruleIndex) => {
                        const RuleIcon = getRuleIcon(rule);
                        return (
                          <React.Fragment key={ruleIndex}>
                            <ListItem sx={{ px: 0, py: 1 }}>
                              <ListItemIcon sx={{ minWidth: 40 }}>
                                <RuleIcon
                                  sx={{
                                    color: section.color,
                                    fontSize: '1.2rem',
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={rule}
                                sx={{
                                  '& .MuiListItemText-primary': {
                                    fontFamily: 'var(--font-poppins)',
                                    fontWeight: 500,
                                    color: 'text.primary',
                                    fontSize: '1rem',
                                    lineHeight: 1.5,
                                  },
                                }}
                              />
                            </ListItem>
                            {ruleIndex < section.rules.length - 1 && (
                              <Divider sx={{ my: 1 }} />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 6,
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
              Guest Favorite
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '1.1rem',
                opacity: 0.9,
                maxWidth: '800px',
                mx: 'auto',
                mb: 3,
              }}
            >
              This home is in the top 5% of eligible listings based on ratings, reviews, and reliability.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 600,
                opacity: 0.9,
              }}
            >
              Single level home • No stairs in home
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
