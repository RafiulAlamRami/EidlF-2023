

let btn=document.querySelector(".button");



btn.addEventListener("click",function(){
    
    let fname = document.getElementById("lname").value;
    console.log(fname);
    let removeInput=document.getElementById("lname")
    removeInput.remove()
    let remove_Input=document.getElementById("i")
    remove_Input.remove()

    let x=document.querySelector(".ne")
    let n=document.createElement("p")


    let d=document.querySelector(".bo")
    d.classList.add("cl")
    d.classList.remove("bo")
    


    if (typeof fname==="string" ){
        if(fname.toLowerCase()=="parsa"){
            let netext=document.createTextNode("Eid Mubarak \"" + fname + "\" , get $100 Eid Salami from me")
            n.append(netext)
            x.before(n)
        }
        else if(fname.toLowerCase()=="pritha"){
            let netext=document.createTextNode("Eid Mubarak \"" + fname + "\" , get $50 Eid Salami from me")
            n.append(netext)
            x.before(n)
        }

        else if(fname.toLowerCase()=="prapti"){
            let netext=document.createTextNode("Eid Mubarak \"" + fname + "\" , get $50 Eid Salami from me")
            n.append(netext)
            x.before(n)
        }

        else{
            let netext=document.createTextNode("" )
            n.append(netext)
            x.before(n)
        }

    }

    else{
        let netext=document.createTextNode("" )
        n.append(netext)
        x.before(n)
    }

    
    
 
});





