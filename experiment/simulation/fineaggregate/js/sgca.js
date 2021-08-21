//on click of next button
var mpointer=0;
var repeat =0;
var flag=1;
var sub="";
var n=0;
var D10,D30,D60;
var river=[18,50,54,130,393,330,20,5];
var beach=[0,0,6,22,368,580,18,6];
var river1=[0.18,0.27,0.45,2.5,0.9];
var beach1=[0.17,0.21,0.3,1.76,0.86];
var rivval=[[4.75,2.36,1.18,0.6,0.3,0.15,0.075],
            [98.2,93.2,87.8,74.8,35.5,2.5,0.5]];

var bchval=[[4.75,2.36,1.18,0.6,0.3,0.15,0.075],
            [100,100,99.4,97.2,60.4,2.4,0.6]];		

function navNext()
{

     for (temp = 0; temp <= 5 ; temp++) 
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
     }
     simsubscreennum+=1;

     document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
     document.getElementById('nextButton').style.visibility="hidden";
     magic();
}

var ca;
var questions=["Aggregate whose size is greater than 4.75mm is ",
				"Sieve analysis presents particle size </br>information in the form of an _________",
				"D<sub>60</sub> means __________________ ."];
				
var options2=[["Fine aggregate","Coarse aggregate","Clay","None of the above"],//Coarse aggregate
			  ["Logarithmic Curve","Exponential Curve","S – curve","None of the above"],//S – curve
			  ["60% of the soil particles are finer than this size","40% of the soil particles are finer than this size","Soil particles pass through 60mm seive","Soil particles are retained on 60mm seive"]];//60% of the soil particles are finer than this size.
			  
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
		refresh();
		document.getElementById('nextButton').style.visibility="hidden";
      	document.getElementById('sand').style.visibility="visible";
		if(document.getElementById('r').checked)
		{
			flag=1;
		}
		else if(document.getElementById('b').checked)
		{
			flag=2;
		}
        setTimeout(function()
        {
			document.getElementById('nextButton').style.visibility="visible";
	    }, 3000);
	}
	else if (simsubscreennum==2)
	{  
		refresh();
		flag=1;
		document.getElementById('sand').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
		{
		    document.getElementById('tare2').onclick="";
			blinkArrow(340,446,90,30);
	        document.getElementById('on2').onclick=function(){step2();}
		},700);
    }
	else if (simsubscreennum==3)
	{
		refresh();
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('mw').style.visibility="hidden";
		document.getElementById('p2').style.visibility="hidden";
		document.getElementById('rdr2').style.visibility="hidden";
		document.getElementById('rdb2').style.visibility="hidden";
		document.getElementById('v2-2').style.visibility="hidden";
		document.getElementById('on2').style.visibility="hidden";
		document.getElementById('tare2').style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(385,159,180,40);
			document.getElementById('pan').onclick=function(){step3();}
		},1200);
    }
	else if (simsubscreennum==4)
	{
		refresh();
		document.getElementById('pan3-1').style.visibility="hidden";
		document.getElementById('3-1').style.visibility="hidden";
		document.getElementById('3-2').style.visibility="hidden";
		document.getElementById('3-3').style.visibility="hidden";
		document.getElementById('3-4').style.visibility="hidden";
		document.getElementById('3-5').style.visibility="hidden";
		document.getElementById('3-6').style.visibility="hidden";
		document.getElementById('3-7').style.visibility="hidden";
		document.getElementById('3-9').style.visibility="hidden";
		document.getElementById('3-10').style.visibility="hidden";
		document.getElementById('3-11').style.visibility="hidden";
		document.getElementById('15').style.visibility="visible";
		document.getElementById('15a').style.visibility="visible";
		setTimeout(function()
		{
			blinkArrow(435,250,180,40);
			document.getElementById('10').onclick=function(){step4();}
		},800);
	}
	else if (simsubscreennum==5)
	{
		refresh();
		document.getElementById('10').style.visibility="hidden";
		document.getElementById('11').style.visibility="hidden";
		document.getElementById('12').style.visibility="hidden";
		document.getElementById('15b').style.visibility="hidden";
		document.getElementById('15c').style.visibility="hidden";
		document.getElementById('9a').style.visibility="hidden";
		blinkArrow(375,142.5,360,40);
		document.getElementById('5-6').onclick=function(){step5();}
	}
	else if (simsubscreennum==6)
	{
		refresh();
		document.getElementById('sp5-1').style.visibility="hidden";
		document.getElementById('ewm5').style.visibility="hidden";
		document.getElementById('mw5').style.visibility="hidden";
		document.getElementById('p5').style.visibility="hidden";
		document.getElementById('bch5-3').style.visibility="hidden";
		document.getElementById('riv5-3').style.visibility="hidden";
		document.getElementById('on5').style.visibility="hidden";
		document.getElementById('off5').style.visibility="hidden";
		document.getElementById('zero5').style.visibility="hidden";
		document.getElementById('tare5').style.visibility="hidden";
		document.getElementById('v5-2').style.visibility="hidden";
		if(flag==1)
		{
			document.getElementById('tr5-1').style.visibility="visible";
			document.getElementById('gv1').style.visibility="visible";
			document.getElementById('gv1').onclick=function(){step6();}
		}
		else  if(flag==2)
		{
			document.getElementById('tb5-1').style.visibility="visible";
			document.getElementById('gv3').style.visibility="visible";
			document.getElementById('gv3').onclick=function(){step6();}
		}
	}
	else if (simsubscreennum==7)
	{
		document.getElementById('step6').style.visibility="hidden";
		document.getElementById('step6-1').style.visibility="hidden";
		document.getElementById('six').style.visibility="hidden";
		document.getElementById('tr5-2').style.visibility="hidden";
		document.getElementById('tb5-2').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('six').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		step8();
    }
	else if (simsubscreennum==8)
	{
		document.getElementById('step7').style.visibility="hidden";
		document.getElementById('chartContainer').style.visibility="hidden";
		document.getElementById('7-1').style.visibility="hidden";
		document.getElementById('7-2').style.visibility="hidden";
		document.getElementById('7-3').style.visibility="hidden";
		document.getElementById('r1').style.visibility="hidden";
		document.getElementById('r2').style.visibility="hidden";
		document.getElementById('r3').style.visibility="hidden";
		document.getElementById('rcan8-1').style.visibility="visible";
		document.getElementById('rcan8-2').style.visibility="visible";
		document.getElementById('rcan8-3').style.visibility="visible";
		document.getElementById('rcan8-4').style.visibility="visible";
		if(flag==1)
		{
			document.getElementById('rcan8-1').innerHTML="Effective size at 10% finer by weight, D<sub>10</sub>= "+river1[0];
			document.getElementById('rcan8-2').innerHTML="Effective size at 30% finer by weight, D<sub>30</sub>= "+river1[1];
			document.getElementById('rcan8-3').innerHTML="Effective size at 60% finer by weight, D<sub>60</sub>= "+river1[2];
		}
		else if(flag==2)
		{
			document.getElementById('rcan8-1').innerHTML="Effective size at 10% finer by weight, D<sub>10</sub>= "+beach1[0];
			document.getElementById('rcan8-2').innerHTML="Effective size at 30% finer by weight, D<sub>30</sub>= "+beach1[1];
			document.getElementById('rcan8-3').innerHTML="Effective size at 60% finer by weight, D<sub>60</sub>= "+beach1[2];
		}
		calcCu();
	}
}
	
