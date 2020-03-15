/**
 * @swagger
 *  components:
 *      schemas:
 *          UserAnimes:
 *              type: object
 *              properties:
 *                  username:
 *                      type: string
 *                      example: John Doe
 *                  anime_id:
 *                      type: integer
 *                      example: 16498
 *                  my_watched_episodes:
 *                      type: integer
 *                      example: 25
 *                  my_start_date:
 *                      type: string
 *                      format: date
 *                      example: 2019-05-07
 *                  my_finish_date:
 *                      type: string
 *                      format: date
 *                      example: 2019-07-15
 *                  my_score:
 *                      type: integer
 *                      example: 9
 *                  my_status:
 *                      type: integer
 *                      example: 1
 *                  my_rewatching:
 *                      type: number
 *                      format: float
 *                      example: 0.0
 *                  my_rewatching_ep:
 *                      type: integer
 *                      example: 0
 *                  my_last_updated:
 *                      type: integer
 *                      example: 1362307973
 *                  my_tags:
 *                      type: array
 *                      items:
 *                          type: string
 *                      example: ["Touyama Nao", "Hanazawa Kana", "Asumi Kana", "Sakura Ayane"]
 */ 
class UserAnimes {
    constructor(username, anime_id, my_watched_episodes, my_start_date, my_finish_date, my_score, my_status, my_rewatching, my_rewatching_ep, my_last_updated, my_tags) {
        this.username = username;
        this.anime_id = anime_id;
        this.my_watched_episodes = my_watched_episodes;
        this.my_start_date = my_start_date;
        this.my_finish_date = my_finish_date;
        this.my_score = my_score;
        this.my_status = my_status;
        this.my_rewatching = my_rewatching;
        this.my_rewatching_ep = my_rewatching_ep;
        this.my_last_updated = my_last_updated;
        this.my_tags = my_tags;
    }
}