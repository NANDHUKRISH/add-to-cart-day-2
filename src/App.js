import Product from "./Product";
import './App.css';
import {useState} from "react";
import Navigation from "./Navigation";

function App() {
    let details=[
        {   
            stock:"sale",
            productimage:"Images/shoe.jpg",
            productname:"Shoe",
            productreview:"2",
            productmopprice:"",
            productprice:"$40.00 - $80.00",
            Lastprice:200,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"Images/bottle.webp",
            productname:"Water bottles",
            productreview:"3",
            productmopprice:"$20.00",
            productprice:"$18.00",
            Lastprice:100,
            addtocart:"Add to cart"
        }, 
         {
            stock:"sale",
            productimage:"Images/wp7556190.gif",
            productname:"Chiken biriyani",
            productreview:"2",
            productmopprice:"$50.00",
            productprice:"$25.00",
            Lastprice:140,
            addtocart:"View Option"
        },
        {
            stock:"sale",
            productimage:"Images/smart tv.webp",
            productname:"Smart TV",
            productreview:"5",
            productmopprice:"5",
            productprice:"$40.00",
            Lastprice:34000,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"Images/mob-cover.jpg",
            productname:"Mobile cover",
            productreview:"5",
            productmopprice:"$50.00",
            productprice:"$25.00",
            Lastprice:100,
            addtocart:"View Option"
        },
        {
            stock:"sale",
            productimage:"Images/cooling glass.jpg",
            productname:"Cooling glass",
            productreview:"1",
            productmopprice:"",
            productprice:"$120.00 - $280.00",
            Lastprice:100,
            addtocart:"View Option"
        },
        {
            stock:"sale",
            productimage:"Images/School-Bags-01.jpg",
            productname:"School bag",
            productreview:"2", 
            productmopprice:"$20.00",
            productprice:"$18.00",
            Lastprice:300,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"Images/laptop-cover.webp",
            productname:"Laptop cover",
            productreview:"3",
            productmopprice:"",
            productprice:"$40.00",
            Lastprice:1000,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"Images/iphone14new.png",
            productname:"IPHONE 13",
            productreview:"5",
            productmopprice:"",
            productprice:"$40.00",
            Lastprice:75000,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"Images/oppo-74.jpg",
            productname:"OPPO A74",
            productreview:"4",
            productmopprice:"",
            productprice:"$40.00",
            Lastprice:22000,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"Images/samsung.jpg",
            productname:"SAMSUNG A35",
            productreview:"10",
            productmopprice:"",
            productprice:"$40.00",
            Lastprice:32000,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"Images/iphone14.png",
            productname:"IPHONE 14",
            productreview:"10",
            productmopprice:"",
            productprice:"$40.00",
            Lastprice:110000,
            addtocart:"Add to cart"
        },
    ]

        let increase =(e)=>
        {
            setCart(cart+1);
            e.target.innerText="Remove From Cart";
            e.target.classList.value="btn btn-outline-danger mt-3"
        }

         let decrease =(e)=>
         {
            if(cart>0){
            setCart(cart-1);
            e.target.innerText="Add to cart";
            e.target.classList.value="btn btn-outline-dark mt-3"
            }
            else{
                alert("CART IS EMPTY")
            }
        }
         
         let func=(e)=>
         {
           if(e.target.innerText==="Add to cart")
           {increase(e)}
           else if(e.target.innerText==="Remove From Cart")
           {decrease(e)}
           else 
           {alert("Stock not available ")}
         }   
  
        let [cart,setCart]=useState(0);
       
    return <>
       <Navigation value={{cart,setCart}} />
      
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        
        <section className="py-5">  
             <div className="container px-4 px-lg-5 mt-5">
                 <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                 {details.map((e,i)=> {
                 return <>
                  <Product details={e} func={func}/>
                 </>
                 })}
                 </div>
            </div>
        </section>

        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
  </>
}

export default App;