function step2()
{
	myStopFunction();
	document.getElementById('mw').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('hp2-1').style.visibility="visible";
		setTimeout(function()
		{   
			blinkArrow(310,200,0,40);
			document.getElementById('hp2-1').onclick=function()
			{
				myStopFunction();
				document.getElementById('hp2-1').style.visibility="hidden";
				document.getElementById('p2').style.visibility="visible";
				setTimeout(function()
				{
					blinkArrow(445,446,90,30);
					document.getElementById('tare2').onclick=function(){step21();} 
				},800); 
			}
		},500);
	},500);						             
}

function step21()
{
	myStopFunction();
    document.getElementById('v2-1').style.visibility="visible";
	setTimeout(function()
	{   if(flag==1)
		{
			document.getElementById('handr').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('handb').style.visibility="visible";
		}
		setTimeout(function()
		{
			blinkArrow(660,175,360,40);
			if(flag==1)
				document.getElementById('handr').onclick=function(){step22();} 
		    else if(flag==2)
				document.getElementById('handb').onclick=function(){step22();}
		},500);
	},500);			 
}
	
function step22()
{
	myStopFunction();
	if(flag==1)
	{
		document.getElementById('handr').style.transformOrigin = "100% 80%";
		document.getElementById('handr').style.animation = "valveturn-4 1.5s forwards ";
	}
	else if(flag==2)
	{
		document.getElementById('handb').style.transformOrigin = "100% 80%";
		document.getElementById('handb').style.animation = "valveturn-4 1.5s forwards ";
	}
	if(flag==1)
	{
		setTimeout(function()
		{
			document.getElementById('prs2').style.visibility="visible";
			setTimeout(function()
			{	
				document.getElementById('v2-1').style.visibility="hidden";
				document.getElementById('rdr2').style.visibility="visible";
				document.getElementById('prs2').style.visibility="hidden";
				document.getElementById('v2-2').style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById('handr').style.visibility="hidden";
				},500);
			},300);
		},700);
	}
	else if(flag==2)
	{
		setTimeout(function()
		{
			document.getElementById('pbs2').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('v2-1').style.visibility="hidden";
				document.getElementById('rdb2').style.visibility="visible";
				document.getElementById('pbs2').style.visibility="hidden";
				document.getElementById('v2-2').style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById('handb').style.visibility="hidden";
				},500);
			},300);
		},700);
	}
	setTimeout(function()
	{
		if(repeat==0)
		{
			validateAnswer(1,2,"50px","100px");
		}
		if(repeat==1)
		{
			document.getElementById('nextButton').style.visibility="visible";
		} 
	},2500);  
}
	
function step3()
{
	myStopFunction();
	document.getElementById('pan').style.visibility="hidden";
	document.getElementById('pan3-1').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(528,159,180,40);
		document.getElementById('1').onclick=function()
		{
			myStopFunction();
			document.getElementById('1').style.visibility="hidden";
			document.getElementById('3-1').style.visibility="visible";
			setTimeout(function()
			{
				blinkArrow(385,260,180,40);
				document.getElementById('2').onclick=function(){step31();}
			},500);
		}
	},500);
}

function step31()
{
	myStopFunction();
	document.getElementById('2').style.visibility="hidden";
	document.getElementById('3-2').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(528,260,180,40);
		document.getElementById('3').onclick=function()
		{
			myStopFunction();
			document.getElementById('3').style.visibility="hidden";
			document.getElementById('3-3').style.visibility="visible";
			setTimeout(function()
			{
				blinkArrow(385,360,180,40);
				document.getElementById('4').onclick=function(){step32();}
			},500);
		}
	},500);
}
	
function step32()
{
	myStopFunction();
	document.getElementById('4').style.visibility="hidden";
	document.getElementById('3-4').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(528,360,180,40);
		document.getElementById('5').onclick=function()
		{
			myStopFunction();
			document.getElementById('5').style.visibility="hidden";
			document.getElementById('3-5').style.visibility="visible";
			setTimeout(function()
			{
				blinkArrow(385,460,180,40);
				document.getElementById('6').onclick=function(){step33();}
			},500);
		}
	},500);
}
	
function step33()
{
	myStopFunction();
	document.getElementById('6').style.visibility="hidden";
	document.getElementById('3-6').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(528,460,180,40);
		document.getElementById('7').onclick=function(){step34();}
	},500);
}

function step34()
{
	 myStopFunction();
	 document.getElementById('7').style.visibility="hidden";
	 document.getElementById('3-7').style.visibility="visible";
	 myStopFunction();
	 refresh();
	 setTimeout(function()
	 {
		if(flag==1)
		{    
			setTimeout(function()
			{
				document.getElementById('plate3-2').style.visibility="visible";
				document.getElementById('rdr3-1').style.visibility="visible";
				setTimeout(function()
				{
					blinkArrow(465,140,360,40);
					document.getElementById('plate3-2').onclick=function(){step38();}
				},400);
			},500);	
		}
		else if(flag==2)
		{
			setTimeout(function()
			{
				document.getElementById('plate3-1').style.visibility="visible";
				document.getElementById('rdb3-1').style.visibility="visible";
				setTimeout(function()
				{
					blinkArrow(465,140,360,40);
					document.getElementById('plate3-1').onclick=function(){step39();}
				},300);
			},500);
		}
	},500);
}
	
