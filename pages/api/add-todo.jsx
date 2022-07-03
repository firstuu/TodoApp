import {MongoClient} from 'mongodb'

 async function handler(req,res) {




    const data = req.body


     const client=  await MongoClient.connect('mongodb+srv://FeRR:123123123@cluster0.utuozhd.mongodb.net/toDo?retryWrites=true&w=majority')
     const db = client.db()

     const todo = db.collection('toDo')

     const result = await todo.insertOne({data})
     console.log(result)
     client.close()

     res.status(201).json({message: 'inseted'})



}

export default handler