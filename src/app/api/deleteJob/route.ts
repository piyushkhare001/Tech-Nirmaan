import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Job from '@/models/Job';

export async function DELETE(req: Request) {
  await dbConnect();

  const { searchParams } = new URL(req.url); // Extract query parameters
  const id = searchParams.get('id'); // Get the 'id' parameter

  if (!id) {
    return NextResponse.json({ error: 'Job ID is required' }, { status: 400 });
  }

  try {
    const deletedJob = await Job.findByIdAndDelete(id); // Delete the job by ID
    if (!deletedJob) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
  }
}
