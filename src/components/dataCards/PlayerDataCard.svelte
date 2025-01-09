<script lang="ts">
  import type { Player } from '../../types/players';
  import { getPlayers } from '../../services/dataService';
  let players: Player[] = [];

  const fetchPlayers = async () => {
    try {
      const { data: playersData } = await getPlayers();
      players = playersData;
    } catch (error) {
      console.error(error);
    }
  };
  fetchPlayers();
</script>

<main>
  <div class="grid grid-cols-1 gap-4 mt-12 justify-center text-center">
    {#each players as player}
      <div>
        <h5 class="font-bold">{player.first_name} {player.last_name}</h5>
        <hr />
        <p>Position: {player.position}</p>
        <p>College: {player.college}</p>
      </div>
    {/each}
  </div>
</main>
