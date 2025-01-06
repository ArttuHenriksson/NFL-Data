<script lang="ts">
  import type { Team } from '../../types/teams';
  import { getTeams } from '../../services/dataService';

  let teams: Team[] = [];

  const fetchTeams = async () => {
    try {
      const { data: teamsData } = await getTeams();
      teams = teamsData;
    } catch (error) {
      console.error(error);
    }
  };
  fetchTeams();
</script>

<main>
  <h1 class="text-3xl font-bold">Teams</h1>
  <h6 class="text-sm">{teams.length}</h6>
  <ul>
    {#each teams as team}
      <li class="text-blue-200 text-center">{team.name}</li>
      <li>{team.location}</li>
    {/each}
  </ul>
</main>
