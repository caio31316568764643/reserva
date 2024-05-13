import {Schema, model} from 'mongoose'

const ReservaSchema = new Schema({
    date: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    House: {
        type: Schema.Types.ObjectId,
        ref: 'house'
    }
})

export default model('reserva', ReservaSchema)