
## NetflixGPT - A Movie Recommendation App with Gemini API integration

### Overview
NetflixGPT is a Movie Recommendation web App built using React JS with Vite, integrating Gemini API for search functionality, Firebase for authentication, and TMDB API for fetching movie data. The app provides users with personalized movie recommendations based on their preferences and interests.

### LIVE URL - [https://netflix-gpt-hazel-beta.vercel.app/]

### Features

- **Gemini API Integration:** Utilizes Gemini AI API for intelligent movie recommendations, providing users with tailored suggestions based on their input.
- **Firebase Authentication:** Secure authentication system powered by Firebase, allowing users to sign in securely and access personalized features.
- **TMDB API Integration:** Fetches movie data from TMDB API, ensuring an extensive database of movies for recommendations and search functionality.
- **Responsive Design:** Built with a responsive design using Tailwind CSS, ensuring optimal user experience across devices and screen sizes.
- **Search Functionality:** Powerful search feature enabling users to find movies by title, genre, or keyword, enhancing discoverability and user engagement.

### Challenges

- **Integration of Gemini API:** Implementing Gemini AI API for intelligent movie recommendations required careful handling of asynchronous requests and data parsing to ensure accurate and relevant suggestions.
- **Firebase Integration:** Setting up Firebase authentication involved configuring authentication methods, handling user sessions, and managing user data securely.
- **TMDB API Handling:** Interfacing with the TMDB API posed challenges related to rate limiting, pagination, and data formatting to ensure smooth retrieval and display of movie information.


### Tech Stack Used

**Client:** React JS, Redux Toolkit, TailwindCSS, Firebase Authentication, TMDB API, Gemini API


### Getting Started

- Clone the repository:

```bash
  git clone https://github.com/manju0912/NetflixGPT.git
```
    
- Navigate to the project directory:

```
  cd netflix-gpt
```

- Install dependencies:

```
   npm install
```

- Configure Firebase: Follow the instructions in the Firebase documentation to setup your Firebase project and obtain the necessary credentials.

- Configure TMDB API: Sign up for a TMDB API key and replace the placeholder with your actual API key in the code.

- Start the development server:

```
   npm run dev
```

- Open your browser and navigate to `http://localhost:5173` or the port no. given in your terminal to view the app.


### Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any bugs, feature requests, or suggestions.
