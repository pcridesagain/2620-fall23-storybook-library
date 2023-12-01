<script>
    import "./page.css";
    import "./Page.stories.js"
    let name = "Select Action";
    let act1 = "Download";
    let act2 = "Save to favorites";
    let act3 = "Comment";
    let act4 = "Share";
    let act5 = "Report this";
  </script>
  
  <svelte:head>
      <title>Home</title>
  </svelte:head>
  
  <section>
      <form class="border border-blue-500 p-5 w-fit m-3 justify-center">
          <p id="Label" class="text-center">{name}</p>
          <input type="radio" id="Download" name="Action" value="HTML" />
          <label for="Download">{act1}</label><br />
          <input type="radio" id="Savetofav" name="Action" value="Savetofav" />
          <label for="Savetofav">{act2}</label><br />
          <input type="radio" id="Comment" name="Action" value="Comment" />
          <label for="Comment">{act3}</label><br />
          <input type="radio" id="Share" name="Action" value="Share" />
          <label for="Share">{act4}</label><br />
          <input
            type="radio"
            id="Reportthis"
            name="Action"
            value="Reportthis"
          />
          <label for="Reportthis">{act5}</label>
          <p class="text-center">cancel</p>
        </form>
      <div>
        <form
          id="form2"
          class="border border-blue-500 p-5 w-fit m-3 bg-slate-800"
        >
          <p id="Label" class="text-center text-white">{name}</p>
          <input type="radio" id="Download" name="Action" value="HTML" />
          <label for="Download" class="text-white">{act1}</label><br />
          <input type="radio" id="Savetofav" name="Action" value="Savetofav" />
          <label for="Savetofav" class="text-white">{act2}</label
          ><br />
          <input type="radio" id="Comment" name="Action" value="Comment" />
          <label for="Comment" class="text-white">{act3}</label><br />
          <input type="radio" id="Share" name="Action" value="Share" />
          <label for="Share" class="text-white">{act4}</label><br />
          <input
            type="radio"
            id="Reportthis"
            name="Action"
            value="Reportthis"
          />
          <label for="Reportthis" class="text-white">{act5}</label>
          <p class="text-center text-white">cancel</p>
        </form>
      <story name="Primary" args={{ label: "Form", }}/>
  </section>
  