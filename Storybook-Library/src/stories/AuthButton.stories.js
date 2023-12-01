
import AuthButton from './AuthButton.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction

export default {
    title: 'Example/AuthButton',
    component: AuthButton,
    tags: ['autodocs'],
    argTypes: {
        name: { control: 'text' },
        type: { control: 'text' },
        color: { control: 'text' },
    },

  };


// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const AppleType = {
  args: {
    name: 'Apple',
    type: 'apple',
    color: 'gray-900',
  },
};

export const GoogleType = {
  args: {
    name: 'Google',
    type: 'google',
    color: 'white',
  },
};

export const FacebookType = {
  args: {
    name: 'Facebook',
    type: 'facebook',
    color: 'blue-500',
  },
};

export const TwitterType = {
  args: {
    name: 'Twitter',
    type: 'twitter',
    color: 'blue-400',
  },
};
