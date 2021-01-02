import express from 'express';
import morgan from 'morgan';
import router from './routes/index';
import path from 'path';
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/api', router);

// Folder de almacenado de img públicas
// Detecta el inicio del proyecto
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;