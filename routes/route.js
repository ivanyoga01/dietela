// Import express
import express from "express";
// Import Controller Product
import {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
 } from "../controllers/User.js";

 // Init express router
const router = express.Router();

// Route get semua product
router.get('/dietela', getUser);
// Route get product by id
router.get('/dietela/:id', getUserById);
// Route create product baru
router.post('/dietela', createUser);
// Route update product by id
router.put('/dietela/:id', updateUser);
// Route delete product by id
router.delete('/dietela/:id', deleteUser);

// export router
export default router;
