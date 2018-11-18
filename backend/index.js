const express = require('express')
const app = express()
const port = 3000

TAFFY = require( 'taffy' ).taffy;
const csvFilePath='../nations-states.csv';
const csv=require('csvtojson');
const jsonArray=await csv().fromFile(csvFilePath);

var db = TAFFY(jsonArray);

app.get('/getdata', getdata)

app.use(express.static('public'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function getdata (req, res) {
	let myid = req.query.stateid
	nations = db().filter({'State':myid}).stringify()
	res.send(nations)
	
}