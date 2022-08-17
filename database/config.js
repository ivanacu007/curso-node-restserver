const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Database connected')
    } catch (error) {
        throw new Error("Error al conectar a la base de datos");
    }
}

module.exports = {
    dbConnection
}