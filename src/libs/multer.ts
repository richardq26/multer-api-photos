import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
// Método de multer para decirle dónde almacenará las imágenes
const storage = multer.diskStorage({
    // Por defecto tiene la carpeta raiz
    destination: 'uploads',
    // cb viene de callback
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

// multer del nombre de este archivo multer.ts
export default multer({ storage });