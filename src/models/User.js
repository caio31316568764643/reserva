import{Schema, model} from 'mongoose'

const UserSchema = new Schema({
    email: String
})

export default modelNames('user', UserSchema)