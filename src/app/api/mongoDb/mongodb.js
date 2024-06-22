import mongoose from "mongoose";

// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting
// 4 = unauthorized (deprecated in newer versions of Mongoose)

export const connectDB = async () => {
    const connectionState = mongoose.connection.readyState;
    console.log({ connectionState });

    // If already connected or currently connecting do nothing
    if (connectionState === 1 || connectionState === 2) {
        console.log("Already connected to or connecting to MongoDB. No action required.");
        return;
    }

    // If disconnecting, wait for it to complete
    if (connectionState === 3) {
        console.log("Connection is disconnecting. Waiting for disconnection to complete...");
        await new Promise(resolve => mongoose.connection.once('disconnected', resolve));
        console.log("Disconnection complete.");
    }

    // Connection is disconnected or was just disconnected
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};
