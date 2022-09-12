// Import express
import express from "express";
// Import Controller Product
// import {
//     getUser,
//     getUserById,
//     createUser,
//     updateUser,
//     deleteUser
//  } from "../controllers/User.js";

import Controller from "../controllers/Index.js";

 // Init express router
const router = express.Router();

// Route get semua product
router.get('/dietela', Controller.User.getUser);
// Route get product by id
router.get('/dietela/:id', Controller.User.getUserById);
// Route create product baru
router.post('/dietela', Controller.User.createUser);
// Route update product by id
router.put('/dietela/:id', Controller.User.updateUser);
// Route delete product by id
router.delete('/dietela/:id', Controller.User.deleteUser);

// Route get semua product
router.get('/pekerjaan', Controller.Pekerjaan.getPekerjaan);
// Route get product by id
router.get('/pekerjaan/:id', Controller.Pekerjaan.getPekerjaanById);
// Route create product baru
router.post('/pekerjaan', Controller.Pekerjaan.createPekerjaan);
// Route update product by id
router.put('/pekerjaan/:id', Controller.Pekerjaan.updatePekerjaan);
// Route delete product by id
router.delete('/pekerjaan/:id', Controller.Pekerjaan.deletePekerjaan);

// export router
export default router;
