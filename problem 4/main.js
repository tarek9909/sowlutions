function isValidBreakSequence() {
  let input = document.getElementById("input").value;
  console.log(input);
  let fb=true, sb=true, tb=true;
  let x = input.split("");
  if (x.includes("(")) {
    index = x.indexOf("(");
    for (i = index; i < x.length; i++) {
      if (x[i].includes(")")) {
        fb = true;
        console.log(fb+"1")
        break;
      }else{
        fb=false;
      }
    }
  } if (x.includes("[")) {
    index = x.indexOf("[");
    for (i = index; i < x.length; i++) {
      if (x[i].includes("]")) {
        sb = true;
        console.log(sb+"2"
        )
        console.log(11)
        break;
      }else{
        sb=false
      }
    }
  } if (x.includes("{")) {
    index = x.indexOf("{");
    for (i = index; i < x.length; i++) {
      if (x[i].includes("}")) {
        tb = true;
        console.log(tb+"3")
        break;
      }else{
        tb=false
      }
    }
  }
  console.log(fb&&tb&&sb)
 if(fb&&tb&&sb){
    return true;
  }
  else{
    return false;
  }
}
 

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("result").innerHTML=isValidBreakSequence(input);
  
});
