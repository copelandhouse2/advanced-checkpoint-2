import express from "express";
// import { list, show, create, update, delete } from "../controllers/AddressController";
import { list, show, create, remove } from "../controllers/AddressController";
const router = express.Router();

//Getting the data... the entire list
router.get("/addresses", list);


//Getting the data... just one entity
router.get("/addresses/:id", show);


//posting new entries to the database
router.post("/addresses", create);

//deleting entries from the database
router.delete("/addresses/:id", remove);

export default router;
