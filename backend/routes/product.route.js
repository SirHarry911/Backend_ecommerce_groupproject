// import express from "express";
// import {
// 	createProduct,
// 	deleteProduct,
// 	getAllProducts,
// 	getFeaturedProducts,
// 	getProductsByCategory,
// 	getRecommendedProducts,
// 	toggleFeaturedProduct,
// } from "../controllers/product.controller.js";
// import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

// const router = express.Router();

// router.get("/", protectRoute, adminRoute, getAllProducts);
// router.get("/featured", getFeaturedProducts);
// router.get("/category/:category", getProductsByCategory);
// router.get("/recommendations", getRecommendedProducts);
// router.post("/", protectRoute, adminRoute, createProduct);
// router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);
// router.delete("/:id", protectRoute, adminRoute, deleteProduct);

// export default router;
import express from "express";
import {
	getAllProducts,
	getFeaturedProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getProductsByCategory,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.get("/category/:category",getProductsByCategory);

export default router;