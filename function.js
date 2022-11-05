document.getElementById("codeSection").style.display=("none");
document.getElementById("decodeSection").style.display=("none");
//make a code Function
document.getElementById("makeaCode").addEventListener("click",()=>{
    document.getElementById("codeSection").style.display=("block");
    document.getElementById("makeaCode").style.display=("none");
    document.getElementById("decodeaCode").style.display=("none");
    document.getElementById("codeoutputSection").style.display=("none");
})
// making the code
document.getElementById("CodeSubmit").addEventListener("click",()=>{
    document.getElementById("codeoutputSection").style.display=("block");
    const text = document.getElementById("text").value;
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let decodeResult="";
    for(let i=0; i<text.length; i++){
        const index = input.indexOf(text[i]);
        decodeResult += output[index];
    }
    
    document.getElementById("codeResult").innerHTML = "Result: "
    document.getElementById("codeResult1").innerHTML =  decodeResult
    document.getElementById("codeinputSection").style.display=("none");
})
//code Copy
document.getElementById("codeCopy").addEventListener("click", ()=>{
    const text = document.getElementById("codeResult1").innerHTML  
    navigator.clipboard.writeText(text);
})
// make a code back button
document.getElementById("codeBack").addEventListener("click" ,()=>{
    location.reload();
})

//Decode a code function
document.getElementById("decodeaCode").addEventListener("click",()=>{
    document.getElementById("decodeSection").style.display=("block");
    document.getElementById("decodeaCode").style.display=("none");
    document.getElementById("makeaCode").style.display=("none");
    document.getElementById("deoutputSection").style.display=("none");
})

// Decoding the code
document.getElementById("decodeSubmit").addEventListener("click",()=>{
    document.getElementById("deoutputSection").style.display=("block");
    const text = document.getElementById("Decodetext").value;
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let decodeResult2="";
    for(let i=0; i<text.length; i++){
        const index = input.indexOf(text[i]);
        decodeResult2 += output[index];
    }
    document.getElementById("decodeResult").innerHTML = "Result: "
    document.getElementById("decodeResult1").innerHTML =  decodeResult2
    document.getElementById("decodeinputSection").style.display=("none");
})

//code Copy
document.getElementById("decodeCopy").addEventListener("click", ()=>{
    const text = document.getElementById("decodeResult1").innerHTML;  
    navigator.clipboard.writeText(text);
})

// make a Decode back button
document.getElementById("deCodeback").addEventListener("click" ,()=>{
    location.reload();
})