const productModel = require("../models/product.model");

exports.createProduct = async (req, res) => {
    try {
    const {title,description,price,imgUrl} = req.body;
    
    let newProduct = new productModel({
        title,
        description,
        price,
        imgUrl,
    });

    newProduct = await newProduct.save();

    res.status(201).json(newProduct);
} catch (err) {
    res.status(500).json({ message: err.message});
}
};

exports.allProducts = async (req, res) => {
    try {
       const products = await productModel.find({});

       res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ massage: err.massage});
    }
};

exports.UpdatedProduct = async (req, res) => {
    try {
        const {title,description,price,imgUrl} = req.body;
    
        let UpdatedProduct = new productModel({
            title,
            description,
            price,
            imgUrl,
            _id: req.params.id,
        });

       UpdatedProduct = await productModel.findByIdAndUpdate(req.params.id, UpdatedProduct);

        res.status(200).json(UpdatedProduct);
    } catch (err) {
        res.status(500).json({ massage: err.massage});
    } 
};

exports.deletProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.id);

        res.status(200).json({massage: "product deleted sucessfully"});
    } catch (err) {
        res.status(500).json({ massage: err.massage});
    }
};

exports.singleProducts = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.status(500).json(product);
    } catch (err) {
        res.status(200).json({ massage: err.massage });
    }
};