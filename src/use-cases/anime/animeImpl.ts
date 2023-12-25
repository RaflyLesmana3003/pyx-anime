import { AnimeRepo } from "@/repositories/AnimeRepo";
import { AnimeDTO } from "@/types/Anime";
interface anime {
   getAnimes(): Promise<AnimeDTO[]>;
}

export class AnimeImpl implements anime {
   async getAnimes():Promise<AnimeDTO[]> {
   try {
      const animeRepo = new AnimeRepo();
      const getList = await animeRepo.getAnimes()
      return getList
   } catch (error) {
      return[]
   }
   }
}