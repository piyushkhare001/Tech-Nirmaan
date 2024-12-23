/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextApiResponse } from 'next';
import Job from '../../../models/Job';
import dbConnect from '../../../lib/dbConnect';
import { NextResponse } from 'next/server';

export  async function GET(req: Request, res: NextApiResponse) {
  await dbConnect();


    try {
      const jobs = await Job.find();
      console.log("job" , jobs)
      return NextResponse.json(jobs);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch jobs' });
    }
  }

