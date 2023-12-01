<script>
    import "@fortawesome/fontawesome-free/css/all.min.css"

	import '../app.postcss';
	let display = false;
	function handleFocus() {
		display = !display;
	}

	let inputValue = '';

	function resetForm() {
		inputValue = '';
	}
</script>

<div class="bg-black p-5 my-2">
	<form on:reset|preventDefault={resetForm}>
		<div class="flex items-center">
			<i class="bg-[#202325] rounded-l-lg fa fa-light fa-magnifying-glass text-white p-3.5" />
			<input
				type="text"
				bind:value={inputValue}
				placeholder="Search"
				class="outline-none border-none p-2 ml-0 mr-0 m-2 w-[12rem] input-field bg-[#202325] text-lg text-left focus:w-[10rem] text-white"
				on:focus={handleFocus}
				on:focusout={handleFocus}
			/>
			{#if !display}
				<i class=" bg-[#202325] rounded-r-lg text-white p-3.5 fa fa-light fa-microphone" />
			{/if}
			{#if display}
				<button
					on:click={resetForm}
					value="reset"
					class=" bg-[#202325] rounded-r-lg text-white p-2.5">X</button
				>
				<button class="text-gray-400 text-lg bg-black ml-2">Cancel</button>
			{/if}
		</div>
	</form>
</div>
