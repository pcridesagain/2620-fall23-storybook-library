<script>
    export let text = "Default";
    export let type = "Success";
    import "../app.css";
  </script>
  
  {#if type == "Success"}
    <span
      class="py-2 px-4 bg-green-100 rounded-full overflow-hidden inline-flex items-center m-2"
    >
      <p
        class="text-green-600 text-base font-inter font-normal leading-4 break-words"
      >
        {text}
      </p>
    </span>
  {/if}
  
  {#if type == "Alert"}
    <span
      class="py-2 px-4 bg-red-100 rounded-full overflow-hidden inline-flex items-center m-2"
    >
      <p
        class="text-red-800 text-base font-inter font-normal leading-4 break-words"
      >
        {text}
      </p>
    </span>
  {/if}
  
  {#if type == "Warning"}
    <span
      class="py-2 px-4 bg-yellow-100 rounded-full overflow-hidden inline-flex items-center m-2"
    >
      <p
        class="text-yellow-900 text-base font-inter font-normal leading-4 break-words"
      >
        {text}
      </p>
    </span>
  {/if}
  
  {#if type == "Info"}
    <span
      class="py-2 px-4 bg-blue-100 rounded-full overflow-hidden inline-flex items-center m-2"
    >
      <p
        class="text-blue-900 text-base font-inter font-normal leading-4 break-words"
      >
        {text}
      </p>
    </span>
  {/if}
  
  {#if type == "Number"}
    <span
      class="py-2 px-3 bg-red-500 rounded-full overflow-hidden inline-flex items-center m-2"
    >
      <p
        class="text-white text-base font-inter font-normal leading-4 break-words"
      >
        {text}
      </p>
    </span>
  {/if}
  
  {#if type == "Blank"}
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" class="m-4">
      <circle cx="4" cy="4" r="4" fill="#FF5247" />
    </svg>
  {/if}
  