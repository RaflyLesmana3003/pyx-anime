import { AnimeMap } from "@/mapper/animeMap";
import { AnimeDTO } from "@/types/Anime";

interface anime {
   getAnimes(): Promise<AnimeDTO[]>;
}

export class AnimeRepo implements anime {
   getAnimes(): Promise<AnimeDTO[]> {
      return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/ongoing/animes`, { next: { revalidate: 3600 } })
         .then((response) => response.json())
         .then((body) => {
            return new AnimeMap().mapToAnimeDAO(body.data)
         })
         .catch((error) => {
            return []
         });
      }
}