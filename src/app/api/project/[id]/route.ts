import connectToDB from '@/lib/mongodb';
import { Project } from '@/models/Project';
import { NextResponse } from 'next/server';

// Get project by ID
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split('/').filter(Boolean).pop(); // Get ID from URL

    if (!id) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    await connectToDB();
    const project = await Project.findById(id);
    return NextResponse.json(project);
  } catch (err) {
    console.error('GET project error:', err);
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 });
  }
}

// Update project by ID
export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split('/').filter(Boolean).pop();

    if (!id) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    await connectToDB();
    const data = await req.json();
    const updated = await Project.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(updated);
  } catch (err) {
    console.error('PUT project error:', err);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

// Delete project by ID
export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split('/').filter(Boolean).pop();

    if (!id) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    await connectToDB();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('DELETE project error:', err);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
