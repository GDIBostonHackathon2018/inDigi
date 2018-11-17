const express = require('express')
const app = express()
const port = 3000

app.get('/getdata', getdata)

app.use(express.static('public'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function getdata (req, res) {
	let myid = req.query.stateid
	res.send({'hello': myid})
}