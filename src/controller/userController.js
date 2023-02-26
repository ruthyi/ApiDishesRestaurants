
const userModel = require('../models/user')

const getItems = async (req, res) => {
  try {
    const listAll = await userModel.find({})
     res.status(200).json(listAll);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
}

const getItem = async(req, res) => {
  try {
    const one = await userModel.findById(req.params.id);
    res.status(200).json(one);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
}

const createItem = async (req, res) => {
  try {
    const resDetail = await userModel.create(req.body);
    res.status(200).json(resDetail);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
}


const updateItem = async (req, res) => {
  try {
    const resUpdate = await userModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.status(200).json(resUpdate);
  } catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
  }
  return false;
}

const deleteItem = async (req, res) => {
  try {
    const resDetail = await userModel.findOneAndRemove({ _id: req.body.id });
    res.status(200);
    res.send("Eliminado Exitosamente");
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
