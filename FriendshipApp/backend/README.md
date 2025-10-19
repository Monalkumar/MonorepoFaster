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
  