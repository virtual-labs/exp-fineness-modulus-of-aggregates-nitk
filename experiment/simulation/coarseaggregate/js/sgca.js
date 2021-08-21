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

function animatearrow()
{
	if (document.getElementById('arrow1').style.visibility=="hidden")
		document.getElementById('arrow1').style.visibility="visible";
	else
		document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

function magic()
{
	if (simsubscreennum==1)
	{  
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(340,446,90,30);
			document.getElementById('tare1').onclick="";
			document.getElementById('on1').onclick=function(){step1();}
		},700);
    }
	else if (simsubscreennum==2)
	{
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('mw').style.visibility="hidden";
		document.getElementById('p3').style.visibility="hidden";
		document.getElementById('wc').style.visibility="hidden";
		document.getElementById('v2-2').style.visibility="hidden";
		blinkArrow(250,159,180,40);
		document.getElementById('pan').onclick=function(){step2();}
    }
	else if (simsubscreennum==3)
	{
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
		blinkArrow(435,252,180,35);
		document.getElementById('10').onclick=function(){step3();}	
	}
	else if (simsubscreennum==4)
	{
		document.getElementById('10').style.visibility="hidden";
		document.getElementById('11').style.visibility="hidden";
		document.getElementById('12').style.visibility="hidden";
		document.getElementById('15b').style.visibility="hidden";
		document.getElementById('3-1off').style.visibility="hidden";
		document.getElementById('15c').style.visibility="hidden";
		document.getElementById('9a').style.visibility="hidden";
		blinkArrow(375,197,360,35);
		document.getElementById('5-6').onclick=function(){step4();}
	}
	else if(simsubscreennum==5)
	{
		document.getElementById('sp5-1').style.visibility="hidden";
		document.getElementById('ewm5').style.visibility="hidden";
		document.getElementById('mw5').style.visibility="hidden";
		document.getElementById('p5').style.visibility="hidden";
		document.getElementById('on5').style.visibility="hidden";
		document.getElementById('off5').style.visibility="hidden";
		document.getElementById('zero5').style.visibility="hidden";
		document.getElementById('tare5').style.visibility="hidden";
		document.getElementById('v5-2').style.visibility="hidden";
		document.getElementById('table5-1').style.visibility="visible";
		document.getElementById('gv1').style.visibility="visible";
		document.getElementById('gv1').onclick=function(){step5();}
	}
	else if(simsubscreennum==6)
	{
		document.getElementById('table5-2').style.visibility="hidden";
	}
}

function step1()
{
	myStopFunction();
	document.getElementById('mw').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('hp2-1').style.visibility="visible";
		setTimeout(function()
		{   
			blinkArrow(300,230,0,40);
			document.getElementById('hp2-1').onclick=function(){step11();}
		},500);	
	},500);					             
}
	
function step11()
{
	myStopFunction();
	document.getElementById('hp2-1').style.visibility="hidden";
	document.getElementById('p2').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(450,446,90,30);
		document.getElementById('tare1').onclick=function(){step12();} 
	},800); 		 
}
	
function step12()
{
	myStopFunction();
	document.getElementById('v2-1').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('swc2').style.visibility="visible";
		document.getElementById('hand').style.visibility="visible";
		setTimeout(function()
		{
			blinkArrow(650,180,360,40);
			document.getElementById('hand').onclick=function(){step13();} 
		},500);	
	},500);		 
}
	
function step13()
{
	myStopFunction();
	document.getElementById('swc2').style.visibility="hidden";
	document.getElementById('hand').style.transformOrigin = "100% 80%";
	document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pwc').style.visibility="visible";
		setTimeout(function()
		{	
			document.getElementById('v2-1').style.visibility="hidden";
			document.getElementById('p2').style.visibility="hidden";
			document.getElementById('p3').style.visibility="visible";
			document.getElementById('wc').style.visibility="visible";
			document.getElementById('pwc').style.visibility="hidden";
			document.getElementById('v2-2').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('hand').style.visibility="hidden";
				setTimeout(function()
				{
					document.getElementById('nextButton').style.visibility="visible";
				},500);  
			},500);
		},500);
	},500);
}
	
