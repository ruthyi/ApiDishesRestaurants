const apiService = require ("../services/apiService")

const getAllInformation = (req , res )=>{
  const allInformation= apiService.getAllInformation;
};

const getOneInformation = (req , res )=>{
  const information= apiService.getOneInformation(req.params.name);

};
const createInformation = (req , res )=>{
  const createInfo= apiService.createInfo(req.body);

};
const updateInformation = (req , res )=>{
  const uptareInfo= apiService.updateInformation(req.params.name, req.body);
};

const deleteInformation = (req , res )=>{
  apiService.deleteInformation(req.body);
};


module.exports={
  getAllInformation,
  getOneInformation,
  createInformation,
  updateInformation,
  deleteInformation
} ;


