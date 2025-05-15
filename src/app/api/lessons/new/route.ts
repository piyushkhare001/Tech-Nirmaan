import  connectToDB  from '@/lib/mongodb';
import { Lesson } from '@/models/lesson';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectToDB();
  const body = await req.json();
  const lesson = await Lesson.create(body);
  return NextResponse.json(lesson);
}
