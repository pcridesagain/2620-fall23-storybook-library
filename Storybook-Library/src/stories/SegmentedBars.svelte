<script>
    import './segmentedbars.css';
    //let numberOfSegments = 2;


    export let segments = ["name1", "name2", "name3"];
    let selected = segments[0];

    /**
   * @param {string} item
   */
    function setActive(item) {
        selected = item;
    }

    
</script>

<section>
    <div class="bg-black m-4 p-2 w-1 rounded-lg">
        <div class="m-4 flex bg-gray-800 text-white p-2 rounded-lg h-12 items-center">
            {#each segments as item}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="segment bg-gray-{selected === item ? '600' : '800'} p-2 m-1 rounded-lg w-2 text-center h-10 hover:bg-gray-600 hover:cursor-pointer" on:click={() => setActive(item)}>{item}</div>
            {/each}
        </div>
    </div>


</section>

<!-- <style>
    .m-4{
        margin: 4;
    }
    .bg-gray-800{
        background-color: gray;
    }
</style> -->