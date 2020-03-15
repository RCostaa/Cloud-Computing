const express = require('express');
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const fs = require('fs');
const csv  = require('csv');


const port = process.env.PORT || 8000;

// Extended https://swager.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "MyAnimeList API",
            description: "MyAnimeList FCUL Cloud Computing API",
            contact: {
                name: "Grupo 5",
            },
            servers: ["http://localhost:8000"]
        }
    },
    apis: ["./models/Anime.js", "./models/UserAnimes.js", "index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


// Routes
/**
 * 
 * @swagger
 * /:
 *  get:
 *      summary: Get the top ranked and popular animes
 *      parameters:
 *        - in: query
 *          name: genre
 *          schema:
 *              type: string
 *          description: Filter results by the provided genre
 *        - in: query
 *          name: year
 *          schema:
 *              type: string
 *          description: Filter results by year
 *        - in: query
 *          name: studio
 *          schema:
 *              type: string
 *          description: Filter resutls by studio
 *      responses:
 *          '200':
 *              description: Successful operation
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Anime' 
 *          '400':
 *              description: Error
 */
app.get("/", (req, res) => {
    //Serviço nº2
    res.status(200).send("Top ranked and popular animes");
});


/**
 * @swagger
 * /anime:
 *  get:
 *      summary: Get list of animes that match the filters provided.
 *      parameters:
 *        - in: query
 *          name: anime_id
 *          schema:
 *              type: integer
 *              format: uuid
 *          description: Filter by anime's unique identifier.
 *        - in: query
 *          name: status
 *          schema:
 *              type: string
 *          description: Filter by anime's status (Finished Airing, Currently Airing).
 *        - in: query
 *          name: studio
 *          schema:
 *              type: string
 *          description: Filter by anime's studio
 *        - in: query
 *          name: maxResults
 *          schema:
 *              type: integer
 *          description: Maximum number of animes retrieved. 
 *      responses:
 *          '200':
 *              description: Successful operation
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Anime' 
 *          '400':
 *              description: Error
 */
app.get("/anime", (req, res) => {
    //Serviço nº1
    res.status(200).send("List of animes that match the filters");
});


app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});