function step2()
{
	myStopFunction();
	document.getElementById('pan').style.visibility="hidden";
	document.getElementById('pan3-1').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(400,159,180,40);
		document.getElementById('21').onclick=function(){step21();}
	},300);
}
function step21()
{
	myStopFunction();
	document.getElementById('21').style.visibility="hidden";
	document.getElementById('3-21').style.visibility="visible";
	blinkArrow(560,159,180,40);
	document.getElementById('22').onclick=function(){step22();}
}
function step22()
{
	myStopFunction();
	document.getElementById('22').style.visibility="hidden";
	document.getElementById('3-22').style.visibility="visible";
	blinkArrow(250,260,180,40);
	document.getElementById('23').onclick=function(){step23();}

}
function step23()
{
	myStopFunction();
	document.getElementById('23').style.visibility="hidden";
	document.getElementById('3-23').style.visibility="visible";
	blinkArrow(400,260,180,40);
	document.getElementById('24').onclick=function(){step24();}
}
function step24()
{
	myStopFunction();
	document.getElementById('24').style.visibility="hidden";
	document.getElementById('3-24').style.visibility="visible";
	blinkArrow(560,260,180,40);
	document.getElementById('25').onclick=function(){step25();}
}
function step25()
{
	myStopFunction();
	document.getElementById('25').style.visibility="hidden";
	document.getElementById('3-25').style.visibility="visible";
	blinkArrow(250,359,180,40);
	document.getElementById('1').onclick=function(){step26();}
}
function step26()
{
	myStopFunction();
	document.getElementById('1').style.visibility="hidden";
	document.getElementById('3-1').style.visibility="visible";
	blinkArrow(400,359,180,40);
	document.getElementById('2').onclick=function(){step27();}
}	
function step27()
{
	myStopFunction();
	document.getElementById('2').style.visibility="hidden";
	document.getElementById('3-2').style.visibility="visible";
	blinkArrow(560,359,180,40);
	document.getElementById('3').onclick=function(){step28();}
}	
function step28()
{
	myStopFunction();
	document.getElementById('3').style.visibility="hidden";
	document.getElementById('3-3').style.visibility="visible";
	blinkArrow(250,460,180,40);
	document.getElementById('4').onclick=function(){step29();}
}

function step29()
{
	myStopFunction();
	document.getElementById('4').style.visibility="hidden";
	document.getElementById('3-4').style.visibility="visible";
	blinkArrow(400,460,180,40);
	document.getElementById('5').onclick=function(){step210();}
}

function step210()
{
	myStopFunction();
	document.getElementById('5').style.visibility="hidden";
	document.getElementById('3-5').style.visibility="visible";
	blinkArrow(560,460,180,40);
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
		blinkArrow(380,140,360,40);
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
		setTimeout(function()
		{
			document.getElementById('plate3-2').style.visibility="hidden";
			document.getElementById('rs3-1').style.visibility="hidden";
			setTimeout(function()
			{
				document.getElementById('3-11').style.visibility="visible";
				document.getElementById('3-8').style.visibility="visible";
				blinkArrow(388,200,360,40);
				document.getElementById('3-8').onclick=function(){step213();}
			},200);
		},300); 
	},500);
	document.getElementById('rdr3-1').style.visibility="hidden";
}
function step213()
{
	myStopFunction();
	document.getElementById('3-8').style.visibility="hidden";
	document.getElementById('3-9').style.visibility="visible";
	setTimeout(function()
	{
		validateAnswer(1,2,"300px","200px");
	},1000);
}
	
function step3()
{
	myStopFunction();
	document.getElementById('10').style.visibility="hidden";
	document.getElementById('12').style.visibility="visible";
	document.getElementById('9').style.visibility="visible";
	blinkArrow(435,186,180,40);
	document.getElementById('9').onclick=function(){step31();}
}
function step31()
{
	myStopFunction();
	document.getElementById('9').style.visibility="hidden";
	document.getElementById('9a').style.visibility="visible";
	blinkArrow(201,173.5,180,35);
	document.getElementById('15').onclick=function(){step32();}
}
function step32()
{
	myStopFunction();
	document.getElementById('15').style.visibility="hidden";
	document.getElementById('15b').style.visibility="visible";
	blinkArrow(375,167.5,360,35);
	document.getElementById('15a').onclick=function(){step33();}
}
function step33()
{
	myStopFunction();
	document.getElementById('15a').style.visibility="hidden";
	document.getElementById('15c').style.visibility="visible";
	blinkArrow(215,544,90,35);
	document.getElementById('3-1on').onclick=function(){step34();}
}
function step34()
{
	myStopFunction();
	document.getElementById('3-1on').onclick="";
	document.getElementById('3-1on').style.visibility="hidden";
	document.getElementById("12").style.animation="shake 2s infinite linear";
	setTimeout(function()
	{
		blinkArrow(242.5,546,90,35);
		document.getElementById('3-1off').onclick=function()
		{
			myStopFunction();
			document.getElementById('3-1off').onclick="";
			document.getElementById("12").style.animation="";
			validateAnswer(2,0,"390px","100px");
		}
	},5000);
}

