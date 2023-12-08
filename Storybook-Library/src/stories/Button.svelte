<script>
  import '../app.postcss';

  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * @type {string} What background color to use
   */
  export let backgroundColor = undefined;

  /**
   * @type {'small' | 'medium' | 'large'} How large should the button be?
   */
  export let size = 'medium';

  /**
   * @type {string} Button contents
   */
  export let label;

  $: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  $: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<button
  type="button"
  class={'bg-black'}
  {style}
  on:click
>
  {label}
</button>
