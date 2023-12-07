<script lang="ts">
    import './input.css'
    export let label = "Input Label";
    export let placeholder = "Input text";
    export let border = {
        blueBorder: '.blueBorder',
        redBorder: '.redBorder',
        grayBorder: '.grayBorder'
    }
</script>

<div>
    <div class="bg">
        <label for="input-field">{label}</label>
        <input class={`input ${border}`} type="text" placeholder={placeholder}>
    </div>
</div>