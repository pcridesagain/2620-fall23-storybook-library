<script>
  export let text = "Cancel";
  export let color = "cancel";
  export let size = "md";
  let colors = {
      cancel: 'bg-[#e7e7ff] text-[#6b4eff] hover:bg-[#d6d6ff] hover:text-[#6b4eff]',
      active: 'bg-[#6b4eff] text-[#ffffff] hover:bg-[#5a3dc8] hover:text-[#ffffff]'
  };
  let sizes = {
      sm: 'px-[16px] h-[32px]',
      md: 'px-[52px] h-[48px]',
      lg: 'w-[155.5px] h-[48px]'
  };
</script>

<button class={`rounded-full text-center border-none ${colors[color] || colors.cancel} ${sizes[size] || sizes.md}`}>
  {text}
</button>
