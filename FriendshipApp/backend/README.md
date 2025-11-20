// Get User from the database
// for finding all the datas from the databse

app.get("/feeds",async(req,res)=>{
  try{
      
        const userEmail =  await User.find({});
        res.status(200).json({
          message:"user get successfully",
          useremail:userEmail
        })
  }
  catch(error){
    res.status(500).json({
      message:"please resolve this",
      error:error.message
    })
  }
  
app.get("/feeds", async (req, res) => {
  try {
    const user = req.body.email;
    const userEmail = await User.find({ email: user });
    if (!userEmail) {
      res.status(404).send("please check and resolve yar");
    }
    res.status(200).json({
      message: "user get successfully",
      useremail: userEmail,
    });
  } catch (error) {
    res.status(500).json({
      message: "please resolve this",
      error: error.message,
    });
  }
});

// delte users from the database

app.delete("/dele", async (req, res) => {
  try {
    const user = req.body._id;
    const dele = await User.findByIdAndDelete(user);
    res.status(200).send("please resolve yar");
    if (!dele) {
      res.status(401).json({ message: "resolve yar" });
    }
  } catch (error) {
    res.status(500).json({
      mssage: "resolve error",
      error: "rsolve this" + error.message,
    });
  }
});

// update uers from the database

app.patch("/update", async (req, res) => {
  try {
    const users = req.body;
    const ALLOWED_UPDATES = [
      "_id",
      "name",
      "age",
      "skills",
      "gender",
      "photoUrl",
    ];
    const isUpdated = Object.keys(users).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdated) {
      throw new Error("please check updates value yar");
    }
    const updateUser = await User.findByIdAndUpdate(users._id, users, {
      new: true,
    });
    if (!updateUser) {
      res.status(404).send("please rsolve yar");
    }
    res.status(200).json({
      message: "users updated successfully",
      updateUsers: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "please check the error and resolve",
      error: "error:" + error.message,
    });
  }
});
