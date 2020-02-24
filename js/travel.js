var numItems = $('.tp-bullet').length;
for (var i = 0; i < numItems; i++) {
        $(".tp-bullet").eq(i).attr('name',i);
        $(".tp-bullet").eq(i).attr('onmouseover', "stop()");
        // $(".tp-bullet").eq(i).attr('onmouseout', "restart(this.name)");
        
 }

 function start(i){setTimeout(function() { bannerAnimationStart(i);},  2000);};
 start(0);
 function restart(i){
    xx= 0;
    start(i);
 }

 var xx = 0;
 
 function bannerAnimationStart(x){
     var numItems = $('.tp-bullet').length;
     $(".tp-bullet")[x].click();
     var o = x+1;
     for (var i = o; i < numItems+1; i++) {        

             (function(index) {
                 setTimeout(function() { 
                     if(xx == 0){
                         if(index==numItems){
                             bannerAnimationStart(0);
                         }
                         try {
                         $(".tp-bullet")[index].click(); 
                             
                         } catch (error) {
                             
                         }


                     }
                     }, i* 7000);
             })(i);

          
      }
 }
 
 
 function stop()
 {
     xx= 1;
 }


function hideElementByClass(class_name){
    $('.'+class_name).hide();
}

function showElementByClass(class_name){
    $('.'+class_name).show();
}

