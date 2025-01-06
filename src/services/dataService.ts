import { BalldontlieAPI, type NFLPlayer } from '@balldontlie/sdk';
import type { Team } from '../types/teams';
import type { Player } from '../types/players';
const balldontlieAPI = new BalldontlieAPI({
  apiKey: import.meta.env.VITE_BALLDONTLIE_API_KEY,
});

export async function getTeams(): Promise<{ data: Team[] }> {
  try {
    const { data: teams } = await balldontlieAPI.nfl.getTeams();
    return { data: teams };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPlayers(): Promise<{ data: Player[] }> {
  try {
    const { data: players } = await balldontlieAPI.nfl.getPlayers();
    return { data: players };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
