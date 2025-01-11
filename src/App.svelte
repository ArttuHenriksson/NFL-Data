<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing';

  import './app.css';
  import PlayerDataCard from './components/dataCards/PlayerDataCard.svelte';
</script>

<main class="bg-gray-500 min-h-screen">
  <PlayerDataCard />
</main>
