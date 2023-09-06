const {Sequelize} = require('sequelize')

// Connect to my Database (databaseName, username, password)
const connectToDB = new Sequelize("world","postgres","MY_Password", {
    host:"localhost",
    dialect:"postgres"
})

async function testConnection(){

    
    try{
        
        await connectToDB.authenticate()
        console.log("Hey, you have successfully connected to the database")
        return true
        
    } catch (error) {

        console.log("Hey, you did NOT connect to the database.")
        console.error(error)
        return false

    }


}

module.exports = {connectToDB, testConnection}