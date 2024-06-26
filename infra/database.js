import { Client } from 'pg'


async function query(query) {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD
    });
    await client.connect()

    const res = await client.query(query)
    client.end();
    return res;
}

export default {
    query: query
}