const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static(path.join(__dirname, 'views')))

app.get('/', (_, res) => {
  res.render('index', {
    timelineItems: [
      {
        year: 1969,
        text: 'ARPANET, the first major network to use packet switching, is created, forming the foundation for the modern internet.',
      },
      {
        year: 1983,
        text: 'The Domain Name System (DNS) is introduced, making the internet more accessible by allowing users to use names instead of IP addresses.',
      },
      {
        year: 1989,
        text: 'Tim Berners-Lee proposes the World Wide Web at CERN, leading to the development of the first web browser and website.',
      },
      {
        year: 1995,
        text: 'Commercial internet access becomes widespread, and the UK sees the emergence of its first ISPs, like Demon Internet.',
      },
      {
        year: 2000,
        text: 'The dot-com boom peaks, and internet usage expands rapidly in the UK, with more businesses and consumers going online.',
      },
      {
        year: 2007,
        text: 'The launch of the iPhone accelerates mobile internet usage globally, including in the UK.',
      },
      {
        year: 2010,
        text: 'The Rise of Social Networks.',
      },
      {
        year: 2020,
        text: 'The COVID-19 pandemic results in a surge of internet usage, as remote working, learning, and online services become essential.',
      },
    ],
  })
})

app.get('/api/users', (_, res) => {
  res.send('Hello World from api!')
})

app.listen(port)