function step38()
{
	myStopFunction();
	document.getElementById('plate3-2').style.transformOrigin = "100% 80%";
	document.getElementById('plate3-2').style.animation = "valveturn-2 1.0s forwards ";
	document.getElementById('rdr3-1').style.visibility="hidden";
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
				blinkArrow(465,190,360,40);
				document.getElementById('3-8').onclick=function(){step310();}
			},200);
		},300); 
	},500);
}

function step39()
{
	myStopFunction();
	document.getElementById('plate3-1').style.transformOrigin = "100% 80%";
	document.getElementById('plate3-1').style.animation = "valveturn-2 1.0s forwards ";
	document.getElementById('rdb3-1').style.visibility="hidden";
	setTimeout(function()
	{
		document.getElementById('bs3-1').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('plate3-1').style.visibility="hidden";
			document.getElementById('bs3-1').style.visibility="hidden";
			setTimeout(function()
			{
				document.getElementById('3-10').style.visibility="visible";
				document.getElementById('3-8').style.visibility="visible";
				setTimeout(function()
				{
					blinkArrow(465,190,360,40);
					document.getElementById('3-8').onclick=function(){step310();}
				},100);
			},300);
		},300);
	},500);
}
	
function step310()
{
	myStopFunction();
	document.getElementById('3-8').style.visibility="hidden";
	document.getElementById('3-9').style.visibility="visible";
	setTimeout(function()
	{
		if(repeat==0)
		{
			document.getElementById('nextButton').style.visibility="visible";
		}
		if(repeat==1)
		{
			validateAnswer(0,1,"350px","100px");
		}
	},1000);
}
	
function step4()
{
	myStopFunction();
	document.getElementById('10').style.visibility="hidden";
	document.getElementById('12').style.visibility="visible";
	document.getElementById('9').style.visibility="visible";
	blinkArrow(415,196,180,40);
	document.getElementById('9').onclick=function()
	{
		myStopFunction();
		document.getElementById('9').style.visibility="hidden";
		document.getElementById('9a').style.visibility="visible";
		blinkArrow(165,155,180,40);
		document.getElementById('15').onclick=function()
		{
			myStopFunction();
			document.getElementById('15').style.visibility="hidden";
			document.getElementById('15b').style.visibility="visible";
			blinkArrow(375,142.5,360,40);
			document.getElementById('15a').onclick=function(){step41();}
		}
    }
}

function step41()
{
	myStopFunction();
	document.getElementById('15a').style.visibility="hidden";
	document.getElementById('15c').style.visibility="visible";
	blinkArrow(195.5,485,90,35);
	document.getElementById('4-1on').onclick=function()
	{
		myStopFunction();
		document.getElementById('4-1on').onclick="";
		document.getElementById("12").style.animation="shake 2s infinite linear";
		setTimeout(function()
		{
			blinkArrow(227,487,90,35);
			document.getElementById('4-1off').onclick=function()
			{
				myStopFunction();
				document.getElementById('4-1off').onclick="";
				document.getElementById("12").style.animation="";
				document.getElementById("nextButton").style.visibility="visible";
			}
		},5000);
	}
}
	
function step5()
{
	myStopFunction();
	document.getElementById('5-6').style.visibility="hidden";
	document.getElementById('5-8').style.visibility="visible";
	blinkArrow(160,160,180,40);
	document.getElementById('5-5').onclick=function()
	{
		myStopFunction();
		document.getElementById('5-5').style.visibility="hidden";
		document.getElementById('5-7').style.visibility="visible";
		blinkArrow(270,138,270,40);
		document.getElementById('5-3').onclick=function()
		{
			myStopFunction();
			document.getElementById('5-3').style.visibility="hidden";
			document.getElementById('5-4').style.visibility="visible";
			blinkArrow(270,140,270,40);
			document.getElementById('5-2').onclick=function(){step51();}
		}
	}
}

function step51()
{
	myStopFunction();
	document.getElementById('5-2').style.visibility="hidden";
	document.getElementById('5-4').style.visibility="hidden";
	document.getElementById('5-7').style.visibility="hidden";
	document.getElementById('5-8').style.visibility="hidden";
	document.getElementById('5-1').style.visibility="hidden";

	document.getElementById('5-10').style.visibility="visible";
	document.getElementById('5-11').style.visibility="visible";
	document.getElementById('5-12').style.visibility="visible";
	document.getElementById('5-13').style.visibility="visible";
	document.getElementById('5-14').style.visibility="visible";
	document.getElementById('5-15').style.visibility="visible";
	document.getElementById('5-16').style.visibility="visible";
	document.getElementById('5-17').style.visibility="visible";
	document.getElementById('5-18').style.visibility="visible";

	setTimeout(function()
	{
		document.getElementById('zero5').style.visibility="visible";
		document.getElementById('on5').style.visibility="visible";
		document.getElementById('off5').style.visibility="visible";
		document.getElementById('mw5').style.visibility="visible";
		document.getElementById('tare5').style.visibility="visible";
		document.getElementById('ewm5').style.visibility="visible";
		document.getElementById('p5').style.visibility="visible";
		setTimeout(function()
		{
			blinkArrow(530,215,180,40);
			document.getElementById('5-18').onclick=function(){step52();}
		},700);
	},800);
}
	
function step52()
{
	myStopFunction();
	document.getElementById('5-18').style.visibility="hidden";
	if(flag==1)
	{
		document.getElementById('5a').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('5b').style.visibility="hidden";
	}
	setTimeout(function()
	{
		blinkArrow(530,235,180,40);
		document.getElementById('5-17').onclick=function(){step55();}
	},300);
}
	
function step55()
{
	myStopFunction();
	document.getElementById('5-17').style.visibility="hidden";
	document.getElementById('s5-7').style.visibility="visible";
	if(flag==1)
	{
		document.getElementById('5a').style.visibility="hidden";
		document.getElementById('5c').style.visibility="visible";
		document.getElementById('riv5-1a').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('5b').style.visibility="hidden";
		document.getElementById('5d').style.visibility="hidden";
		document.getElementById('bch5-1').style.visibility="hidden";
	}
	setTimeout(function()
	{
		blinkArrow(340,446,90,40);
		document.getElementById('tare5').onclick=function(){step55a();}
	},500);
}

