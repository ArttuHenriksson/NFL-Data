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
  <div>
    <ul>
      {#each players as player}
        <li class="text-blue-200 text-center mt-3">
          {player.first_name}
          {' '}{player.last_name}
        </li>
        <p>{player.position}</p>
      {/each}
    </ul>
  </div>
</main>
