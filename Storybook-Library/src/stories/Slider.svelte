<script>
    export let isActive = 'active'
</script>

{#if isActive === 'active'}
<div class="bg-[#0F0E10] flex flex-col pt-[45px] pb-[45px] max-w-[423px] pl-[30px]">
    <input class="m-3 purple" id="topSlider" type="range">
</div>

<style>
    input[type=range] {
    -webkit-appearance: none;
    }
    #topSlider {
        max-width: 327px;
    }
    #topSlider::-webkit-slider-runnable-track {
        height: 4px;
    }
    #topSlider::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 24px;
        width: 24px;
        border-radius: 12px;
        margin-top:-10px;
    }
.purple::-webkit-slider-thumb {
    background-color: #6B4EFF;
}
.purple::-webkit-slider-runnable-track {
      background-color: #6B4EFF;
}
    .grey::-webkit-slider-thumb {
    background-color: #D3D3D3;
}
.grey::-webkit-slider-runnable-track {
      background-color: #D3D3D3;
}
    
</style>
{/if}

{#if isActive === 'inactive'}
<div class="bg-[#0F0E10] flex flex-col pt-[45px] pb-[45px] max-w-[423px] pl-[30px]">
    <input class="m-3 grey" id="topSlider" type="range">
</div>
{/if}