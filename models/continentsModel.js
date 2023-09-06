// Continents Table has
// id -> Integer primary key
// name -> String NOT NULL

const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")

const Continent = connectToDB.define("continent", {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name:{
        type:DataTypes.STRING(50),
        allowNull: false
    }

}, {
    timestamps: false
})

module.exports = Continent;


