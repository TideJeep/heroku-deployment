import { join } from "path"; //concatenate strings to filepath
import * as express from "express";

const clientPath = join(__dirname, "../client"); //where the files are

const app = express(); //create an app

app.use(express.static(clientPath)); //create static server, where are the files?

console.log(process.env.GREETING); //look for variable called GREETING in this environment

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
});
