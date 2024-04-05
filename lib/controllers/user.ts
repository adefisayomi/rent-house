import { errorMessage } from "../config";
import dbInit from "../dbInit";
import {User} from "../schemas/user";
import { emailAndPassword, loginEmailAndPassword } from "../validators/user";
import bcrypt from 'bcryptjs'
dbInit()

const imageUrl = 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg';

export async function createUserWithEmailAndPassword (payload: {email?: string, password?: string, name?: string}) {
    try {
        const validatePayload = await emailAndPassword({...payload, image: imageUrl})
        if (!validatePayload.success) throw new Error(validatePayload.message)
        // 
        const {data} = validatePayload
        const userExist = await User.exists({email: data.email})
        if (userExist) throw new Error('user already exist!')
        // 
        const hash = await bcrypt.hash(data.password, 12)
        const user = new User({...data, password: hash, emailVerified: null})
        await user.save()
        // 
        return ({
            success: true,
            message: '',
            data: {
                email: user.email,
                id: user.id,
                name: user.name,
                image: user.image,
                emailVerified: user.emailVerified
            }
        })
    }
    catch(err: any) {
        return errorMessage(err.message)
    }
}

export async function getUserWithEmailAndPassword (payload: {email?: string, password?: string}) {
    try {
        const validatePayload = await loginEmailAndPassword(payload)
        if (!validatePayload.success) throw new Error(validatePayload.message)
        // 
        const {data} = validatePayload
        const user = await User.findOne({email: data.email})
        
        if (!user) throw new Error('user does not exist!')
        if (!user.password) throw new Error('invalid login method')
        // 
        const passwordMatch = await bcrypt.compare(data.password, user.password!)
        if (!passwordMatch) throw new Error('invalid credentials!')
        // 
        return ({
            success: true,
            message: '',
            data: {
                email: user.email,
                id: user.id,
                name: user.name,
                image: user.image,
                emailVerified: user.emailVerified
            }
        })
    }
    catch(err: any) {
        return errorMessage(err.message)
    }
}