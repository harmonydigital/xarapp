
 const validateView=document.getElementById('validation')

 

  function validation(event,guser,gphoto){ 
    
      event.preventDefault() 
      
      var gname=guser
      var gnphoto=gphoto
      validateView.classList.toggle('show')
      console.log('gname M',gname)
      console.log('user',document.getElementById('user'))

      var userContainer=document.getElementById('user')

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