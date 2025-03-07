import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import axios from 'axios';
import client from 'prom-client';

const app = express();
app.use(morgan('dev'))
app.use(helmet())
const PORT = 8000;

//These are for configurations of Prometheus metric to monitor server details.
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const requestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

app.use((req, res, next) => {
  res.on('finish', () => {
    requestCounter.inc({
      method: req.method,
      route: req.path,
      status: res.statusCode,
    });
  });
  next();
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.get('/server-alive', (req, res) => {
  res.send('server is alive');
});

const selfCheckServer = () => {
  axios
    .get(`http://localhost:${PORT}/server-alive`)
    .then((response) => {
      console.log(`Self-check success: ${response.data}`);
    })
    .catch((error) => {
      console.error(`Self-check failed: ${error.message}`);
    });
};

setInterval(selfCheckServer, 10000);
app.listen(PORT , () => console.log(`app is listening to the ${PORT}`))


