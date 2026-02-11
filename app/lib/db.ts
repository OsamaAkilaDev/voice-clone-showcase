import fs from 'fs';
import path from 'path';

const VOTES_FILE = path.join(process.cwd(), 'app/data/votes.json');

export type VoteCounts = {
  qwen: number;
  fish: number;
  'eleven-normal': number;
  'eleven-flash': number;
  resemble: number;
};

const DEFAULT_VOTES: VoteCounts = {
  qwen: 0,
  fish: 0,
  'eleven-normal': 0,
  'eleven-flash': 0,
  resemble: 0,
};

export async function getVotes(): Promise<VoteCounts> {
  try {
    if (!fs.existsSync(VOTES_FILE)) {
      return DEFAULT_VOTES;
    }
    const data = fs.readFileSync(VOTES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading votes:', error);
    return DEFAULT_VOTES;
  }
}

export async function incrementVote(modelId: string): Promise<VoteCounts> {
  try {
    const votes = await getVotes();
    if (modelId in votes) {
      votes[modelId as keyof VoteCounts] += 1;
      fs.writeFileSync(VOTES_FILE, JSON.stringify(votes, null, 2));
    }
    return votes;
  } catch (error) {
    console.error('Error updating votes:', error);
    throw error;
  }
}
