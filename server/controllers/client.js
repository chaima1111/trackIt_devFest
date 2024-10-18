// import User from "../models/User.js";
// import CashFlow from "../models/CashFlow.js";
// import Expense from "../models/Expense.js";
// import Kpi from "../models/Kpi.js";
// import Revenu from "../models/Revenu.js";
// import Workspace from "../models/Workspace.js";

// export const getRevenu = async (req, res) => {
//   try {
//     const revenu = await Revenu.find();

//     const revenuWithStats = await Promise.all(
//       revenu.map(async (product) => {
//         const stat = await revenutat.find({
//           productId: product._id,
//         });
//         return {
//           ...product._doc,
//           stat,
//         };
//       })
//     );

//     res.status(200).json(revenuWithStats);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const getCustomers = async (req, res) => {
//   try {
//     const customers = await User.find({ role: "user" }).select("-password");
//     res.status(200).json(customers);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

