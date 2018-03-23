import express from "express";
import mongoose from "mongoose";
import AddressRoutes from "./routes/AddressRoutes";
import bodyParser from "body-parser";


mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://public:public@ds257858.mlab.com:57858/checkpoint2");

const app = express();
app.use(bodyParser.json());

app.use(AddressRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
