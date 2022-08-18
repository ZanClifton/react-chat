import { Schema, model } from "mongoose";

const msgSchema = new Schema({
  msg: {
    type: String,
    required: true,
  },
});

const Msg = model("msg", msgSchema);

export default Msg;
