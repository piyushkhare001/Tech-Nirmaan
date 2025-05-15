// /app/api/project/new/route.ts
import  connectToDB from '@/lib/mongodb';
import { Project } from '@/models/Project';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectToDB();
    
    const { name, description , image } = await req.json();

    if (!name || !description || !image) {
      return NextResponse.json({ error: 'Missing name or description' }, { status: 400 });
    }

    const project = await Project.create({ name, description , image });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
