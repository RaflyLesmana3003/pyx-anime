import { AnimeDAO, AnimeDTO } from "@/types/Anime";


export class AnimeMap {
   mapToAnimeDAO(rawBody: any): AnimeDAO[] {
      return rawBody.map((item: any) => {
         return {
            uuid: item.uuid,
            name: item.name,
            rating: item.rating,
            category: item.category,
            thumbnail: item.image,
            stream_link: item.stream_link,
            download_720p: item.download_720p,
            download_1080p: item.download_1080p,
         } as AnimeDAO;
      })
   }

   mapToAnimeDTO(rawBody: AnimeDAO[]): AnimeDTO[] {
      return rawBody.map((item: any) => {
         return {
            uuid: item.uuid,
            name: item.name,
            rating: item.rating,
            category: item.category,
            thumbnail: item.thumbnail,
            stream_link: item.stream_link,
            download_720p: item.download_720p,
            download_1080p: item.download_1080p,
         } as AnimeDTO;
      })
   }
}
