const express = require("express"),
	engine = require("ejs-locals");
const MongoClient = require("mongodb").MongoClient;
var router = express.Router();
const bodyParser = require("body-parser");

const app = express();

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
	"mongodb+srv://shihab:MzRNL5mhEyCdP9vU@cluster0.sj6mv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{ useUnifiedTopology: true }
)
	.then((client) => {
		console.log("Connected to Database");
		const db = client.db("express-tutorial");
	})
	.catch((error) => console.error(error));

const userController = require("./controllers/userController");

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

app.get("/", userController.index);

app.post("/", userController.store);
