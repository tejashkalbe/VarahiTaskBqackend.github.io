const User = require('../Model/userSchema.js');

// post data

const postData = async(req,res) =>{
  const {firstname,lastname,username,password,role} = req.body;
  let user;
  try{
    user = new User({
      firstname,
      lastname,
      username,
      password,
      role,
    });
    await user.save();
  } catch(err){
    console.log(err)
  }
  if(!user){
    return res.status(500).json({ message: "Can't Created" });
  } else{
    return res.status(201).json({ user });
  }
}

// get all data

const getAllData = async(req,res) =>{
  let user;
  try{
    user = await User.find();
  }
  catch(err){
    console.log(err)
  }
  if(!user){
    return res.status(400).send('Data Not Found')
  }
  else{
    return res.status(200).json(user);
  }

}

// get user by id

const getDataById = async(req,res) =>{
  const _id = req.params.id;
  let user;
  try{
    user = await User.findOne({_id});
  }
  catch(err){
    console.log(err)
  }
  if(!user){
    return res.status(400).send('User Not Found')
  }
  else{
    return res.status(200).json(user);
  }

}


// get user by name
const getDataByUserName = async(req,res) =>{
  const username = req.params.username;
  
  let user;
  try{
    user = await User.findOne({username});
  }
  catch(err){
    console.log(err)
  }
  if(!user){
    return res.status(400).send('User Not Found' + username)
  }
  else{
    return res.status(200).json(user);
  }

}

// delete user
const deleteDataById = async (req, res) => {
  const _id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndDelete({ _id });
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    res.status(404).send({ message: "User not Found" });
  } else {
    res.status(202).json(user);
  }
};

// Update user
const updateUser = async(req,res) => {
  const _id = req.params.id;
  const {firstname, lastname,username,password,role} = req.body;
  let user;
  try{
    user = await User.findByIdAndUpdate({_id},{
      firstname,lastname,username,password,role
    })
  }
  catch(err){
    console.log(err)
  }
  if(!user){
    return res.status(400).send('User Not Found');
  }
  else{
    return res.status(200).json(user);
  }
}

exports.postData = postData;
exports.getAllData = getAllData;
exports.getDataById = getDataById;
exports.getDataByUserName = getDataByUserName;
exports.deleteDataById = deleteDataById;
exports.updateUser = updateUser;
