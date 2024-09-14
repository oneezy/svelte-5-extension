<script lang="ts">
  const dashboardUrl = browser.runtime.getURL('/dashboard.html')
  const test = browser.runtime.getURL('/test.html')
</script>

<main class="p-4 min-w-[300px] min-h-[300px] grid grid-rows-[auto_1fr] gap-4 bg-gray-500">
  <h1 class="text-3xl font-bold">Popup</h1>

  <section class="flex flex-col gap-2">
    <a href="{dashboardUrl}" target="_blank">Open Dashboard</a>
    <a href="{test}" target="_blank">Open Dashboard</a>
  </section>
</main>