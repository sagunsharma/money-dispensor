import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  validation(){
  var empty='';
var amount=document.getElementById("amount").value;
amount=parseInt(amount);
var withdrewValid=amount%100
if(withdrewValid!=0)
{
alert("please enter the amount in the Multiple of 100,200,500,2000");
document.getElementById("amount").value=empty;
}
else{
  if(amount<=2000)
  {
  switch(amount)
  {
    case 2000:
      document.getElementById("para").innerText="You Recive the One Note of 2000 "; 
    document.getElementById("para").style.color="green";
     break;
     case 500:
      document.getElementById("para").innerText="You Recive the One Note of 500 "; 
    document.getElementById("para").style.color="green";
     break;

      case 200:
      document.getElementById("para").innerText="You Recive the One Note of 200 "; 
    document.getElementById("para").style.color="green";
     break;
      
      case 100:
      document.getElementById("para").innerText="You Recive the One Note of 100 "; 
    document.getElementById("para").style.color="green";
     break;
     
    default:
    {
if(amount%500==0 )
{
 var rem=amount/500;
  document.getElementById("para").innerText="You Recive the "+rem+" Note of 500"; 
    document.getElementById("para").style.color="green";
}
else if(amount%200==0 && amount/500<1 )
{
 var rem=amount/200;
  document.getElementById("para").innerText="You Recive the "+rem+" Note of 200"; 
    document.getElementById("para").style.color="green";
}
else{
 var nonote500=amount/500;
 var rem500=amount%500;
 var nonote200=amount/200;
  var nonote200=0;
  var rem200=0;
  var nonote100=0;
    rem200=amount%200;
  if(nonote500>1)
  {
  if(rem500%200==0)
  {
    nonote200=rem500/200;
  }
  else
  {
    nonote100=rem500/100;
  }
  }
  else{
    rem200=amount%200;
    if(rem200>=1)
    {
      nonote200=amount/200;
      nonote100=rem200/100;
    }
    else
    {
      nonote100=amount/100;
    }
  }
  var msg=" Note 100 :"+parseInt(nonote100)+"\n Note 200: "+parseInt(nonote200)+"\n Note 500:"+parseInt(nonote500);
document.getElementById("para").innerText=msg; 
    document.getElementById("para").style.color="green";
}
    }
   
  }
  }
  else{
    var rem2000=amount%2000;
    var nonote2000=amount/2000;
    if(rem2000==0)
    {
      
    }
    else
    {
      if(rem2000>=500)
      {

      }
    }
  }
}


  };
  validation2(){
    var letterNumber = /^[a-zA-Z]+$/;

    var amount=document.getElementById("amount").value;
if(letterNumber.test(amount))
{
  var empty='';
  alert("Please Enter the Amount in Number format only");
  document.getElementById("amount").value=empty;

}
  };
  render() {
    return (
       <form name="moneydisp">
       <center>
       <h1>ATM Money Dispensor</h1>
       <h3>WELCOME TO MY ATM APP</h3>
        <h4>Enter Amount:</h4>
        <input type="text" id='amount' onKeyUp={this.validation2}></input>
        <button onClick={this.validation}>Get Money</button><br/><br/>
        <img alt="100" scr="file:///C:/Users/sagun.sharma/Desktop/rupee/100.png"/>
        <p id='para'></p>
        </center>
        </form>   
    );
  }
     
}


render(<App />, document.getElementById('root'));
