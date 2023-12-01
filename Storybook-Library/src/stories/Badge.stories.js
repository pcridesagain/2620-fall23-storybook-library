import Badge from './Badge.svelte';

export default {
    title: 'Example/Badge',
    component: Badge,
    argTypes: {
        backgroundColor: { control: 'color' },
        text: { 
            control: {type: 'select' },
            options: ['Success', 'Alert', 'Warning', 'Info', 'Number', 'Blank']
        },
        type: {
            control: { type: 'select' },
            options: ['Success', 'Alert', 'Warning', 'Info', 'Number', 'Blank'],
        },
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'Badge',
    },
};
