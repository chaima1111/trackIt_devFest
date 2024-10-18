import mongoose from "mongoose";

const RevenuSchema = new mongoose.Schema(
  {
    revenue_type: String,
    client_id:String,
    amount: Number,
  },
  { timestamps: true }
);

const Revenu = mongoose.model("Revenu", RevenuSchema);
export default Revenu;
