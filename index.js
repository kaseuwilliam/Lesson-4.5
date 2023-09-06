const {connectToDB, testConnection} = require("./models/conn")
const Continent = require("./models/continentsModel")

// testConnection()


// drops the table
// await Continent.drop()

// creates the table
// await Continent.sync()

// addContinents()
// getAllContinents()
// getContinentByID(20)
// getContinentByName("Europe")
// editContinents()

// deleteContinentByID(5);

deleteContinentByName("Europe")

async function deleteContinentByName(userName){

    await Continent.destroy({where:{name: userName}})

    getAllContinents()

}


async function deleteContinentByID(userID){

    let criteria = {

        where:{
            id: userID
        }
    }

    await Continent.destroy(criteria)

    getAllContinents()

}

async function editContinents(){

    let whatToUpdate = {
        where: {
            id:2
        }
    }

    let newContinent = {

        name:"North America"
    }

    await Continent.update(newContinent, whatToUpdate)

    // await Continent.update({name:"North America"}, {where: {id:2}})

    getAllContinents()
}


async function addContinents(){

    let africa = {
        name:"Asia"
    }

   await Continent.create(africa)
   console.log("The data has been created");
}

async function getAllContinents(){

    const results = await Continent.findAll()

    console.log(JSON.stringify(results))

}

async function getContinentByID(idFromUser){

    // let criteria = {

    //     where: {
    //         id:idFromUser
    //     }
    // }

    // const results = await Continent.findAll(criteria)

    const results = await Continent.findAll({where: {id:idFromUser} })

    console.log(JSON.stringify(results))


}

async function getContinentByName(nameFromUser){

    const results = await Continent.findAll({where: {name:nameFromUser} })

    console.log(JSON.stringify(results))


}
