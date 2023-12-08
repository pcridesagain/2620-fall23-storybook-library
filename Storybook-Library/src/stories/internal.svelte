<script>
    let label = "tag";
    let placeholder = "Input....";
  </script>
  
  <div class="bg-black w-96 h-1/2 p-4">
    <div>
      <label class="text-white" for="input-field">{label}</label>
      <input type="text" placeholder={placeholder}>
    </div>
  
    <div>
      <label class="text-red" for="input-field">{label}</label>
      <input type="text" placeholder={placeholder}>
    </div>
  
    <div>
      <label class="text-blue" for="input-field">{label}</label>
      <input class="bg-black box-border h-4 w-80 p-4 border-2 border-gray-700 rounded-md placeholder:text-white" type="text" placeholder={placeholder}>
    </div>
  
    <div>
      <label class="text-black" for="input-field">{label}</label>
      <input type="text" placeholder={placeholder}>
    </div>
  
    <div>
      <label class="text-green" for="input-field">{label}</label>
      <input type="text" placeholder={placeholder}>
    </div>
  </div>
  
  <slot></slot>
  