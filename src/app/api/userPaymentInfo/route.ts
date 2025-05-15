

import { NextRequest, NextResponse } from "next/server";
import  connectToDB from '@/lib/mongodb';
import { UserSubmission } from "@/models/UserSubmission";


export async function GET() {
  try {
    await connectToDB();
    const submissions = await UserSubmission.find().sort({ createdAt: -1 });

    return NextResponse.json({
      message: "All submissions fetched successfully",
      data: submissions,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Server error while fetching user submissions" },
      { status: 500 }
    );
  }
}


export  async function POST(req: NextRequest) {


  const {  formData } =  await req.json();


  const { name, email, phone, transactionId } = formData || {};



  try {
    await connectToDB();

    const submission = await UserSubmission.create({
      name,
      email,
      phone,
      transactionId,
    });

    return NextResponse.json({ message: "Data saved", data: submission });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ message: "Server error" });
  }
}
