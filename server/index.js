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
import jwt from "jsonwebtoken"

// data imports

import User from "./models/User.js";
import CashFlow from "./models/CashFlow.js";
import Expense from "./models/Expense.js";
import Kpi from "./models/Kpi.js";
import Revenu from "./models/Revenu.js";
import Workspace from "./models/Workspace.js";
import WorkspaceTeam from "./models/WorkspaceTema.js";
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

app.post('/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return      res.json("success")

	} else {
		return res.json("the password is wrong")
	}
})
//CashFlow
app.post('/cash', async (req, res) => { 
  try {

    // user enter data
    console.log('Creating user with data:', {
      cash_inflow: req.body.cash_inflow,
      cash_outflow: req.body.cash_outflow,
      CashFlow_type: req.body.CashFlow_type,
    });

    await CashFlow.create({
      cash_inflow: req.body.cash_inflow,
      cash_outflow: req.body.cash_outflow,
      CashFlow_type: req.body.CashFlow_type,
    });
    
    res.json({ status: 'ok' });
  } catch (err) {
    console.error('Error ', err);
    res.json({ status: 'error', error: ' failed: ' + err.message });
  }
});
//Expense dat 
app.post('/expense', async (req, res) => { 
  try {

    // user enter data
    console.log('Creating user with data:', {
      expense_type: req.body.expense_type,
      amount: req.body.amount,
    });

    await Expense.create({
      expense_type: req.body.expense_type,
      amount: req.body.amount,
    });
    
    res.json({ status: 'ok' });
  } catch (err) {
    console.error('Error :', err);
    res.json({ status: 'error', error: ' failed: ' + err.message });
  }
});
//Revenu dat 
app.post('/revenu', async (req, res) => { 
  try {

    // user enter data
    console.log('Creating user with data:', {
      revenue_type: req.body.revenue_type,
      client_id:"63701cc1f03239c72c00017f",
      amount: req.body.amount,
    });
    
    
    await Revenu.create({
      revenue_type: req.body.revenue_type,
      client_id:"63701cc1f03239c72c00017f",
      amount: req.body.amount,
    });
    
    res.json({ status: 'ok' });
  } catch (err) {
    console.error('Error:', err);
    res.json({ status: 'error', error: ' failed: ' + err.message });
  }
});
//Wokspace data
app.post('/workspace', async (req, res) => { 
  try {
    const workspacenb = Math.floor(1000 + Math.random() * 9000);

    // user enter data
    console.log('Creating user with data:', {
      Workspacee_name: req.body.Workspacee_name,
      Workspacee_field: req.body.Workspacee_field,
      Workspacee_code: workspacenb,
    });
    
    
    await WorkspaceTeam.create({
      Workspacee_name: req.body.Workspacee_name,
      Workspacee_field: req.body.Workspacee_field,
      Workspacee_code: workspacenb,
    });
    
    res.json({ status: 'ok' });
  } catch (err) {
    console.error('Error :', err);
    res.json({ status: 'error', error: ' failed: ' + err.message });
  }
});
// //Wokspace data
// app.post('/workspace', async (req, res) => { 
//   try {
//     const workspacenb = Math.floor(1000 + Math.random() * 9000);

//     // user enter data
//     console.log('Creating user with data:', {
//       Workspacee_field: req.body.Workspacee_field,
//       Workspacee_code: workspacenb,
//     });
    
    
//     await Workspace.create({
//       Workspacee_field: req.body.Workspacee_field,
//       Workspacee_code: workspacenb,
//     });
    
//     res.json({ status: 'ok' });
//   } catch (err) {
//     console.error('Error :', err);
//     res.json({ status: 'error', error: ' failed: ' + err.message });
//   }
// });
//Goal data 
app.post('/kpi', async (req, res) => { 
  try {

    // user enter data
    console.log('Creating user with data:', {
      kpi_profit_value: req.body.kpi_profit_value,
      kpi_expense_value: req.body.kpi_expense_value,
      kpi_cashFlow_value: req.body.kpi_cashFlow_value,
      kpi_profit_gaol_value: req.body.kpi_profit_gaol_value,
      kpi_expense_gaol_value: req.body.kpi_expense_gaol_value,
      kpi_cashFlow_gaol_value: req.body.kpi_cashFlow_gaol_value,
    });

    await Kpi.create({
      kpi_profit_value: req.body.kpi_profit_value,
      kpi_expense_value: req.body.kpi_expense_value,
      kpi_cashFlow_value: req.body.kpi_cashFlow_value,
      kpi_profit_gaol_value: req.body.kpi_profit_gaol_value,
      kpi_expense_gaol_value: req.body.kpi_expense_gaol_value,
      kpi_cashFlow_gaol_value: req.body.kpi_cashFlow_gaol_value,
    });
    
    res.json({ status: 'ok' });
  } catch (err) {
    console.error('Error:', err);
    res.json({ status: 'error', error: ' failed: ' + err.message });
  }
});
