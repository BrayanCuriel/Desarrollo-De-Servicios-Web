function delay(ms){
    return new Promise((resolve) =>{
        setTimeout(()=> resolve(ms),ms);
    })
}

console.time("t");
delay(800).then((elapsed)=>{
    console.timeEnd("t");
    console.log("resolved:", elapsed);
});


delay(300)
.then((t1)=>{
    console.log("paso 1: "+t1)
    return delay(200);
})
.then((t2)=>{
    console.log("paso 2: "+t2);
    return delay(100);
})
.then((t3) =>{
    console.log("paso 3: "+t3);
    console.timeEnd("t");
});
//encadenamiento de promesass