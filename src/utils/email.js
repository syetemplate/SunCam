import emailjs from 'emailjs-com';

const sendEmail = async ({ name, phone, email, to_email }) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const templateParams = {
        to_name: 'Website Owner',
        from_name: name,
        user_name: name,
        user_phone: phone,
        user_email: email,
        to_email: to_email
    };

    try {
        await emailjs.send(serviceID, templateID, templateParams, userID);
        console.log(`Email sent successfully to ${to_email}`);
    } catch (error) {
        console.error(`Error sending email to ${to_email}:`, error);
    }
};

export default sendEmail;