function step4()
{
	myStopFunction();
	document.getElementById('5-6').style.visibility="hidden";
	document.getElementById('5-8').style.visibility="visible";
	blinkArrow(203,205,180,35);
	document.getElementById('5-5').onclick=function(){step41();}
}
function step41()
{
	myStopFunction();
	document.getElementById('5-5').style.visibility="hidden";
	document.getElementById('5-7').style.visibility="visible";
	blinkArrow(290,177,270,40);
	document.getElementById('5-3').onclick=function(){step42();}
}
function step42()
{
	myStopFunction();
	document.getElementById('5-3').style.visibility="hidden";
	document.getElementById('5-4').style.visibility="visible";
	blinkArrow(290,184,270,40);
	document.getElementById('5-2').onclick=function(){step43();}
}
function step43()
{
	myStopFunction();
	document.getElementById('5-2').style.visibility="hidden";
	document.getElementById('5-4').style.visibility="hidden";
	document.getElementById('5-7').style.visibility="hidden";
	document.getElementById('5-8').style.visibility="hidden";
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
	setTimeout(function()
	{
		document.getElementById('v5-1').style.visibility="visible";
		document.getElementById('zero5').style.visibility="visible";
		document.getElementById('on5').style.visibility="visible";
		document.getElementById('off5').style.visibility="visible";
		document.getElementById('mw5').style.visibility="visible";
		document.getElementById('tare5').style.visibility="visible";
		document.getElementById('ewm5').style.visibility="visible";
		document.getElementById('p5').style.visibility="visible";
		setTimeout(function()
		{
			blinkArrow(548,210,180,40);
			document.getElementById('5-18').onclick=function(){step44();}
		},700);
	},800);	 
}
	
function step44()
{
	myStopFunction();
	document.getElementById('5-18').style.visibility="hidden";
	blinkArrow(548,220,180,40);
	document.getElementById('5-16').onclick=function(){step45();}
}
function step45()
{
	myStopFunction();
	document.getElementById('5-16').style.visibility="hidden";
	document.getElementById('s5-6').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step46a();}
}
function step46a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-6').onclick=function(){step46b();}
}
	
