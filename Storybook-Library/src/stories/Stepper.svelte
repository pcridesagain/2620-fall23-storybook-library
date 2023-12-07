<script>
    export let size = 'medium';
    export let backgroundColor = 'black';
    export let color = 'white';
</script>

<div id="stepper" class="{size}" style="background-color: {backgroundColor};">
    <p style="color: {color};">-</p>
    <p style="color: {color};">+</p>
</div>

<style>
    .small {
        width: 150px;
        height: 100px;
        display: flex;
        margin-left: 20px;
        border-radius: 50px;
    }

    .small p {
        font-size: 40px;
        line-height: 15px;
    }


    .medium {
        width: 200px;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 80px;
        margin-left: 20px;
    }

    .medium p{
        font-size: 50px;
    }

    .large {
        width: 250px;
        height: 140px;
        display: flex;
        margin-left: 20px;
        border-radius: 90px;
    }

    .large p {
        font-size: 70px;
        line-height: 0px;
    }

    p {
        flex-basis: 50%;
        text-align: center;
    }
</style>