<script>
      import './switch.css'
    export let isChecked1 = false;
     export let isChecked2 = false;


    export let purple
    export let gray
  </script>
  <svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
  </svelte:head>

  {#if purple}
  <label class="flex items-center cursor-pointer">
  
    <div class="relative">
      <input type="checkbox" class="sr-only" bind:checked={isChecked1} />
      <div class="block h-32 w-56 transition-colors duration-300 ease-in-out rounded-full w-14" class:purple={isChecked1} class:light={!isChecked1}></div>
      <div class="absolute w-28 h-28 transition-transform duration-300 ease-in-out bg-white rounded-full left-1 top-2" class:translate-x={isChecked1}></div>
    </div>
  </label>
  {/if}

  {#if gray}
  <label class="flex items-center cursor-pointer mt-4">
  
    <div class="relative">
      <input type="checkbox" class="sr-only" bind:checked={isChecked2} />
      <div class="block h-32 w-56 transition-colors duration-300 ease-in-out rounded-full w-14 border-solid ink-border border-2" class:darker={isChecked2} class:none={!isChecked2}></div>
      <div class="absolute w-28 h-28 transition-transform duration-300 ease-in-out ink rounded-full left-1 top-2" class:translate-x={isChecked2}></div>
    </div>
  </label>
  {/if}
  
  <!-- Custom Colors -->
  <style>
      .light {
          background-color: #6C7072;
      }
      .purple {
          background-color: #6B4EFF;
      }
      .none {
          background-color: none;
      }
      .darker {
          background-color: #202325;
      }
      .ink-border {
          border-color: #303437;
      }
    .ink {
          background-color: #303437;
      }
    .translate-x {
      transform: translateX(100px);
    }
  </style>
  
  
  
  