function step46b()
{
	myStopFunction();
	document.getElementById('s5-6').style.transformOrigin = "100% 80%";
	document.getElementById('s5-6').style.animation = "valveturn-2 0.75s forwards ";	
	setTimeout(function()
	{		 
		document.getElementById('s5-6').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[0] +".000 g";
		document.getElementById('v5-2').style.visibility="visible";
		blinkArrow(548,250,180,40);
		document.getElementById('5-15').onclick=function(){step47();}
	},750);
}
function step47()
{
	myStopFunction();
	document.getElementById('5-15').style.visibility="hidden";
	document.getElementById('s5-5').style.visibility="visible";
	document.getElementById('swc5-1').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step47a();}
}
function step47a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-5').onclick=function(){step47b();}
}
function step47b()
{
	myStopFunction();
	document.getElementById('s5-5').style.transformOrigin = "100% 80%";
	document.getElementById('s5-5').style.animation = "valveturn-2 0.75s forwards ";
	setTimeout(function()
	{		
		document.getElementById('s5-5').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[1] +".000 g";
		document.getElementById('v5-2').style.visibility="visible";
		blinkArrow(548,275,180,40);
		document.getElementById('5-14').onclick=function(){step48();}
	},750);
}
function step48()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('5-14').style.visibility="hidden";
	document.getElementById('s5-4').style.visibility="visible";
	document.getElementById('swc5-1').style.visibility="hidden";
	document.getElementById('swc5-2').style.visibility="visible";
	document.getElementById('swc5-4').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step48a();}
}
function step48a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-4').onclick=function(){step48b();}
}
function step48b()
{
	myStopFunction();			
	document.getElementById('swc5-4').style.visibility="hidden";
	document.getElementById('s5-4').style.transformOrigin = "100% 80%";
	document.getElementById('s5-4').style.animation = "valveturn-2 0.8s forwards ";
	document.getElementById('pwc5-1').style.visibility="visible";
	setTimeout(function()
	{		
		document.getElementById('s5-4').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[2] +" g";
		document.getElementById('v5-2').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('pwc5-1').style.visibility="hidden";
			document.getElementById('swc5-7').style.visibility="visible";
			blinkArrow(548,295,180,40);
			document.getElementById('5-13').onclick=function(){step49();}
		},300);
	},500);
}
function step49()
{
	myStopFunction();
	document.getElementById('swc5-7').style.visibility="hidden";
	document.getElementById('5-13').style.visibility="hidden";
	document.getElementById('s5-3').style.visibility="visible";
	document.getElementById('swc5-2').style.visibility="hidden";
	document.getElementById('swc5-3').style.visibility="visible";
	document.getElementById('swc5-5').style.visibility="visible";       
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step49a();}
}
function step49a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-3').onclick=function(){step49b();}
}	
function step49b()
{
	myStopFunction();
	document.getElementById('swc5-5').style.visibility="hidden";
	document.getElementById('s5-3').style.transformOrigin = "100% 80%";
	document.getElementById('s5-3').style.animation = "valveturn-2 0.8s forwards ";
	document.getElementById('pwc5-2').style.visibility="visible";
	setTimeout(function()
	{		
		document.getElementById('s5-3').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[3] +" g";
		document.getElementById('v5-2').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('pwc5-2').style.visibility="hidden";
			document.getElementById('swc5-8').style.visibility="visible";
			blinkArrow(545,325,180,40);
			document.getElementById('5-12').onclick=function(){step410();}
		},300);	
	},500);
}
function step410()
{
	myStopFunction();
	document.getElementById('swc5-8').style.visibility="hidden";
	document.getElementById('5-12').style.visibility="hidden";
	document.getElementById('s5-2').style.visibility="visible";
	document.getElementById('swc5-3').style.visibility="hidden";
	document.getElementById('swc5-6').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step410a();}
}
function step410a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-2').onclick=function(){step410b();}
}
function step410b()
{
	myStopFunction();
	document.getElementById('swc5-6').style.visibility="hidden";
	document.getElementById('s5-2').style.transformOrigin = "100% 80%";
	document.getElementById('s5-2').style.animation = "valveturn-2 0.8s forwards ";
	document.getElementById('pwc5-3').style.visibility="visible";
	setTimeout(function()
	{		
		document.getElementById('s5-2').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[4] +" g";
		document.getElementById('v5-2').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('pwc5-3').style.visibility="hidden";
			document.getElementById('swc5-9').style.visibility="visible";
			blinkArrow(548,350,180,40);
			document.getElementById('5-11').onclick=function(){step411();}
		},300);	
	},500);
}
function step411()
{
	myStopFunction();
	document.getElementById('swc5-9').style.visibility="hidden";
	document.getElementById('5-11').style.visibility="hidden";
	document.getElementById('s5-1').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step411a();}
}
function step411a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-1').onclick=function(){step411b();}
}

function step411b()
{
	myStopFunction();
	document.getElementById('s5-1').style.transformOrigin = "100% 80%";
	document.getElementById('s5-1').style.animation = "valveturn-2 0.75s forwards ";    
	setTimeout(function()
	{
		document.getElementById('s5-1').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[5] +".000 g";
		document.getElementById('v5-2').style.visibility="visible";
		blinkArrow(548,380,180,40);
		document.getElementById('5-25').onclick=function(){step412();}
	},750);
}
function step412()
{
	myStopFunction();
	document.getElementById('swc5-9').style.visibility="hidden";
	document.getElementById('5-25').style.visibility="hidden";
	document.getElementById('s5-25').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step412a();}
}
function step412a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-25').onclick=function(){step412b();}
}

function step412b()
{
	myStopFunction();
	document.getElementById('s5-25').style.transformOrigin = "100% 80%";
	document.getElementById('s5-25').style.animation = "valveturn-2 0.75s forwards ";    
	setTimeout(function()
	{
		document.getElementById('s5-25').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[6] +".000 g";
		document.getElementById('v5-2').style.visibility="visible";
		blinkArrow(548,400,180,40);
		document.getElementById('5-24').onclick=function(){step413();}
	},750);
}

