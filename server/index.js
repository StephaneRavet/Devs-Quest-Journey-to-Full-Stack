import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//import assetsRouter from "./assets-router.js"
import database from "./database.js"
// routes
import routesCharacter from "./routes/character.routes.js"

database.sync().then(() => { console.log(`Tables created!`); });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT ?? 3000
const app = express();

app.use("/", express.static(path.join(__dirname, "public")));
app.use('/', (req) => {
  console.log(req.method, req.path)
})
//app.use("/src", assetsRouter);

// routes
app.use('/api/characters', routesCharacter)

app.listen(PORT, () => console.log("Backend started at http://localhost:" + PORT));