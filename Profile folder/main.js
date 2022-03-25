

window.onload = () => {
const genderRadios = document.querySelectorAll('input[name="gender"]');
// add event listener to the radio buttons
  genderRadios.forEach((btn) =>{
    btn.addEventListener("change", function(event){
      if(btn.checked){
        if(btn.value === "male"){
          
        }else{
          
        }
      }
    })
  })

}






