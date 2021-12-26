const auth = {}
const model = require("../models/models_user")
const bcr = require("bcrypt")
const jwt = require("jsonwebtoken")
const respone = require("../helpers/respone")

const token = async (name, username, email, password, role) => {
    try {
        const payload = {
            user:username,
            role:role,
            name:name,
            email:email,
            password:password,
        }
        const token = jwt.sign(payload, process.env.JWT_KEYS, {expiresIn: '1h'})
        const result = {
            token : token,
            message : 'token created, login success'
        }
        return result

    } catch (error) {
        throw error
    }
}

const tokenLogin = async (username, role) => {
    try {
        const payload = {
            user:username,
            role:role,
        }
        const token = jwt.sign(payload, process.env.JWT_KEYS, {expiresIn: '1h'})
        const result = {
            token : token,
            message : 'token created, login success'
        }
        return result

    } catch (error) {
        throw error
    }
}

auth.login = async (req,res) => {
    try {
        const passDB = await model.GetbyUsername(req.body.username)
        const passUser = req.body.password
        const check = await bcr.compare(passUser,passDB[0].password)
        const role_check = passDB[0].role

        if (check) {
            const result = await tokenLogin(req.body.username, role_check)
            return respone(res, 200, result)
        } else {
            return respone(res, 401, "Anda gagal login")
        }
        
    } catch (error) {
        return respone(res, 500, 'masukkan username dan password dengan benar')
    }
}



module.exports = {auth, token}