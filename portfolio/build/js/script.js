

document.body.onload=function(){
         
          setTimeout(function(){
                    var preloader = document.getElementById('preloader');
                    preloader.classList.add('none');
                    new WOW().init();
          }, 1000)
          
}
