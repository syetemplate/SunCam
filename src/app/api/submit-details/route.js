import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';
import Bluebird from 'bluebird';
import content from '@/content';
import { connectDB } from '../mongoDb/mongodb';
import Lead from '../dbSchemas/Lead';

const sendEmail = async ({ name, phone, email, to_email }) => {
    const serviceID = process.env.EMAILJS_SERVICE_ID;
    const templateID = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    const templateParams = {
        to_name: 'Website Owner',
        from_name: name,
        user_name: name,
        user_phone: phone,
        user_email: email,
        to_email: to_email
    };

    try {
        await emailjs.send(serviceID, templateID, templateParams, {
            publicKey,
            privateKey,
        });
        console.log(`Email sent successfully to ${to_email}`);
    } catch (error) {
        console.error(`Error sending email to ${to_email}:`, error);
    }
};

export async function POST(req) {
    const { name, phone, email } = await req.json();

    try {
        // Connect to the database
        await connectDB();

        // Create a new lead
        const lead = new Lead({ name, phone, email });
        await lead.save();

        await Bluebird.map(content.checkout.notificationEmailList, async to_email => {
            await sendEmail({ name, phone, email, to_email });
        }, { concurrency: 5 });

        return NextResponse.json({ message: 'Details submitted successfully', lead }, { status: 200 });
    } catch (error) {
        console.error("Error saving lead:", error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
