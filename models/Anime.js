
/**
 * @swagger
 *  components:
 *      schemas:
 *          Anime:
 *              type: object
 *              properties:
 *                  anime_id:
 *                      type: integer
 *                      format: uuid
 *                      example: 16498
 *                      description: Anime's unique identifier
 *                  title:
 *                      type: string
 *                      example: Shingeki no Kyojin
 *                      description: Title of the anime
 *                  image_url:
 *                      type: string
 *                      format: url
 *                      example: https://myanimelist.net/anime/16498/Shingeki_no_Kyojin
 *                      description: Link to the anime page in MyAnimeList.net
 *                  type:
 *                      type: string
 *                      example: TV
 *                      description: Can be TV, OVA, Special, etc.
 *                  source:
 *                      type: string
 *                      example: Manga
 *                      description: Source of the anime (Manga, Light novel, etc.)
 *                  episodes:
 *                      type: integer
 *                      example: 25
 *                      description: Number of episodes
 *                  status:
 *                      type: string
 *                      example: Finished Airing
 *                      description: Finished Airing, Currently Airing, etc.
 *                  airing:
 *                      type: boolean
 *                      example: False
 *                      description: True if currently airing, False if finished.
 *                  aired:
 *                      type: object
 *                      properties:
 *                          from:
 *                              type: string
 *                              format: date
 *                              example: 2013-04-07
 *                          to:
 *                              type: string
 *                              format: date
 *                              example: 2013-09-29
 *                      description: Date that the anime started airing and finished airing
 *                  score:
 *                      type: number
 *                      format: float
 *                      example: 8.45
 *                      description: The score of the anime in MyAnimeList.net
 *                  rank:
 *                      type: integer
 *                      example: 125
 *                      description: The rank of the anime in MyAnimeList.net
 *                  popularity:
 *                      type: integer
 *                      example: 2
 *                      description: The popularity of the anime in MyAnimeList.net
 *                  studio:
 *                      type: string
 *                      example: Wit Studio
 *                      description: The studio that developed the anime
 *                  genre:
 *                      type: array
 *                      items:
 *                          type: string
 *                      example: [Action, Military, Mystery, Super Power, Drama, Fantasy, Shounen]
 *                      description: List of the anime's genres
 */                 
class Anime {

    constructor(anime_id, title, image_url, type, source, episodes, status, airing, aired, score, rank, popularity, studio, genre) {
        this.anime_id = anime_id;
        this.title = title;
        this.image_url = image_url;
        this.type = type;
        this.source = source;
        this.episodes = episodes;
        this.status = status;
        this.airing = airing;
        this.aired = aired;
        this.score = score;
        this.rank = rank;
        this.popularity = popularity;
        this.studio = studio;
        this.genre = genre;
    }

}