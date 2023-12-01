<script>
    export let sections = [
      { buttons: [1, 2], titleColors: ['indigo-400', 'gray-500'], buttonColors: ['indigo-400', 'gray-500'] },
      { buttons: [2, 1, 2], titleColors: ['gray-500', 'gray-500','gray-500'], buttonColors: ['gray-500','indigo-400','gray-500' ] },
      { buttons: [2, 2, 1, 2], titleColors: ['gray-500', 'gray-500', 'indigo-400', 'gray-500'], buttonColors: ['gray-500', 'gray-500', 'indigo-400', 'gray-500'] },
      { buttons: [2, 2, 2, 2, 1], titleColors: ['gray-500', 'gray-500', 'gray-500', 'indigo-400', 'gray-500'], buttonColors: ['gray-500', 'gray-500', 'gray-500', 'indigo-400', 'gray-500'] },
      
    ];
  </script>
  
  <svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" />
  </svelte:head>
  
  {#each sections as section, i}
    <nav class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref></nav>
  
    <div class="flex justify-evenly pt-{i + 6}">
      {#each section.buttons as button, j}
        <button class="border {section.buttonColors[j] === 'indigo-400' ? 'border-indigo-400' : 'border-gray-500'} rounded-full px-3 py-3 hover:bg-{section.buttonColors[j]}"></button>
      {/each}
    </div>
  
    <div class="flex justify-evenly pt-2">
      {#each section.titleColors as color, k}
        <p class="text-{color}">Title</p>
      {/each}
    </div>
  {/each}
  