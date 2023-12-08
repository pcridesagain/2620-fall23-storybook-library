<script>
    export let basic
    export let caption
    export let action

    function fillCircle(){
    var circles = document.querySelectorAll("i");
        circles.forEach(function(circle) {
            circle.classList.toggle("fa-regular");
            circle.classList.toggle("fa-solid");
        });
}
</script>
<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
  <script src="https://kit.fontawesome.com/c0a01584c9.js" crossorigin="anonymous"></script>
</svelte:head>  

<div class="bg-black h-screen flex flex-col items-center">
        <h1 class="text-center p-4 text-pink-200">SNACKBARS COMPONENT KYLEE HARWARD</h1>
            {#if basic}
            <button on:click={fillCircle} class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 flex items-center max-w-md">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <p>Content</p>
            </button>
            {/if}

            {#if caption}
            <button on:click={fillCircle} class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 flex items-center max-w-md">
                <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                <div>
                <p>Content</p>
                <p class="text-gray-400 text-sm">Caption</p>
                </div>
            </button>
           {/if}

            {#if action}
            <div class="bg-indigo-600 text-white rounded m-6 p-3 w-3/4 grid grid-cols-2 max-w-md">
                <div class="flex items-center">
                    <i class="fa-regular fa-circle pr-4" style="color: #ffffff;"></i>
                    <div>
                        <p>Content</p>
                        <p class="text-gray-400 text-sm">Caption</p>
                    </div>
                </div>
                <p class="justify-self-end self-center ">Action</p>
            </div>
            {/if}
        </div>