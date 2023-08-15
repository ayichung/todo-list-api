import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 8080;

// dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import local modules
import router from './routes/index.js';

// response chain
app.get('/favicon.ico', (req, res) => res.status(204));
app.use('/', router);
app.use(function(req, res, next) {
    next(createError(404));
});
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, function () {
    console.log(`server is listening on port ${port}.`)
});