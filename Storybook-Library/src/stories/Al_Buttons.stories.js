import Button from './Al_Buttons.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'transparent']
    },
    isLarge: {
      control: { type: 'boolean' },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = {
  args: {
    type: 'primary',
    isLarge: true,
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
    isLarge: true,
  },
};

export const Outline = {
  args: {
    type: 'outline',
    isLarge: true,
  },
};

export const Transparent = {
  args: {
    type: 'transparent',
    isLarge: true,
  },
};
