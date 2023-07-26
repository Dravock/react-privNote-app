require('dotenv').config();

const cors = require('cors')
const  express = require('express')
var CryptoJS = require("crypto-js");
const apiRouterStart = require('./routes/StartPage')
const apiRouterUser = require('./routes/User')

const app = express();

app.use(cors())
app.use(express.json());


//AUTH FUNCTION 
const auth= async ()=>{
    let auth = undefined
    app.use((req,res,next)=>{
        const rawJWT = req.headers.authorization.split(' ')
        const jwtSplitted = rawJWT[1].split('.')
        const jwtHeader = atob(jwtSplitted[0])
        const jwtPayload = JSON.parse(atob(jwtSplitted[1]))
        const signature_provivded = jwtSplitted[2]

        expiration = jwtPayload.exp
        is_jwt_expired = (expiration - Date.now()) < 0

        base64_jwtHeader = btoa(jwtHeader)
        base64_jwtPayload =btoa(JSON.stringify(jwtPayload))

        signature = CryptoJS.HmacSHA256(base64_jwtHeader+'.'+base64_jwtPayload,process.env.JWT_SECRET)
        let signatureInBase64 = (CryptoJS.enc.Base64.stringify(signature));
        const prepSignature0 = signatureInBase64.replace('+', '-')
        const prepSignature1 = prepSignature0.replace('/','_') 
        const prepSignature2 = prepSignature1.slice(0,-1)

        const is_signature_Valid = (signature_provivded === prepSignature2)

        if(is_jwt_expired || is_signature_Valid){
            auth=true
        }else{
            console.log('here im else')
            auth=false
        }
        next()
        return auth
    })
    
} 


// check Auth then go ahead 
const checkAuth = () => {
    if(auth()){
        console.log('Authorized')
        app.use((req,res,next)=>{
            switch (req.url) {
                case '/api/':
                    app.use('/api/', apiRouterStart)
                    break;
                case '/api/user':
                    app.use('/api/', apiRouterUser)
                    break;
                default:
                    break;
            }
            next();
        })
    }else{
        res.send('UNAUTHORIZED');
        next()
    }
}


// WEB SERVER 
app.listen(process.env.PORT || '3000', () => {
    checkAuth()
    console.log(`Server is Running on port: ${process.env.PORT || '3000'}`);
}); 