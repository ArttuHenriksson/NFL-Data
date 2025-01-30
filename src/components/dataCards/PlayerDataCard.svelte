<script lang="ts">
  import { onMount } from 'svelte';
  import type { Player } from '../../types/players';
  import { getPlayers } from '../../services/dataService';
  import { BarLoader } from 'svelte-loading-spinners';
  import Pagination from '../ui/Pagination.svelte';
  let players: Player[] = [];
  let isLoading = true;
  let currentPage = 1;
  let totalPages = 1;
  const perPage = 16;

  const getLogo = (teamName: string): string => {
    const logoName = teamName.split(' ').pop();
    return `/logos/${logoName}.png`;
  };

  const loadPlayers = async (page: number) => {
    try {
      const { data, meta } = await getPlayers(perPage, (page - 1) * perPage);
      players = data;
      totalPages = Math.ceil((meta?.next_cursor ?? 0) / perPage);
      currentPage = page;
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        isLoading = false;
      }, 1500);
    }
  };

  onMount(() => {
    loadPlayers(currentPage);
  });

  const handlePageChange = (page: number) => {
    currentPage = page;
    loadPlayers(page);
    console.log('Page changed to:', page);
  };
</script>

<main>
  {#if isLoading}
    <div class="flex justify-center items-center h-screen">
      <BarLoader size={120} color="#FFFFFF" />
    </div>
  {:else}
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch"
    >
      {#each players as player}
        <div
          class="bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 h-full flex flex-col justify-between"
        >
          <!-- Header with Logo -->
          <div
            class="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-700 to-gray-800"
          >
            <img
              src={getLogo(player.team.full_name)}
              alt="{player.team.full_name} logo"
              class="w-20 h-20 rounded-full object-contain bg-gray-700 p-1"
            />
            <div>
              <h2 class="text-xl font-semibold text-white leading-tight">
                {player.first_name}
                {player.last_name}
              </h2>
              <p class="text-sm text-gray-400">{player.team.full_name}</p>
            </div>
          </div>

          <!-- Player Stats -->
          <div class="grid grid-cols-2 gap-4 p-6 bg-gray-900">
            <div class="bg-gray-700 rounded-md p-4">
              <p class="text-xs text-gray-400">Position</p>
              <p class="text-sm font-semibold">{player.position}</p>
            </div>
            <div class="bg-gray-700 rounded-md p-4">
              <p class="text-xs text-gray-400">Number</p>
              <p class="text-sm font-semibold">
                #{player.jersey_number || '--'}
              </p>
            </div>
            <div class="bg-gray-700 rounded-md p-4">
              <p class="text-xs text-gray-400">Height</p>
              <p class="text-sm font-semibold">{player.height || "6'2"}</p>
            </div>
            <div class="bg-gray-700 rounded-md p-4">
              <p class="text-xs text-gray-400">Weight</p>
              <p class="text-sm font-semibold">{player.weight || '215 lbs'}</p>
            </div>
            <div class="bg-gray-700 rounded-md p-4">
              <p class="text-xs text-gray-400">Experience</p>
              <p class="text-sm font-semibold">{player.experience} years</p>
            </div>
            <div class="bg-gray-700 rounded-md p-4">
              <p class="text-xs text-gray-400">Age</p>
              <p class="text-sm font-semibold">{player.age || 'unknown'}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</main>
