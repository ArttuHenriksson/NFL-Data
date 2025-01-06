<script lang="ts">
  import TeamDataCard from './components/dataCards/TeamDataCard.svelte';
  import './app.css';
  import PlayerDataCard from './components/dataCards/PlayerDataCard.svelte';
</script>

<main>
  <div class="flex justify-center text-center">
    <TeamDataCard />
    <PlayerDataCard />
  </div>
  <p>Mitä vittua nyt taas?</p>
</main>
