const userModel = require("../models/User.model");

exports.creatUser = async (req, res) => {
   try {
    const { UserName,email,mobileNumber,password,imgUrl,address } = req.body;

   let newUser = new userModel({
    UserName,
    email,
    mobileNumber,
    password,
    imgUrl,
    address,
   });

   newUser = await newUser.save();

   res.status(201).json(newUser);
} catch (err) {
   res.status(500).json({ massage: err.massage });

};
};

exports.updetUser = async (req, res ) => {
   try { 
      const { UserName, email, mobileNumber, password, imgUrl, address } = req.body;

      let updetUser = new userModel({
         UserName,
         email,
         mobileNumber,
         password,
         imgUrl,
         address,
         _id: req.params.id
      });

      updetUser = await userModel.findByIdAndUpdate(req.params.id, updetUser);

      res.status(200).json(updetUser);

   } catch (err) {
      res.status(500).json({ massage: err.massage });
   };
};

exports.allUser = async (req, res) => {
   try {
      const user = await userModel.find();


      res.status(200).json(user);
   } catch (err) {
      res.status(500).json({ massage: err.massage });
   };
};

