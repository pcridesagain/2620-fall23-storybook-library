<script lang="js">
	export let side = "right" // left OR right OR none (for the plus)
export let size = "short" // short OR long
export let style = "filledIn" // filledIn OR outline

let sizeCode = ""
let styleCSS = ""
let constCSS = ""

// long OR short & left OR right

// SHORT
if (size === "short") {
  constCSS = `font-bold py-2 px-4 rounded-full `
}
// LONG
else if (size === "long") {
  if (side === "right") {
    constCSS = `py-2 px-4 rounded-full flex items-center w-80 h-10 m-3 `
  } else if (side === "left") {
    constCSS = `bg-[#31343b] text-white font-bold py-2 px-4 rounded-full flex items-center w-80 h-10 m-3`
  } else if (side === "none") {
    sizeCode = `Chip`
    constCSS = `py-2 px-4 rounded-full flex justify-center w-80 h-10 m-3`
  }
}
// Styles - filledIn OR outline
if (style === "filledIn") {
  styleCSS = "bg-[#31343b] text-white"
} else if (style === "outline") {
  styleCSS = "border border-[#31343b] bg-transparent text-white"
}
//let button = document.querySelector('button')
//button.innerHTML = sizeCode

</script>

<!-- SHORT -->
{#if size=="short"}
<button class={`${constCSS} ${styleCSS} m-2`}>
    {#if side=="right"}
    Chip +
      {/if}
      <!--LEFT-->
      {#if side=="left"}
      + Chip
      {/if}
      <!--NONE-->
      {#if side=="none"}
      Chip
      {/if}
</button>
{/if}
<!-- LONG-->
{#if size=="long"}
<button class={`${constCSS} ${styleCSS}`}>
    <!--RIGHT-->
    {#if side=="right"}
    <span class="flex-1 text-center">Chip</span>
      <span class="text-xl">+</span>
      {/if}
      <!--LEFT-->
      {#if side=="left"}
      <span class="text-xl">+</span>
    <span class="flex-1 text-center">Chip</span>
      {/if}
      <!--NONE-->
      {#if side=="none"}
      Chip
      {/if}
</button>
{/if}