import mongoose from "mongoose";

export async function connection() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.fbhvqm5.mongodb.net/hero`
    );
    console.log("📮 Database connected");
  } catch (error) {
    console.log("💥 Database connection error", error);
  }
}
