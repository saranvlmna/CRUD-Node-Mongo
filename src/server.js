const { app } = require('./app');
const { config } = require('./config');
const port = config.get('app.port');
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})