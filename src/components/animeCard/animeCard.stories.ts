import type { Meta, StoryObj } from '@storybook/react';
import { AnimeCard } from './animeCard';
import Box from '@mui/material/Box';


const meta = {
   title: 'Anime/Card',
   component: AnimeCard,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
} satisfies Meta<typeof AnimeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalCard: Story = {
   args: {
      ratio: 'vertical',
      anime: {
         uuid: 'a85d66765d84af9a38ca2acdf35dfbb6ea10e56a',
         thumbnail:'https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/138948.jpg',
         name:'Kanojo mo Kanojo Season 2',
         rating: 1.2,
         category: 'Drama, Comedy',
         stream_link: 'http://google.mp4',
         download_720p: 'http://google.mp4',
         download_1080p: 'http://google.mp4'
      }
   },
};

export const HorizontalCard: Story = {
   args: {
      ratio: 'horizontal',
      anime: {
         uuid: 'a85d66765d84af9a38ca2acdf35dfbb6ea10e56a',
         thumbnail:'https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/138948.jpg',
         name:'Kanojo mo Kanojo Season 2',
         rating: 1.2,
         category: 'Drama, Comedy',
         stream_link: 'http://google.mp4',
         download_720p: 'http://google.mp4',
         download_1080p: 'http://google.mp4'
      }
   },
};


