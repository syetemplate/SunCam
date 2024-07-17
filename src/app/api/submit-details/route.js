import { NextResponse } from 'next/server';
import Lead from '../dbSchemas/Lead';
import { connectDB } from '../mongoDb/mongodb';

export async function POST(req) {
    const { name, phone, email } = await req.json();

    try {
        // Connect to the database
        await connectDB();

        // Create a new lead
        const lead = new Lead({ name, phone, email });
        await lead.save();

        return NextResponse.json({ message: 'Details submitted successfully', lead }, { status: 200 });
    } catch (error) {
        console.error("Error saving lead:", error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