function step55a()
{
	myStopFunction();
	document.getElementById('v5-1').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(540,185,360,40);
		document.getElementById('s5-7').onclick=function(){step55b();}
	},500);
}

function step55b()
{
	myStopFunction();
	document.getElementById('s5-7').style.transformOrigin = "100% 80%";
	document.getElementById('s5-7').style.animation = "valveturn-2 1.0s forwards ";
	if(flag==1)
	{
		document.getElementById('riv5-1a').style.visibility="hidden";
		document.getElementById('riv5-4').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('bch5-1').style.visibility="hidden";
		document.getElementById('bch5-2').style.visibility="hidden";
	}
	setTimeout(function()
	{
		if(flag==1)
		{ 
			document.getElementById('riv5-4').style.visibility="hidden";
			document.getElementById('riv5-3a').style.visibility="visible";
		}
		else if(flag==2)
		{ 
			document.getElementById('bch5-2').style.visibility="hidden";
			document.getElementById('bch5-3').style.visibility="hidden";
		}
		blinkArrow(530,258,180,40);
		document.getElementById('5-16').onclick=function(){step56();}
	},800);		
	setTimeout(function()
	{
		if(flag==1)
		{
			document.getElementById('s5-7').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=river[0] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('s5-7').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=beach[0] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
	},500);
}
function step56()
{
	myStopFunction();
	document.getElementById('riv5-3a').style.visibility="hidden";
	document.getElementById('bch5-3').style.visibility="hidden";
	document.getElementById('5-16').style.visibility="hidden";
	document.getElementById('s5-6').style.visibility="visible";
	if(flag==1)
	{
		document.getElementById('5c').style.visibility="hidden";
		document.getElementById('5e').style.visibility="visible";
		document.getElementById('riv5-1b').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('5d').style.visibility="hidden";
		document.getElementById('5f').style.visibility="visible";
		document.getElementById('bch5-1').style.visibility="hidden";
	}
	setTimeout(function()
	{
		blinkArrow(340,446,90,40);
		document.getElementById('tare5').onclick=function(){step56a();}
	},500);
}

function step56a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(540,185,360,40);
		document.getElementById('s5-6').onclick=function(){step56b();}
	},500);
}
	
function step56b()
{
	myStopFunction();
	document.getElementById('s5-6').style.transformOrigin = "100% 80%";
	document.getElementById('s5-6').style.animation = "valveturn-2 1.0s forwards ";
	if(flag==1)
	{
		document.getElementById('riv5-1b').style.visibility="hidden";
		document.getElementById('riv5-4').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('bch5-1').style.visibility="hidden";
		document.getElementById('bch5-2').style.visibility="hidden";
	}
	setTimeout(function()
	{
		if(flag==1)
		{ 
		document.getElementById('riv5-4').style.visibility="hidden";
		document.getElementById('riv5-3b').style.visibility="visible";
		}
		else if(flag==2)
		{ 
		document.getElementById('bch5-2').style.visibility="hidden";
		document.getElementById('bch5-3').style.visibility="hidden";
		}
		setTimeout(function()
		{
			blinkArrow(530,302,180,40);
			document.getElementById('5-15').onclick=function(){step57();}
		},200);
	},800);	
	setTimeout(function()
	{		 
		if(flag==1)
		{
		document.getElementById('s5-6').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=river[1] +".00 g";
		document.getElementById('v5-2').style.visibility="visible";
		}
		else if(flag==2)
		{
		document.getElementById('s5-6').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=beach[1] +".00 g";
		document.getElementById('v5-2').style.visibility="visible";
		}
	},500);
}

function step57()
{
	myStopFunction();
	document.getElementById('riv5-3b').style.visibility="hidden";
	document.getElementById('bch5-3').style.visibility="hidden";
	document.getElementById('5-15').style.visibility="hidden";
	document.getElementById('s5-5').style.visibility="visible";
	if(flag==1)
	{
		document.getElementById('5e').style.visibility="hidden";
		document.getElementById('5g').style.visibility="visible";
		document.getElementById('riv5-1c').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('5f').style.visibility="hidden";
		document.getElementById('5h').style.visibility="visible";
		document.getElementById('bch5-1').style.visibility="visible";
	}
	setTimeout(function()
	{
		blinkArrow(340,446,90,40);
		document.getElementById('tare5').onclick=function(){step57a();}
	},500);
}

function step57a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(540,185,360,40);
		document.getElementById('s5-5').onclick=function(){step57b();}
	},500);
}
	
function step57b()
{
	myStopFunction();
	document.getElementById('s5-5').style.transformOrigin = "100% 80%";
	document.getElementById('s5-5').style.animation = "valveturn-2 1.0s forwards ";

	if(flag==1)
	{
	document.getElementById('riv5-1c').style.visibility="hidden";
	document.getElementById('riv5-4').style.visibility="visible";
	}
	else if(flag==2)
	{
	document.getElementById('bch5-1').style.visibility="hidden";
	document.getElementById('bch5-2').style.visibility="visible";
	}
	setTimeout(function()
	{
		if(flag==1)
		{ 
		document.getElementById('riv5-4').style.visibility="hidden";
		document.getElementById('riv5-3c').style.visibility="visible";
		}
		else if(flag==2)
		{ 
		document.getElementById('bch5-2').style.visibility="hidden";
		document.getElementById('bch5-3').style.visibility="visible";
		}
		setTimeout(function()
		{
			blinkArrow(530,330,180,40);
			document.getElementById('5-14').onclick=function(){step58();}
		},200);
	},800);	
	setTimeout(function()
	{		
		if(flag==1)
		{
		document.getElementById('s5-5').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=river[2] +".00 g";
		document.getElementById('v5-2').style.visibility="visible";
		}
		else if(flag==2)
		{
		document.getElementById('s5-5').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="hidden";
		document.getElementById('v5-2').innerHTML=beach[2] +".00 g";
		document.getElementById('v5-2').style.visibility="visible";
		}
	},500);
}
	
