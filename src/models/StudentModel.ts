import { model, Schema } from 'mongoose';

const studentSchema = new Schema({
    id: {
        type: Number,
    },
    
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    cpf: {
        type: String,
        required: true,
        unique: true,
    },

    age: {
        type: Number,
        required: true,
    }
});

export const UserModel = model("students", studentSchema);