const { response, request } = require("express");
const User = require("../models/user.model");
const {
  hashPassword,
  comparePassword,
  generarToken,
} = require("../utilities/auth.utilities");

const usersGet = (req = request, res = response) => {
  res.send(
    "Entro a productos GET del archivo independiente usuarios.controller.js"
  );
};

const signUp = async (req = request, res = response) => {
  // Acordarse que este es como si fuera "usuariosPost"
  try {
    const body = req.body;
    let user = new User(body);
    user.password = await bcrypt.hash(user.password, saltRounds);
    await user.save();
    res.status(201).json({
      msg: "El usuario se agrego correctamente",
      detalle: usuario,
    });
  } catch (error) {
    res.status(400).json({
      msg: "No se pudo agregar el usuario",
      detalle: error.message,
    });
  }
};
const logIn = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;
    const userInformation = await User.findOne({ email: email });
    const isValidPassword = await comparePassword(
      password,
      userInformation.password
    );
    if (isValidPassword) {
      res.status(200).json({
        msg: "Login correcto",
        detalle: null,
      });
    } else {
      res.status(400).json({
        msg: "Credencial incorrectas",
        detalle: null,
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: "Informacion incorrecta",
      detalle: error.message,
    });
  }
};
module.exports = {
  usersGet,
  signUp,
  logIn
};
