<script lang="ts">
	import './page.css';
	//import './calendar.css';
	import { onMount } from 'svelte';

	export let label: string;
	export let backgroundColor: string;
	export let textColor: string;

	$: console.log(label, backgroundColor, textColor);
	//console.log(label, backgroundColor, textColor);

	const currentDate = new Date();
	let year = currentDate.getFullYear();
	let month = currentDate.getMonth();
	let weeks: (string | number)[][] = [];
	$: console.log(weeks);
	const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

	function createWeeks() {
		const firstDay = new Date(year, month, 1).getDay();
		const daysInMonth = new Date(year, month + 1, 0).getDate();
		weeks = [];
		let date = 1;
		for (let index = 0; index < 6; index++) {
			let week: (string | number)[] = [];
			for (let i = 0; i < 7; i++) {
				if (index === 0 && i < firstDay) {
					week.push('');
				} else if (date > daysInMonth) {
					break;
				} else {
					week.push(date);
					date++;
				}
			}
			weeks.push(week);
		}
	}

	onMount(() => {
		createWeeks();
	});
</script>

<!-- class="max-w-sm w-full border bg-dark -->
<section class="bg-black h-auto w-fit flex justify-center p-4 m-10">
	<!-- <h1>{label}</h1> -->
	<table>
		<thead class="text-xs">
			<tr class="text-sm text-lightGray text-center justify-center p-4">
				{#each weekDays as day}
					<th class="text-sm p-2">{day}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each weeks as week}
				<tr class="text-sm text-white text-center justify-center p-2">
					{#each week as day}
						<td
							class="text-sm text-white text-center justify-center items-center hover:bg-indigo-100 hover:text-black rounded-full w-10 h-10"
						>
							{day}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</section>
