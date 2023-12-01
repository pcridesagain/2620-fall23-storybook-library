<script>
    export let headingMessage = "Heading Message";
    export let bodyMessage = "Body Message"
    export let primaryButtonValue = "Button Text"
    export let secondaryButtonValue = 'Secondary Button Value'
	export let buttonBgColor = "Button Color"
	export let buttonTextColor = "Button Text Color"
	export let buttonHover = "Button Hover Color"
    export let h1Color = 'Heading Color'
    export let backgroundColor = 'Background Color'
    import Button from './Buttons.svelte';
        </script>
    
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    
    <div class='flex flex-wrap flex-col  items-center {backgroundColor} w-3/4 py-8 rounded-xl' id='popup'>
        
    <h1 class='text-center {h1Color} text-3xl my-8 font-extrabold'>
    {headingMessage}
    </h1>
    <p class='text-gray-400 text-center mb-8'>{bodyMessage}</p>
            
            <Button hover={buttonHover} bgColor={buttonBgColor} value={primaryButtonValue}/>
            <Button textColor={buttonTextColor} value={secondaryButtonValue}/>
        
    </div>