<script lang="ts">
    import './input.css'
    let label = "Input Label";
    let placeholder = "Input text";
    export let border : "blue" | "red" | "gray";
    export let primary = false;

    $: mode = primary ? 'input--primary' : 'input--secondary';

</script>

<div>
    <div class="bg">
        <label for="input-field">{label}</label>
        <input class="input input--${border}" type="text" placeholder={placeholder}>
    </div>
</div>