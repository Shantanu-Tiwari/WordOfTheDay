
# Word of the Day App

This is a simple React Native app that allows users to discover a new word of the day, view their word history, and manage their vocabulary. The app uses Expo and Expo Router for navigation, and integrates with a local storage solution for saving and managing words.

## Features
- Discover a new word of the day
- View saved word history
- Clear history and navigate back to home
- Responsive and minimal design

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Expo CLI**: You can install Expo CLI globally by running:
  
  ```bash
  npm install -g expo-cli
  ```

- **Xcode** (for iOS simulation): Required for running the app on the iOS simulator.
- **Android Studio** (for Android simulation): Required for running the app on the Android emulator.

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/word-of-the-day.git
cd word-of-the-day
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Run the App

#### iOS

To run the app on the iOS simulator, use the following command:

```bash
expo start --ios
```

This will open Expo in your browser, and the app will automatically start in the iOS simulator. If you have Xcode installed, it will launch the simulator and display the app.

#### Android

To run the app on the Android emulator, use the following command:

```bash
expo start --android
```

This will open Expo in your browser, and the app will start on your Android emulator. If Android Studio and an emulator are set up correctly, Expo will automatically launch the app on the emulator.

### 4. Making Changes

As you make changes to the project, the app will automatically refresh in the simulator or emulator to reflect your changes.

## Project Structure

- **components**: Reusable UI components like `WordCard`.
- **utils**: Utility functions for word generation and local storage.
- **screens**: The main screens of the app (`HomeScreen`, `HistoryScreen`).
- **types**: TypeScript types used throughout the app.
- **App.tsx**: The entry point for the app.
- **app**: Expo Router's file structure (pages for routing).

## Troubleshooting

- **"expo" command not found**: If you get an error saying that the `expo` command is not found, try running `npm install -g expo-cli` to install Expo globally.
- **App not showing in the simulator**: Ensure you have Xcode and Android Studio installed and configured correctly.
- **Simulator/Emulator not starting**: Check if the simulator/emulator is running. You can manually start it from Xcode (for iOS) or Android Studio (for Android).

## Contributing

Feel free to submit issues, fork the project, and send pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
