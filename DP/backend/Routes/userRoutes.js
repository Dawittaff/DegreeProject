import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';
const userRouter = express.Router();
import expressAsyncHandler from 'express-async-handler';
// defining a post request for Signin API
userRouter.post(
  // catch error in async function which can be handled in server.js
  '/signin',
  expressAsyncHandler(async (req, res) => {
    //get user by email
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      // check password of user
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.send(401).send({ message: 'Invalid mail or password' });
  })
);

userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    // create a new user from mongoose model
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);
export default userRouter;
