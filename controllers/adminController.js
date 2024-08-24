const userModel = require("../models/userModel");

//get Donor List
const getDonorList = async (req, res) => {
  try {
    const donorData = await userModel
      .find({ role: "donor" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      TotalCount: donorData.lenght,
      message: "Donor List fetched",
      donorData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get donor list api",
      error,
    });
  }
};

const getHospitalList = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      TotalCount: hospitalData.lenght,
      message: "Hospital List fetched",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get Hospital list api",
      error,
    });
  }
};

const getOrgList = async (req, res) => {
  try {
    const orgData = await userModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      TotalCount: orgData.lenght,
      message: "Org List fetched",
      orgData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get Org list api",
      error,
    });
  }
};

//delete donor
const deleteDonorController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "record deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messaage: "Error in delete api",
      error,
    });
  }
};

module.exports = {
  getDonorList,
  getHospitalList,
  getOrgList,
  deleteDonorController,
};
