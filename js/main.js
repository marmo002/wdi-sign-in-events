document.addEventListener('DOMContentLoaded', function () {

  var signIn = document.querySelector('button.signin');
  var modal = document.querySelector('.modal');

  signIn.addEventListener('click', function(){
    modal.setAttribute('class', 'modal fadein');
    modal.style.display = 'block';
  });

  var closeButton = document.querySelector('button.close');

  function closeModal(){
    modal.setAttribute('class', 'modal fadeout');

    setTimeout(function(){
      modal.style.display = 'none';
    }, 500 );
  }

  // closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e){

    if (e.target.classList.contains('close') || e.target.classList.contains('modal')){
      closeModal();
    }

  });

  var submitButton  = document.querySelector('button.submit');
  var inputs  = document.querySelectorAll('input');

  submitButton.addEventListener('click', function(){
    inputs.forEach(function(input){
      input.setAttribute('class', 'error');
    });
  });

  modal.addEventListener('mouseover', function(e){
    if (e.target.tagName === "INPUT"){
      e.target.removeAttribute('class');
    }
  });

})
