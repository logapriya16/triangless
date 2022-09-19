const base = document.querySelector("#Base-value");
const Height = document.querySelector("#Height-value");
const submitBtn = document.querySelector("#is-triangle-btn");
const outputDiv = document.querySelector("#output");
function calculateArea(H,B) 
{
    const area= 0.5*B*H;
    //console.log(area,B,H,"function ");
    return area;
    //outputDiv.innerText = "The Area is " +area  ;   
}
function GettingOutput()
{
    
    const Height_value=Number(Height.value);
    const Base_value=Number(base.value);
    const AreaofTriangle = calculateArea(Height_value,Base_value);
    if(AreaofTriangle >=0)
    {
        outputDiv.innerText="The Area is "+AreaofTriangle +" square units";
    }
    else
    {
        outputDiv.innerText="Sides of the Triangle must always be a Positive Value";
    }
}
submitBtn.addEventListener("click", GettingOutput);
