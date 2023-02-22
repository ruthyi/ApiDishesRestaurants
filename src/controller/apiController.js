//const { httpError } = require('../helpers/handleError')
const useModel = require('../models/restaurant')
const getAllInformation =async  (req,res) =>{
  try {
    const listAll = await useModel.find({})
    res.send({ data :listAll })
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
};
const getOneInformation =async (req,res) =>{
  try {
    const one = await useModel.find({nombre:req.params.nombre})
    res.send({ data :one })
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
};
const createInformation = async (req,res) =>{
  try {
    const resDetail = await useModel.create(req.body);
    res.send({ data: resDetail })
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
};
const updateInformation =(req,res) =>{
  return false;
};
const deleteInformation = async(req,res) =>{
  try {
    const resDetail = await useModel.findOneAndRemove({ _id: req.body.id });
    res.send("Eliminado Exitosamente")
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
};



module.exports = { getAllInformation, getOneInformation, createInformation, updateInformation, deleteInformation }
