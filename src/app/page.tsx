import { AnimeBanner } from '@/components/animeCard/animeBanner'
import { AnimeCardList } from '@/components/animeCard/animeCardList'
import { AnimeDTO } from '@/types/Anime'
import { AnimeImpl } from '@/use-cases/anime/animeImpl'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'


async function getData(): Promise<AnimeDTO[]> {
   const animeUseCase = new AnimeImpl()
   const anime = await animeUseCase.getAnimes()
   return anime
}

export default async function Page() {
   const animes = await getData()

   const highRatedAnimes = animes.filter(anime => anime.rating > 8);
   
   return (
      <main className="flex min-h-screen flex-col py-10 pl-10">
         <Box display={"flex"} height={'25rem'} justifyContent={'space-between'} className='pl-10'>
            <Box mt={-3} maxWidth={'50%'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Typography variant='h1' fontSize={'3rem'} fontWeight={'bold'} color={'#1F3570'}>
               Stream, Snack, Laugh – No Pants Required! 🚀🍕
            </Typography>
            <Typography mt={2} variant='h2' fontSize={'1.3rem'} fontWeight={'light'} color={'#1F3570'}>
               Who needs adulting when you have anime?<br></br>Our streaming is so swift it beats your weekend plans, and downloads are ninja-level quick. 🌟
            </Typography>
            </Box>
            
            <AnimeBanner></AnimeBanner>
         </Box>
         {highRatedAnimes.length == 0? null
         :<AnimeCardList collectionTitle='Highest Rating' animes={highRatedAnimes} ratio='horizontal' ></AnimeCardList>}
         <AnimeCardList collectionTitle='Newly Added' animes={animes} ratio='vertical' ></AnimeCardList>
      </main>
   )
}