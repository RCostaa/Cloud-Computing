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
    apis: ["./models/Anime.js", "index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


// Routes
/**
 * 
 * @swagger
 * /:
 *  get:
 *      description: List Animes in the dataset
 *      responses:
 *          '200':
 *              description: List of animes
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
    const animes = [];

    res.send("Hello World!")
//    const readStream = fs.createReadStream('./dataset/anime_cleaned.csv');
//    const parser = csv.parse({columns: true});

//    parser.on('readable', () => {
//        while(record = parser.read()) {
//            console.log(record);
//            animes.push(record);
//        }
//    });

//    parser.on('error', () => {
//        res.status(400).send("An error as ocurred.");
//    });

//    parser.on('finish', () => {
//        res.status(200).json(animes);
//    });

//    readStream.pipe(parser);
});


app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});