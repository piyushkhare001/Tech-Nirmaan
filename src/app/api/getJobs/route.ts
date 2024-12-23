/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import Job from "@/models/Job"; // Ensure this path is correct
import dbConnect from "@/lib/dbConnect"; // Ensure this path is correct

export async function GET(req: Request) {
  await dbConnect();

  try {
    const jobs = await Job.find();
    console.log("jobs:", jobs);
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}
