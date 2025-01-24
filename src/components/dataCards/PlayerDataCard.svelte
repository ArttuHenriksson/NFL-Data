<script lang="ts">
  import { onMount } from 'svelte';
  import type { Player } from '../../types/players';
  import { getPlayers } from '../../services/dataService';
  import { RingLoader } from 'svelte-loading-spinners';
  import { User } from 'lucide-svelte';

  let players: Player[] = [];
  let isLoading = true;

  onMount(async () => {
    try {
      const { data: playersData } = await getPlayers(2, 0);
      players = playersData;
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
      <RingLoader color="blue" size="100" />
    </div>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {#each players as player}
        <div
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
        >
          <div class="bg-gradient-to-r from-red-500 to-blue-600 p-4 text-white">
            <div class="flex justify-center mb-3"></div>
            <h3 class="text-xl font-bold text-center mb-1">
              {player.first_name}
              {player.last_name}
            </h3>
            <p class="text-center text-blue-100">{player.position}</p>
          </div>

          <div class="p-4">
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="text-center">
                <p class="text-sm text-gray-500">College</p>
                <p class="font-semibold text-gray-800">{player.college}</p>
              </div>
              <div class="text-center">
                <p class="text-sm text-gray-500">Experience</p>
                <p class="font-semibold text-gray-800">{player.experience}</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="text-center">
                <p class="text-sm text-gray-500">Height</p>
                <p class="font-semibold text-gray-800">
                  {player.height || '6\'2"'}
                </p>
              </div>
              <div class="text-center">
                <p class="text-sm text-gray-500">Weight</p>
                <p class="font-semibold text-gray-800">
                  {player.weight || '215 lbs'}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="text-center">
                <p class="text-sm text-gray-500">Age</p>
                <p class="font-semibold text-gray-800">{player.age || '27'}</p>
              </div>
              <div class="text-center">
                <p class="text-sm text-gray-500">Jersey</p>
                <p class="font-semibold text-gray-800">
                  #{player.jersey_number || '84'}
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 border-t">
            <p class="text-center text-sm text-gray-600">
              {player.team.full_name}
            </p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</main>
