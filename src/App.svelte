<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing';
  import TeamsPage from './pages/TeamsPage.svelte';
  import PlayersPage from './pages/PlayersPage.svelte';
  import './app.css';
  import Navigation from './components/ui/Navigation.svelte';
</script>

<main>
  <Router>
    <Navigation />
    <Route path="/teams" component={TeamsPage} />
    <Route path="/players" component={PlayersPage} />
  </Router>
</main>
