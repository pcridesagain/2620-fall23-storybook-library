import Radio from './Radio.svelte';


export default {
    title: 'Example/Radio',
    component: Radio,
    argTypes: {
        name: { control: 'text' },
        type: { control: { type: 'select', options: ['regular', 'disabled'] } },
        color: { control: 'text' },
    },
};

// Regular state story
// @ts-ignore
export const Regular = (args) => ({
    Component: Radio,
    props: {
        ...args,
        type: 'regular',
    },
});

// Disabled state story
// @ts-ignore
export const Disabled = (args) => ({
    Component: Radio,
    props: {
        ...args,
        type: 'disabled',
    },
});