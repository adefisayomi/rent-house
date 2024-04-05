import mongoose, { Document, Model, Schema } from 'mongoose';

export interface VerificationTokenInterface extends Document {
    identifier: string;
    token: string;
    expires: Date;
}

const VerificationTokenSchema: Schema<VerificationTokenInterface> = new Schema({
    identifier: { type: String, required: true, unique: true },
    token: { type: String, required: true },
    expires: { type: Date, required: true },
});

export const VerificationToken: Model<VerificationTokenInterface> = mongoose.models.VerificationToken || mongoose.model<VerificationTokenInterface>('VerificationToken', VerificationTokenSchema);
