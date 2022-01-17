


async function getdata(){

    var url='https://60ebd304e9647b0017cdde45.mockapi.io/users1'
    try{
    var data=await fetch(url);
    var res=await data.json();
    console.log(res);
        
   
    var tb=document.querySelector('tbody');
   //var firstName=document.getElementById('first-name').value
   //var LastName=document.getElementById('last-name').value
   //var Address=document.getElementById('address').value
   //var Pincode=document.getElementById('pincode').value
   //var gender=document.getElementById('gender').value
   //var food=document.getElementById("Food").value
   //var state=document.getElementById('State').value
   //var Country=document.getElementById('Country').value

  for(var i=0;i<res.length;i++){
      
    var tr = document.createElement("tr");
    var firstNametd = document.createElement("td");
    var LastNameTd = document.createElement("td");
    var addresstd = document.createElement("td");
     var Pincodetd=document.createElement("td");
     var gender=document.createElement("td");
     var food=document.createElement("td");
    var state=document.createElement("td");
    var Country=document.createElement("td");  
     
      firstNametd.innerText=res[i].firstName;
      
      LastNameTd.innerText=res[i].LastName;
      addresstd.innerText=res[i].Address;
      Pincodetd.innerText=res[i].Pincode;
      gender.innerText=res[i].gender;
      food.innerText=res[i].favfood;
      state.innerText=res[i].State;
      Country.innerText=res[i].Country;






    tr.appendChild(firstNametd);
    tr.appendChild(LastNameTd);
    tr.appendChild(addresstd);
    tr.appendChild(Pincodetd);
    tr.appendChild(gender);
    tr.appendChild(food);
    tr.appendChild(state);
    tr.appendChild(Country);
    tb.appendChild(tr)
}
  
  
  


 } catch(err){
     console.log(err)
    }




}

getdata()









var f=document.getElementById('form');


async function post(){




    var n=document.getElementById('first-name').value
    var a=document.getElementById('last-name').value
    var d=document.getElementById('address').value
    var i=document.getElementById('pincode').value
    var p=document.getElementById('gender').value
    var food=document.getElementById("Food").value
    var S=document.getElementById('State').value
    var C=document.getElementById('Country').value
        

    var data={
        
        firstName:n,
        LastName:a,
        Address:d,
        Pincode:i,
        gender:p,
        favfood: [food],
        State:S,
        Country:C
        
        
    }
    
    var cnt = 0;
    for (var i = 0; i < food.options; i++) {
        console.log(food.options[i])
        if (food.options[i].selected) {
            cnt++;
        }
    }
    
   if(cnt.length==2){
       return true;
   }
   if(cnt>2){
       alert("only 2 options allowed")
   }


    var form=document.getElementById("form");
    
    var url='https://60ebd304e9647b0017cdde45.mockapi.io/users1';
    
    var f= await fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
                
        
    })

    getdata()  ;
    form.reset();
    let res=await f.json();
    console.log(res)

   
    


}








