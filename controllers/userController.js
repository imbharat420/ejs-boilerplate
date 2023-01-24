
const UserPage = (req,res)=>{
    res.render('index');
}

const UserCreate = (req,res)=>{
    const {file,body:{name}} = req;
    console.log(file,name)
    if(!file && !name){
        res.status(400).json({message:"bad request"});
    }
    res.json({file,name});
}




module.exports ={
    UserCreate,
    UserPage
}