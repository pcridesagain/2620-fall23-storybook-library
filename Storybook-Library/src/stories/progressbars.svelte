<script>
  export let progress = 50; // Initial progress value (percentage)
</script>

<style>
  .progress-bar {
    width: 100%;
    background-color: #e0e0e0;
    height: 20px;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress {
    width: 10%;
    height: 100%;
    background-color: #4caf50;
    transition: width 0.3s ease-in-out;
  }
</style>

<div class="progress-bar">
  <div class="progress"></div>
</div>

