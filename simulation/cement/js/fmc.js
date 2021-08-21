//on click of next button
var mpointer=0;
var repeat=0;
var p,lastp;
var values1=[[91.3,8.8,8.8],
             [93.3,6.7,6.7]];
p = Math.floor(Math.random() * 2);
			 
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
var questions=["To control the setting of cement _________ is added.",
				"Fineness of cement is measured as ___________.",
				"Standard to measure fineness index is _____________.",
				" The number of seives used in determining</br> Fineness Modulus of cement is"];
				
var options2=[["Lime","Gypsum","Water","None of the Above"],//Gypsum
			  ["Specific surface","Spefic gravity","Water content","None of the Above"],//specific surface
			  ["IS code 279","IS code 269","IS code 729 ","IS code 769"],// IS code 269
			  ["10","5","2","1"]];//1
			  
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

// //Move pointing finger with mouse
// $(document).mousemove(function(e)

// {

    // if(document.getElementById('v2-1').style.visibility=="hidden" && simsubscreennum==1) 
    // {
         // if(e.pageX<800 && e.pageY<600)  
         // {
             // document.getElementById('onarm').style.visibility="visible";
             // $("#onarm").css({left:e.pageX, top:e.pageY});
         // }
    // }
    // else if(document.getElementById('v2-1').style.visibility=="visible" && simsubscreennum==1)
    // {
	     // document.getElementById('onarm').style.visibility="hidden";
    // }
    // if(	document.getElementById('hp2-1').style.visibility=="visible")
    // {
	    // if(e.pageX<800 && e.pageY<600 && simsubscreennum==1) 
	    // {	
             // document.getElementById('onarm').style.visibility="hidden";
		     // document.getElementById('hp2-1').style.visibility="visible";
             // $("#hp2-1").css({left:e.pageX-150+'px', top:e.pageY-150+'px'});
        // }
    // }
    // if(document.getElementById('v2-2').style.visibility=="visible" && simsubscreennum==1)
    // {
	     // document.getElementById('onarm').style.visibility="hidden";
    // }
