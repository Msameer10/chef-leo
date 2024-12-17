# Chef Leo 🍳 ![License](https://img.shields.io/badge/license-MIT-green)


**Chef Leo** is a web application that recommends recipes based on the ingredients you have at hand. Built as a learning project, it uses ReactJS for the frontend and integrates AI through a Hugging Face model to generate intelligent recipe suggestions.

## Features
- **Ingredient Input**: Add ingredients one at a time to build your list.
- **Recipe Suggestions**: Get personalized recipe recommendations after entering at least four ingredients.
- **Minimal Extra Ingredients**: Recipes are designed to minimize the use of additional ingredients.
- **User-Friendly Design**: Simple, clean, and intuitive interface.

## How It Works
1. Add ingredients using the input field.
2. Once you’ve entered at least four ingredients, request a recipe.
3. Chef Leo will suggest a recipe that uses some or all of the provided ingredients, keeping extra ingredients to a minimum.

## Technologies Used
- **ReactJS**: For building the user interface.
- **Hugging Face Model**: For recipe generation.
- **CSS**: For responsive styling and layout.
- **GitHub Pages**: For hosting and deployment.

## Installation and Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/chef-leo.git
Navigate to the project directory:
cd chef-leo
Install dependencies:
npm install
Start the development server:
npm start
Deployment
The app is deployed using GitHub Pages. To deploy:

Make sure the "homepage" property in package.json is correctly set to:
"homepage": "https://<your-username>.github.io/chef-leo"
Build and deploy:
npm run deploy
Project Status
Chef Leo is a work in progress. While it is functional, some features and refinements are still in development. Feedback and contributions are welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
