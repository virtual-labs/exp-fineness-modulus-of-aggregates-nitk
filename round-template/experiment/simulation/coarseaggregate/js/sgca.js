//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;
var sub="";
var n=0;

function navNext()
{
     for (temp = 0; temp <= 6 ; temp++) 
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
     }
     simsubscreennum+=1;

     document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
     document.getElementById('nextButton').style.visibility="hidden";
     magic();
}


var ca;
var questions=["The finest seive used in the experiment is _________ &micro;m .",
				"Coarse aggregates are particles greater than the size _____ .",
				"The sieves is arranged in ____________ order </br>of their size and pan is placed at the bottom."];
				
var options2=[["90","110","120","150"],//150
			  ["150μm","300μm","4.75mm","2.36mm"],//4.75mm
			  ["Decreasing"," Increasing"]];//Decreasing
			  
function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}


//Move pointing finger with mouse
$(document).mousemove(function(e)
{

    if(document.getElementById('v2-1').style.visibility=="hidden" && simsubscreennum==1) 
    {
         if(e.pageX<800 && e.pageY<600)  
         {
             document.getElementById('onarm').style.visibility="visible";
             $("#onarm").css({left:e.pageX, top:e.pageY});
         }
    }
    else if(document.getElementById('v2-1').style.visibility=="visible" && simsubscreennum==1)
    {
	     document.getElementById('onarm').style.visibility="hidden";
    }
    if(	document.getElementById('hp2-1').style.visibility=="visible")
    {
	    if(e.pageX<800 && e.pageY<600 && simsubscreennum==1) 
	    {	
             document.getElementById('onarm').style.visibility="hidden";
		     document.getElementById('hp2-1').style.visibility="visible";
             $("#hp2-1").css({left:e.pageX-150+'px', top:e.pageY-150+'px'});
        }
    }
    if(document.getElementById('v2-2').style.visibility=="visible" && simsubscreennum==1)
    {
	     document.getElementById('onarm').style.visibility="hidden";
    }
}); 




