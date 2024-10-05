
//   return document.querySelector(where);
// }
//document.querySelector('income__list').innerHTML+='';
 //    alert('hello');

function calculate(){

 var whattodo = document.querySelector('select').value;
 // alert(whattodo);
 var value = document.querySelector('#add__value').value;
  //alert(value);
   
 var valueToInt = parseFloat(value);

 var income =  document.querySelector('.budget__income--value').innerHTML;
 var incomeNum =  parseFloat(income);


 var expenses =  document.querySelector('.budget__expenses--value').innerHTML;
 var expensesNum =  parseFloat(expenses);

 var budget = document.querySelector('#amount').innerHTML;
 budget = parseFloat(budget);

 var item = document.querySelector('.add__description').value;

 var percentage = 15;



 if(whattodo =='+'){

var e_btn = document.getElementsByClassName('income__delete--btn');
  incomeNum+=valueToInt;
  budget = incomeNum;
  // expensesNum-=valueToInt;

 	
  
document.querySelector('.income__list').innerHTML+="<div class='item clearfix' id=''>"+
                            "<div class='item__description'>"+item+"</div>"+
                            "<div class='right clearfix'>"+
                                "<div class='item__value'>"+value+"</div>"+
                                "<div class='item__delete'>"+
                                    "<button class='income__delete--btn'><i class='ion-ios-close-outline'>delete</i></button>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
                

                                e = e_btn.length-1;

                        e_btn[e_btn.length-1].setAttribute('onclick','deleteDiv("item clearfix",e)');
                        
 // alert(item);
  document.querySelector('#amount').innerHTML = budget;
    document.querySelector('.budget__income--value').innerHTML = incomeNum;
     document.querySelector('.budget__expenses--value').innerHTML= expensesNum;
    

//alert(document.qu


     
 }else if(whattodo == '-'){
// var dom = document.getElementsByClassName('item clearfix1');


 
var e_btn = document.getElementsByClassName('expenses__delete--btn');

 /*

attr =  'expense-'+dom.length;
 var btn_attr = 'btn'+e_btn.length;
*/

  expensesNum+=valueToInt;
    incomeNum-=valueToInt;
    budget = valueToInt;
      document.querySelector('#amount').innerHTML = budget;
     document.querySelector('.budget__income--value').innerHTML = incomeNum;
     document.querySelector('.budget__expenses--value').innerHTML= expensesNum;

     document.querySelector('.expenses__list').innerHTML+=" <div class='item clearfix1'>"+
                            "<div class='item__description'>"+item+"</div>"+
                            "<div class='right clearfix'>"+
                                "<div class='item__value'>"+value+"</div>"+
                                "<div class='item__percentage'>"+percentage+"%</div>"+
                                "<div class='item__delete'>"+
                                    "<button class='expenses__delete--btn'><i class='ion-ios-close-outline'>delete</i></button>"+
                                "</div>"+
                            "</div>"+
                        "</div>";

                       d = e_btn.length-1;

                        e_btn[e_btn.length-1].setAttribute('onclick','deleteDiv("item clearfix1",d)');


                            /*  var a = 5;
                              dom[dom.length-1].setAttribute('id',attr);
                              e_btn[e_btn.length-1].setAttribute('id',btn_attr);

                              e_btn[e_btn.length-1].setAttribute('onclick','alert(a)');
*/


                                   percentage+=5;                



 }

 


}



/*
var num = 0;
var income_delete_btn = 

var expense_delete_btn = document.querySelectorAll('.expenses__delete--btn');



   

b =[];
c = [];

for ( var i = 0; i < income_delete_btn; i++) {


    b[i] = income_delete_btn[i].getAttribute('id');

}


for ( var i = 0; i < expense_delete_btn; i++) {


    c[i] = expense_delete_btn[i].getAttribute('id');

}


*/

function deleteDiv(className,k){

var income_btn = document.getElementsByClassName(className);

      income_btn[k].style.display = 'none';

}



function go(l){
  alert(l);
}


/*var a = 5;
var i = 10;


alert(15)
document.querySelector('.expenses__list').innerHTML+=" <div class='item clearfix' id='expense-0'>"+
                            "<div class='item__description'>"+item+"</div>"+
                            "<div class='right clearfix'>"+
                                "<div class='item__value'>"+value+"</div>"+
                                "<div class='item__percentage'>"+percentage+"</div>"+
                                "<div class='item__delete'>"+
                                    "<button class='item__delete--btn'><i class='ion-ios-close-outline'></i></button>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
                        */
                       
//alert(document.querySelector('.income__list').innerHTML);

