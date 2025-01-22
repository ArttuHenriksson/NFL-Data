<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing';

  import './app.css';
  import PlayerDataCard from './components/dataCards/PlayerDataCard.svelte';
  import TeamDataCard from './components/dataCards/TeamDataCard.svelte';
</script>

<main class="bg-gray-500 min-h-screen">
  <PlayerDataCard />
  <!-- <TeamDataCard /> -->
</main>
