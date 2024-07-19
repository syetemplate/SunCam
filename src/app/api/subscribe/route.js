import { NextResponse } from 'next/server';
import { connectDB } from '../mongoDb/mongodb';
import Subscriber from '../dbSchemas/Subscriber';

export async function POST(req) {
    const { email } = await req.json();

    try {
        // Connect to the database
        await connectDB();

        // Create a new subscriber
        const subscriber = new Subscriber({ email });
        await subscriber.save();

        return NextResponse.json({ message: 'Subscribed successfully', subscriber }, { status: 200 });
    } catch (error) {
        console.error("Error saving subscriber:", error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
