import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import axios from 'axios';
const app = express();
app.use(morgan('dev'))
app.use(helmet())
const PORT = 8000;

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


