function drawTriangle(triangleSize){
    
    if(triangleSize<0 || triangleSize==undefined || triangleSize==null){
        console.log("Invalid argument passed to the function");
    }
    for(let i=1;i<=triangleSize;i++){
        let output="";
        for(let j=1;j<=i; j++){
            output=output + "*";
            
        }
        console.log(output);
    }
}