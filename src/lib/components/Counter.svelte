<script lang="ts">
	let { ...props } = $props<{ class?: string }>();
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<button {...props} class="bg-blue-500 text-white {props.class}" onclick={increment}>
	clicks: {count}
</button>