function step58()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('riv5-3c').style.visibility="hidden";
	document.getElementById('bch5-3').style.visibility="hidden";
	document.getElementById('5-14').style.visibility="hidden";
	document.getElementById('s5-4').style.visibility="visible";
	if(flag==1)
	{
		document.getElementById('5g').style.visibility="hidden";
		document.getElementById('5i').style.visibility="visible";
		document.getElementById('riv5-1d').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('5h').style.visibility="hidden";
		document.getElementById('5j').style.visibility="visible";
		document.getElementById('bch5-1').style.visibility="visible";
	}
	setTimeout(function()
	{
		blinkArrow(340,446,90,40);
		document.getElementById('tare5').onclick=function(){step58a();}
	},500);
}

function step58a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(540,185,360,40);
		document.getElementById('s5-4').onclick=function(){step58b();}
	},500);
}
	
function step58b()
{
	myStopFunction();
	document.getElementById('s5-4').style.transformOrigin = "100% 80%";
	document.getElementById('s5-4').style.animation = "valveturn-2 1.0s forwards ";
	if(flag==1)
	{
	document.getElementById('riv5-1d').style.visibility="hidden";
	document.getElementById('riv5-4').style.visibility="visible";
	}
	else if(flag==2)
	{
	document.getElementById('bch5-1').style.visibility="hidden";
	document.getElementById('bch5-2').style.visibility="visible";
	} 
	setTimeout(function()
	{
		if(flag==1)
		{ 
		document.getElementById('riv5-4').style.visibility="hidden";
		document.getElementById('riv5-3d').style.visibility="visible";
		}
		else if(flag==2)
		{ 
		document.getElementById('bch5-2').style.visibility="hidden";
		document.getElementById('bch5-3').style.visibility="visible";
		}
		setTimeout(function()
		{
			blinkArrow(530,360,180,40);
			document.getElementById('5-13').onclick=function(){step59();}
		},200);
	},800);	
	setTimeout(function()
	{		
		if(flag==1)
		{
			document.getElementById('s5-4').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=river[3] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('s5-4').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=beach[3] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
	},500);
}

function step59()
{
	myStopFunction();
	document.getElementById('riv5-3d').style.visibility="hidden";
	document.getElementById('bch5-3').style.visibility="hidden";
	document.getElementById('5-13').style.visibility="hidden";
	document.getElementById('s5-3').style.visibility="visible";
	if(flag==1)
	{
		document.getElementById('5i').style.visibility="hidden";
		document.getElementById('5k').style.visibility="visible";
		document.getElementById('riv5-1e').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('5j').style.visibility="hidden";
		document.getElementById('5l').style.visibility="visible";
		document.getElementById('bch5-1').style.visibility="visible";
	}
	blinkArrow(340,446,90,40);
	document.getElementById('tare5').onclick=function(){step59a();}
}

function step59a()
{
	setTimeout(function()
	{
		myStopFunction();
		document.getElementById('v5-2').style.visibility="hidden";
		document.getElementById('v5-1').style.visibility="visible";
		blinkArrow(540,185,360,40);
		document.getElementById('s5-3').onclick=function(){step59b();}
	},500);
}
	
function step59b()
{
	myStopFunction();
	document.getElementById('s5-3').style.transformOrigin = "100% 80%";
	document.getElementById('s5-3').style.animation = "valveturn-2 1.0s forwards ";
	if(flag==1)
	{
		document.getElementById('riv5-1e').style.visibility="hidden";
		document.getElementById('riv5-4').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('bch5-1').style.visibility="hidden";
		document.getElementById('bch5-2').style.visibility="visible";
	}
	setTimeout(function()
	{
		if(flag==1)
		{ 
		document.getElementById('riv5-4').style.visibility="hidden";
		document.getElementById('riv5-3e').style.visibility="visible";
		}
		else if(flag==2)
		{ 
		document.getElementById('bch5-2').style.visibility="hidden";
		document.getElementById('bch5-3').style.visibility="visible";
		}
		setTimeout(function()
		{
			blinkArrow(530,390,180,40);
			document.getElementById('5-12').onclick=function(){step510();}
		},200);
	},800);	
	setTimeout(function()
	{		
		if(flag==1)
		{
			document.getElementById('s5-3').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=river[4] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('s5-3').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=beach[4] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
	},500);
}
	
function step510()
{
	myStopFunction();
	document.getElementById('riv5-3e').style.visibility="hidden";
	document.getElementById('bch5-3').style.visibility="hidden";
	document.getElementById('5-12').style.visibility="hidden";
	document.getElementById('s5-2').style.visibility="visible";
	if(flag==1)
	{
		document.getElementById('5k').style.visibility="hidden";
		document.getElementById('5m').style.visibility="visible";
		document.getElementById('riv5-1f').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('5l').style.visibility="hidden";
		document.getElementById('5n').style.visibility="visible";
		document.getElementById('bch5-1').style.visibility="visible";
	}
	setTimeout(function()
	{
		blinkArrow(340,446,90,40);
		document.getElementById('tare5').onclick=function(){step510a();}
	},500);
}
	
function step510a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(540,185,360,40);
		document.getElementById('s5-2').onclick=function(){step510b();}
	},500);
}
	
function step510b()
{
	myStopFunction();
	document.getElementById('s5-2').style.transformOrigin = "100% 80%";
	document.getElementById('s5-2').style.animation = "valveturn-2 1.0s forwards ";
	if(flag==1)
	{
	document.getElementById('riv5-1f').style.visibility="hidden";
	document.getElementById('riv5-4').style.visibility="visible";
	}
	else if(flag==2)
	{
	document.getElementById('bch5-1').style.visibility="hidden";
	document.getElementById('bch5-2').style.visibility="visible";
	}
	setTimeout(function()
	{
		if(flag==1)
		{ 
			document.getElementById('riv5-4').style.visibility="hidden";
			document.getElementById('riv5-3').style.visibility="visible";
		}
		else if(flag==2)
		{ 
			document.getElementById('bch5-2').style.visibility="hidden";
			document.getElementById('bch5-3').style.visibility="visible";
		}
		setTimeout(function()
		{
			blinkArrow(530,425,180,40);
			document.getElementById('5-11').onclick=function(){step511();}
		},200);
	},800);	
	setTimeout(function()
	{		
		if(flag==1)
		{
			document.getElementById('s5-2').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=river[5] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('s5-2').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=beach[5] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
	},500);
}
	
function step511()
{
	myStopFunction();
	document.getElementById('riv5-3').style.visibility="hidden";
	document.getElementById('bch5-3').style.visibility="hidden";
	document.getElementById('5-11').style.visibility="hidden";
	document.getElementById('s5-1').style.visibility="visible";
	if(flag==1)
	{
		document.getElementById('5m').style.visibility="hidden";
		document.getElementById('5o').style.visibility="visible";
		document.getElementById('riv5-1').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('5n').style.visibility="hidden";
		document.getElementById('5p').style.visibility="visible";
		document.getElementById('bch5-1').style.visibility="visible";
	}
	blinkArrow(340,446,90,40);
	document.getElementById('tare5').onclick=function(){step511a();}
}

function step511a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(540,185,360,40);
		document.getElementById('s5-1').onclick=function(){step511b();}
	},500);
}
	
