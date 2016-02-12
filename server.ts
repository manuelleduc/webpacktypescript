import * as express from "express"

const app = express();

/*app.get("/", (req, res) => {
    res.send("hello World static string");
});*/

app.use(express.static("public"))

app.listen(3000, (error) => {
    if(error) {
        console.error(error);
    } else {
        console.log("Listening on port 3000");
    }
});