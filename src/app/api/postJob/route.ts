/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextApiRequest, NextApiResponse } from 'next';
import Job from '../../../models/Job';
import dbConnect from '../../../lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: NextApiResponse) {
  try {
    await dbConnect(); // Ensure DB connection is established

    const { companyName, applyLink, lastDateToApply, location } = await req.json();



    // Create the new job in the database
    const newJob = await Job.create({
      companyName,
      applyLink,
      lastDateToApply,
      location,
    });

    // Send the response back with the created job data
    return NextResponse.json(newJob);
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json({ error: 'Failed to create job' });
  }
}
