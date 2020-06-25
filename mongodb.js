// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const objectID = mongodb.objectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1/27017'
const database = 'task-manager'

// console.log(ObjectID)
// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.getTimestamp())
// console.log(id.toHexString())
// console.log(id.toHexString().length)


MongoClient.connect(connectionUrl , { useNewUrlParser: true } , (error, client) => {
    if(error){
        return console.log('Unable to connect!!!')
    }

    // console.log('connected succesfully!')

    const db = client.db(database)


    // db.collection('users').insertOne({
    //     name: 'Parth Prajapati',
    //     age: 21
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Chucha',
    //     age: 30
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Raj',
    //         age:16
    //     },
    //     {
    //         name: 'Baburav',
    //         age:46
    //     },
    //     {
    //         name: 'Kevin',
    //         age:18
    //     }
    // ])

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Learn Javascript',
    //         completed: true
    //     },
    //     {
    //         description: 'Learn Node js',
    //         completed: false
    //     }
    // ])

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clear Room',
    //         completed: false
    //     },
    //     {
    //         description: 'Done project work',
    //         completed: false
    //     }
    // ])

    // db.collection('users').findOne({ name: 'Raj'} , (error , user ) => {
    //     if(error){
    //         return console.log('Unable to fetch!!!')
    //     }

    //     console.log(user)
    // })
    // db.collection('users').findOne({ _id: new ObjectID('5ee072f2536e1c470c3a7bfa')} , (error , user ) => {
    //     if(error){
    //         return console.log('Unable to fetch!!!')
    //     }

    //     console.log(user)
    // })   
    // db.collection('users').findOne({ age: 21 } , (error , user ) => {
    //     if(error){
    //         return console.log('Unable to fetch!!!')
    //     }

    //     console.log(user)
    // })
    // db.collection('users').find( {age: 21} ).toArray( ( error, users ) => {
    //     console.log(users)  
    // })

    // db.collection('users').updateOne({
    //     name: 'Kevin'
    // },{
    //     $set: {
    //         age:20
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     name: 'Kevin'
    // },{
    //     $inc: {
    //         age:1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    
    // db.collection('users').updateOne({
    //     name: 'Kevin'
    // },{
    //     $inc: {
    //         age:-1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteOne({
    //     age: 30
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteMany({
    //     completed: true
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})