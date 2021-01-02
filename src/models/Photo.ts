import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
    title: String,
    description: String,
    imagePath: String
}, {
    timestamps: true
    // Nos da cuando fue creado y actualizado por ultima vez
});

// El Document extiende un documento de mongodb
interface IPhoto extends Document {
    title: string,
    description: string,
    imagePath: string
}

// Tiene que tener la estructura de la interfaz
export default model<IPhoto>('Photo', schema);