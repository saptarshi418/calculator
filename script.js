document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("input_box");
    const buttons = document.querySelectorAll("button");
  
    
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonText = button.textContent;
  
        if (buttonText === "=") {
          try {
            
            const expression = inputBox.value.replace(/%/g, '/100');
            inputBox.value = eval(expression);
          } catch (error) {
            
            inputBox.value = "Error";
          }
        } else if (buttonText === "AC") {
          
          inputBox.value = "";
        } else if (buttonText === "DEL") {
          
          inputBox.value = inputBox.value.slice(0, -1);
        } else {
          
          inputBox.value += buttonText;
        }
      });
    });
  });
  