function step413()
{
	myStopFunction();
	document.getElementById('swc5-9').style.visibility="hidden";
	document.getElementById('5-24').style.visibility="hidden";
	document.getElementById('s5-24').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step413a();}
}

function step413a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-24').onclick=function(){step413b();}
}

function step413b()
{
	myStopFunction();
	document.getElementById('s5-24').style.transformOrigin = "100% 80%";
	document.getElementById('s5-24').style.animation = "valveturn-2 0.75s forwards ";     
	setTimeout(function()
	{
		document.getElementById('s5-24').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[7] +".000 g";
		document.getElementById('v5-2').style.visibility="visible";
		blinkArrow(548,428.5,180,40);
		document.getElementById('5-23').onclick=function(){step414();}
	},750);
}

function step414()
{
	myStopFunction();
	document.getElementById('swc5-9').style.visibility="hidden";
	document.getElementById('5-23').style.visibility="hidden";
	document.getElementById('s5-23').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step414a();}
}

function step414a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-23').onclick=function(){step414b();}
}

function step414b()
{
	myStopFunction();
	document.getElementById('s5-23').style.transformOrigin = "100% 80%";
	document.getElementById('s5-23').style.animation = "valveturn-2 0.75s forwards ";
	setTimeout(function()
	{
		document.getElementById('s5-23').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[8] +".000 g";
		document.getElementById('v5-2').style.visibility="visible";
		blinkArrow(548,450,180,40);
		document.getElementById('5-22').onclick=function(){step415();}
	},750);
}

function step415()
{
	myStopFunction();
	document.getElementById('swc5-9').style.visibility="hidden";
	document.getElementById('5-22').style.visibility="hidden";
	document.getElementById('s5-22').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step415a();}
}

function step415a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-22').onclick=function(){step415b();}
}

function step415b()
{
	myStopFunction();
	document.getElementById('s5-22').style.transformOrigin = "100% 80%";
	document.getElementById('s5-22').style.animation = "valveturn-2 0.75s forwards ";
	setTimeout(function()
	{
		document.getElementById('s5-22').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[9] +".000 g";
		document.getElementById('v5-2').style.visibility="visible";
		blinkArrow(548,474,180,40);
		document.getElementById('5-21').onclick=function(){step416();}
	},750);
}

function step416()
{
	myStopFunction();
	document.getElementById('swc5-9').style.visibility="hidden";
	document.getElementById('5-21').style.visibility="hidden";
	document.getElementById('s5-21').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step416a();}
}
function step416a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('s5-21').onclick=function(){step416b();}
}

function step416b()
{
	myStopFunction();
	document.getElementById('s5-21').style.transformOrigin = "100% 80%";
	document.getElementById('s5-21').style.animation = "valveturn-2 0.75s forwards ";
	setTimeout(function()
	{
		document.getElementById('s5-21').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[10] +".000 g";
		document.getElementById('v5-2').style.visibility="visible";
		blinkArrow(548,504,180,40);
		document.getElementById('5-10').onclick=function(){step417();}
	},750);
}

function step417()
{
	myStopFunction();
	document.getElementById('5-10').style.visibility="hidden";
	document.getElementById('sp5-1').style.visibility="visible";
	blinkArrow(340.5,446,90,35);
	document.getElementById('tare5').onclick=function(){step417a();}
}

function step417a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('sp5-1').onclick=function(){step417b();}
}

function step417b()
{
	myStopFunction();
	document.getElementById('sp5-1').style.transformOrigin = "100% 80%";
	document.getElementById('sp5-1').style.animation = "valveturn-2 0.8s forwards ";
	setTimeout(function()
	{		
		document.getElementById('sp5-1').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=values1[11] +".000 g";
		document.getElementById('v5-2').style.visibility="visible";
		setTimeout(function()
		{		
			validateAnswer(0,3,"350px","100px");
		},300);
	},500);
}

function step5()
{
	document.getElementById('note').style.visibility="hidden";
	document.getElementById('gv1').style.visibility="hidden";
	document.getElementById('table5-1').style.visibility="hidden";
	document.getElementById('table5-2').style.visibility="visible";
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