import mongoose from "mongoose";

const CashFlowSchema = new mongoose.Schema(
  {
    cash_inflow: Number,
    cash_outflow: Number,
    CashFlow_type: {
        type: String,
        enum: ["operating", "investing","financing"],
        default: "operating",
      },
  },
  { timestamps: true }
);

const CashFlow = mongoose.model("CashFlow", CashFlowSchema);
export default CashFlow;
