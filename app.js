const express = require('express')
const app = express()
const port = 3000;
const path=require('path');

app.get('/abc', (req, res) => {
  res.send('Hello World!')
})
app.use(express.static(path.join(__dirname,'dist')));
console.log(path.join(__dirname,'dist'));
app.listen(process.env.PORT || port, () => {
  console.log(`Shubhakaryam app listening on port ${port}`)
})