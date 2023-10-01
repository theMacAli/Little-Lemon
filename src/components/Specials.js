import React from "react";
import MealCard from "./MealCard";
import './Specials.css';

function Specials() {
  const meals = [
    {
      name: "Greek Salad",
      image: "/icons_assets/greek salad.jpg",
      price: "$12.99",
      description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
    {
      name: "Bruschetta",
      image: "/icons_assets/bruschetta.jpg",
      price: "$5.99",
      description: `Our Bruschetta is made from grilled bread that has been 
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: "Lemon Dessert",
      image: "/icons_assets/lemon dessert.jpg",
      price: "$5.00",
      description: `This comes straight from grandma's recipe book, every last 
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <button className="button-primary" >
          Online Menu
        </button>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
}

export default Specials;
