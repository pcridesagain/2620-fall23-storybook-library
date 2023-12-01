<script>
    import './tabs.css';
    
    let menuItems = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
    let activeItem = 'Menu 1';

    const tabChange = (e) => {
        activeItem = e;
    };
</script>

<div>
    <ul class="flex justify-center flex-wrap">
        {#each menuItems as item}
            <li on:click={() => tabChange(item)} class:active={item === activeItem} class="m-10 text-lg">
                <div class="text-gray-400">
                    {item}
                </div>
            </li>
        {/each}
    </ul>
</div>