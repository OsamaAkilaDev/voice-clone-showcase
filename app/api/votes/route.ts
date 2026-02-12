import { NextRequest, NextResponse } from 'next/server';
import { getVotes, incrementVote } from '../../lib/db';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET() {
  try {
    const votes = await getVotes();
    return NextResponse.json(votes);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch votes' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { modelId } = await req.json();
    if (!modelId) {
      return NextResponse.json({ error: 'Model ID is required' }, { status: 400 });
    }
    const updatedVotes = await incrementVote(modelId);
    return NextResponse.json(updatedVotes);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update vote' }, { status: 500 });
  }
}
