import { MongoClient } from 'mongodb';

const url = "mongodb+srv://xuanthuc:SUmMrzsM9sBgNmcY@cluster0.tywbwc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected successfully to the database");
    } catch (err) {
        console.error("Connection failed:", err);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