// }); 

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
		//Prevent repetitive random numbers
		while (p == lastp) 
		{
			p = Math.floor(Math.random() * 2);
		}
		if(repeat==0)
		{
			lastp = p;
		}
		repeat+=1;
		if(mpointer==1)
		{
		 refresh();
		 document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		 document.getElementById('trial').innerHTML="Trial : " + repeat;
		 document.getElementById('nextButton').style.visibility="hidden";
         document.getElementById('canvas1').style.visibility="visible";
		 document.getElementById('canvas5').style.visibility="hidden";
         document.getElementById('ewm1').style.visibility="visible";
         document.getElementById('on2').style.visibility="visible";
         document.getElementById('off2').style.visibility="visible";
         document.getElementById('zero2').style.visibility="visible";
         document.getElementById('tare2').style.visibility="visible";
         document.getElementById('l5-1').style.visibility="hidden";
         document.getElementById('output').style.visibility="hidden";
         document.getElementById('r1').style.visibility="hidden";
        }
		else
		{
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		 document.getElementById('trial').innerHTML="Trial : " + repeat;
	    }
		setTimeout(function()
		{
			blinkArrow(337.5,446,90,30);
	        document.getElementById('on2').onclick=function(){step1();}
		},700);
    }
	else if (simsubscreennum==2)
	{
		refresh();
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('2-1').style.visibility="visible";
        document.getElementById('2-2').style.visibility="visible";
        document.getElementById('ewm1').style.visibility="hidden";
        document.getElementById('on2').style.visibility="hidden";
        document.getElementById('off2').style.visibility="hidden";
        document.getElementById('zero2').style.visibility="hidden";
        document.getElementById('tare2').style.visibility="hidden";
		document.getElementById('mw').style.visibility="hidden";
        document.getElementById('p2').style.visibility="hidden";
		document.getElementById('wc').style.visibility="hidden";
		document.getElementById('v2-2').style.visibility="hidden";
        document.getElementById('on2').style.visibility="hidden";
        document.getElementById('tare2').style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(440,360,180,40);
			document.getElementById('2-2').onclick=function(){step2();}
		},800);
    }
	else if (simsubscreennum==3)
	{
		refresh();
		document.getElementById('canvas2').style.visibility="hidden";
		document.getElementById('10').style.visibility="visible";
        document.getElementById('11').style.visibility="visible";
        document.getElementById('11on').style.visibility="visible";
        document.getElementById('2-4').style.visibility="hidden";
		document.getElementById('3-9').style.visibility="hidden";
		document.getElementById('15').style.visibility="visible";
		document.getElementById('15a').style.visibility="visible";
		blinkArrow(435,230,180,40);
		document.getElementById('10').onclick=function(){step3();}
	}
	else if(simsubscreennum==4)
	{
		refresh();
		document.getElementById('11on').style.visibility="hidden";
		document.getElementById('5-1').style.visibility="visible";
        document.getElementById('5-2').style.visibility="visible";
        document.getElementById('5-4').style.visibility="visible";
		document.getElementById('5-5').style.visibility="visible";
        document.getElementById('5-6').style.visibility="visible";
        document.getElementById('11on5').style.visibility="visible";
        document.getElementById('11off5').style.visibility="visible";
        document.getElementById('3-11').style.visibility="hidden";
        document.getElementById('11bon').style.visibility="hidden";
        document.getElementById('rdr3-1').style.visibility="hidden";
		document.getElementById('10').style.visibility="hidden";
		document.getElementById('11').style.visibility="hidden";
		document.getElementById('12').style.visibility="hidden";
		document.getElementById('15b').style.visibility="hidden";
		document.getElementById('15c').style.visibility="hidden";
		document.getElementById('9a').style.visibility="hidden";
        blinkArrow(376,185,360,40);
		document.getElementById('5-6').onclick=function(){step4();}
	}
	else if (simsubscreennum==5)
	{
		refresh();
		document.getElementById('5-15').style.visibility="hidden";
		document.getElementById('sp5-1').style.visibility="hidden";
        document.getElementById('ewm5').style.visibility="hidden";
		document.getElementById('mw5').style.visibility="hidden";
		document.getElementById('p5').style.visibility="hidden";
        document.getElementById('on5').style.visibility="hidden";
		document.getElementById('off5').style.visibility="hidden";
		document.getElementById('zero5').style.visibility="hidden";
		document.getElementById('tare5').style.visibility="hidden";
		document.getElementById('v5-2').style.visibility="hidden";
		document.getElementById('can5-1').style.visibility="visible";
		document.getElementById('can5-2').style.visibility="visible";
		document.getElementById('can5-3').style.visibility="visible";
		document.getElementById('can5-1').innerHTML="Weight of cement sample, W<sub>1</sub> = 100g";
		document.getElementById('can5-2').innerHTML="Weight of cement passing through 90&micro;m sieve = "+values1[p][0]+"g";
		document.getElementById('can5-3').innerHTML="Weight of residue left on the sieve, W<sub>2</sub> = "+values1[p][1]+"g";
		if(repeat==1)
		{
			mpointer=1;
			simsubscreennum=0;
			calculatePercentageWeight();
		}
		else if(repeat==2)
		{
			calculatePercentageWeight2();
		}
	}
	if(simsubscreennum==6)
	{
		document.getElementById("can5-1").style.visibility="hidden";
		document.getElementById("can5-2").style.visibility="hidden";
		document.getElementById("can5-3").style.visibility="hidden";
		document.getElementById("trial").style.visibility="hidden";
		document.getElementById("l5-2").style.visibility="hidden";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("output2").style.visibility="hidden";
		document.getElementById("6-1").innerHTML=values1[lastp][1];
		document.getElementById("6-3").innerHTML=values1[p][1];
		document.getElementById("check3").onclick=function()
		{
			if(!document.getElementById("avg").value  || !document.getElementById("avg").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				avg = document.getElementById("avg").value;
				average=(values1[p][2]+values1[lastp][2])/2;
				if(Math.round(avg) == Math.round(average))
				{
					document.getElementById("check3").style.visibility="hidden";
					document.getElementById("rw").style="color:#32CD32; font-size:22px; position:absolute; left:550px; top:123px;";
					document.getElementById("rw").innerHTML="&#10004;";
					document.getElementById("rw").style.visibility="visible";
					document.getElementById("inferenceDiv").style.visibility="visible";
				}
				else
				{
					document.getElementById("rw").style="color:red; font-size:22px; position:absolute; left:550px; top:123px;";
					document.getElementById("rw").innerHTML="&#10008;";
					document.getElementById("rw").style.visibility="visible";
				}
			}	
			
		}
	}
}
    
