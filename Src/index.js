(async()=>{
    const reqsponse = await fetch("https://www.freepublicapis.com/api/apis/275");
    if(!reqsponse.ok){
        console.log("Error")
    }else{
        console.log(await reqsponse.json());
        
    }
})()