const items = [
    { name: "Smartphone", price: 699, category: "electronics" ,url:"https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { name: "Laptop", price: 1299, category: "electronics" ,url:"https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Smartwatch", price: 199, category: "electronics" ,url:"https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { name: "Headphones", price: 149, category: "electronics",url:"https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Speaker", price: 99, category: "electronics",url:"https://images.pexels.com/photos/4893862/pexels-photo-4893862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "T-Shirt", price: 25, category: "fashion",url:"https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { name: "Jeans", price: 50, category: "fashion",url:"https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Jacket", price: 100, category: "fashion",url:"https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Sneakers", price: 80, category: "fashion",url:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Handbag", price: 60, category: "fashion",url:"https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Sofa", price: 500, category: "home items",url:"https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Dining Table", price: 750, category: "home items",url:"https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Desk Lamp", price: 40, category: "home items",url:"https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Curtains", price: 70, category: "home items",url:"https://images.pexels.com/photos/910458/pexels-photo-910458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Rug", price: 120, category: "home items",url:"https://images.pexels.com/photos/1421253/pexels-photo-1421253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Tablet", price: 350, category: "electronics",url:"https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Blender", price: 150, category: "home items",url:"https://images.pexels.com/photos/19599327/pexels-photo-19599327/free-photo-of-pitchers-in-coffee-machines.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Sunglasses", price: 120, category: "fashion",url:"https://images.pexels.com/photos/147641/pexels-photo-147641.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Remote", price: 499, category: "electronics",url:"https://images.pexels.com/photos/3945688/pexels-photo-3945688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Bookshelf", price: 200, category: "home items",url:"https://images.pexels.com/photos/14680509/pexels-photo-14680509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
];


let categoryElement = document.querySelector("select option")
let main = document.querySelector("main")
let option = document.querySelector("select option");
let select = document.querySelector("select");


items.forEach((product)=>{
    const card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("id",`${product.category}`)
    card.innerHTML=`
       <div id="upper"><img src=${product.url} alt=""></div>
        <div id="lower">
            <h3 id="name">${product.name}</h3>
            <p id="price">Price: ${product.price}</p>
        </div>
    `;
    main.appendChild(card);
})


function renderCard(){
    select.addEventListener("change",()=>{
        main.innerHTML=""
        let value = select.value;
        if(value=="All"){
            items.forEach((product)=>{
                const card = document.createElement("div")
                card.classList.add("card")
                card.setAttribute("id",`${product.category}`)
                card.innerHTML=`
                   <div id="upper"><img src=${product.url} alt=""></div>
                    <div id="lower">
                        <h3 id="name">${product.name}</h3>
                        <p id="price">Price: ${product.price}</p>
                    </div>
                `;
                main.appendChild(card);
            })
        }
        else{
            items.forEach((product)=>{
                const card = document.createElement("div")
                card.classList.add("card")
                card.setAttribute("id",`${product.category}`)
                card.innerHTML=`
                <div id="upper"><img src=${product.url} alt=""></div>
                    <div id="lower">
                        <h3 id="name">${product.name}</h3>
                        <p id="price">Price: ${product.price}</p>
                    </div>
                `;
                if(product.category===value){
                    main.appendChild(card);
                }
            })
        }
        
    })
}

renderCard();

