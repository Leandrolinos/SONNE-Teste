import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

if (!MONGODB_DB) {
    throw new Error(
        "Please define the MONGODB_DB environment variable inside .env.local"
    );
}

let cachedClient = null;
let cachedDb = null;

export default async (req, res) => {
    const { name, email, message } = req.body;

    try {
        if (!cachedClient || !cachedDb) {
            cachedClient = await MongoClient.connect(MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            cachedDb = await cachedClient.db(MONGODB_DB);
        }

        const forms = cachedDb.collection("forms");

        const result = await forms.insertOne({
            name,
            email,
            message,
            created: new Date(),
        });

        res.status(201).json({ id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: "Unable to save the form data!" });
    }
};
