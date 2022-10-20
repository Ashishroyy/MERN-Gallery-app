import  express from 'express';
import connectToMongo from './config/db.js';
import cors from 'cors';
import router from './routes/gallery.js';

const app = express();
const port = 5000;

// api routes
app.use(cors());
app.use(express.json());
app.use('/api', router)
app.use(express.static('public/upload'))
connectToMongo();
app.listen(port, () => {console.log(` listening on port http://localhost:${port}`);
})