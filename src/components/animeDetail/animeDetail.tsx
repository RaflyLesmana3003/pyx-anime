import React, { useState } from 'react';
import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, Typography, styled } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { AnimeDTO } from '@/types/Anime';
import { AnimeCard } from '../animeCard/animeCard';
import Iframe from 'react-iframe';
import Link from 'next/link';

interface animeDetailProps {
   isDetailOpen: boolean
   anime: AnimeDTO
   onCloseModal: () => void
}

export const AnimeDetail = ({
   isDetailOpen = false,
   anime,
   onCloseModal
}: animeDetailProps) => {
   return (
      <Dialog
         open={isDetailOpen}
         onClose={onCloseModal}
         sx={{
            borderRadius: 4,
         }}
         fullWidth
         maxWidth="lg"
      >
         <DialogContent>
            <Iframe url={anime.stream_link}
               width="100%"
               height="350px"
               styles={{
                  border: 'none',
                  borderRadius: 1,
               }}
               display="block" />

            <Box display={'flex'} p={2} pb={0}>
               <Box sx={{
                  marginRight: 2,
               }}>
                  <Box sx={{
                     width: '170px',
                     height: '15rem',
                     borderRadius: 1,
                     backgroundImage: `url(${anime.thumbnail})`,
                     backgroundSize: 'cover',
                     position: 'relative',
                     top: -50,
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
                     }
                  }}></Box>

                  <Link href={anime.download_1080p} target='_blank'><Button variant='contained' sx={{
                     position: 'relative',
                     top: -50,
                     mt: 2,
                     boxShadow: 0,
                     fontWeight: 'bold',
                     color: '#1F3570'
                  }} fullWidth>Download 1080p</Button></Link>

                  <Link href={anime.download_720p} target='_blank'><Button variant='outlined' sx={{
                     position: 'relative',
                     top: -50,
                     mt: 2,
                     boxShadow: 0,
                     fontWeight: 'bold'
                  }} fullWidth>Download 780p</Button></Link>
               </Box>

               <Box display={'flex'} flexDirection={'column'}>
                  <Typography sx={{ color: '#1F3570', fontWeight: 'bold', overflow: 'hidden', fontSize: '1.5rem' }}>
                     {anime.name}
                  </Typography>
                  <Box display={'flex'} flexDirection={"row"} alignItems={"center"} mt={2}>
                     <Box display={'flex'} flexDirection={'row'} alignItems={'center'} mr={2} py={'5px'} px={'8px'} sx={{ backgroundColor: "rgba(16,30,79,0.5)", backdropFilter: 'blur(5px)', maxWidth: '20%', borderRadius: '13px', overflow: 'hidden' }}>
                        <StarRoundedIcon sx={{ color: anime.rating >= 8 ? '#7BEC4D' : (anime.rating >= 7 ? '#FFD700' : '#EC694D'), fontSize: '1.1rem', marginRight: 0.5 }} />
                        <Typography sx={{ color: '#F3F1F3', fontWeight: 'bold', overflow: 'hidden', fontSize: '0.8rem' }}>
                           Rating {anime.rating}
                        </Typography>
                     </Box>
                     <Typography sx={{ color: '#1F3570', fontSize: '1rem' }}>
                        {anime.category}
                     </Typography>
                  </Box>
                  <Divider sx={{ mt: 2 }}></Divider>
                  <Typography sx={{ color: '#1F3570', fontSize: '1rem' }} mt={2}>
                     {anime.description}
                  </Typography>
               </Box>
            </Box>
         </DialogContent>
      </Dialog>
   )
}