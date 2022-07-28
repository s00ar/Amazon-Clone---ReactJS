import React from 'react'
import Product from "./Product";
import "./View.css";

const saleItems = [
    {
        id:"12321341",
        title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
        price:11.96,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
        description:"Over the course of his career, Mark has made a substantial impact on the business world most recently, he was the co-founder and CTO of Google. As the co-founder and CTO of Google, Mark leads the company's product development efforts, and is responsible for the company's success in the mobile, cloud, and web worlds. He is also a co-author of the popular business book, Zero to One, which has been translated into more than 40 languages."
    },
    {
        id:"49538094",
        title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
        price:239.0,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
        description: "The Kenwood kMix Stand Mixer is a stand mixer with a built-in dough hook and whisk that makes it easy to mix and blend. The mixer has a wide variety of functions including dough hook and whisk, specialty food mixes, and more. The Kenwood kMix Stand Mixer is the ideal stand mixer for all baking needs. "
    },
    {
        id:"4903850",
        title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
        price:199.99,
        rating:3,
        image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
        description: "The Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor is the perfect price-match for PC gaming. It's a thin, lightweight, and easy to use monitor that's perfect for the gamer in you. The LC49RG90SSUXEN 49' monitor is powered by a Super Ultra Wideband (SUWB) technology that provides a full range of colors and a resolution of 4K, so you can enjoy the ultimate gaming experience."
    },
    {
        id:"23445930",
        title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
        price:98.99,
        rating:5,
        image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
        description: "Amazon Echo is a smart speaker that lets you voice commands, control lights, track the weather, and more. Echo is designed to fit in your home, office, or car and is the perfect solution for smart home users."
    },
    {
        id:"3254354345",
        title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
        price:598.99,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
        description: "The Apple iPad Pro delivers the best performance, battery life, and design in a larger, 9.7-inch iPad. It's a powerful, high-performance iPad that's designed for iPad Pro, iPad mini, and iPad Air users. It's a 4th generation iPad that features a new Retina display with a resolution of 2436 x 1125 pixels, a new 10.2-inch (distinctively curved) glass and a new 12.9-inch (distinctively curved) glass."
    },
    {
        id:"90829332",
        title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price:1094.98,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
        description: "The Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor is the perfect price-match for PC gaming. It's a thin, lightweight, and easy to use monitor that's perfect for the gamer in you. The LC49RG90SSUXEN 49' monitor is powered by a Super Ultra Wideband (SUWB) technology that provides a full range of colors and a resolution of 4K, so you can enjoy the ultimate gaming experience."
    }
];

function View(props) {
    let thisProduct = saleItems.find((product) => {
        return product.id == props.id;
    })
    return (
        <>
        <h1>Product Detail Page</h1>
        <br/>
        <Product
                id={thisProduct.id}
                title={thisProduct.title}
                price={thisProduct.price}
                rating={thisProduct.rating}
                image={thisProduct.image}
                description={thisProduct.description}
            /></>
    )
}

export default View;