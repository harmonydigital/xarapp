
 const validateView=document.getElementById('validation')

 

  function validation(event,guser){ 
    
      event.preventDefault() 
      
      var gname=guser
      validateView.classList.toggle('show')
      console.log('gname',gname)
      console.log('user',document.getElementById('user'))
  

  }


// function initApp(){  
//   setTimeout(function init(){ 
//     document.getElementsByTagName('body')[0].style.cssText="overflow:auto;"
//  }, 1000);
// } 