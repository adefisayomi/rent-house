import mongoose, { Document, Model, Schema } from 'mongoose';

export interface SessionInterface extends Document {
    userId: mongoose.Types.ObjectId;
    expires: Date;
    sessionToken?: string;
}

const SessionSchema: Schema<SessionInterface> = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    expires: { type: Date, required: true },
    sessionToken: String,
});

export const Session: Model<SessionInterface> = mongoose.models.Session || mongoose.model<SessionInterface>('Session', SessionSchema);
