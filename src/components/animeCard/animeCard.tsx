import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { AnimeDTO } from '@/types/Anime';

interface animeCardProps{
   anime : AnimeDTO,
   sx?: React.CSSProperties;
   ratio: "vertical" | "horizontal";
}

export const AnimeCard = ({
   anime,
   sx,
   ratio
}: animeCardProps) => {
   return (
      <Box sx={{
         cursor: 'pointer',
         width: ratio == "vertical"? '13rem': '18rem',
         height: ratio == "vertical"? '18rem': '13rem',
         borderRadius: 4,
         backgroundImage: `url(${anime.thumbnail})`,
         backgroundSize: 'cover',
         position: 'relative',
         boxShadow: '0px 10px 15px -3px rgba(169,180,203,1)',
         '&::before': {
            content: '""',
            position: 'absolute',
            top: '20px',
            left: 0,
            width: '94%',
            height: '98%',
            filter: 'blur(15px)',
            backgroundImage: `url(${anime.thumbnail})`,
            zIndex: -1,
            opacity: 0.5
         },
         ...sx
      }}>

         <Box display={'flex'} flexDirection={'row'} alignItems={'center'} py={'5px'} px={'8px'} sx={{backgroundColor:"rgba(16,30,79,0.5)", backdropFilter:'blur(5px)', minWidth:'10%', position: 'absolute', top: 8, right: 8, borderRadius: '13px', overflow:'hidden'}}>
            <StarRoundedIcon sx={{color: anime.rating >= 8 ? '#7BEC4D' : (anime.rating >= 7 ? '#FFD700' : '#EC694D'), fontSize:'1.1rem', marginRight:0.5}}/>
            <Typography sx={{ color: '#F3F1F3', fontWeight: 'bold', overflow: 'hidden', fontSize:'0.8rem'}}>
               {anime.rating}
            </Typography>
         </Box>

         <Box py={'5px'} px={'8px'} sx={{backgroundColor:"rgba(16,30,79,0.5)", backdropFilter:'blur(5px)', width:'100%',height:'29%', position: 'absolute', bottom: 0, borderRadius: '0px 0px 16px 16px', overflow:'hidden'}}>
            <Typography sx={{ color: '#F3F1F3', fontWeight: 'bold', overflow: 'hidden', minHeight: ratio == "vertical"? '3rem': '1rem', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2}}>
               {anime.name}
            </Typography>

            <Typography sx={{color:'#F3F1F3', fontSize:'0.8rem'}}>
               Action, Drama
            </Typography>
         </Box>

      </Box>

   )
}