function step511b()
{
	myStopFunction();
	document.getElementById('s5-1').style.transformOrigin = "100% 80%";
	document.getElementById('s5-1').style.animation = "valveturn-2 1.0s forwards ";
	if(flag==1)
	{
		document.getElementById('riv5-1').style.visibility="hidden";
		document.getElementById('riv5-2').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('bch5-1').style.visibility="hidden";
		document.getElementById('bch5-2').style.visibility="visible";
	}
	setTimeout(function()
	{
		if(flag==1)
		{ 
			document.getElementById('riv5-2').style.visibility="hidden";
			document.getElementById('riv5-3').style.visibility="visible";
		}
		else if(flag==2)
		{ 
			document.getElementById('bch5-2').style.visibility="hidden";
			document.getElementById('bch5-3').style.visibility="visible";
		}
		setTimeout(function()
		{
			blinkArrow(530,460,180,40);
			document.getElementById('5-10').onclick=function(){step512();}
		},200);
	},800);     
	setTimeout(function()
	{
		if(flag==1)
		{
			document.getElementById('s5-1').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=river[6] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('s5-1').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=beach[6] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
	},500);
}
	
function step512()
{
	myStopFunction();
	document.getElementById('riv5-3').style.visibility="hidden";
	document.getElementById('bch5-3').style.visibility="hidden";
	document.getElementById('5-10').style.visibility="hidden";
	document.getElementById('sp5-1').style.visibility="visible";
	if(flag==1)
	{
		document.getElementById('5m').style.visibility="hidden";
		document.getElementById('5o').style.visibility="hidden";
		document.getElementById('riv5-1').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('5n').style.visibility="hidden";
		document.getElementById('5p').style.visibility="hidden";
		document.getElementById('bch5-1').style.visibility="visible";
	}
	setTimeout(function()
	{
		blinkArrow(340,446,90,40);
		document.getElementById('tare5').onclick=function(){step512a();}
	},500);
}
	
function step512a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(540,185,360,40);
		document.getElementById('sp5-1').onclick=function(){step512b();}
	},500);
}
	
function step512b()
{
	myStopFunction();
	document.getElementById('sp5-1').style.transformOrigin = "100% 80%";
	document.getElementById('sp5-1').style.animation = "valveturn-2 1.0s forwards ";
	if(flag==1)
	{
		document.getElementById('riv5-1').style.visibility="hidden";
		document.getElementById('riv5-2').style.visibility="visible";
	}
	else if(flag==2)
	{
		document.getElementById('bch5-1').style.visibility="hidden";
		document.getElementById('bch5-2').style.visibility="visible";
	}
	setTimeout(function()
	{
		if(flag==1)
		{ 
			document.getElementById('riv5-2').style.visibility="hidden";
			document.getElementById('riv5-3').style.visibility="visible";
		}
		else if(flag==2)
		{ 
			document.getElementById('bch5-2').style.visibility="hidden";
			document.getElementById('bch5-3').style.visibility="visible";
		}
		setTimeout(function()
		{		
			if(repeat==0)
			{
				document.getElementById('nextButton').style.visibility="visible";
			}
			if(repeat==1)
			{
				validateAnswer(2,0,"350px","100px");
			}
		},200);
	},800);	
	setTimeout(function()
	{		
		if(flag==1)
		{
			document.getElementById('sp5-1').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=river[7] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('sp5-1').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="hidden";
			document.getElementById('v5-2').innerHTML=beach[7] +".00 g";
			document.getElementById('v5-2').style.visibility="visible";
		}
	},500);
}

function step6()
{
	if(flag==1)
	{
		document.getElementById('note').style.visibility="hidden";
		document.getElementById('gv1').style.visibility="hidden";
		document.getElementById('tr5-2').style.visibility="visible";
		document.getElementById('tr5-1').style.visibility="hidden";
	}
	else if(flag==2)
	{
		document.getElementById('note').style.visibility="hidden";
		document.getElementById('gv3').style.visibility="hidden";
		document.getElementById('tb5-2').style.visibility="visible";
		document.getElementById('tb5-1').style.visibility="hidden";
	}
	document.getElementById('nextButton').style.visibility="visible";
}
	
