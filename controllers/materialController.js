const Material = require('../models/Material');

exports.uploadMaterial = async (req, res) => {
    const { name, link, postedBy } = req.body;
    try {
        const material = new Material({ name, link, postedBy });
        await material.save();
        res.json({ message: 'Material uploaded successfully', material });
    } catch (error) {
        res.status(500).json({ message: 'Failed to upload material', error });
    }
};

// Fetch all materials
exports.getMaterials = async (req, res) => {
    try {
        const materials = await Material.find();
        res.json(materials);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch materials', error });
    }
};


const upload = require('../config/upload');
const Material = require('../models/Material');

exports.uploadMaterial = async (req, res) => {
    upload.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        const { postedBy } = req.body;
        const fileLink = `http://localhost:5000/uploads/${req.file.filename}`;

        try {
            const material = new Material({ name: req.file.originalname, link: fileLink, postedBy });
            await material.save();
            res.json({ message: 'Material uploaded successfully', material });
        } catch (error) {
            res.status(500).json({ message: 'Failed to upload material', error });
        }
    });
};
