const api= document.getElementById('a')
function UI(data2){
    for(var i=0;i<6;i++){
        var FN=data2[i].name.first
        var LN=data2[i].name.last
        var EM=data2[i].email
        var IURL=data2[i].picture.large   
        addPerson(FN,LN,EM,IURL)
    }
}
function addPerson(firstname,lastname,email,image_url)
{
    const card=document.createElement('div')
    card.setAttribute('class','card')
    
    const name=document.createElement('div')
    if(image_url)
    {
        image=document.createElement('img')
        image.src=image_url
        image.setAttribute('class','image')
        card.appendChild(image)
    }
    else
    {
        console.log("no img")
        noimage=document.createElement('div')
        noimage.textContent=firstname[0].toUpperCase()+lastname[0].toUpperCase();
        noimage.setAttribute('class','proImage')
        name.appendChild(noimage)
    }
    
    name.setAttribute('class','name')
    
    const h3=document.createElement('h3')
    h3.textContent=firstname+' '+lastname
    
    const p=document.createElement('p')
    p.textContent=email
    
    name.appendChild(h3)
    name.appendChild(p)
    
    card.appendChild(name)
    api.appendChild(card)
}