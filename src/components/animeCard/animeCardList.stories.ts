import type { Meta, StoryObj } from '@storybook/react';
import { AnimeCard } from './animeCard';
import Box from '@mui/material/Box';
import { AnimeCardList } from './animeCardList';


const meta = {
   title: 'Anime/CardList',
   component: AnimeCardList,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
} satisfies Meta<typeof AnimeCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const verticalCardList: Story = {
   args: {
      collectionTitle: "Populer",
      ratio: "vertical",
      animes: [
         {
            uuid: "6523aa6f5aa85b9b7318d581ede6e06140cb4575",
            thumbnail:"https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/138948.jpg",
            name: "My Hero Academia Season 1",
            rating: 8.5,
            category: 'Action, Adventure, Superhero',
            stream_link: 'http://google.mp4',
            download_720p: 'http://google.mp4',
            download_1080p: 'http://google.mp4'
         },
         {
            uuid: "567e2ab02ef6e6473d3c195ba21d98f0bac4b3d1",
            thumbnail:"https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/Kanojo-mo-Kanojo-Season-2.jpg",
            name: "Kanojo mo Kanojo",
            rating: 7.2,
            category: 'Romance, Comedy',
            stream_link: 'http://google.mp4',
            download_720p: 'http://google.mp4',
            download_1080p: 'http://google.mp4'
         },
         {
            uuid: "9e184340cce63b410f42d28ecf02212be4c7fb82",
            thumbnail:"https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/Goblin-Slayer-Season-2-Subtitle-Indonesia.jpg",
            name: "Goblin Slayer Season 5",
            rating: 8.0,
            category: 'Action, Fantasy',
            stream_link: 'http://google.mp4',
            download_720p: 'http://google.mp4',
            download_1080p: 'http://google.mp4'
         },
         {
            uuid: "93376cc7903ee38a49107d49cd579c5280512015",
            thumbnail:"https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/138410.jpg",
            name: "Demon Slayer",
            rating: 9.0,
            category: 'Action, Adventure, Supernatural',
            stream_link: 'http://google.mp4',
            download_720p: 'http://google.mp4',
            download_1080p: 'http://google.mp4'
         }
      ]
   },
};


export const HorizontalCardList: Story = {
   args: {
      collectionTitle: "Populer",
      ratio: "horizontal",
      animes: [
         {
            uuid: "6523aa6f5aa85b9b7318d581ede6e06140cb4575",
            thumbnail:"https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/138948.jpg",
            name: "My Hero Academia Season 1",
            rating: 8.5,
            category: 'Action, Adventure, Superhero',
            stream_link: 'http://google.mp4',
            download_720p: 'http://google.mp4',
            download_1080p: 'http://google.mp4'
         },
         {
            uuid: "567e2ab02ef6e6473d3c195ba21d98f0bac4b3d1",
            thumbnail:"https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/Kanojo-mo-Kanojo-Season-2.jpg",
            name: "Kanojo mo Kanojo",
            rating: 7.2,
            category: 'Romance, Comedy',
            stream_link: 'http://google.mp4',
            download_720p: 'http://google.mp4',
            download_1080p: 'http://google.mp4'
         },
         {
            uuid: "9e184340cce63b410f42d28ecf02212be4c7fb82",
            thumbnail:"https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/Goblin-Slayer-Season-2-Subtitle-Indonesia.jpg",
            name: "Goblin Slayer Season 5",
            rating: 8.0,
            category: 'Action, Fantasy',
            stream_link: 'http://google.mp4',
            download_720p: 'http://google.mp4',
            download_1080p: 'http://google.mp4'
         },
         {
            uuid: "93376cc7903ee38a49107d49cd579c5280512015",
            thumbnail:"https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/138410.jpg",
            name: "Demon Slayer",
            rating: 9.0,
            category: 'Action, Adventure, Supernatural',
            stream_link: 'http://google.mp4',
            download_720p: 'http://google.mp4',
            download_1080p: 'http://google.mp4'
         }
      ]
   },
};


