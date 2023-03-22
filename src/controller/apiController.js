//const { httpError } = require('../helpers/handleError')
const useModel = require('../models/restaurant')

// Get all information of the database
const getAllInformation =async  (req,res) =>{
  try {
    const listAll = await useModel.find({})
     res.status(200).json(listAll);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
};


// fillter information by Id
const getOneInformationById =async (req,res) =>{
  try {
    const one = await useModel.findById(req.params.id);
    res.status(200).json(one);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
};
// fillter information by Nmae
const getOneInformationByName =async (req,res) =>{
  try {
    const one = await useModel.find({nombre:req.params.nombre});
    res.status(200).json(one);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
};
// create new registration in database
const createInformation = async (req,res) =>{
  try {
    const resDetail = await useModel.create(req.body);
    res.status(200).json(resDetail);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
};

// update a registration of the database
const updateInformation = async(req,res) =>{
  try {
    const resUpdate = await useModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.status(200).json(resUpdate);
  } catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
  }
  return false;
};
// delte a registration of the data base
const deleteInformation = async(req,res) =>{
  try {
    const resDetail = await useModel.findOneAndRemove({ _id: req.body.idProduct});
    res.status(200);
    res.send("Eliminado Exitosamente");
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}
};



module.exports = { getAllInformation, getOneInformationById, createInformation, updateInformation, deleteInformation, getOneInformationByName }