//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{

	if (simsubscreennum==1)
	{  
        // refresh();
		 document.getElementById('nextButton').style.visibility="hidden";
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 345px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
		     document.getElementById('tare2-1').onmouseover="";
	         document.getElementById('on2-1').onmouseover=function(){step1();}
		 },700);
    }
	
	
	else if (simsubscreennum==2)
	{
		//refresh();
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('mw').style.visibility="hidden";
         document.getElementById('p3').style.visibility="hidden";
		 document.getElementById('wc').style.visibility="hidden";

         document.getElementById('v2-2').style.visibility="hidden";
         document.getElementById('on2-3').style.visibility="hidden";
         document.getElementById('tare2-3').style.visibility="hidden";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 250px; top:159px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('pan').onclick=function(){step2();}
    }
	else if (simsubscreennum==3)
	{
		refresh();
		 document.getElementById('pan3-1').style.visibility="hidden";
		 document.getElementById('3-1').style.visibility="hidden";
		 document.getElementById('3-2').style.visibility="hidden";
		 document.getElementById('3-3').style.visibility="hidden";
		 document.getElementById('3-4').style.visibility="hidden";
		 document.getElementById('3-5').style.visibility="hidden";
		 document.getElementById('3-6').style.visibility="hidden";
		 document.getElementById('3-9').style.visibility="hidden";
		 document.getElementById('3-11').style.visibility="hidden";
		 document.getElementById('3-21').style.visibility="hidden";
		 document.getElementById('3-22').style.visibility="hidden";
		 document.getElementById('3-23').style.visibility="hidden";
		 document.getElementById('3-24').style.visibility="hidden";
		 document.getElementById('3-25').style.visibility="hidden";
		 
		 document.getElementById('15').style.visibility="visible";
		 document.getElementById('15a').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 435px; top:250px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('10').onclick=function(){step3();}


		
	}
	else if (simsubscreennum==4)
	{
		 refresh();
		 document.getElementById('10').style.visibility="hidden";
		 document.getElementById('11').style.visibility="hidden";
		 document.getElementById('12').style.visibility="hidden";
		 document.getElementById('15b').style.visibility="hidden";
		 document.getElementById('3-1off').style.visibility="hidden";
		 document.getElementById('15c').style.visibility="hidden";
		 document.getElementById('9a').style.visibility="hidden";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:375px; top:187px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 document.getElementById('5-6').onclick=function(){step5();}
	}
	else if(simsubscreennum==5)
	{
		 refresh();
		 
		 document.getElementById('sp5-1').style.visibility="hidden";
         document.getElementById('ewm5').style.visibility="hidden";
		 document.getElementById('mw5').style.visibility="hidden";
		 document.getElementById('p5').style.visibility="hidden";
         document.getElementById('on5-1').style.visibility="hidden";
		 document.getElementById('off5-1').style.visibility="hidden";
		 document.getElementById('zero5-1').style.visibility="hidden";
		 document.getElementById('tare5-1').style.visibility="hidden";
		 document.getElementById('v5-2').style.visibility="hidden";
		 
			document.getElementById('tr5-1').style.visibility="visible";
		    document.getElementById('gv1').style.visibility="visible";
			document.getElementById('gv1').onclick=function(){step6();}
	}
	else if(simsubscreennum==6)
	{
		document.getElementById('tr5-2').style.visibility="hidden";
	}
}
    
	
	
	function step1()
	{
		 myStopFunction();
		 document.getElementById('on2-1').style.visibility="hidden";
         document.getElementById('on2-2').style.visibility="visible";
         document.getElementById('on2-2').onclick=function(){step11();}
    }
	
	function step11()
	{
         document.getElementById('mw').style.visibility="visible";
	     document.getElementById('on2-3').style.visibility="visible";
		 document.getElementById('on2-2').style.visibility="hidden";
		 setTimeout(function()
		 {
			 document.getElementById('hp2-1').style.visibility="visible";
		 },500);
		 setTimeout(function()
		 {   
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:270px; top:250px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(235deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(235deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(235deg)";
             document.getElementById('hp2-1').onclick=function(){step12();}
		 },1000);						             

	}
	
	
	
	function step12()
	{
		 myStopFunction();
		 document.getElementById('hp2-1').style.visibility="hidden";
	     document.getElementById('p2').style.visibility="visible";
         document.getElementById('onarm').style.visibility="hidden";
		 setTimeout(function()
		 {
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
             document.getElementById('tare2-1').onmouseover=function(){step13();} 
		 },800); 		 
    }
	
	
	
	
	
	function step13()
	{
		 myStopFunction();
		 document.getElementById('tare2-1').style.visibility="hidden";
         document.getElementById('tare2-2').style.visibility="visible";
		 document.getElementById('tare2-2').onclick=function(){step14();}               
    }
	
	function step14()
	{
         document.getElementById('v2-1').style.visibility="visible";
	     document.getElementById('tare2-3').style.visibility="visible";
		 document.getElementById('tare2-2').style.visibility="hidden";
         document.getElementById('onarm').style.visibility="hidden";
		 setTimeout(function()
		 {
			 document.getElementById('swc2').style.visibility="visible";

		     document.getElementById('hand').style.visibility="visible";
		 },500);
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:650px; top:180px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
             document.getElementById('hand').onclick=function(){step15();} 
		 },1000);			 
    }
	
	function step15()
	{
	     myStopFunction();
		  document.getElementById('swc2').style.visibility="hidden";

         document.getElementById('hand').style.transformOrigin = "100% 80%";
	     document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	    
			   
			 setTimeout(function()
			 {
                 document.getElementById('pwc').style.visibility="visible";
        	 },500);
			 setTimeout(function()
			 {	
			     document.getElementById('v2-1').style.visibility="hidden";
				 document.getElementById('p2').style.visibility="hidden";
                 document.getElementById('p3').style.visibility="visible";
                 document.getElementById('wc').style.visibility="visible";
			     document.getElementById('pwc').style.visibility="hidden";
			     document.getElementById('v2-2').style.visibility="visible";
             },1000);
             setTimeout(function()
			 {
				 
				 document.getElementById('hand').style.visibility="hidden";
			 },1500);
            document.getElementById('onarm').style.visibility="hidden";
		 setTimeout(function()
		 {
			 document.getElementById('nextButton').style.visibility="visible";
		 },2500);  
	}
	
	function step2()
	{
		 myStopFunction();
         document.getElementById('pan').style.visibility="hidden";
		 document.getElementById('pan3-1').style.visibility="visible";
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 400px; top:159px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
		     refresh();
		     document.getElementById('21').onclick=function(){step21();}
		 },300);
	}
	function step21()
	{
		 myStopFunction();
         document.getElementById('21').style.visibility="hidden";
		 document.getElementById('3-21').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 560px; top:159px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('22').onclick=function(){step22();}
	}
	function step22()
	{
		 myStopFunction();
         document.getElementById('22').style.visibility="hidden";
		 document.getElementById('3-22').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 250px; top:260px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('23').onclick=function(){step23();}
		
	}
	function step23()
	{
		 myStopFunction();
         document.getElementById('23').style.visibility="hidden";
		 document.getElementById('3-23').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 400px; top:260px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		  document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('24').onclick=function(){step24();}
	}
	function step24()
	{
		 myStopFunction();
         document.getElementById('24').style.visibility="hidden";
		 document.getElementById('3-24').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 560px; top:260px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('25').onclick=function(){step25();}
	}
	function step25()
	{
		 myStopFunction();
         document.getElementById('25').style.visibility="hidden";
		 document.getElementById('3-25').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 250px; top:359px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('1').onclick=function(){step26();}
	}
	function step26()
	{
		 myStopFunction();
         document.getElementById('1').style.visibility="hidden";
		 document.getElementById('3-1').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 400px; top:359px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('2').onclick=function(){step27();}
	}	
	function step27()
	{
		 myStopFunction();
         document.getElementById('2').style.visibility="hidden";
		 document.getElementById('3-2').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 560px; top:359px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('3').onclick=function(){step28();}
	}	
	function step28()
	{
		 myStopFunction();
         document.getElementById('3').style.visibility="hidden";
		 document.getElementById('3-3').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 250px; top:460px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('4').onclick=function(){step29();}
	}



