import mongoose from "mongoose";

const schema = new mongoose.Schema({
  jobNumber: {
   required: true,
   type: String
  },
  address1: {
   required: true,
   type: String
  },
  address2: {
   required: false,
   type: String
  },
  city: {
   required: false,
   type: String
  },
  subdivision: {
   required: false,
   type: String
  },
  PI: {
   required: false,
   type: String
  },
  client: {
   required: true,
   type: String
  }
});

export default mongoose.model("Address", schema);
