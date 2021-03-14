const express = require('express')
const app = express()
const port = 6969

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/codeAnalysis', (req, res) => {
    res.send('async security started')
})

app.get('/regressionTests', (req, res) => {
    res.send('async regression started')
})

app.get('/containerRegistry', (req, res) => {
    res.send('Uploaded container image to the private registry')
})

app.get('/containerAnalysis', (req, res) => {
    res.send('async security container started')
})

app.get('/codeCoverage', (req, res) => {
    res.send('>90% coverage achieved')
})

app.get('/containerDeployer', (req, res) => {
    res.send('Deployed successfuly')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})