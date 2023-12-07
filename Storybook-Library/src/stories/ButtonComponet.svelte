
<!-- ButtonComponent.svelte -->
<script>
  import "../app.css";
  export let name = "Default";
  export let type = "regular"; // regular, flat, disabled
  export let size = "sl"; // sm, md, lg
  export let color = "purple";
  export let borderColor = "violet";
  
  const sizes = {
    "sl" : " mt-1 w-[115px] h-12 px-8 py-4 rounded-[48px] justify-center items-center inline-flex mb-4",
    "md" : "mt-1 mb-4 w-[327px] h-12 opacity-100 p-0 rounded-[48px] top-24 items-center justify-center",
    "lg" : "px-7 py-5 pr-8 pl-8",
    "xlg" : "px-10 py-5 pr-8 pl-8",
  };
  
  const colors = {
    "purple": "bg-indigo-500 text-white",
    "purple1": "bg-indigo-600 text-white",
    "gray": "bg-gray-800 text-gray-500",
    "lightpurple": "bg-indigo-200 text-indigo-600",
    "violet": "bg-violet-400 text-indigo-600",
  "indigo": "bg-indigo-200 text-indigo-500",
  };
  
  const borderColors = {
    "violet": "border-violet-400 text-violet-400",
    "indigo": "border-indigo-500 text-indigo-500",
    "zinc": "border-zinc-700 text-zinc-700",
    // Add more custom border colors here
    
  };

</script>

{#if type === "regular"}
  <button
    class={`rounded-full ${(color in colors) ? colors[color]: colors["purple"]} font-medium ${(size in sizes) ? sizes[size] : sizes["md"]}`}
  >
    {name}
  </button>
{/if}

{#if type === "flat"}
  <button
    class={`rounded-full font-medium border border-none text-indigo-500 ${(size in sizes) ? sizes[size] : sizes["md"]}`}
  >
    {name}
  </button>
{/if}

{#if type === "disabled"}
  <button
    class={`rounded-full font-medium border-2 ${(borderColor in borderColors) ? borderColors[borderColor]: borderColors["violet"]} ${size in sizes ? sizes[size] : sizes["md"]}`}
  >
    {name}
  </button>
{/if}
