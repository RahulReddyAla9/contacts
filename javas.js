
const api=document.createElement('div')
api.setAttribute('id','root')
document.body.appendChild(api)

function load(call){
    var request= new XMLHttpRequest();
    url='https://randomuser.me/api/?results=100'
    request.open('GET',url,true)
    request.onload = function() {
       call();
       console.log(url)
        var data = JSON.parse(this.response)
        var data2=data["results"]; 
       // if (data2.length>0)
            UI(data2)
    //}
    }
    request.send()
}
 function calling(){
     document.getElementById("lds-ripple").style.visibility="hidden";
 }
window.onscroll=function(){ 
    // console.log(window.innerHeight+' '+window.scrollY+' '+document.body.scrollHeight)

    if((window.innerHeight+window.scrollY)>=document.body.scrollHeight)
    {
        document.getElementById("lds-ripple").style.visibility="visible";   
        // alert("Fetching Data!")
        load(calling);
    }
}

module.exports={load,calling}