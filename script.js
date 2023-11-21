let buttons = document.querySelectorAll('.continue');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseenter', () => {
    buttons[i].style.backgroundColor = 'white';
    buttons[i].style.color = 'black';
    buttons[i].style.boxShadow = "5px 5px 5px 0px rgba(0,0,0,0.5),-5px -5px 5px 0px rgba(0,0,0,0.5)";
    // buttons[i].style.boxShadow = "none";


  });

  buttons[i].addEventListener('mouseleave', () => {
    buttons[i].style.backgroundColor = 'hsl(224, 30%, 27%)'; // Set the background color back to default
    buttons[i].style.color = 'white';
    buttons[i].style.boxShadow = "none";
    
  });
}

