const displayInput = document.querySelector("#display");
//const buttons = document.querySelectorAll(".button");

const buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
  console.log("button");
  button.addEventListener("click", (e) => {
    console.log("button");
    console.log(e);
    console.log(e.target);
    const cal = e.target.innerText;

    switch (e.target.innerText) {
      case "C":
        displayInput.innerText = "";
        break;
      case "←":
        if (displayInput.innerText) {
          displayInput.innerText = displayInput.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          displayInput.innerText = eval(displayInput.innerText);
        } catch {
          displayInput.innerText = "Error";
        }
        break;
      default:
        displayInput.innerText += cal;
    }
  });
});
