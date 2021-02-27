import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {getShops} from "./routes/shops.js";
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options('http://localhost:9000/*', cors());

app.route('/')
    .get(
        (
            _,
            res
        ) => res.send('Hello there!')
    );

app.route('/shops').get(getShops);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
