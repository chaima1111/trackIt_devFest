import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bcrypt from "bcryptjs"
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import expenseRoute from "./routes/expense.js";

// data imports

import User from "./models/User.js";
import CashFlow from "./models/CashFlow.js";
import Expense from "./models/Expense.js";
import Kpi from "./models/Kpi.js";
import Revenu from "./models/Revenu.js";
import Workspace from "./models/Workspace.js";
import OverallStat from "./models/OverallSatt.js";

import {
  dataUser,
  dataWorkspace,
  dataExpense,
  dataRevenu,
  dataCashFlow,
  dataKpi,
  dataOverallStat,
} from "./data/index.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Login */
// app.post('/login',(req,res)=>{
//     const {name,email,company,password,}=req.body;
//     User.findOne({email:email})
//     .then(user => {
//         if(user){
//           workspace_id,role
//             if(user.password === password){
//                 res.json("success")
//             }else{
//                 res.json("the password is wrong")
//             }
//         }else{
//             res.json("accound didn't exist")
//         }
//     })
// })

// Register
// app.post('/register', async (req, res) => {
//   try {
//     const workspaceId = Math.floor(1000 + Math.random() * 9000);
//     const newPassword = await bcrypt.hash(req.body.password, 10);
//     await User.create({
//       name: req.body.name,
//       email: req.body.email,
//       company: req.body.company,
//       password: newPassword,
//       workspace_id: workspaceId,
//       role: 'viewer', // Automatically assigning the role
//     });
    
//     res.json({ status: 'ok' });
//   } catch (err) {
//     // More descriptive error handling
//     if (err.code === 11000) { // Mongoose error for duplicate keys, e.g., email
//       res.json({ status: 'error', error: 'Email already exists' });
//     } else {
//       res.json({ status: 'error', error: 'Registration failed' });
//     }
//   }
// });



/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
   
  // User.insertMany(dataUser);
  //   Workspace.insertMany(dataWorkspace);
  //   Expense.insertMany(dataExpense);
  //   Revenu.insertMany(dataRevenu);
  //   CashFlow.insertMany(dataCashFlow);
  //   Kpi.insertMany(dataKpi);
  //   OverallStat.insertMany(dataOverallStat);
  })
  .catch((error) => console.log(`${error} did not connect`));

// Register
app.post('/register', async (req, res) => { 
  try {
    const workspaceId = Math.floor(1000 + Math.random() * 9000);
    const newPassword = await bcrypt.hash(req.body.password, 10);

    // Log the user data before creating
    console.log('Creating user with data:', {
      name: req.body.name,
      email: req.body.email,
      company: req.body.company,
      password: newPassword,
      workspace_id: workspaceId,
      role: 'viewer',
    });

    await User.create({
      name: req.body.name,
      email: req.body.email,
      company: req.body.company,
      password: newPassword,
      workspace_id: workspaceId,
      role: 'viewer',
    });
    
    res.json({ status: 'ok' });
  } catch (err) {
    console.error('Error during user registration:', err);
    res.json({ status: 'error', error: 'Registration failed: ' + err.message });
  }
});
