const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

let events = []

app.use(cors())
app.use(express.json({ limit: '50mb' }));

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/event', (req, res) => {
    const receivedEvent = req.body
    events.push(receivedEvent)
    res.send({ status: 'OK' })
})

app.get('/events', (req, res) => {
    console.log("loading event", events.length)
    res.send(events)
    events = [];
})

app.delete("/events", (req, res) => {
    console.log("clearing events")
    events = [];
    res.send({ status: 'OK' })
})

app.listen(port, () => {
    console.log(`RRplay app listening on port ${port}`)
})