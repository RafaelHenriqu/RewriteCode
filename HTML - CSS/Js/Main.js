let db = false
document.querySelector("body").addEventListener("wheel",(e)=>{
    
    if (db == true){
        e.preventDefault()
        setTimeout((e=>{db = false;e.preventDefault()}),2000)
        return
    }

    if (e.deltaY > 0){
        
        db = true
        window.location.href = "#Tags"
e.preventDefault()
    }
    
    if (e.deltaY < 0 && db == false){
        db = true
        window.location.href = "#Home"
    e.preventDefault()
    }
    
},{passive:false})