function chkval()
{
	document.getElementById('f1').style.visibility="hidden";
	document.getElementById('can5-5').innerHTML="Average=7.15";
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
			blinkArrow(300,225,0,40);
			document.getElementById('hp2-1').onclick=function()
			{
				myStopFunction();
				document.getElementById('hp2-1').style.visibility="hidden";
				document.getElementById('p2').style.visibility="visible";
				setTimeout(function()
				{
					blinkArrow(450,446,90,30);
					document.getElementById('tare2').onclick=function(){step12();} 
				},800); 
			}
		},500);
	},500);						            
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
			document.getElementById('wc').style.visibility="visible";
			document.getElementById('pwc').style.visibility="hidden";
			document.getElementById('v2-2').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('hand').style.visibility="hidden";
				setTimeout(function()
				{
					if(repeat==2)
					{	 
						document.getElementById('nextButton').style.visibility="visible";
					}
					if(repeat==1)
					{
						validateAnswer(0,1,"100px","100px");
					}
				},1000); 
			},300);
		},400);
	},800);
}
	
function step2()
{
	refresh();
	myStopFunction();
	document.getElementById('2-2').style.visibility="hidden";
	document.getElementById('2-1').style.visibility="hidden";
	document.getElementById('2-4').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('rdr3-1').style.visibility="visible";
		document.getElementById('plate3-2').style.visibility="visible";
		setTimeout(function()
		{
			blinkArrow(560,230,360,40);
			document.getElementById('plate3-2').onclick=function(){step21();}
		},200);
	},800);
}

function step21()
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
				blinkArrow(394,214,360,40);
				document.getElementById('3-8').onclick=function(){step213();}
			},200);
		},200); 
	},800);
	document.getElementById('rdr3-1').style.visibility="hidden";
}
	
function step213()
{
	myStopFunction();
	document.getElementById('3-8').style.visibility="hidden";
	document.getElementById('3-9').style.visibility="visible";
	setTimeout(function()
	{
		if(repeat==1)
		{
			validateAnswer(1,0,"300px","100px");
		}
		if(repeat==2)
		{
			validateAnswer(2,1,"250px","125px");
		}
	},1000);
}
	
function step3()
{
	myStopFunction();
	document.getElementById('10').style.visibility="hidden";
	document.getElementById('12').style.visibility="visible";
	document.getElementById('9').style.visibility="visible";
	blinkArrow(435,180,180,40);
	document.getElementById('9').onclick=function()
	{
		myStopFunction();
		document.getElementById('9').onclick="";
		document.getElementById('9').style.visibility="hidden";
		document.getElementById('9a').style.visibility="visible";
		blinkArrow(192,163,180,40);
		document.getElementById('15').onclick=function(){step31();}
	}
}

function step31()
{
	myStopFunction();
	document.getElementById('15').onclick="";
	document.getElementById('15').style.visibility="hidden";
	document.getElementById('15b').style.visibility="visible";
	blinkArrow(377,163.5,360,40);
	document.getElementById('15a').onclick=function()
	{
		document.getElementById('15a').onclick="";
		myStopFunction();
		document.getElementById('15a').style.visibility="hidden";
		document.getElementById('15c').style.visibility="visible";
		blinkArrow(222,354,90,40);
		document.getElementById('11on').onclick=function(){step32();}
	}
}

function step32()
{
	myStopFunction();
	document.getElementById('11on').onclick="";
	document.getElementById('11on').style.visibility="hidden";
	document.getElementById('11bon').style.visibility="visible";
	document.getElementById("12").style.animation="shake 0.5s infinite linear";
	setTimeout(function()
	{
		blinkArrow(300,365,90,40);
		document.getElementById('11off').onclick=function()
		{
			myStopFunction();
			document.getElementById('11off').onclick="";
			document.getElementById("12").style.animation="";
			document.getElementById('11on').style.visibility="visible";
			document.getElementById('11bon').style.visibility="hidden";
			if(repeat==1)
			{
				document.getElementById("nextButton").style.visibility="visible";
			}
			if(repeat==2)
			{
				validateAnswer(3,3,"400px","250px");
			}
		}
	},8000);
}
	
