import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    expense_type: {
        type: String,
        enum: ["operational", "marketing","payroll","delivery"],
        default: "marketing",
      },
    amount: Number,
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", ExpenseSchema);
export default Expense;
