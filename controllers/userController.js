exports.index = ((req, res) => {
	res.render("index", { title: "Home" });
})

exports.store = ((req, res) => {
	console.log(req.body);
});