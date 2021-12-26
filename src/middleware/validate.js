const jwt = require("jsonwebtoken")
const respone = require("../helpers/respone")

const checkToken = (role) => {
    return (req, res, next) => {
        const {token_auth} = req.headers
        if(!token_auth){
            return respone(res, 401, 'login dulu')
        }

        jwt.verify(token_auth, process.env.JWT_KEYS, (err, decode) => {
            if(err) {
                return respone(res, 401, err)
            }
            
            let cekRole = false
            for (let i = 0; i < role.length; i++) {
                if (decode.role === role[i]) {
                    cekRole = true
                }
            }

            if (cekRole) {
                return next()
            } else {
                return respone(res, 401, `Akses tidak diizinkan karena anda bukan ${role}`)
            }
            
        })
    }
}

module.exports = checkToken