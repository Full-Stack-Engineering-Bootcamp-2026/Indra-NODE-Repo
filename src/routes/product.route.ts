import express from 'express'
import { upload } from "../utils/multer.js";
import { getProducts, postAddProduct } from '../controllers/product.controller.js';
import { createPaymentLink } from '../controllers/paymet.controller.js';



const router = express.Router();


router.get('/products',getProducts)
router.post(
  "/add-product",
  upload.single("image"),
  postAddProduct
);

router.post("/create-payment-link", createPaymentLink);


export default router;

