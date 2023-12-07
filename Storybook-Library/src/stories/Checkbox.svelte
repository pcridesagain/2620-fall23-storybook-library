<script>
    import './checkbox.css'

	export let name = "Default";
	export let type = "regular"; // regular, disabled
	export let color = "indigo";
    import 'tailwindcss/tailwind.css';
</script>

<div class="testColor">
{#if type === "regular"}
	<label class="checkboxColor">
		<input type="checkbox" />
		{name}
	</label>
{:else if type === "disabled"}
	<label class="disabledCheckboxColor">
		<input type="checkbox"  checked />
		{name}
	</label>
{/if}
</div>