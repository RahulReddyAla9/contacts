const api = document.getElementById('a')
var x = 1;
function load() {
    var request = new XMLHttpRequest()
    url = 'https://reqres.in/api/users?page=' + x
    request.open('GET', url, true)
    console.log(url)
    request.onload = function () {
        
        var data = JSON.parse(this.response);
        var data2=data["data"];
        console.log(data2.length)
        if(data2.length>0){
            for(var i=0;i<data2.length;i++){
                //console.log(data2[i].email)
                const card=document.createElement('div')
                card.setAttribute('class','card')
    
                const image=document.createElement('img')
                image.src=data2[i].avatar;
                image.setAttribute('class','img')
                
                const name=document.createElement('div')
                details.setAttribute('class','container')
    
                const h3 = document.createElement('h3')
                h3.textContent = data2[i].first_name
                
                const p = document.createElement('p')
                p.textContent = data2[i].email
                
                card.appendChild(image);
                name.appendChild(h3);
                name.appendChild(p);
                card.appendChild(details);
    
                api.appendChild(card);
            }
        }
        else{   
            document.getElementById("btn").style.visibility = "hidden";
            alert("No Data")
        }
    }
    request.send()
    x = x + 1;
}