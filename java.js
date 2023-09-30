
function validateName(){

    var nameField = document.getElementById('contact-name').value;
    
    if(nameField.length == 0){
    
        nameError.innerHTML="Name is required";
    
        return false;
    
    }
    
    if(!nameField.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/) ){
        nameError.innerHTML="Write fullname";
    
        return false;
    }else{
        nameError.innerHTML='<i class="fa-solid fa-check"></i>';
        return true;
    
    }
    
    
    }
    function validateEmail() {
        const emailInput = document.getElementById('contact-email');
        const emailErrorSpan = document.getElementById('email-error');
        const email = emailInput.value.trim(); 
    
        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if (email === '') {
            
            emailErrorSpan.textContent = '';
            emailInput.setCustomValidity(''); 
        } else if (!emailPattern.test(email)) {
            
            emailErrorSpan.textContent = 'Invalid email address';
            emailInput.setCustomValidity('Invalid email address'); 
        } else {
            
            emailErrorSpan.textContent = '';
            emailInput.setCustomValidity(''); 
        }
    }
    function validateSubject(){
    
    var subjField = document.getElementById('contact-subject').value;
    
    var required =30;
    
    var left = required- subjField.length;
    
    if(left > 0){
        subjError.innerHTML = left + 'more characters required';
    return false;
    }else{
        subjError.innerHTML ='<i class="fa-solid fa-check"></i>';
        return true;
    }
    
    
    }
    function validateMessage(){
    
    var msgField = document.getElementById('contact-message').value;
    
    var required =50;
    
    var left = required- msgField.length;
    
    if(left > 0){
        msgError.innerHTML = left + 'more characters required';
    return false;
    }else{
        msgError.innerHTML ='<i class="fa-solid fa-check"></i>';
        return true;
    }
    
    
    }
    function validateForm()
    {
    if(!validateName() || !validatePhone() || !validateEmail()||!validateMessage()){
    
      submitError.innerHTML="Please fix these error to sumbit ";
      return false;    
    }
    
    }
    