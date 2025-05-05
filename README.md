📄 Travel App UI - Component Overview
This project contains a few React Native components that together build a clean travel experience screen. The components are designed to be theme-aware, meaning they change colors depending on whether the app is in light mode or dark mode.

Here’s a quick breakdown of each file and what it does:

componentWrapper.jsx
This file wraps the main UI components (Homecom1, Homecom2, and Homecom3) with the app’s theme context.

Instead of each component calling useTheme inside itself, the wrapper gives them the theme automatically. This makes the components simpler and keeps the code clean.

Homecom1.jsx
This component is like the trip overview screen.
It shows:

A greeting to the user ("Hello Chhavi!")

Upcoming trip details (to Tokyo)

Trip date, number of days, group size, and activities planned

It uses a background image with a gradient overlay for a nice effect and shows trip stats with icons like a clock, people, and a checklist.

Homecom2.jsx
This screen displays Flight and Accommodation information.

It has two parts:

Flight Details: From Delhi to Narita (Tokyo) with flight date and time

Hotel Cards: Scrollable cards showing two different hotels, check-in/check-out times, nights stayed, and booking status (like Confirmed or Pending)

The design is kept clean, and the user can swipe horizontally through hotel options.

Homecom3.jsx
This component shows the day-wise activities planned during the trip.

It includes:

A row of days (27th Jan, 28th Jan, etc.) you can swipe through

A list of activities for each day (for example, visiting Senso-ji Temple, Tokyo Skytree, Kimono wearing)

Each activity card shows the timing, how long it takes, and where pickup happens.

It gives users a clear view of what’s planned for each day.

In Simple Words:
componentWrapper.jsx = handles theme passing

Homecom1.jsx = shows welcome and trip overview

Homecom2.jsx = shows flight + hotel bookings

Homecom3.jsx = shows activities day-by-day
