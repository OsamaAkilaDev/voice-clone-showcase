import { getCloudflareContext } from '@opennextjs/cloudflare';

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
    const { env } = getCloudflareContext();
    const votes = await env.VOTES.get('votes', 'json');
    return (votes as VoteCounts) || DEFAULT_VOTES;
  } catch (error) {
    console.error('Error reading votes from KV:', error);
    return DEFAULT_VOTES;
  }
}

export async function incrementVote(modelId: string): Promise<VoteCounts> {
  try {
    const { env } = getCloudflareContext();
    const votes = await getVotes();
    
    if (modelId in votes) {
      votes[modelId as keyof VoteCounts] += 1;
      await env.VOTES.put('votes', JSON.stringify(votes));
    }
    return votes;
  } catch (error) {
    console.error('Error updating votes in KV:', error);
    throw error;
  }
}
