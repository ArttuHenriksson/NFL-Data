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

export async function getPlayers(
  perPage: number = 16,
  cursor: number
): Promise<{ data: Player[]; meta: { next_cursor: number | undefined } }> {
  try {
    const { data: players, meta } = await balldontlieAPI.nfl.getPlayers({
      per_page: perPage,
      cursor: cursor,
    });
    return {
      data: players,
      meta: { next_cursor: meta?.next_cursor ?? 0 },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