function step8()
{
	if(flag==1)
	{
		$("#chartContainer").ejChart(
		{
			//Initializing Primary X Axis	
			primaryXAxis:
			{
				labelFormat: "{value}",
				title: { text: 'Sieve Size (mm)' },
				range: { min: 0, max: 5, interval:0.5 }
			},	
			//Initializing Primary Y Axis	
			primaryYAxis:
			{
				
				 labelFormat: "{value}",
				title: { text: 'Cumulative % finer' },
				range: { min: 0, max: 100, interval: 10 }
	 
			},					
			series: 
			[
				{
				points: [
				{ x: rivval[0][0], y: rivval[1][0]},
				{ x: rivval[0][1], y: rivval[1][1]},
				{ x: rivval[0][2], y: rivval[1][2]},
				{ x: rivval[0][3], y: rivval[1][3]},
				{ x: rivval[0][4], y: rivval[1][4]},
				{ x: rivval[0][5], y: rivval[1][5]},
				{ x: rivval[0][6], y: rivval[1][6]}
				
				],
				type: 'spline',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
						shape: 'circle',
						size:
						{
							height: 5, width: 5
						},
						visible: true
					},					
					enableAnimation :true
				},
				// for D10
				{
				points: [
				
				{ x: river1[0], y: 0},
				{ x: river1[0], y: 10},
				{ x: 0, y: 10}
				
				],
				type: 'line',
				name: 'D<sub>10</sub>',
					fill: "#FF1493",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
						shape: 'circle',
						size:
						{
							height: 5, width: 5
						},
						visible: true
					},					
					enableAnimation :true
				},
				// for D30
				{
				points: [
				{ x: river1[1], y: 0},
				{ x: river1[1], y: 30},
				{ x: 0, y: 30}
				],
				type: 'line',
					fill: "#008000",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
						shape: 'circle',
						size:
						{
							height: 5, width: 5
						},
						visible: true
					},					
					enableAnimation :true
				},
				// for D60
				{
				points: [
				{ x: river1[2], y: 0},
				{ x: river1[2], y: 60},
				{ x: 0, y: 60}
				
				],
				type: 'line',
					fill: "#B22222",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
						shape: 'circle',
						size:
						{
							height: 5, width: 5
						},
						visible: true
					},					
					enableAnimation :true
				}
			],
			 load:"loadTheme",
			isResponsive: true,
			legend:{visible:false}
		});
		}
		else if(flag==2)
		{
			$("#chartContainer").ejChart(
			{
			//Initializing Primary X Axis	
			primaryXAxis:
			{
				labelFormat: "{value}",
				title: { text: 'Sieve Size (mm)' },
				range: { min: 0, max: 5, interval:0.5 }
			},	
			//Initializing Primary Y Axis	
			primaryYAxis:
			{
				labelFormat: "{value}",
				title: { text: 'Cumulative % finer' },
				range: { min: 0, max: 110, interval: 10 }
	  
			},				
			series: 
			[
				{
				points: [
				{ x: bchval[0][0], y: bchval[1][0]},
				{ x: bchval[0][1], y: bchval[1][1]},
				{ x: bchval[0][2], y: bchval[1][2]},
				{ x: bchval[0][3], y: bchval[1][3]},
				{ x: bchval[0][4], y: bchval[1][4]},
				{ x: bchval[0][5], y: bchval[1][5]},
				{ x: bchval[0][6], y: bchval[1][6]}
				
				],
				type: 'spline',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
						id:"cir",
						shape: 'circle',
						size:
						{
							height: 5, width: 5
						},
						visible: true
					},					
					enableAnimation :true
				},
				// for D10
				{
				points: [
				
				{ x: beach1[0], y: 0},
				{ x: beach1[0], y: 10},
				{ x: 0, y: 10}
				
				],
				type: 'line',
				name: 'D<sub>10</sub>',
					fill: "#FF1493",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
						shape: 'circle',
						size:
						{
							height: 5, width: 5
						},
						visible: true
					},					
					enableAnimation :true
				},
				// for D30
				{
				points: [
				
				{ x: beach1[1], y: 0},
				{ x: beach1[1], y: 30},
				{ x: 0, y: 30}
				
				],
				type: 'line',
					fill: "#008000",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
						shape: 'circle',
						size:
						{
							height: 5, width: 5
						},
						visible: true
					},					
					enableAnimation :true
				},
				// for D60
				{
				points: [
				
				{ x: beach1[2], y: 0},
				{ x: beach1[2], y: 60},
				{ x: 0, y: 60}
				
				],
				type: 'line',
					fill: "#B22222",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
						shape: 'circle',
						size:
						{
							height: 5, width: 5
						},
						visible: true
					},					
					enableAnimation :true
				}
			],
			 load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
		});
	}
	calcD10();
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
	document.getElementById('7').onclick="";                            
	document.getElementById("arrow1").style.animation = "";
	document.getElementById("sand").style.transformOrigin = "";
}

//display formula on hover	
function dispForm(x)
{
	document.getElementById("f"+x.id).style.visibility="visible";
}
	
function hideForm(x)
{
	document.getElementById("f"+x.id).style.visibility="hidden";
}

function calcD10()
{
	if(flag==1)
	{
		D10=river1[0];
	}
	if(flag==2)
	{
		D10=beach1[0];
	}
	setTimeout(function()
	{
		document.getElementById("7-1").style.visibility="visible";
		document.getElementById("check1").onclick=function()
		{
			if(!document.getElementById("output1").value  || !document.getElementById("output1").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				n1 = document.getElementById("output1").value;
				if( n1 == D10 )
				{
					document.getElementById("check1").style.visibility="hidden";
					document.getElementById("r1").style="position:absolute; left:107.5px; top:-27.5px; color:#32CD32; font-size:22px;";
					document.getElementById("r1").innerHTML="&#10004";
					document.getElementById("r1").style.visibility="visible";
					document.getElementById("output1").style.color="black";
					document.getElementById("output1").style.backgroundColor="#fff";
					document.getElementById("output1").style.border="none";
					document.getElementById("output1").disabled="true";
					document.getElementById("7-2").style.visibility="visible";
					calcD30();
				}
				else
				{
					document.getElementById("r1").style="position:absolute; left:107.5px; top:-27.5px; color:red;  font-size:22px;";
					document.getElementById("r1").innerHTML="&#10008";					
				}
			}	
		}
	},1750);
}

function calcD30()
{
	if(flag==1)
	{
		D30=river1[1];
	}
	if(flag==2)
	{
		D30=beach1[1];
	}
	document.getElementById("check2").onclick=function()
	{
		if(!document.getElementById("output2").value  || !document.getElementById("output2").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n2 = document.getElementById("output2").value;
			if( n2 == D30 )
			{
				document.getElementById("check2").style.visibility="hidden";
				document.getElementById("r2").style="position:absolute; left:107.5px; top:-27.5px; color:#32CD32; font-size:22px;";
				document.getElementById("r2").innerHTML="&#10004";
				document.getElementById("r2").style.visibility="visible";
				document.getElementById("output2").style.color="black";
				document.getElementById("output2").style.backgroundColor="#fff";
				document.getElementById("output2").style.border="none";
				document.getElementById("output2").disabled="true";
				document.getElementById("7-3").style.visibility="visible";
				calcD60();
			}
			else
			{
				document.getElementById("r2").style="position:absolute; left:107.5px; top:-27.5px; color:red;  font-size:22px;";
				document.getElementById("r2").innerHTML="&#10008";					
			}
		}	
	}
}

