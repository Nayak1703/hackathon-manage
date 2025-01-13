# Hackathrone

Hackathrone is a hackathon website project developed as part of an assignment. The goal was to create a functional and visually appealing hackathon platform.

## Live Demo
You can check out the live version of the project here: [Hackathrone Live](https://hackathrone-yn.vercel.app/)

## Features
- **Login/Register Functionality**
  - Users can register and log in.
  - User information is stored in local storage.
  - Local storage is extensively used as a temporary database.

- **Custom User List and Card Display**
  - A custom JSON list is used to fetch and display user details on cards.
  - Users are displayed in a modern card UI.

- **Tabs, Dropdown, and Search Functionality**
  - Users can filter cards using tabs, dropdowns, and a search feature.

- **Pagination**
  - Added pagination to improve the user experience when browsing a large number of cards.

- **Modern Design**
  - The website incorporates animations and modern color schemes to enhance user experience.

## Technologies Used
- **React**
- **Material-UI**
- **JavaScript**
- **CSS**

## Test User Credentials
To test the website, you can use the following user credentials:
```json
{
    "id": 1,
    "fullName": "Test User",
    "email": "test123@hireMe.com",
    "username": "test1008",
    "password": "Test@1234"
}
```

## How It Works
1. **User Registration**
   - When a user registers, their information is stored in local storage.
   - This allows the user to log in later using their credentials.

2. **Fetching and Displaying Data**
   - A list of users is fetched from a custom JSON object and displayed as cards.

3. **Dynamic Filtering**
   - Users can filter displayed cards using tabs, dropdown menus, and a search bar.

4. **Pagination**
   - Pagination ensures that only a limited number of cards are shown per page, enhancing performance and usability.

## Future Implementations
Although I tried my best to fulfill the given requirements within the assigned time, some features are yet to be implemented. I learned a lot from this assignment and have plans for future improvements:

- **User Profile Page**
  - Add a detailed user profile page.

- **Detailed Card Page**
  - Provide more details on the card display page.

- **Full-Stack Conversion**
  - Replace local storage with a proper backend using MongoDB or Firebase.
  - Make the project a full-stack application.

## What I Learned
- Building a frontend project using React and Material-UI.
- Implementing user authentication and storing data in local storage.
- Creating a user-friendly interface with animations and modern UI components.
- Handling tabs, dropdowns, search functionality, and pagination efficiently.

## Conclusion
Hackathrone is a fully functional hackathon platform with essential features like user registration, login, card display, filtering, and pagination. While there is room for further improvements, this project was a great learning experience and provided valuable insight into frontend development.

---

Feel free to explore the project and provide any feedback!

