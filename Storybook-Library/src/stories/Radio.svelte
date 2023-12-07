<script>
    import './radio.css'
	export let name = "Default";
	export let type = "regular"; // regular, disabled
	export let color = "indigo";
    
</script>

<div class="bg-black">
{#if type === "regular"}
	<label class="radioBtn">
		<input type="radio" />
		{name}
	</label>
{:else if type === "disabled"}
	<label class="disabledRadioBtn">
		<input type="radio" />
		{name}
	</label>
{/if}
</div>