function step29()
	{
		 myStopFunction();
         document.getElementById('4').style.visibility="hidden";
		 document.getElementById('3-4').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 400px; top:460px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('5').onclick=function(){step210();}
	}



function step210()
	{
		 myStopFunction();
         document.getElementById('5').style.visibility="hidden";
		 document.getElementById('3-5').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 560px; top:460px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('6').onclick=function(){step211();}
	}		
	
	
function step211()
{
	
	 myStopFunction();
         document.getElementById('6').style.visibility="hidden";
		 document.getElementById('3-6').style.visibility="visible";
		 setTimeout(function()
		 {
		   
			     document.getElementById('plate3-2').style.visibility="visible";
		         document.getElementById('rdr3-1').style.visibility="visible";
			     myInt = setInterval(function(){ animatearrow(); }, 500);
		         document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 380px; top:140px; height: 40px; z-index: 10;";
			     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		         // Code for IE9
		         document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		         // Standard syntax
		         document.getElementById("arrow1").style.transform = "rotate(360deg)";
                 document.getElementById('plate3-2').onclick=function(){step212();}
            
		 },500);
}
	function step212()
	{
		 myStopFunction();
         document.getElementById('plate3-2').style.transformOrigin = "100% 80%";
	     document.getElementById('plate3-2').style.animation = "valveturn-2 1.0s forwards ";
		 setTimeout(function()
		 {
	         document.getElementById('rs3-1').style.visibility="visible";
		 },500);
		 document.getElementById('rdr3-1').style.visibility="hidden";
		 setTimeout(function()
		 {
		     document.getElementById('plate3-2').style.visibility="hidden";
             document.getElementById('rs3-1').style.visibility="hidden";
         },800); 

		 setTimeout(function()
		 {
		     document.getElementById('3-11').style.visibility="visible";
             document.getElementById('3-8').style.visibility="visible";
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 388px; top:200px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
             document.getElementById('3-8').onclick=function(){step213();}
		 },1000);
    }
	
	function step213()
	{
		 myStopFunction();
		 document.getElementById('3-8').style.visibility="hidden";
		 document.getElementById('3-9').style.visibility="visible";
         setTimeout(function()
		 {
			 //document.getElementById('nextButton').style.visibility="visible";
			 validateAnswer(1,2,"300px","200px");

         },1000);
	}
	
	
	
	function step3()
	{
		 myStopFunction();
		 document.getElementById('10').style.visibility="hidden";
		 document.getElementById('12').style.visibility="visible";
		 document.getElementById('9').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:186px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
         document.getElementById('9').onclick=function(){step31();}
	}
	 function step31()
	{
		 myStopFunction();
		 document.getElementById('9').style.visibility="hidden";
		 document.getElementById('9a').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:198px; top:168px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('15').onclick=function(){step32();}
    }
	function step32()
	{
		 myStopFunction();
		 document.getElementById('15').style.visibility="hidden";
		 document.getElementById('15b').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:375px; top:165px; height: 40px; z-index: 10;";
         document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 document.getElementById('15a').onclick=function(){step33();}
	}
	function step33()
	{
		 myStopFunction();
		 document.getElementById('15a').style.visibility="hidden";
		 document.getElementById('15c').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:222px; top:544px;	 height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
		 document.getElementById('11on').onclick=function(){step34();}
	}
	function step34()
	{
		myStopFunction();
		document.getElementById('11on').onclick="";
		document.getElementById('11bon').style.visibility="hidden";
		document.getElementById("12").style.animation="shake 2s infinite linear";
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:242.5px; top:546px; height: 40px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(90deg)";
			document.getElementById('3-1off').onclick=function()
			{
				myStopFunction();
				document.getElementById('3-1off').onclick="";
				document.getElementById("12").style.animation="";

				//document.getElementById("nextButton").style.visibility="visible";
				validateAnswer(2,0,"390px","100px");
			}
		 
		},5000);
    }
	
	
	
    function step5()
    {
		 myStopFunction();
		 document.getElementById('5-6').style.visibility="hidden";
		 document.getElementById('5-8').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:203px; top:193px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-5').onclick=function(){step51();}
    }
	function step51()
    {
		 myStopFunction();
		 document.getElementById('5-5').style.visibility="hidden";
		 document.getElementById('5-7').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:290px; top:177px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(-900deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		 document.getElementById('5-3').onclick=function(){step52();}
    }
	function step52()
    {
		 myStopFunction();
		 document.getElementById('5-3').style.visibility="hidden";
		 document.getElementById('5-4').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:290px; top:184px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		 document.getElementById('5-2').onclick=function(){step53();}
    }
 
	function step53()
    {
		 myStopFunction();
		 document.getElementById('5-2').style.visibility="hidden";
		 //document.getElementById('5-9').style.visibility="visible";
		 document.getElementById('5-4').style.visibility="hidden";
		 document.getElementById('5-7').style.visibility="hidden";
		 document.getElementById('5-8').style.visibility="hidden";
		 //setTimeout(function()
		 //{
		 //myStopFunction();
		 //document.getElementById('5-9').style.visibility="hidden";
	
		 document.getElementById('5-1').style.visibility="hidden";
		
		 document.getElementById('5-10').style.visibility="visible";
		 document.getElementById('5-21').style.visibility="visible";
		 document.getElementById('5-22').style.visibility="visible";
		 document.getElementById('5-23').style.visibility="visible";
		 document.getElementById('5-24').style.visibility="visible";
		 document.getElementById('5-25').style.visibility="visible";
		 document.getElementById('5-11').style.visibility="visible";
		 document.getElementById('5-12').style.visibility="visible";
		 document.getElementById('5-13').style.visibility="visible";
		 document.getElementById('5-14').style.visibility="visible";
		 document.getElementById('5-15').style.visibility="visible";
		 document.getElementById('5-16').style.visibility="visible";
		 document.getElementById('5-18').style.visibility="visible";
         // },1000);
		 
		 setTimeout(function()
		 {
             document.getElementById('zero5-1').style.visibility="visible";
             document.getElementById('on5-1').style.visibility="visible";
		     document.getElementById('off5-1').style.visibility="visible";
		     document.getElementById('mw5').style.visibility="visible";
		     document.getElementById('tare5-1').style.visibility="visible";
		     document.getElementById('ewm5').style.visibility="visible";
		     document.getElementById('p5').style.visibility="visible";
         },800);
		 
		 setTimeout(function()
		 {
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px; top: 210px; height: 40px; z-index: 10;";
			 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
		     document.getElementById('5-18').onclick=function(){step54();}
         },1500);
	}
	
	function step54()
	{
		 myStopFunction();
		 document.getElementById('5-18').style.visibility="hidden";
		
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px; top: 220px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-16').onclick=function(){step56();}
	}
	function step56()
	{
		 myStopFunction();
         document.getElementById('5-16').style.visibility="hidden";
		 document.getElementById('s5-6').style.visibility="visible";
		
        
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step56a();}
	}
	function step56a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-6').onclick=function(){step56b();}
	}
	
	function step56b()
	{
		
		 myStopFunction();
		 document.getElementById('s5-6').style.transformOrigin = "100% 80%";
	     document.getElementById('s5-6').style.animation = "valveturn-2 1.0s forwards ";
		 
		 
			 
		 setTimeout(function()
		 {
		     
			     
		 },800);	
        setTimeout(function()
		 {		 
        
			 document.getElementById('s5-6').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[0] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";
         },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px; top:250px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-15').onclick=function(){step57();}
	}
	
	function step57()
	{
		 myStopFunction();
         document.getElementById('5-15').style.visibility="hidden";
		 document.getElementById('s5-5').style.visibility="visible";
		
		 document.getElementById('swc5-1').style.visibility="visible";

        
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step57a();}
	}
	function step57a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-5').onclick=function(){step57b();}
	}
	
	function step57b()
	{
		
		myStopFunction();
		document.getElementById('s5-5').style.transformOrigin = "100% 80%";
	    document.getElementById('s5-5').style.animation = "valveturn-2 1.0s forwards ";
		
        setTimeout(function()
		 {		
       
			 document.getElementById('s5-5').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[1] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		
		 },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px; top:275px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-14').onclick=function(){step58();}
	}
	//20
	function step58()
	{
		 myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('5-14').style.visibility="hidden";
		 document.getElementById('s5-4').style.visibility="visible";
		 document.getElementById('swc5-1').style.visibility="hidden";
		 document.getElementById('swc5-2').style.visibility="visible";

         document.getElementById('swc5-4').style.visibility="visible";

		
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:333px; top:446px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step58a();}
	}
	function step58a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-4').onclick=function(){step58b();}
	}
	
	function step58b()
	{
		
		 myStopFunction();			
		 document.getElementById('swc5-4').style.visibility="hidden";
         document.getElementById('s5-4').style.transformOrigin = "100% 80%";
	     document.getElementById('s5-4').style.animation = "valveturn-2 1.0s forwards ";
		 document.getElementById('pwc5-1').style.visibility="visible";


			
		 
		setTimeout(function()
		{
		  document.getElementById('pwc5-1').style.visibility="hidden";
		  document.getElementById('swc5-7').style.visibility="visible";
     
		   
		},800);	
         setTimeout(function()
		 {		
        
			 document.getElementById('s5-4').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[2] +" g";
			 document.getElementById('v5-2').style.visibility="visible";
       
		 },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px; top:295px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-13').onclick=function(){step59();}
	}
	
	//16
	function step59()
	{
		 myStopFunction();
		 document.getElementById('swc5-7').style.visibility="hidden";
         document.getElementById('5-13').style.visibility="hidden";
		 document.getElementById('s5-3').style.visibility="visible";
		 document.getElementById('swc5-2').style.visibility="hidden";
		 document.getElementById('swc5-3').style.visibility="visible";
		 document.getElementById('swc5-5').style.visibility="visible";
	
        
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step59a();}
	}
	function step59a()
	{
         myStopFunction();
	     document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-3').onclick=function(){step59b();}
	}
	
	function step59b()
	{
		 myStopFunction();
		document.getElementById('swc5-5').style.visibility="hidden";

		 document.getElementById('s5-3').style.transformOrigin = "100% 80%";
	     document.getElementById('s5-3').style.animation = "valveturn-2 1.0s forwards ";
				 document.getElementById('pwc5-2').style.visibility="visible";

			
		setTimeout(function()
		{
				  document.getElementById('pwc5-2').style.visibility="hidden";
				  document.getElementById('swc5-8').style.visibility="visible";
			     
		},800);	
         setTimeout(function()
		 {		
        
			 document.getElementById('s5-3').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[3] +" g";
			 document.getElementById('v5-2').style.visibility="visible";
        
		 },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px; top:325px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-12').onclick=function(){step510();}
	}
	
	
	
	//10
	function step510()
	{
		 myStopFunction();
		 document.getElementById('swc5-8').style.visibility="hidden";
         document.getElementById('5-12').style.visibility="hidden";
		 document.getElementById('s5-2').style.visibility="visible";
		
		 document.getElementById('swc5-3').style.visibility="hidden";

         document.getElementById('swc5-6').style.visibility="visible";

         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step510a();}
	}
	function step510a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-2').onclick=function(){step510b();}
	}
	
	function step510b()
	{
		 myStopFunction();
		  document.getElementById('swc5-6').style.visibility="hidden";

		     document.getElementById('s5-2').style.transformOrigin = "100% 80%";
	         document.getElementById('s5-2').style.animation = "valveturn-2 1.0s forwards ";
			 document.getElementById('pwc5-3').style.visibility="visible";

		
			
		setTimeout(function()
		{
		    document.getElementById('pwc5-3').style.visibility="hidden";
			document.getElementById('swc5-9').style.visibility="visible";
	    
		    
		},800);	
         setTimeout(function()
		 {		
        
			 document.getElementById('s5-2').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[4] +" g";
			 document.getElementById('v5-2').style.visibility="visible";
        
		 },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px; top: 350px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-11').onclick=function(){step511();}
	}
	
	
	
	 function step511()
	{
		 myStopFunction();
		 document.getElementById('swc5-9').style.visibility="hidden";
         document.getElementById('5-11').style.visibility="hidden";
		 document.getElementById('s5-1').style.visibility="visible";
		
	
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step511a();}
	}
	function step511a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-1').onclick=function(){step511b();}
	}
	
	function step511b()
	{
		
		 myStopFunction();
		
		     document.getElementById('s5-1').style.transformOrigin = "100% 80%";
	         document.getElementById('s5-1').style.animation = "valveturn-2 1.0s forwards ";
		
		
			
		
		setTimeout(function()
		{
		
			
		},800);     
        		
		setTimeout(function()
		 {
        
			 document.getElementById('s5-1').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[5] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		
		 },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px;  top: 380px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		 document.getElementById('5-25').onclick=function(){step512();}
	}
	
	
	
	 function step512()
	{
		 myStopFunction();
		 document.getElementById('swc5-9').style.visibility="hidden";
         document.getElementById('5-25').style.visibility="hidden";
		 document.getElementById('s5-25').style.visibility="visible";
		
	
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step512a();}
	}
	function step512a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-25').onclick=function(){step512b();}
	}
	
	function step512b()
	{
		
		 myStopFunction();
		
		     document.getElementById('s5-25').style.transformOrigin = "100% 80%";
	         document.getElementById('s5-25').style.animation = "valveturn-2 1.0s forwards ";
		
		
			
		
		setTimeout(function()
		{
		
			
		},800);     
        		
		setTimeout(function()
		 {
        
			 document.getElementById('s5-25').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[6] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		
		 },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px;  top: 400px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		 document.getElementById('5-24').onclick=function(){step513();}
	}
	
	
	 function step513()
	{
		 myStopFunction();
		 document.getElementById('swc5-9').style.visibility="hidden";
         document.getElementById('5-24').style.visibility="hidden";
		 document.getElementById('s5-24').style.visibility="visible";
		
	
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step513a();}
	}
	function step513a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-24').onclick=function(){step513b();}
	}
	
	function step513b()
	{
		
		 myStopFunction();
		
		     document.getElementById('s5-24').style.transformOrigin = "100% 80%";
	         document.getElementById('s5-24').style.animation = "valveturn-2 1.0s forwards ";
		
		
			
		
		setTimeout(function()
		{
		
			
		},800);     
        		
		setTimeout(function()
		 {
        
			 document.getElementById('s5-24').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[7] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		
		 },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px;  top: 428.5px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		 document.getElementById('5-23').onclick=function(){step514();}
	}
	
	 function step514()
	{
		 myStopFunction();
		 document.getElementById('swc5-9').style.visibility="hidden";
         document.getElementById('5-23').style.visibility="hidden";
		 document.getElementById('s5-23').style.visibility="visible";
		
	
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step514a();}
	}
	function step514a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-23').onclick=function(){step514b();}
	}
	
	function step514b()
	{
		
		 myStopFunction();
		
		     document.getElementById('s5-23').style.transformOrigin = "100% 80%";
	         document.getElementById('s5-23').style.animation = "valveturn-2 1.0s forwards ";
		
		
			
		
		setTimeout(function()
		{
		
			
		},800);     
        		
		setTimeout(function()
		 {
        
			 document.getElementById('s5-23').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[8] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		
		 },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px;  top:450px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		 document.getElementById('5-22').onclick=function(){step515();}
	}
	
	 function step515()
	{
		 myStopFunction();
		 document.getElementById('swc5-9').style.visibility="hidden";
         document.getElementById('5-22').style.visibility="hidden";
		 document.getElementById('s5-22').style.visibility="visible";
		
	
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step515a();}
	}
	function step515a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-22').onclick=function(){step515b();}
	}
	
	function step515b()
	{
		
		 myStopFunction();
		
		     document.getElementById('s5-22').style.transformOrigin = "100% 80%";
	         document.getElementById('s5-22').style.animation = "valveturn-2 1.0s forwards ";

		
			
		
		setTimeout(function()
		{
		
			
		},800);     
        		
		setTimeout(function()
		 {
        
			 document.getElementById('s5-22').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[9] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		
		 },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px;  top: 474px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		 document.getElementById('5-21').onclick=function(){step516();}
	}
	
	 function step516()
	{
		 myStopFunction();
		 document.getElementById('swc5-9').style.visibility="hidden";
         document.getElementById('5-21').style.visibility="hidden";
		 document.getElementById('s5-21').style.visibility="visible";
		
	
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step516a();}
	}
	function step516a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-21').onclick=function(){step516b();}
	}
	
	function step516b()
	{
		
		 myStopFunction();
		
		     document.getElementById('s5-21').style.transformOrigin = "100% 80%";
	         document.getElementById('s5-21').style.animation = "valveturn-2 1.0s forwards ";
		
		
			
		
		setTimeout(function()
		{
		
			
		},800);     
        		
		setTimeout(function()
		 {
        
			 document.getElementById('s5-21').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[10] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		
		 },500);
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:548px;  top: 504px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		 document.getElementById('5-10').onclick=function(){step517();}
	}
	
	
	function step517()
	{
		 myStopFunction();
		
		 document.getElementById('5-10').style.visibility="hidden";
		 document.getElementById('sp5-1').style.visibility="visible";
		
			         

		

		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
        document.getElementById('tare5-1').onclick=function(){step517a();}
	}
	function step517a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('sp5-1').onclick=function(){step517b();}
	}
	
	function step517b()
	{
		
		 myStopFunction();
		 
		     document.getElementById('sp5-1').style.transformOrigin = "100% 80%";
	         document.getElementById('sp5-1').style.animation = "valveturn-2 1.0s forwards ";
		 
		
			 
		
		setTimeout(function()
		{
		     
			     
		    
		},800);	
        setTimeout(function()
		 {		
        	 document.getElementById('sp5-1').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[11] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		
		},500);
		setTimeout(function()
		{		
	         //document.getElementById('nextButton').style.visibility="visible";
			 validateAnswer(0,3,"350px","100px");
		},500);
	}
	
	function step6()
	{
		 document.getElementById('note').style.visibility="hidden";
	     document.getElementById('gv1').style.visibility="hidden";
	     document.getElementById('tr5-2').style.visibility="visible";
         document.getElementById('tr5-1').style.visibility="hidden";
	    
		document.getElementById('nextButton').style.visibility="visible";
	}
	
	
	

	function refresh()
	{
		  document.getElementById('pan').onclick="";      
		  document.getElementById('1').onclick="";              
		  document.getElementById('2').onclick="";              
		  document.getElementById('3').onclick="";              
		  document.getElementById('4').onclick="";              
		  document.getElementById('5').onclick="";              
		  document.getElementById('6').onclick="";              
		  document.getElementById("arrow1").style.animation = "";

		
	}
	
function checkInference()
{
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==4)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is 6-8.";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		document.getElementById("infAns").innerHTML="The fineness modulus of coarse aggregate should be in the range 6-8. Since fineness modulus of given coarse aggregate is 8.86, it is not in the range.";

		$("#infAns").fadeIn(750);
	},1000);
}