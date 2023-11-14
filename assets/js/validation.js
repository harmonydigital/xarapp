
 const validateView=document.getElementById('validation')

 

  function validation(event,guser,gphoto){ 
    
      event.preventDefault() 
      
      var gname=guser
      var gnphoto=gphoto
      var userContainer=document.getElementById('user')

      validateView.classList.toggle('show') 

      userContainer.style.cssText='justify-content: flex-end;display: flex;'
      userContainer.innerHTML=` 
        <div>
          `+gname+` 
        </div> 
        <div>
          <img src=' `+gnphoto+` ' alt=''>
        </div>
      `
      }


// function initApp(){  
//   setTimeout(function init(){ 
//     document.getElementsByTagName('body')[0].style.cssText="overflow:auto;"
//  }, 1000);
// } 