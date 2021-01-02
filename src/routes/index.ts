import { Router } from 'express';
import multer from '../libs/multer';
const router = Router();

import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from '../controllers/photo.controller';
// El single es porque subiremos uno por uno
// Image es para decir que el campo se llamará image
router.route('/photos').post(multer.single('image'), createPhoto).get(getPhotos);

router.route('/photos/:id').get(getPhoto).delete(deletePhoto).put(updatePhoto);

export default router;