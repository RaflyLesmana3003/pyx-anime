"use client"
import React, { useRef, useState } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { AnimeCard } from './animeCard';
import { AnimeDTO } from '@/types/Anime';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import { theme } from '@/theme/theme';

interface animeCardListProps{
   animes : AnimeDTO[],
   ratio: "vertical" | "horizontal";
   collectionTitle: string
}

export const AnimeCardList = ({
   animes,
   ratio,
   collectionTitle
}: animeCardListProps) => {

   const elementRef = useRef(null);
   const [arrowBackDisable, setArrowBackDisable] = useState(true);

   const handleHorizantalScroll = (element: any, speed: any, distance: any, step: any) => {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
         element.scrollLeft += step;
         scrollAmount += Math.abs(step);
         if (scrollAmount >= distance) {
            clearInterval(slideTimer);
         }
         if (element.scrollLeft === 0) {
            setArrowBackDisable(true);
         } else {
            setArrowBackDisable(false);
         }
      }, speed);
   };

   return (<>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mr={10} ml={5}>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h1' fontSize={'1.4rem'} fontWeight={'bold'} color={'#1F3570'}>
               {collectionTitle}
            </Typography>
            <Box display={'flex'}>
               <Box sx={{ borderRadius:8,backgroundColor: theme.palette.primary.main, width: '5px', mr:0.5 , height:3, marginTop: '2px' }} />
               <Box sx={{ borderRadius:8,backgroundColor: theme.palette.primary.main, width: '45px', height:3, marginTop: '2px' }} />
            </Box>
         </Box>
         <Box display={'flex'} justifyContent={'end'}>
            <Box sx={{cursor:arrowBackDisable?'default':'pointer'}} bgcolor={'white'} boxShadow={'0px 10px 15px -3px rgba(169,180,203,0.3)'} p={1} borderRadius={2} mr={3}
               onClick={() => {
                  handleHorizantalScroll(elementRef.current, 25, 100, -10);
               }}>
               <NavigateBeforeRoundedIcon sx={{color:arrowBackDisable?theme.palette.grey[200]:theme.palette.primary.main}}></NavigateBeforeRoundedIcon>
            </Box>
            <Box sx={{cursor:'pointer'}} bgcolor={'white'} boxShadow={'0px 10px 15px -3px rgba(169,180,203,0.3)'} p={1} borderRadius={2}
               onClick={() => {
                  handleHorizantalScroll(elementRef.current, 25, 100, 10);
               }}>
               <NavigateNextRoundedIcon sx={{color: theme.palette.primary.main}}></NavigateNextRoundedIcon>
            </Box>
         </Box>
      </Box>
      <Box display={'flex'} sx={{ overflowX: 'auto', flexWrap: 'nowrap' }} pb={7} pt={2} pl={4} width={'100%'} ref={elementRef}>
         {animes.map((anime) => (
            <AnimeCard
               anime={anime}
               key={anime.name}
               sx={{ marginRight: 3, flex: '0 0 auto'}}
               ratio={ratio}
            />
         ))}
      </Box>
   </>
   )
}