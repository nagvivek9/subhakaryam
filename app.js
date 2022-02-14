const express = require('express')
const app = express()
const port = 3000

app.get('/abc', (req, res) => {
  res.send('Hello World!')
})
console.log(__dirname);
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Shubhakaryam app listening on port ${port}`)
})