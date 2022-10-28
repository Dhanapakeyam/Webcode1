var firstDiv = document.createElement("div");
firstDiv.setAttribute("class","main1");
let start =0;
let end;
const pgsize =6;

var mainHeading = document.createElement("h1");
mainHeading.innerHTML="MAKEUP PRODUCTS"

firstDiv.append(mainHeading);

var table1 = document.createElement("table");
table1.setAttribute("id","table1");

var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

var th1 = document.createElement("th");
th1.innerHTML="Brand";
var th2 = document.createElement("th");
th2.innerHTML="Product Name";
var th3 = document.createElement("th");
th3.innerHTML="Price";
var th4 = document.createElement("th");
th4.innerHTML="Image";
var th5 = document.createElement("th");
th5.innerHTML="Product Link";
var th6 = document.createElement("th");
th6.innerHTML="Description";
thead.append(th1,th2,th3,th4,th5,th6);

table1.append(thead,tbody);

// var pagepanel = document.createElement("div");
// pagepanel.setAttribute("class","pagination");

foo(start,pgsize);

async function foo(a,b){
    try {
    
    let res=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    let res1= await res.json();
    console.log(res1);
    console.log(res1.length);
            
   for(var i=a; i<b; i++)
   {

        var tr = document.createElement("tr");
        tr.setAttribute("id","content");
        var brand = document.createElement("td");
        brand.setAttribute("id","tabledata");
        brand.innerHTML=`${res1[i].brand}`;
        
        var name = document.createElement("td");
        name.setAttribute("id","tabledata");
        name.innerHTML=`${res1[i].name}`;
        
        var price = document.createElement("td");
        price.setAttribute("id","tabledata");
        price.innerHTML=`${res1[i].price}`;

        var images = document.createElement("td");
        images.setAttribute("id","tabledata");
        images.innerHTML=`<img src="${res1[i].image_link}" id ="prdImg">`;

        var prdlink = document.createElement("td");
        prdlink.setAttribute("id","tabledata");
        prdlink.innerHTML = `${res1[i].product_link}`;
        
        var desc = document.createElement("td");
        desc.setAttribute("id","tabledata");
        var desc1 = `${res1[i].description}`;
        desc.innerHTML = desc1.slice(0,50);

        tr.append(brand,name,price,images,prdlink,desc);
        tbody.append(tr);
    }
start +=6;
end += 6;
    } catch (error) {
      console.log(error);
    }
}
function deleteRows()
{
  for(var r=0; r<6; r++)
  {
    document.getElementById("table1").deleteRow(0);
  }
}

function prePage()
{
  deleteRows();
  // var ele = document.getElementById("content");
  // ele.remove();
  foo((start+pgsize),(end+pgsize));
}

function nxtPage()
{
  // var ele = document.getElementById("content");
  // ele.remove();
  deleteRows();
  foo((start+pgsize),(end+pgsize));
}

var buttonPanel = document.createElement("div");
buttonPanel.setAttribute("id","buttonPanel");

var previous = document.createElement("button");
previous.setAttribute("id","prevButton");
previous.innerHTML="Previous";
previous.addEventListener("click",prePage);
 
var next = document.createElement("button");
next.setAttribute("id","nextButton");
next.innerHTML="Next";
next.addEventListener("click",nxtPage);

buttonPanel.append(previous,next);

firstDiv.append(table1,buttonPanel);
document.body.append(firstDiv);