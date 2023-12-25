"use client"
import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { AnimeDTO } from '@/types/Anime';


export const AnimeBanner = () => {

   const style = {
      backgroundImage: `url(${'/images/banner.png'})`,
      backgroundSize: 'cover',
      position: 'relative',
      zIndex: -1,
      top: -228,
      right: 65,
   };
   
   return (
      <Box height={'798px'} width={'1075px'} sx={style}> </Box>
   )
}