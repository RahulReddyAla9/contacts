var x=1;
function load(){
    var request= new XMLHttpRequest();
    //url='https://reqres.in/api/users?page='+x
    url='https://randomuser.me/api/?results=100'+x
    request.open('GET',url,true)
    request.onload = function() {
        var data = JSON.parse(this.response)
        var data2=data["results"]; 
        if (data2.length>0) {
            UI(data2)
        }
        else{
            document.getElementById("button").style.visibility="hidden"
            alert("NO DATA!")
        }
    }
    request.send()
    x=x+1;
}
