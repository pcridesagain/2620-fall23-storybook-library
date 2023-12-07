import Calendar from './Calendar.svelte';


export default {
	component: Calendar
};

export const Primary = {
	render: (args: string) => ({
		Component: Calendar,
		props: args
	}),
	args: {
		//backgroundColor: '#ffff00',
		label: 'Calendar'
		//textColor: '#ffffff'
	}
};

export const Secondary = {
	render: (args: any) => ({
		Component: Calendar,
		props: args
	}),
	args: {
		backgroundColor: '#00FFFF',
		label: 'Calendar'
	}
};
