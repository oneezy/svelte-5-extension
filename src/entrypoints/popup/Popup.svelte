<script lang="ts">
  import Counter from "@/lib/components/Counter.svelte";
  const dashboardUrl = browser.runtime.getURL('/dashboard.html')
</script>

<main class="p-4 min-w-[300px] min-h-[300px] grid grid-rows-[auto_1fr] gap-4">
  <h1 class="text-3xl font-bold">Popup</h1>
  
  <!-- Neon Pink (broke) -->
  <Counter class="bg-neon-pink" />

  <section class="flex flex-col gap-2">
    <a href="{dashboardUrl}" target="_blank">Open Dashboard</a>
  </section>

  <!-- create a form to submit a message to the background script -->
  <form class="flex flex-col gap-2">
    <input type="text" name="message" placeholder="Message" />
    <button type="submit">Submit</button>
  </form>
</main>