import { connect } from 'mongoose';

export async function startConnection() {
    await connect('mongodb://localhost/photo-gallery-db', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
        .then((db) => console.log('Db conectada'))
        .catch((err) => console.log(err));

}

