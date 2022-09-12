// Import model ProductUser
// import User from "../models/User.js";
import Model from "../models/Index.js";

// Create product baru
export const createPekerjaan = async (req, res) => {
    try {
        const pekerjaan = await Model.Pekerjaan.create(req.body);
        res.status(200).json({
            message: "Data Pekerjaan Berhasil Ditambahkan",
            data : pekerjaan
        });
    } catch (err) {
      res.status(404).json({
          "message": "Data Pekerjaan Gagal Diupdate"
      });
        console.log(err);
    }
}


// Get semua product
export const getPekerjaan = async (req, res) => {
    try {
        const pekerjaan = await Model.Pekerjaan.findAll();
        res.status(200).send(pekerjaan);
    } catch (err) {
        console.log(err);
    }
}

// Get product berdasarkan id
export const getPekerjaanById = async (req, res) => {
    try {
        const pekerjaan = await Model.Pekerjaan.findOne({
            where: {
                id: req.params.id
            }
        });
        if (pekerjaan === null) {
          console.log('Not found!');
          res.status(404).json({
              "message": "Data Tidak Ditemukan"
          });
        } else {
          res.status(200).send(pekerjaan);
        }
    } catch (err) {
      res.status(404).json({
          "message": "Data Pekerjaan Gagal Diupdate"
      });
        console.log(err);
    }
}



// Update product berdasarkan id
export const updatePekerjaan = async (req, res) => {
    try {
        const pekerjaan = await Model.Pekerjaan.findOne({
            where: {
                id: req.params.id
            }
        });
        if (pekerjaan === null) {
          console.log('Not found!');
          res.status(404).json({
              "message": "Data Pekerjaan Gagal Diupdate"
          });
        } else {
          await Model.Pekerjaan.update(req.body, {
              where: {
                  id: req.params.id
              }
          });
          res.status(200).json({
              "message": "Data Pekerjaan Berhasil Diupdate"
          });
        }

    } catch (err) {
      res.status(404).json({
          "message": "Data Pekerjaan Gagal Diupdate"
      });
        console.log(err);
    }
}

// Delete product berdasarkan id
export const deletePekerjaan = async (req, res) => {
    try {
        const pekerjaan = await Model.Pekerjaan.findOne({
            where: {
                id: req.params.id
            }
        });
        if (pekerjaan === null) {
          console.log('Not found!');
          res.status(404).json({
              "message": "Data Pekerjaan Gagal Diupdate"
          });
        } else {
          await Model.Pekerjaan.destroy({
              where: {
                  id: req.params.id
              }
          });
          res.status(200).json({
              "message": "Data Pekerjaan Berhasil Di Hapus"
          });
        }
    } catch (err) {
      res.status(404).json({
          "message": "Data Pekerjaan Gagal Diupdate"
      });
        console.log(err);
    }
}
