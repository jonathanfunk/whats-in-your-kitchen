# What's in your kitchen?

## Project

This is a recipe application powered by React & (Spoonacular API)[https://spoonacular.com/]. Users can discover what they can make by taking note of what's in their fridge or pantry

## Technology

- VS Code
- HTML5
- PostCSS
- Tailwind CSS
- ES6 JavaScript
- React
- Git/Github

## Learning Experience

Being stuck at home due to the Coronavirus & my love for baking drove me to build this application. This project also allowed me to try out Hooks & Context API along with Tailwind CSS. For pulling recipe data based on a list of ingredients, the (Spoonacular API)[https://spoonacular.com/] is the right tool for the job. This API is used my many companies in the cooking, health & fitness industry.

### Add Ingredients Functionality

For the add ingredient input field, I wanted an autocomplete feature. While the Spoonacular API has an autosuggest endpoint, this takes up points in the daily quota so I made my own using a list of 5000 ingredients and an autosuggest library. What I wanted was for users to return to the app at a later time and still work with the ingredients they've previously added to the list (They can still make tweaks to their list). To achieve this, ingredients get saved to the local storage.

### Recipes List

Initially, when I created the recipes list, I would only populate the list with recipes that would have one or no missing ingredients. My reasoning for this was because the whole idea was to see what you can make based on what you have on hand. Otherwise, if recipes come up with 6 missing ingredients, the user will have to go shopping, which I felt defeats the purpose. This was met with disappointment when I shared this app to my network since many couldn't fetch recipes at all. Based on this feedback, I've removed the missing ingredient requirement and in the process added a 'fave' feature where recipes can be saved for a future session using local storage.

### Tailwind CSS

This project was styled using (Tailwind CSS)[https://tailwindcss.com/], a utility first CSS framework. Unlike tools like Bootstrap & Bulma, you can build your own components from scratch as opposed to fighting premade components to get the design you are looking for. There is a learning curve but doubled with the Tailwind CSS IntelliSense extension for VS Code, working with Tailwind CSS is a breeze.
