const requireAuth = async (req, res, next) => {
    const jwt = require('jsonwebtoken')
    const User = require('../models/userModel')
        // verify authentication
        const { token } = req.cookies
    
        if(!token){
            return res.status(401).json({error: 'Authorization token required'})
        }
    
        
        try{
            const {_id} = jwt.verify(token, process.env.SECRET)
            
            req.user = await User.findOne({_id}).select('_id')
            next()
        
        } catch(error) {
            console.log(error)
            res.status(401).json({error: 'Request is not authorized'})
        }
    }
    
    module.exports = requireAuth