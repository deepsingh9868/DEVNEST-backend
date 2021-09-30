const check  = (req,res,next) =>{
    if(req.session.User.role === 'Admin'){
        res.status(200).send("You're now in admin panel");
    }
    else{
        res.status(401).send("You're not admin")
    }
}


module.exports = check;