
  // joke api
  let joke = document.getElementById("joke")
  try {
    fetch("https://v2.jokeapi.dev/joke/Programming")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if(json.type === "single"){
            joke.textContent = json.joke;
        }
        else if( json.type ==="twopart"){
            joke.textContent = `${json.setup} ... ${json.delivery}`
        }
        
      });
  } catch (error) {
    throw new Error("Something went wrong", error);
  }