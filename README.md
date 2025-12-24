# 🌍 Country Explorer Dashboard

Country Explorer Dashboard is a responsive React application that allows users to explore countries, view detailed information, check real-time weather for capital cities, and manage favourite countries. This project was developed as part of the React Developer Machine Test.

---

## 🚀 Tech Stack

React (Functional Components & Hooks), Vite, JavaScript, Axios, React Router DOM, Context API, CSS (Responsive Design)

---

## 🔗 Live Links

- **🚀 Deployed Application:**  
  https://country-dashboard-psi.vercel.app/

- **📦 GitHub Repository:**  
  https://github.com/ajps208/country_dashboard

---

## ✨ Features

### Core Features
- Fetch and display all countries using REST Countries API
- Country card view showing flag, name, capital, region, and population
- Search countries by name
- Filter countries by region
- Pagination using Load More (10 countries per page)
- Country details page
- Real-time weather data for capital cities
- Add and remove countries from favourites
- Persist favourites using LocalStorage

### Advanced / Bonus Features
- Dark and Light mode toggle
- Debounced search input for performance optimization
- API caching to avoid unnecessary refetching
- Skeleton loaders while data is loading
- Fully responsive UI for mobile and desktop

---

## 🌐 APIs Used

REST Countries API: https://restcountries.com/v3.1  
OpenWeatherMap API: https://openweathermap.org/api

---

## 📁 Project Folder Structure

src/
components/
CountryCard.jsx  
SearchBar.jsx  
Filters.jsx  
SkeletonCard.jsx  

pages/
CountryList.jsx  
CountryDetails.jsx  
Favorites.jsx  

context/
FavoritesContext.jsx  
ThemeContext.jsx  

hooks/
useDebounce.js  

services/
api.js  
apiCache.js  

App.jsx  
main.jsx  
styles.css  

---

## 🛠️ Installation and Setup

Create the project using Vite:
npm create vite@latest country-explorer-dashboard  
cd country-explorer-dashboard  
npm install  

Install required dependencies:
npm install axios react-router-dom  

---

## 🔑 Environment Variable Setup

Create a .env file in the project root and add:
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY

Restart the server after adding the .env file:
npm run dev  

---

## ▶️ Run the Application

npm run dev  

The application will run at:
http://localhost:5173

---

## 🧠 Key Implementation Details

Debounced search reduces unnecessary re-renders.  
API caching prevents repeated API calls.  
Skeleton loaders improve user experience during loading.  
Context API manages global state for theme and favourites.  
CSS Grid ensures a responsive layout.

---

## 📱 Responsive Design

Mobile-first responsive design.  
CSS Grid-based card layout.  
Responsive navigation for smaller screens.

---


## 👨‍💻 Author

Ajith P S  
Full Stack Developer  

