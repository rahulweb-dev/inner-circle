"use client";
import OrderForm from "@/app/components/Forms/OrderForm";
import Image from "next/image";
import { useState } from "react";

export default function MenuZomato() {
  const categories = [
    "All", "Starters", "Soups", "Mocktails", "Salad", "Quick Bites",
    "Fresh Pizza", "Pasta", "Sizzlers", "Indian Mains", "Dal",
    "Asian Mains", "Indian Breads", "Flavor of Rice", "Dessert", "Ice N Spice Speciality",
    "Ice Cream", "Beverages"
  ];

  const menuItems = [

    //MOCTAILS
    { name: "Mint Mocktail", category: "Mocktails", price: 179, img: "https://i.ibb.co/7rCqgqt/veg-crispy.jpg" },
    { name: "Pina Colada", category: "Mocktails", price: 179, img: "https://i.ibb.co/7rCqgqt/veg-crispy.jpg" },
    { name: "Virgin Mojito", category: "Mocktails", price: 179, img: "https://i.ibb.co/7rCqgqt/veg-crispy.jpg" },
    { name: "Fruit Punch", category: "Mocktails", price: 179, img: "https://i.ibb.co/7rCqgqt/veg-crispy.jpg" },
    { name: "Shirley Temple", category: "Soups", price: 120, img: "https://i.ibb.co/d0pGmCw/manchow-soup.jpg" },
    { name: "Watermelon Mojito", category: "Mocktails", price: 179, img: "https://i.ibb.co/7rCqgqt/veg-crispy.jpg" },
    { name: "Blue Lagoon", category: "Mocktails", price: 179, img: "https://i.ibb.co/7rCqgqt/veg-crispy.jpg" },
    { name: "Milkshake", category: "Mocktails", price: 179, img: "https://i.ibb.co/7rCqgqt/veg-crispy.jpg" },
    { name: "Fresh Lime Soda", category: "Mocktails", price: 119, img: "https://i.ibb.co/7rCqgqt/veg-crispy.jpg" },
    { name: "Fresh Lime Water", category: "Mocktails", price: 99, img: "https://i.ibb.co/7rCqgqt/veg-crispy.jpg" },

    //SOUP — LIQUID APPETIZER
    { name: "Palak Shorba", category: "Soups", price: 195, img: "https://i.ibb.co/4NtYq6W/salad.jpg" },
    { name: "Tomato Ka Shorba", category: "Soups", price: 195, img: "https://i.ibb.co/4NtYq6W/salad.jpg" },
    { name: "Hot & Sour Soup", category: "Soups", price: 195, img: "https://i.ibb.co/4NtYq6W/salad.jpg" },
    { name: "Manchow Soup", category: "Soups", price: 195, img: "https://i.ibb.co/4NtYq6W/salad.jpg" },
    { name: "Sweet Corn Soup", category: "Soups", price: 195, img: "https://i.ibb.co/4NtYq6W/salad.jpg" },
    { name: "Lemon Coriander Soup", category: "Soups", price: 195, img: "https://i.ibb.co/4NtYq6W/salad.jpg" },
    { name: "Choice of Cream Soup (Mushroom / Spinach / Tomato)", category: "Soups", price: 195, img: "https://i.ibb.co/4NtYq6W/salad.jpg" },

    //🥗 SALAD
    { name: "Fruit Marble Salad", category: "Salad", price: 249, img: "https://i.ibb.co/3FLkJW7/fries.jpg" },
    { name: "Russian Salad", category: "Salad", price: 249, img: "https://i.ibb.co/3FLkJW7/fries.jpg" },
    { name: "Greek Salad", category: "Salad", price: 249, img: "https://i.ibb.co/3FLkJW7/fries.jpg" },
    { name: "Papdi Chaat", category: "Salad", price: 249, img: "https://i.ibb.co/3FLkJW7/fries.jpg" },
    { name: "Fresh Green Salad", category: "Salad", price: 169, img: "https://i.ibb.co/3FLkJW7/fries.jpg" },

    //🍟 QUICK BITES
    { name: "Chilli Cheese Garlic Toast", category: "Quick Bites", price: 199, img: "https://i.ibb.co/jV7XfKx/pizza.jpg" },
    { name: "Cheese Garlic Toast", category: "Quick Bites", price: 189, img: "https://i.ibb.co/jV7XfKx/pizza.jpg" },
    { name: "French Fries", category: "Quick Bites", price: 189, img: "https://i.ibb.co/jV7XfKx/pizza.jpg" },
    { name: "Masala Papad (2 Pcs)", category: "Quick Bites", price: 99, img: "https://i.ibb.co/jV7XfKx/pizza.jpg" },
    { name: "Roasted Papad (2 Pcs)", category: "Quick Bites", price: 79, img: "https://i.ibb.co/jV7XfKx/pizza.jpg" },

    //FRESH PIZZA
    { name: "Spicy Paneer", category: "Fresh Pizza", price: 369, img: "https://i.ibb.co/1b3QfVN/pasta.jpg" },
    { name: "Exotica Veg", category: "Fresh Pizza", price: 369, img: "https://i.ibb.co/1b3QfVN/pasta.jpg" },
    { name: "Hot N Spicy Mexican", category: "Fresh Pizza", price: 369, img: "https://i.ibb.co/1b3QfVN/pasta.jpg" },
    { name: "Margherita Pizza", category: "Fresh Pizza", price: 349, img: "https://i.ibb.co/1b3QfVN/pasta.jpg" },
    { name: "Basic Veg", category: "Fresh Pizza", price: 349, img: "https://i.ibb.co/1b3QfVN/pasta.jpg" },


    // ⭐ STARTERS
    {
      name: "Cheese Spinach Roll",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Cheese Corn Bell Pepper Balls",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Dragon Roll",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Crispy Chilli Corn Kernels",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Salat & Pepper (Veg / Baby Corn / Mushroom)",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Manchurian",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Lakma Kai Paneer",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Aloo 65",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Baby Corn 65",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Mushroom 65",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Paneer 65",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Garlic Mushroom",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Ginger Baby Corn",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Chilli Veg",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Schezwan Mushroom",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Schezwan Veg",
      category: "Starters",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Veg Gilafi Seekh Kebab",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Paneer Papdi Kebab",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Moti Hara Bhara Kebab",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Sizzling Paneer Tikka",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Paneer Majestic",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Kashmiri Veg Tikki",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Beetroot Tikki",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Banjara Paneer Tikka",
      category: "Starters",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //ICE N SPICE SPECIALITY
    {
      name: "Assorted Platter (Oriental/Tandoor)",
      category: "Ice N Spice Speciality",
      price: 599,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Corn Tikki",
      category: "Ice N Spice Speciality",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Veg Lollipop",
      category: "Ice N Spice Speciality",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Malai Broccoli",
      category: "Ice N Spice Speciality",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Faldhari Tikka",
      category: "Ice N Spice Speciality",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Thai Paneer Tikka",
      category: "Ice N Spice Speciality",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Veg Cutlet",
      category: "Ice N Spice Speciality",
      price: 349,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Mexican Cheese Ball",
      category: "Ice N Spice Speciality",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //PASTA
    {
      name: "Choice of Pasta (Penner / Macaroni / Fusilli / Spaghetti)",
      category: "Pasta",
      price: 399,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Choice of Sauce (Alfredo / Arrabbiata) - served with Garlic Bread",
      category: "Pasta",
      price: 399,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Vegetable Au-gratin",
      category: "Pasta",
      price: 399,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //SIZZLERS

    {
      name: "Paneer Tikka Sizzler",
      category: "Sizzlers",
      price: 429,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Cottage Cheese Shashlik Sizzler",
      category: "Sizzlers",
      price: 419,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "BBQ Veg Patti Sizzler",
      category: "Sizzlers",
      price: 419,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //INDIAN MAINS
    {
      name: "Kushrang Paneer",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Paneer Tikka Masala",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Shyam Savera Kofta",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Dil & Mushroom Malai Curry",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Paneer Zafrani do-Pyaza",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Punjabi Paneer",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Spicy Butter Paneer Masala",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Rara Paneer",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Shai Malai Paneer",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Paneer Rogan Josh",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Achari Paneer",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Chandni Kofta",
      category: "Indian Mains",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Lagan Ka Mela",
      category: "Indian Mains",
      price: 319,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Methi Malai Palak",
      category: "Indian Mains",
      price: 319,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Kaju Masala",
      category: "Indian Mains",
      price: 319,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Bhagare Aloo",
      category: "Indian Mains",
      price: 319,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Gatte Ki Sabji",
      category: "Indian Mains",
      price: 319,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Tawa Veg Masala",
      category: "Indian Mains",
      price: 319,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //Dal
    {
      name: "Shahi Makhani Dal",
      category: "Dal",
      price: 299,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Dal Tadka",
      category: "Dal",
      price: 259,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Kadi Pakodi",
      category: "Dal",
      price: 259,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Sambar",
      category: "Dal",
      price: 149,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //ASIAN MAINS
    {
      name: "Choice of Fried Rice (Shanghai / Schezwan / Chili Garlic / Butter Garlic / Thai / Hakka / Hong Kong)",
      category: "Asian Mains",
      price: 369,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Choice of Noodles (Shanghai / Schezwan / Chili Garlic / Butter Garlic / Thai / Hakka / Hong Kong)",
      category: "Asian Mains",
      price: 369,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Choice of Sauce (Veg / Paneer / Baby Corn / Mushroom / Manchurian / Hot Garlic / Schezwan / Oyster / Hunan / Kum Pa)",
      category: "Asian Mains",
      price: 359,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //INDIAN BREADS
    {
      name: "Tandoori Roti",
      category: "Indian Breads",
      price: 59,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Butter Roti",
      category: "Indian Breads",
      price: 69,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Dhaniya Ki Roti",
      category: "Indian Breads",
      price: 69,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Plain Naan",
      category: "Indian Breads",
      price: 59,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Butter Naan",
      category: "Indian Breads",
      price: 69,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Kashmiri Naan",
      category: "Indian Breads",
      price: 79,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Garlic Naan",
      category: "Indian Breads",
      price: 89,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Cheese Chilli Naan",
      category: "Indian Breads",
      price: 99,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Plain Kulcha",
      category: "Indian Breads",
      price: 59,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Butter Kulcha",
      category: "Indian Breads",
      price: 69,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Pudina Kulcha",
      category: "Indian Breads",
      price: 89,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Masala Kulcha",
      category: "Indian Breads",
      price: 99,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Aloo Kulcha",
      category: "Indian Breads",
      price: 99,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Plain Paratha",
      category: "Indian Breads",
      price: 59,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Butter Paratha",
      category: "Indian Breads",
      price: 69,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Masala Paratha",
      category: "Indian Breads",
      price: 99,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Methi Paratha",
      category: "Indian Breads",
      price: 99,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Pudina Paratha",
      category: "Indian Breads",
      price: 99,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Assorted Bread Basket",
      category: "Indian Breads",
      price: 249,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //FLAVOR OF RICE
    {
      name: "Veg Dum Biryani",
      category: "Flavor of Rice",
      price: 379,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Zafrani Veg Pulao",
      category: "Flavor of Rice",
      price: 369,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Kaju Mutter Ki Pulao",
      category: "Flavor of Rice",
      price: 369,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Jeera Rice",
      category: "Flavor of Rice",
      price: 219,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Sambar Rice",
      category: "Flavor of Rice",
      price: 219,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Curd Rice",
      category: "Flavor of Rice",
      price: 219,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Steamed Rice",
      category: "Flavor of Rice",
      price: 199,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Raita (Mix / Boondi / Pineapple)",
      category: "Flavor of Rice",
      price: 129,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Plain Curd",
      category: "Flavor of Rice",
      price: 79,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //DESSERT
    {
      name: "Hot Walnut Sizzling Brownie",
      category: "Dessert",
      price: 299,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Apricot Pudding",
      category: "Dessert",
      price: 299,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Moong Dal Halwa",
      category: "Dessert",
      price: 199,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Gajar Ka Halwa",
      category: "Dessert",
      price: 199,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Gulab Jamun",
      category: "Dessert",
      price: 199,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //ICE CREAM

    {
      name: "Jack & Jill",
      category: "Ice Cream",
      price: 249,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Rocky Road",
      category: "Ice Cream",
      price: 249,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Banana Split",
      category: "Ice Cream",
      price: 249,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Tall Fantasy",
      category: "Ice Cream",
      price: 249,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Butter Scotch / Pista / Chocolate",
      category: "Ice Cream",
      price: 179,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Vanilla / Strawberry",
      category: "Ice Cream",
      price: 179,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },

    //HOT & COLD BEVERAGES

    {
      name: "Tea",
      category: "Beverages",
      price: 69,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Masala Tea",
      category: "Beverages",
      price: 79,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Green Tea",
      category: "Beverages",
      price: 79,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Coffee",
      category: "Beverages",
      price: 79,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Filter Coffee",
      category: "Beverages",
      price: 89,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Cold Coffee",
      category: "Beverages",
      price: 179,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Cold Coffee With Ice Cream",
      category: "Beverages",
      price: 228,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    },
    {
      name: "Ice Tea",
      category: "Beverages",
      price: 189,
      img: "https://i.ibb.co/1b3QfVN/pasta.jpg"
    }








  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    room: "",
    product: "",
    qty: 1,
  });

  const openModal = (product) => {
    setSelectedProduct(product);
    setFormData({ ...formData, product: product, qty: 1 });
    setQuantity(1);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleQtyChange = (type) => {
    setQuantity((prev) => {
      const newQty = type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1;
      setFormData({ ...formData, qty: newQty });
      return newQty;
    });
  };

  const handleSubmit = () => {
    console.log("Order Submitted:", formData);
    alert(`Order submitted! (${formData.product} x ${formData.qty})`);
    closeModal();
  };

  const filteredItems = menuItems.filter(item => {
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="w-full min-h-screen bg-white text-black pb-24 px-6">

      {/* 🍽 Header */}
      <div className="container mx-auto text-center pt-10 mb-6">
        <h1 className="text-5xl md:text-6xl font-black text-[#e8c27d] drop-shadow-lg uppercase">
          Menu <span className="text-black">Recipe</span>
        </h1>

        <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
          A premium dining experience with handcrafted dishes.
        </p>
      </div>


      {/* 🔍 Search Bar */}
      <div className="max-w-xl mx-auto bg-[#222] rounded-full px-6 py-3 mb-8 flex items-center gap-3 shadow-lg">
        <input
          type="text"
          placeholder="Search your favourite dish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent outline-none text-white placeholder-gray-400"
        />
        <button className="text-[#e8c27d] text-2xl">🔍</button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition shadow-md ${activeCategory === cat
              ? "bg-[#e8c27d] text-black"
              : "bg-[#222] text-gray-300 hover:bg-[#333]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🍲 Food Cards */}
      {/* 🍲 Food Cards (Small Centered Swiggy-style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-[95%] mx-auto"
          >
            {/* Image */}
            <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                fill
                unoptimized={true}
                className="object-cover"
              />
            </div>

            <div className="p-3">

              {/* Rating + Bestseller */}
              <div className="flex items-center gap-2 mb-1">
                {/* Veg Icon */}
                <span className="w-3.5 h-3.5 border border-green-600 flex items-center justify-center rounded-sm">
                  <span className="w-2 h-2 bg-green-600 rounded-sm"></span>
                </span>

                <span className="text-[11px] text-red-500 font-semibold">
                  ⭐ Bestseller
                </span>

                <span className="text-[11px] text-green-600 font-semibold">
                  ★ 4.2 (200+)
                </span>
              </div>

              {/* Name */}
              <h3 className="text-[16px] font-semibold text-gray-900 leading-tight">
                {item.name}
              </h3>

              {/* Price + ADD */}
              <div className="flex items-center justify-between mt-2">
                <p className="text-[17px] font-bold text-gray-800">₹{item.price}</p>

                <button
                  onClick={() => openModal(item.name)}
                  className="px-5 py-1 text-[14px] border border-green-600 text-green-700 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all"
                >
                  ADD
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>


      {/* 🟡 MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <OrderForm
            selectedProduct={selectedProduct}
            onClose={closeModal}
          />
        </div>
      )}

    </div>
  );
}
