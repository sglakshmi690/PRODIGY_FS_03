# PRODIGY_FS_03 — Local Store E-commerce Platform

Task 03 of the Prodigy InfoTech Full-Stack Web Development Internship (Track Code: FS).

A full-stack MERN e-commerce web application for a local grocery store ("Fresh Mart") that enables customers to browse products across multiple categories, sort by price, manage a shopping cart, and place orders with checkout confirmation.

## Tech Stack

* **Frontend:** React (Vite), React Router, Axios, CSS3
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas)

## How to run locally

1. `cd server && npm install && node seed.js && npm run dev`
2. `cd client && npm install && npm run dev`
3. Open `http://localhost:5173`

## Features

* **Product Catalog:** Dynamic product listings with images, descriptions, categories, and real-time prices in INR (₹).
* **Category Filtering:** Filter items across 5 distinct categories (Vegetables, Fruits, Dairy, Bakery, Grains).
* **Product Sorting:** Dynamically sort catalog listings by price (low to high, high to low).
* **Shopping Cart:** Real-time quantity adjustment, item deletion, and running total calculation.
* **Checkout & Order Flow:** Checkout form to submit customer details, generate a unique Order ID, and automatically clear the cart upon placement.