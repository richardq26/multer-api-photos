import { Request, Response } from 'express';
// Photo es el nombre que le puse al modelo
import Photo from '../models/Photo';
import path from 'path';
import fs from 'fs-extra';

// Obtener todas las fotos
export async function getPhotos(req: Request, res: Response) {
    const photos = await Photo.find((err, photos) => {
        if (err) {
            res.json({ msg: "Error" });
        }
        if (photos[0] == null) {
            res.json({ msg: "No hay categorias" });
        } else {
            res.json(photos);
        }
    });
}

// Obtener una foto buscando por id
export async function getPhoto(req: Request, res: Response) {
    await Photo.findById(req.params.id, (err, foto) => {
        if (err) {
            res.status(500).json({ ok: false, err });
        }
        if (!foto) {
            res.status(400).json({ ok: false, msg: 'No existe una foto con ese id' });
        }
        else {
            res.status(200).json({ ok: true, foto });
        }
    });
}

// Almacenar una nueva foto
export async function createPhoto(req: Request, res: Response) {
    const { title, description } = req.body;
    console.log(req.file);
    let newPhoto = new Photo({
        title,
        description,
        imagePath: req.file.path
    });
    console.log(newPhoto);
    await newPhoto.save((err, nuevafoto) => {
        if (err) {
            return res.status(500).json({ ok: false, err });
        }
        if (!nuevafoto) {
            return res.status(400).json({ ok: false, err, msg: 'Error al guardar' });
        }
        res.status(200).json({ ok: true, msg: 'Foto guardada', nuevafoto });
    });

}

// Eliminar una fotos
export async function deletePhoto(req: Request, res: Response) {
    await Photo.findByIdAndRemove(req.params.id, async (err, eliminada) => {
        if (err) {
            res.status(500).json({ ok: false, err });
        }
        if (!eliminada) {
            res.status(400).json({ ok: false, msg: 'No existe una foto con ese id' });
        }
        else {
            await fs.unlink(path.resolve(eliminada.imagePath));
            res.status(200).json({ ok: true, "foto eliminada": eliminada });
        }
    })
}

// Actualizar una foto
export async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const foto_nueva= await Photo.findByIdAndUpdate(req.params.id,
        { title: req.body.title, description: req.body.description },
        (err, actu) => {
            if (err) {
                res.status(500).json({ ok: false, err });
            }
            if (!actu) {
                res.status(400).json({ ok: false, msg: 'No existe una foto con ese id' });
            }
        });
        if(foto_nueva){
            return res.json({ ok: true,msg:'Foto actualizada', 'Foto nueva: ': foto_nueva});
        }else{
            return res.json({ok: false, msg: 'No se pudo actualizar la foto'});
        }
}