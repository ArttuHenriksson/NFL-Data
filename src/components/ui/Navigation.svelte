<script lang="ts">
  import { Link } from 'svelte-routing';
</script>

<main>
  <nav class="bg-gray-900 text-white py-4">
    <ul class="flex justify-center space-x-8">
      <li>
        <Link to="/players" class="text-lg font-semibold hover:underline">
          Players
        </Link>
      </li>
      <li>
        <Link to="/teams" class="text-lg font-semibold hover:underline">
          Teams
        </Link>
      </li>
    </ul>
  </nav>
</main>
