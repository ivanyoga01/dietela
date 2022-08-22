// Import model Product
import User from "../models/User.js";

// Create product baru
export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(200).json({
            "message": "Data User Berhasil Ditambahkan"
        });
    } catch (err) {
      res.status(404).json({
          "message": "Data User Gagal Diupdate"
      });
        console.log(err);
    }
}


// Get semua product
export const getUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
    }
}

// Get product berdasarkan id
export const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if (user === null) {
          console.log('Not found!');
          res.status(404).json({
              "message": "Data User Gagal Diupdate"
          });
        } else {
          res.status(200).send(user);
        }
    } catch (err) {
      res.status(404).json({
          "message": "Data User Gagal Diupdate"
      });
        console.log(err);
    }
}



// Update product berdasarkan id
export const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if (user === null) {
          console.log('Not found!');
          res.status(404).json({
              "message": "Data User Gagal Diupdate"
          });
        } else {
          await User.update(req.body, {
              where: {
                  id: req.params.id
              }
          });
          res.status(200).json({
              "message": "Data User Berhasil Diupdate"
          });
        }

    } catch (err) {
      res.status(404).json({
          "message": "Data User Gagal Diupdate"
      });
        console.log(err);
    }
}

// Delete product berdasarkan id
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if (user === null) {
          console.log('Not found!');
          res.status(404).json({
              "message": "Data User Gagal Diupdate"
          });
        } else {
          await User.destroy({
              where: {
                  id: req.params.id
              }
          });
          res.status(200).json({
              "message": "Data User Berhasil Di Hapus"
          });
        }
    } catch (err) {
      res.status(404).json({
          "message": "Data User Gagal Diupdate"
      });
        console.log(err);
    }
}
