import app from './app';
import { startConnection } from './database';
const puerto = app.get("port");

async function main() {
    startConnection();
    await app.listen(puerto, () => {
        console.log("Server en puerto ", puerto);
    });
}

main();