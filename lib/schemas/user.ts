import mongoose, { Document, Model, Schema } from 'mongoose';

export interface UserInterface extends Document {
    email: string;
    name?: string;
    image?: string;
    emailVerified?: boolean;
    password?: string;
}

const UserSchema: Schema<UserInterface> = new Schema({
    email: { type: String, required: true, unique: true },
    name: String,
    image: String,
    emailVerified: Boolean,
    password: String
}, {timestamps: true});

export const User: Model<UserInterface> = mongoose.models.User || mongoose.model<UserInterface>('User', UserSchema);
