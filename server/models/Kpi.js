import mongoose from "mongoose";

const KpiSchema = new mongoose.Schema(
  {
    kpi_profit_value: Number,
    kpi_expense_value: Number,
    kpi_cashFlow_value: Number,
    kpi_profit_gaol_value: Number,
    kpi_expense_gaol_value: Number,
    kpi_cashFlow_gaol_value: Number,
   
  },
  { timestamps: true }
);

const Kpi = mongoose.model("Kpi", KpiSchema);
export default Kpi;
