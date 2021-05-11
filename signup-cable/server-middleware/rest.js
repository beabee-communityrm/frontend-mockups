import express from 'express'
const app = express()

var request = require('request')

app.get('/send', async (req, res) => {
  var options = {
      uri: 'https://ptsv2.com/t/xyxzu-1620661181/post',
      body: JSON.stringify({'name': 'Zequinha', 'model': 'VW Beetle'}),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
  }
  request(options, function (error, response) {
    res.status(200).json({ 'response': response.body })
  })
})

export default {
    path: '/api',
    handler: app
}
