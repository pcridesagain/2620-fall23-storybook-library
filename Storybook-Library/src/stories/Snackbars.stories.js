import Snackbars from './Snackbars.svelte';

export default {
    component: Snackbars,
  }

  export const Basic = {
    name: 'I am the basic snackbar',
    render: () => ({
      Component: Snackbars,
      props: {
        basic: true,
        label: 'Basic Snackbar',
      },
    }),
  };

  export const Caption = {
    name: 'I am the caption snackbar',
    render: () => ({
      Component: Snackbars,
      props: {
        caption: true,
        label: 'Caption Snackbar',
      },
    }),
  };

  export const Action = {
    name: 'I am the action snackbar',
    render: () => ({
      Component: Snackbars,
      props: {
        action: true,
        label: 'Action Snackbar',
      },
    }),
  };