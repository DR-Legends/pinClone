const app = require('./pin/app')
const hostName = 'localhost';
const PORT = 5000;
app.get('/', function(req, res) {
  res.send("Welcome in Pinterest Clone project")
})
app.listen(PORT, function() {
  console.log(`Server is running on ${hostName}:${PORT}`)
})