function step4()
{
	myStopFunction();
	document.getElementById('5-6').style.visibility="hidden";
	document.getElementById('5-8').style.visibility="visible";
	blinkArrow(194,182,180,40);
	document.getElementById('5-5').onclick=function()
	{
		myStopFunction();
		document.getElementById('5-5').style.visibility="hidden";
		document.getElementById('5-7').style.visibility="visible";
		setTimeout(function()
		{
			blinkArrow(280,165,270,40);
			document.getElementById('5-4').onclick=function(){step41();}
		},500);
	}
}

function step41()
{
	myStopFunction();
	document.getElementById('5-4').style.visibility="hidden";
	setTimeout(function()
	{
		blinkArrow(280,150,270,40);
		document.getElementById('5-2').onclick=function(){step42();}
	},500);
}
 
function step42()
{
	myStopFunction();
	document.getElementById('5-2').style.visibility="hidden";
	document.getElementById('5-9').style.visibility="visible";
	document.getElementById('5-10').style.visibility="visible";
	document.getElementById('5-11').style.visibility="visible";
	document.getElementById('5-4').style.visibility="hidden";
	document.getElementById('5-7').style.visibility="hidden";
	document.getElementById('5-8').style.visibility="hidden";
	document.getElementById('11on5').style.visibility="hidden";
	document.getElementById('11off5').style.visibility="hidden";
	document.getElementById('5-1').style.visibility="hidden";
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
			blinkArrow(475,275,180,40);
			document.getElementById('5-9').onclick="";
			document.getElementById('5-11').onclick=function(){step43();}
		},700);
	},800);
}

function step43()
{
	myStopFunction();
	document.getElementById('5-11').style.visibility="hidden";
	document.getElementById('5-12').style.visibility="visible"; //cement
	document.getElementById('5-9').onclick="";
	blinkArrow(475,298,180,40);
	document.getElementById('5-10').onclick=function()
	{
		myStopFunction();
		document.getElementById('5-10').onclick="";
        document.getElementById('5-10').style.visibility="hidden";
		document.getElementById('sp5-1').style.visibility="visible";
		document.getElementById('5-18').style.visibility="visible";
        document.getElementById('5-12').style.visibility="hidden";
		document.getElementById('5-13').style.visibility="visible";
		document.getElementById('sp5-1').onclick="";
		blinkArrow(350,446,90,40);
        document.getElementById('tare5').onclick=function()
		{	
			myStopFunction();
			document.getElementById('v5-2').style.visibility="hidden";
			document.getElementById('v5-1').style.visibility="visible";
			blinkArrow(540,185,360,40);
			document.getElementById('sp5-1').onclick=function(){step44();}
		}
	}
}
	
function step44()
{
	myStopFunction();
	document.getElementById('sp5-1').onclick="";	
	document.getElementById('5-18').style.visibility="hidden";
	document.getElementById('sp5-1').style.transformOrigin = "100% 80%";
	document.getElementById('sp5-1').style.animation = "valveturn-2 1.0s forwards ";
	setTimeout(function()
	{
		document.getElementById('5-16').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('5-16').style.visibility="hidden";
			setTimeout(function()
			{
				document.getElementById('5-14').style.visibility="visible";
				setTimeout(function()
				{		 
					document.getElementById('sp5-1').style.visibility="hidden";
					document.getElementById('v5-1').style.visibility="hidden";
					document.getElementById('v5-2').innerHTML=values1[p][1];
					document.getElementById('v5-2').style.visibility="visible";
					setTimeout(function()
					{	
						blinkArrow(475,325,180,40);
						document.getElementById('5-9').onclick=function(){step45();}
					},100);
				},50);
			},200);
		},300);
	},500);
}
	
function step45()
{
	myStopFunction();
	document.getElementById('5-14').style.visibility="hidden";
	document.getElementById('5-9').style.visibility="hidden";
	document.getElementById('sp5-2').style.visibility="visible";
	document.getElementById('5-19').style.visibility="visible";
	document.getElementById('5-13').style.visibility="hidden";
	document.getElementById('sp5-2').onclick="";
	blinkArrow(350,446,90,40);
	document.getElementById('tare5').onclick=function(){step46a();}
}

function step46a()
{
	myStopFunction();
	document.getElementById('v5-2').style.visibility="hidden";
	document.getElementById('v5-1').style.visibility="visible";
	blinkArrow(540,185,360,40);
	document.getElementById('sp5-2').onclick=function(){step46b();}
}
	
