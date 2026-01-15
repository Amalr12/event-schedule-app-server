// const jwt = require("jsonwebtoken")
// const jwtMiddleware = (req, res, next) => {
//     console.log(`Inside jwt Middleware`);
//     const token = req.headers["authorization"].split(" ")[1]
//     // console.log(token);
//     // next()
//     try {
//         const jwtRespose = jwt.verify(token, process.env.secretKey)
//         console.log(jwtRespose);
//         req.payload = jwtRespose.userMail
//         next()

//     } catch (error) {
//         res.status(401).json("Authorization failed due to ", error)
//     }


// }
// module.exports = jwtMiddleware