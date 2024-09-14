# React Native Week Graph

This React Native app displays an animated bar graph for a week, showing data for each day. As you scroll through weeks, the bars animate to reflect the new week's data. Each week is labeled at the bottom, showing the start date of the week.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vanapallipremkumar/React-Native-Week-Graph
   cd React-Native-Week-Graph
   ```

2. **Install dependencies:**

   ```bash
   yarn
   ```

3. **Run the app:**

   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Usage

- Scroll week label horizontally to view data for different weeks.
- Each week is animated, and the bars reflect daily data.
- The week label at the bottom will update based on the week you’re viewing.

## Features

- Displays a bar graph with 7 bars representing the 7 days of a week.
- Displays the week label in the format "Week of [Starting Day]" (e.g., "Week of 9 September").
- Smooth animations as you scroll through the weeks.
- Dynamic data loading for each week.

## Folder Structure

```plaintext
|-- src
|    |-- components
|    |    |-- DayBar.tsx
|    |    |-- WeekGraph.tsx
|    |-- constants.ts
|    |-- App.tsx
```

## Reference Video

- For a quick overview of the app's functionality, you can watch the following video:

![React Native Week Graph](https://github.com/user-attachments/assets/aab75507-41a8-4a1c-992b-14adbd78b517)


## Contributing

Contributions are welcome! If you have any ideas or suggestions for improvements, feel free to open an issue or submit a pull request.