function step46b()
{
	myStopFunction();
	document.getElementById('sp5-2').onclick="";
	document.getElementById('5-19').style.visibility="hidden";
	document.getElementById('sp5-2').style.transformOrigin = "100% 80%";
	document.getElementById('sp5-2').style.animation = "valveturn-2 1.0s forwards ";
	setTimeout(function()
	{
		document.getElementById('5-17').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('5-17').style.visibility="hidden";
			setTimeout(function()
			{
				document.getElementById('5-15').style.visibility="visible";
				setTimeout(function()
				{		
					document.getElementById('sp5-2').style.visibility="hidden";
					document.getElementById('v5-1').style.visibility="hidden";
					document.getElementById('v5-2').innerHTML=values1[p][0];
					document.getElementById('v5-2').style.visibility="visible";
					setTimeout(function()
					{		
						 document.getElementById('nextButton').style.visibility="visible";
					},300);
				},50);
			},500);
		},500);
	},500);
}
	
function refresh()
{
	document.getElementById('can5-1').innerHTML="";
	document.getElementById('can5-2').innerHTML="";
	document.getElementById('can5-3').innerHTML="";
	document.getElementById('2-1').onclick="";      
	document.getElementById('2-2').onclick=""; 
	document.getElementById('hand').style.transformOrigin = "";
	document.getElementById('plate3-2').style.transformOrigin = "";
	document.getElementById('sp5-2').style.transformOrigin = "";
	document.getElementById('sp5-1').style.transformOrigin = "";
	document.getElementById("sp5-2").style.animation = "";
	document.getElementById("sp5-1").style.animation = "";
	document.getElementById("hand").style.animation = "";
	document.getElementById("plate3-2").style.animation = "";
	document.getElementById("arrow1").style.animation = "";
}

function calculatePercentageWeight()
{
	document.getElementById("form").onclick=function()
	{
		document.getElementById("formula").style.visibility="visible";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("w1").style.visibility="hidden";
	}
	document.getElementById("check").onclick=function()
	{
		document.getElementById("formula").style.visibility="hidden";
		if(!document.getElementById("output").value  || !document.getElementById("output").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n = document.getElementById("output").value;
			if(Math.round(n) == Math.round(values1[p][2]))
			{
				document.getElementById("check").style.visibility="hidden";
				document.getElementById("form").style.visibility="hidden";
				document.getElementById("r1").style.visibility="visible";
				document.getElementById("w1").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
				document.getElementById("output").style.color="black";
				document.getElementById("output").style.backgroundColor="#fff";
				document.getElementById("output").style.border="none";
				document.getElementById("output").disabled="true";
			}
			else
			{
				document.getElementById("w1").style.visibility="visible";
			}
		}	
	}
}	

function calculatePercentageWeight2()
{
	document.getElementById("l5-1").style.visibility="hidden";
	document.getElementById("55-1").style.visibility="hidden";
	document.getElementById("55-2").style.visibility="visible";
	document.getElementById("l5-2").style.visibility="visible";
	document.getElementById("form2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="visible";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
	}
	document.getElementById("check2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="hidden";
		if(!document.getElementById("output2").value  || !document.getElementById("output2").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n2 = document.getElementById("output2").value;
			if(Math.round(n2) == Math.round(values1[p][2]))
			{
				document.getElementById("check2").style.visibility="hidden";
				document.getElementById("form2").style.visibility="hidden";
				document.getElementById("r2").style.visibility="visible";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("output2").style.color="black";
				document.getElementById("output2").style.backgroundColor="#fff";
				document.getElementById("output2").style.border="none";
				document.getElementById("output2").disabled="true";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("w2").style.visibility="visible";
			}
		}	
	}
}

function checkInference()
{
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==1)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is less than 10%.";
	}
	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(average<=10)
		{
			document.getElementById("infAns").innerHTML="As per IS code 269, the weight of cement left on sieve shall not exceed 10% of the weight. <br/>The average percentage weight of the cement sample retained on the sieve is "+average+".</br>Thus fineness of cement obtained is within the limit.";
		}
		else 
		{
			document.getElementById("infAns").innerHTML="As per IS code 269, the weight of cement left on sieve shall not exceed 10% of the weight. <br/>The average percentage weight of the cement sample retained on the sieve is "+average+".</br>Thus fineness of cement obtained is not within the limit.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}						