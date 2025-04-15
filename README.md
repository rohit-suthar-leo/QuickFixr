# QuickFixr - Service Provider Booking App

QuickFixr is a modern, responsive mobile app that enables users to browse and book local service providers such as painters, cleaners, and plumbers.

## Features

- Browse service providers by category
- View expert profiles with photos, reviews, and hourly rates
- Manage ongoing and completed bookings
- Track service progress visually (e.g., "75% Almost Done")
- Schedule services via calendar availability
- Receive notifications about bookings and services

## Screenshots

The app follows a modern UI design with a clean interface focusing on ease of use and visual appeal.

## Tech Stack

### Frontend (Mobile App)
- **Framework:** React Native (for both iOS & Android)
- **Navigation:** React Navigation
- **Styling:** NativeWind (Tailwind CSS for React Native)
- **Icons:** React Native Vector Icons
- **Animations:** React Native Reanimated
- **Calendar:** react-native-calendars
- **Forms & Input:** react-hook-form + zod
- **State Management:** Context API / Zustand

### Backend (Planned)
- **Server:** Node.js + Express.js
- **Database:** MongoDB (via Mongoose)
- **Auth:** Firebase Auth or JWT
- **Storage:** Cloudinary or Firebase Storage

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- React Native development environment setup
- Expo CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/quickfixr.git
cd quickfixr
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Run on iOS or Android
```bash
npm run ios
# or
npm run android
```

## Project Structure

```
quickfixr/
├── app/
│   ├── components/      # Reusable UI components
│   ├── constants/       # Theme and constant values
│   ├── hooks/           # Custom React hooks
│   ├── navigation/      # Navigation structure
│   ├── screens/         # Screen components
│   └── utils/           # Utility functions
├── assets/              # Images, fonts, etc.
├── App.js               # Main app component
└── package.json         # Dependencies and scripts
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern service provider apps
- React Native community for amazing tools and libraries
