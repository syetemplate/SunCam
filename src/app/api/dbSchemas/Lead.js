import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
