<script lang="ts">
  import type { Team } from '../../types/teams';
  import { getTeams } from '../../services/dataService';
  import { onMount } from 'svelte';
  let teams: Team[] = [];

  onMount(async () => {
    try {
      const { data: teamsData } = await getTeams();
      teams = teamsData;
    } catch (error) {
      console.error(error);
    }
  });
</script>

<main>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
    {#each teams as team}
      <div
        class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
      >
        <div class="bg-gradient-to-r from-red-500 to-blue-600 p-4 text-white">
          <div class="flex justify-center mb-3"></div>
          <h3 class="text-xl font-bold text-center mb-1">
            {team.full_name}
          </h3>
          <p class="text-center text-blue-100">{team.division}</p>
        </div>

        <div class="p-4">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="text-center">
              <p class="text-sm text-gray-500">College</p>
              <p class="font-semibold text-gray-800">{team.abbreviation}</p>
            </div>
            <div class="text-center">
              <p class="text-sm text-gray-500">Experience</p>
              <p class="font-semibold text-gray-800">{team.location}</p>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>
