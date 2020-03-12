
var pageOffset = window.pageYOffset;
var div = document.querySelectorAll(".parall");

const amount = div[0].parentElement.clientHeight;


window.addEventListener("scroll",parallax);

function parallax(event){



		for(var i=0;i<div.length;i++)
{

	if((div[i].parentElement.getBoundingClientRect().y<=amount) && (div[i].parentElement.getBoundingClientRect().y>-amount) ){
		
	  let para = document.querySelectorAll(".parall")[i];

	  let wrapper = para.parentElement;
	  let yAxis;
	 
	  if(window.pageYOffset < amount)
	  {	
	  	yAxis = window.pageYOffset;
	  	
      }
      else{
      	yAxis = window.innerHeight-wrapper.getBoundingClientRect().top;
      	
      	
	  }
	  // let height =window.innerHeight;
	  let height = wrapper.clientHeight;
	  console.log(height);	  
	  height= height + height * 0.6;

	  para.style.height = ''+height+'px';
	  let speed = yAxis * -0.3;




      para.style.transform = 'translate3d(0px,'+speed+'px,0)';
      // if(para.scrollTop){
	  // para.style.top = ''+para.parentElement.getBoundingClientRect().top+'px';

	  // }
	  // else{

	  // para.style.bottom = ''+para.parentElement.getBoundingClientRect().bottom+'px';

	  // } 
	 
	}
 }



	// style.style.transform = 'translate3d(0px,'+speed+'px,0)' ;


	// para.style.backgroundPositionY = yAxis *0.7 + "px";                   //refreshes cs in every scroll not good when in mobile
}




// Dynamic Height

  //   var paraParent = para.parentElement;

  //   var parentY = paraParent.getBoundingClientRect().y;

  //   var parentEnd = parentY+980;

  //   var parallaxEnd = para.getBoundingClientRect().y+980;

  //   var margin = parentEnd-parallaxEnd;
    
  //   margin =(980+(margin));
  // 	para.style.height = ''+margin+'px';