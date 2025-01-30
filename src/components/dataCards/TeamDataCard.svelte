<script lang="ts">
  import type { Team } from '../../types/teams';
  import { getTeams } from '../../services/dataService';
  import { onMount } from 'svelte';
  import { BarLoader } from 'svelte-loading-spinners';
  let teams: Team[] = [];
  let isLoading = true;
  const getLogo = (teamName: string): string => {
    const logoName = teamName;
    return `/logos/${logoName}.png`;
  };

  onMount(async () => {
    try {
      const { data: teamsData } = await getTeams();
      teams = teamsData;
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        isLoading = false;
      }, 1500);
    }
  });
</script>

<main>
  {#if isLoading}
    <div class="flex justify-center items-center h-screen">
      <BarLoader size={120} color="#FFFFFF" />
    </div>
  {:else}
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch mt-12"
    >
      {#each teams as team}
        <div
          class="bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 h-full flex flex-col justify-between"
        >
          <!-- Team Header with Logo -->
          <div
            class="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-700 to-gray-800"
          >
            <img
              src={getLogo(team.name)}
              alt="{team.full_name} logo"
              class="w-20 h-22 rounded-full object-contain bg-gray-700 p-1"
            />
            <div>
              <h2 class="text-xl font-semibold text-white leading-tight">
                {team.full_name}
              </h2>
              <p class="text-sm text-gray-400">{team.division}</p>
            </div>
          </div>

          <!-- Team Details -->
          <div class="grid grid-cols-2 gap-4 p-6 bg-gray-900">
            <div class="bg-gray-700 rounded-md p-4">
              <p class="text-xs text-gray-400">Abbreviation</p>
              <p class="text-sm font-semibold">{team.abbreviation}</p>
            </div>
            <div class="bg-gray-700 rounded-md p-4">
              <p class="text-xs text-gray-400">Location</p>
              <p class="text-sm font-semibold">{team.location}</p>
            </div>
            <div class="bg-gray-700 rounded-md p-4 col-span-2">
              <p class="text-xs text-gray-400">Conference</p>
              <p class="text-sm font-semibold">{team.conference}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</main>
