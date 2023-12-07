import Slider from './Slider.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Example/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    isActive: {
        control: {type: 'select'},
        options: ['active', 'inactive']
    }
  },
}

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Active= {
  args: {
    isActive: 'active'
  },
};

export const Inactive = {
  args: {
    isActive: 'inactive'
  },
};
