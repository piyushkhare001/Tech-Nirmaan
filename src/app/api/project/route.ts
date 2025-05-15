
import { NextResponse } from 'next/server';
import { Project } from '@/models/Project';
import connectToDB from '@/lib/mongodb';

export async function GET() {
  try {
    await connectToDB();
    const projects = await Project.find();
    return NextResponse.json(projects);
  } catch (err) {
    console.error('[GET Projects Error]', err);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}