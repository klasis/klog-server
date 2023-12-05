import { Schema, model } from 'mongoose';

interface IUser {
    name: string;
    email: string;
}

const userSchema = new Schema<IUser> ({
    name: { type: String, required: true },
    email: { type: String, required: true }
});

const Users = model<IUser> ('users', userSchema);

module.exports = Users;