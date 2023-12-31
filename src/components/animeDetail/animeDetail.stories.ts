import type { Meta, StoryObj } from '@storybook/react';
import { AnimeDetail } from './animeDetail';


const meta = {
   title: 'Anime/Detail',
   component: AnimeDetail,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
} satisfies Meta<typeof AnimeDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseDetail: Story = {
   args: {
      isDetailOpen: true,
      anime: {
         "uuid": "aHR0cHM6Ly9vdGFrdWRlc3UuY2FtL2VwaXNvZGUvdGV5dXNoYS1zMy1lcGlzb2RlLTEyLXN1Yi1pbmRvLw==",
         "rating": 10,
         "category": "Anime, Romance, Action",
         "description": "Pariatur iste aperiam iure magnam et sequi ducimus. Atque dolor fuga deleniti fugit dolorum voluptatem optio sit atque. Rerum asperiores qui quo dolorem accusantium distinctio. Quibusdam ab quae dolorum nobis doloribus quidem dolor et quia. Voluptatem ut quia. Tenetur et sit expedita voluptatem neque amet quaerat sit suscipit. Et repellat dolorum quam voluptas. Rerum est esse rem eum et. Sed quasi voluptates velit odit autem at. Quis ab sequi odit. Reiciendis in maxime repellendus ullam suscipit qui aut nihil inventore. Ut natus nihil molestiae reiciendis laudantium dolorem deleniti. Dolorem tempora quia.",
         "name": "Tate no Yuusha no Nariagari Season 3 Episode 12 Subtitle Indonesia – [Samehadaku]",
         "thumbnail": "https://i0.wp.com/otakudesu.cam/wp-content/uploads/2023/10/Tate-no-Yuusha-no-Nariagari-Season-3.jpg",
         "stream_link": "https://desustream.me/beta/stream2/?id=ZGYyVDd6bkh0L290MHhMY3BFY0l5R3JTTmZpMXpJdDBWZGtpek5zOGZQYz0=",
         "download_720p": "https://noreferrer.net/?https://desudrive.com/link/?id=eXRoOHNYVG9UdnVINWpYWTJuNXdCcjZmTHJ1Ym1aNjlreTVmZWJQaTJXQUlubUxubEZNSnZrdFpDOWp4dDR5OXZwSmtneEtuRm9UWlZib1R3aE5NV0JaenhvZWFPYXZCbktoZTZFWjljcndPS2xuNw==",
         "download_1080p": "https://noreferrer.net/?https://desudrive.com/link/?id=eXRoOHNYVG9UdnVINWpYWTJuNXdCcjZmTHJ1Ym1aNjUyM3BjWkwvaW1Uc0N5RGpubEZNSnZrdFpDOWp4dDR5OXZwSmtneEtuRm9UWlZib1R3aE5NV0JaenhvZWFPYXU3eGU0ZjloTTlOcndMTlVLNUwyV29wQT09",
      }
   },
};


