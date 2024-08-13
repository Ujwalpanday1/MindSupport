# MindSupport

MindSupport is a mental health application designed to provide personalized support, recommendations, and interactive engagement for users seeking to improve their emotional well-being. The app integrates AI technology to offer tailored suggestions based on users' moods and experiences.

## Features

- **User Authentication**: 
  Secure signup and login functionality to store user progress and identify users.

- **Mood Tracking**: 
  Users can log their feelings and thoughts daily, including timestamps for each entry.

- **AI Integration**: 
  Utilize the ChatGPT API to provide personalized recommendations based on user input and mood.

- **Personalized Recommendations**: 
  AI suggests songs, movies, compliments, and books based on the user’s mood and recent entries.

- **Gita Verses**: 
  Provide relevant verses from the Gita based on the user’s mood and situation.

- **Interactive Bot**: 
  A bot that interacts with users, remembers previous interactions, and provides support, jokes, and greetings.

- **Emotional Insights**: 
  Users receive insights into their mood patterns, including when they felt angry, sad, or happy last.

- **Mood Streaks & Scoring**: 
  Display mood streaks with congratulatory messages and a scoring system based on mood logs.

- **User Engagement Activities**: 
  Fun interactive activities like breaking a glass or bursting a balloon, followed by uplifting phrases.

- **Daily Check-ins**: 
  The bot initiates daily conversations to check on the user's mood and progress.

- **Special Occasion Reminders**: 
  The bot wishes users on birthdays and other significant dates.

- **Friendly Banter**: 
  Light-hearted jokes or teasing to create a friendly rapport with the user.

- **Data Compression**: 
  Convert user responses into smaller texts for efficient database storage while maintaining essential context.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) 
- **Backend**: [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **AI Integration**: [ChatGPT API](https://openai.com/api/)
- **Deployment**: Frontend on [GitHub Pages](https://pages.github.com/) and Backend on [Render](https://render.com/)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/username/mindSupport.git
   cd mindSupport
   ```

2. Install dependencies:
   ```bash
   # For the frontend
   cd frontend
   npm install

   # For the backend
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory and add the necessary configurations (e.g., API keys, database connection strings).

4. Run the application:
   ```bash
   # Start the backend server
   cd backend
   npm start

   # Start the frontend server
   cd ../frontend
   npm start
   ```

5. Visit the application in your browser:
   Open `http://localhost:3000` (or the designated port) in your browser.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any feature requests or bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the need for mental health support and the potential of technology to provide personalized assistance.
