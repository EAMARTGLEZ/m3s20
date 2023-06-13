const mongoose =require('mongoose');
const db = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log("Base de datos online");
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de conectar a la base de datos");
    }
}
module.exports = {
    db
}