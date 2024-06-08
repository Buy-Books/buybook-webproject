const express = require("express")
const app = express()
const port = process.env.PORT || 5001
const cors = require("cors")

// middleware
app.use(cors())
app.use(express.json())

// database config
const dotenv = require("dotenv")
dotenv.config()

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb")
// const uri = process.env.MONGO_URI
// const uri = "mongodb+srv://hirusha:hirusha1@cluster0.nwko1gt.mongodb.net/bookInventory?retryWrites=true&w=majority&appName=Cluster0"
const uri = "mongodb+srv://hirusha:hirusha1@cluster0.nwko1gt.mongodb.net/bookInventory?retryWrites=true&w=majority"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect()

        // create collection of database
        const booksCollection = client.db("bookInventory").collection("books")

        // inset a book to the database - POST method
        app.post("/upload-book", async (req, res) => {
            const data = req.body
            const result = await booksCollection.insertOne(data)
            res.send(result)
        })

        // get all books from the database - GET method
        app.get("/all-books", async (req, res) => {
            const book = booksCollection.find()
            const result = await book.toArray()
            res.send(result)
        })

        // gell a single book from the database
        app.get("/book/:id", async (req, res) => {
            const id = req.params.id
            const filter = { _id: new ObjectId(id) }
            const result = await booksCollection.findOne(filter)
            res.send(result)
        })

        // update a book data - PATCH or UPDATE method
        app.patch("/book/:id", async (req, res) => {
            const id = req.params.id
            const updateBookData = req.body
            const filter = { _id: new ObjectId(id) }
            const updateDoc = {
                $set: { ...updateBookData }
            }

            const options = { upsert: true }

            // update
            const result = await booksCollection.updateOne(
                filter,
                updateDoc,
                options
            )
            res.send(result)
        })

        // delete a book data - DELETE method
        app.delete("/book/:id", async (req, res) => {
            const id = req.params.id
            const filter = { _id: new ObjectId(id) }
            const result = await booksCollection.deleteOne(filter)
            res.send(result)
        })

        // find book by category
        app.get("/all-books", async (req, res) => {
            const query = {}
            if (req.query?.category) {
                query = { category: req.query.category }
            }

            const result = await booksCollection.find(query).toArray()
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 })
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        )
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close()
    }
}
run().catch(console.dir)

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`Buybooks app running on port ${port}`)
})

// kV2wISUcwdis2wMy
