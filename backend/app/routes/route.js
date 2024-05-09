import express from "express";
import * as itemController from '../controllers/itemController.js';
const router = express.Router();

router.route("/")
    .get(itemController.getAllItemDetails)
    .post(itemController.post);
router.route("/search/name/:keyword")
    .get(itemController.getItemByName);
router.route("/search/description/:keyword")
    .get(itemController.getItemByDesc);
router.route("/search/price/:keyword")
    .get(itemController.getItemByPrice);

export default router;