const app = require('./src/config/config')
require('dotenv/config')

app.listen(process.env.PORT, () => {
})