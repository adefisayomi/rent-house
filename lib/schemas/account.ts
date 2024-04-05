import mongoose, { Document, Model, Schema } from 'mongoose';

export interface AccountInterface extends Document {
    userId: Schema.Types.ObjectId;
    type?: string;
    provider?: string;
    providerAccountId?: string;
    refresh_token?: string;
    access_token?: string;
    expires_at: Date;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
}

const AccountSchema: Schema<AccountInterface> = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    expires_at: { type: Date, required: true },
    type: String,
    provider: String,
    providerAccountId: String,
    refresh_token: String,
    access_token: String,
    token_type: String,
    scope: String,
    id_token: String,
    session_state: String,
});

export const Account: Model<AccountInterface> = mongoose.models.Account || mongoose.model<AccountInterface>('Account', AccountSchema);
