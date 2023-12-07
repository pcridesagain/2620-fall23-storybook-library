<script>
	import '@fortawesome/fontawesome-free/css/all.min.css'

	// primary, secondary, outline, transparent
	// lg, sm
	import '../app.postcss';

	export let type = 'primary';
	export let isLarge = true;
</script>

{#if type === 'primary'}
	<button
		class="rounded-full bg-primaryBlue block my-2 {isLarge ? 'h-12 w-12' : 'h-8 w-8'} active:bg-darkBlue disabled:bg-darkGray group"
	>
		<i class="fa-regular fa-circle {isLarge ? 'text-lg' : 'fa-xs'} text-white group-disabled:text-lightGray" />
	</button>
<!-- 	<button
		class="rounded-full bg-primaryBlue block my-2 h-8 w-8 active:bg-darkBlue disabled:bg-darkGray group"
	>
		<i class="fa-regular fa-circle fa-xs text-white group-disabled:text-lightGray" />
	</button> -->
{/if}

{#if type === 'secondary'}
	<button
		class="rounded-full bg-lighterBlue block my-2 {isLarge ? 'h-12 w-12' : 'h-8 w-8'} active:bg-lightBlue disabled:bg-darkGray group"
	>
		<i class="fa-regular fa-circle {isLarge ? 'text-lg' : 'fa-xs'} text-darkBlue group-disabled:text-lightGray" />
	</button>
<!-- 	<button
		class="rounded-full bg-lighterBlue block my-2 h-8 w-8 active:bg-lightBlue disabled:bg-darkGray group"
	>
		<i class="fa-regular fa-circle fa-xs text-darkBlue group-disabled:text-lightGray" />
	</button> -->
{/if}

{#if type === 'outline'}
	<button
		class="rounded-full border-2 border-lightBlue block my-2 {isLarge ? 'h-12 w-12' : 'h-8 w-8'} active:border-primaryBlue disabled:border-darkGray group"
	>
		<i
			class="fa-regular fa-circle {isLarge ? 'text-lg' : 'fa-xs'} text-lightBlue group-active:text-primaryBlue group-disabled:text-darkGray"
		/>
	</button>
<!-- 	<button
		class="rounded-full border-2 border-lightBlue block my-2 h-8 w-8 active:border-primaryBlue disabled:border-darkGray group"
	>
		<i
			class="fa-regular fa-circle fa-xs text-lightBlue group-active:text-primaryBlue group-disabled:text-darkGray"
		/>
	</button> -->
{/if}

{#if type === 'transparent'}
	<button class="rounded-full block my-2 {isLarge ? 'h-12 w-12' : 'h-8 w-8'} active:bg-lightBlue group">
		<i
			class="fa-regular fa-circle {isLarge ? 'text-lg' : 'fa-xs'} text-lightBlue group-active:text-primaryBlue group-disabled:text-darkGray"
		/>
	</button>
<!-- 	<button class="rounded-full block my-2 h-8 w-8 active:bg-lightBlue group">
		<i
			class="fa-regular fa-circle fa-xs text-lightBlue group-active:text-primaryBlue group-disabled:text-darkGray"
		/>
	</button> -->
{/if}
