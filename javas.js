const api= document.getElementById('a')
var x=1;
function load(){
    var request= new XMLHttpRequest();
    url='https://reqres.in/api/users?page='+x
    request.open('GET',url,true)
    console.log(url)
    request.onload = function() {
        var data = JSON.parse(this.response)
        var data2=data["data"];
        if (data2.length>0) {
            for(var i=0;i<data2.length;i++){
                //console.log(data2[i].email)
                const card=document.createElement('div')
                card.setAttribute('class','card')
                
                const s1=document.createElement('span')
                const image=document.createElement('img')
                image.setAttribute('class','image')
                image.src=data2[i].avatar
                
                const name=document.createElement('div')
                name.setAttribute('class','name')
                
                const s2=document.createElement('span') 

                const h3=document.createElement('h3')
                h3.textContent=data2[i].first_name
                
                const p=document.createElement('p')
                p.textContent=data2[i].email
                
                name.appendChild(h3)
                name.appendChild(p)
                s1.appendChild(image)
                s2.appendChild(name)
                card.appendChild(s1)
                card.appendChild(s2)
                api.appendChild(card)
                
            }
        }
        else{
            document.getElementById("button").style.visibility="hidden"
            alert("NO DATA!")
        }


    }
    request.send()
    x=x+1;
}
