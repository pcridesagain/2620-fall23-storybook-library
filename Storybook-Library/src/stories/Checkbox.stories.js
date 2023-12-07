import Checkbox from './Checkbox.svelte';
import 'tailwindcss/tailwind.css';
export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        name: { control: 'text' },
        type: { control: { type: 'select', options: ['regular', 'disabled'] } },
        color: { control: 'text' },
    },
};


export const Regular = {
    args: {
        type: 'regular',
    },
};

export const Disabled ={
    args: {
        type: 'disabled',
    },
};