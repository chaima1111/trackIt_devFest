import User from "../models/User"

export const Login = async (req, res) => {
    const {email,password}=req.body;
    User.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("the password is wrong")
            }
        }else{
            res.json("accound didn't exist")
        }
    })
  };
export const Register = async (req, res) => {
    User.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
  };

  export const logOut = (req, res) => {
    req.session.destroy((err) => {
      if (err) return res.status(400).json({ msg: "can't logout" });
      res.status(200).json({ msg: "successful logout" });
    });
  };