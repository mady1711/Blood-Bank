const inventoryModel = require("../models/inventoryModel");
const mongoose = require("mongoose");

// get blood data
const bloodGroupDetailsController = async (req, res) => {
  try {
    const bloodGroups = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
    const bloodGroupData = [];
    const organisation = new mongoose.Types.ObjectId(req.body.userId);
    // get single blood group
    await Promise.all(
      bloodGroups.map(async (bloodGroup) => {
        //count total in
        const totalIn = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup,
              inventoryType: "in",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        //count total out
        const totalOut = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup,
              inventoryType: "out",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        const availBlood = (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);
        bloodGroupData.push({
          bloodGroup,
          totalIn: totalIn[0]?.total || 0,
          totalOut: totalOut[0]?.total || 0,
          availBlood,
        });
      })
    );
    return res.status(200).send({
      success: true,
      message: "Fetched Blood data successfully",
      bloodGroupData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching Blood Group Details",
      error,
    });
  }
};

module.exports = { bloodGroupDetailsController };