function calcD60()
{
	if(flag==1)
	{
		D60=river1[2];
	}
	if(flag==2)
	{
		D60=beach1[2];
	}
	document.getElementById("check3").onclick=function()
	{
		if(!document.getElementById("output3").value  || !document.getElementById("output3").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n3 = document.getElementById("output3").value;
			if( n3 == D60 )
			{
				document.getElementById("check3").style.visibility="hidden";
				document.getElementById("r3").style="position:absolute; left:107.5px; top:-27.5px; color:#32CD32; font-size:22px;";
				document.getElementById("r3").innerHTML="&#10004";
				document.getElementById("r3").style.visibility="visible";
				document.getElementById("output3").style.color="black";
				document.getElementById("output3").style.backgroundColor="#fff";
				document.getElementById("output3").style.border="none";
				document.getElementById("output3").disabled="true";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("r3").style="position:absolute; left:107.5px; top:-27.5px; color:red;  font-size:22px;";
				document.getElementById("r3").innerHTML="&#10008";					
			}
		}	
	}
}

function calcCu()
{
	document.getElementById("check4").onclick=function()
	{
		if(!document.getElementById("output4").value  || !document.getElementById("output4").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			if(flag==1)
			{
				n2=river1[3];
			}
			if(flag==2)
			{
				n2=beach1[3];
			}
			n = document.getElementById("output4").value;
			if(Math.round(n) == Math.round(n2))
			{
				document.getElementById("check4").style.visibility="hidden";
				document.getElementById("result4").style.visibility="hidden";
				document.getElementById("r4").innerHTML="&#10004";
				document.getElementById("r4").style="position:absolute; left:376.5px; top:169px; font-size:22px; color:#32CD32;";
				document.getElementById("r4").style.visibility="visible";
				document.getElementById("output4").style.border="none";
				document.getElementById("output4").style.color="black";
				document.getElementById("output4").disabled="true";
				document.getElementById("output4").style.backgroundColor="white";
				setTimeout(function()
				{
					calcCc();
				},750);
			}
			else
			{
				document.getElementById("result4").style.visibility="visible";
				document.getElementById("r4").innerHTML="&#10008";
				document.getElementById("r4").style="position:absolute; left:376.5px; top:169px; color:red; font-size:22px;";
				document.getElementById("r4").style.visibility="visible";
			}
		}	
		document.getElementById("result4").onclick=function()
		{
			document.getElementById("output4").value="";
			document.getElementById("check4").style.visibility="hidden";
			document.getElementById("result4").style.visibility="hidden";
			document.getElementById("r4").style.visibility="hidden";
			document.getElementById("output4").style.border="none";
			document.getElementById("output4").style.color="black";
			document.getElementById("output4").disabled="true";
			document.getElementById("output4").style.backgroundColor="white";
			document.getElementById("output4").value=n2;
			setTimeout(function()
			{
				calcCc();
			},750);
		}
	}
}

function calcCc()
{
	document.getElementById("rcan8-5").style.visibility="visible";
	document.getElementById("check5").onclick=function()
	{
		if(!document.getElementById("output5").value  || !document.getElementById("output5").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			if(flag==1)
			{
				n2=river1[4];
			}
			if(flag==2)
			{
				n2=beach1[4];
			}
			n = document.getElementById("output5").value;
			if(Math.round(n) == Math.round(n2))
			{
				document.getElementById("check5").style.visibility="hidden";
				document.getElementById("result5").style.visibility="hidden";
				document.getElementById("r5").innerHTML="&#10004";
				document.getElementById("r5").style="position:absolute; left:415px; top:221.5px; font-size:22px; color:#32CD32;";
				document.getElementById("r5").style.visibility="visible";
				document.getElementById("output5").style.border="none";
				document.getElementById("output5").style.color="black";
				document.getElementById("output5").disabled="true";
				document.getElementById("output5").style.backgroundColor="white";
				setTimeout(function()
				{
					document.getElementById("inferenceDiv"+flag).style.visibility="visible";
				},750);
			}
			else
			{
				document.getElementById("result5").style.visibility="visible";
				document.getElementById("r5").innerHTML="&#10008";
				document.getElementById("r5").style="position:absolute; left:415px; top:221.5px; color:red; font-size:22px;";
				document.getElementById("r5").style.visibility="visible";
			}
		}	
		document.getElementById("result5").onclick=function()
		{
			document.getElementById("output5").value="";
			document.getElementById("check5").style.visibility="hidden";
			document.getElementById("result5").style.visibility="hidden";
			document.getElementById("r5").style.visibility="hidden";
			document.getElementById("output5").style.border="none";
			document.getElementById("output5").style.color="black";
			document.getElementById("output5").disabled="true";
			document.getElementById("output5").style.backgroundColor="white";
			document.getElementById("output5").value=n2;
			setTimeout(function()
			{
				document.getElementById("inferenceDiv"+flag).style.visibility="visible";
			},750);
		}
	}
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
		if(flag==1)
		{
			document.getElementById("ans").innerHTML="Wrong! Answer is Poorly graded sand containing silt.";
		}
		if(flag==2)
		{
			document.getElementById("ans").innerHTML="Wrong! Answer is Poorly graded sand containing clay.";
		}
	}
	setTimeout(function()
	{
		document.getElementById("inferenceDiv1").style.visibility="hidden";
		document.getElementById("inferenceDiv2").style.visibility="hidden";
		if(flag==1)
		{
			document.getElementById("infAns").innerHTML="The coefficient of uniformity and coefficient of curvature of the river sand is 2.5 and 0.9 respectively. The soil can be graded as Poorly graded sand containing silt. According to IS 2386 (part I), the fineness modulus of fine aggregate is between 2-4. The fineness value of river sand obtained is 3.973. So it can be used in construction of marine structure constructions.";
		}
		if(flag==2)
		{
			document.getElementById("infAns").innerHTML="The coefficient of uniformity and coefficient of curvature of the beach sand is 1.76 and 0.86 respectively. The soil can be graded as Poorly graded sand containing clay. According to IS 2386 (part I), the fineness modulus of fine aggregate is between 2-4. The fineness value of river sand obtained is 3.178. Beach sand is not suitable for marine structure constructions.";
		}

		$("#infAns").fadeIn(750);
	},1000);
}