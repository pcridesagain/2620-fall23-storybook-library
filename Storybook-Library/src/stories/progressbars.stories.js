// Button.stories.js

import ProgressBar from './progressbars.svelte';

export default {
  component: ProgressBar,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/svelte/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: () => ({
    Component: ProgressBar,
    props: {
      primary: true,
      label: 'ProgressBar',
    },
  }),
};