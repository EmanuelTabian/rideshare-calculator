# Rideshare Calculator

[![Live Version](https://img.shields.io/badge/Live%20Version-Click%20Here-brightgreen)](https://calculator.rideshare-copilot.eu)

## Description

This is the initial version of the [Rideshare Copilot ](https://www.rideshare-copilot.eu/) app. You can access the repository [here](https://github.com/EmanuelTabian/rideshare-copilot-v2).

This app features a calculator that takes the gross income as an input and performs several calculations to output the net income based on decimal and percentage values.

## Overview

The Rideshare Copilot app is a Single Page Application (SPA) made with **React.js**, designed to help rideshare drivers calculate their earnings. The app provides several input fields and renders an output message displaying the net income.

## Table of contents

- [Features](#features)
- [Setup and Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

1. **App Income**: Input field for the total income before any deductions.
2. **Commission Fields**: Two input fields for entering commission percentages. These percentages are summed to calculate the total commission. For example, entering 5% in the first field and 10% in the second field results in a total commission of 15%.
3. **Other Commission**: An input field for entering a fixed commission amount in currency, not a percentage.
4. **Other Expenses**: Input fields for additional expenses such as gas, meals, or cash expenses that can be subtracted from the gross income.

The app then calculates the net income by subtracting the total commissions and other expenses from the gross income and renders a message. The app also accounts for negative values.

## Setup and installation

### Prerequisites

- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/). This project requires Node.js version 14 or higher.
- **npm or Yarn**: Ensure you have npm (comes with Node.js) or Yarn installed for managing dependencies.

Once you have these prerequisites installed, you can proceed with the installation steps.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/EmanuelTabian/rideshare-copilot.git
   cd rideshare-copilot
   ```

2. **Install Dependencies**:

   - Using npm:

   ```bash
   npm install
   ```

   - Or using Yarn:

   ```bash
   yarn install
   ```

## Usage

### Run the project

```bash
npm start
```

### Interaction

- Enter the income value displayed on your ridesharing app (e.g. [Uber driver](https://play.google.com/store/apps/details?id=com.ubercab.driver&hl=en&pli=1)).

  **Note**: Some ridesharing apps may already subtract their commission (e.g., 25%) when displaying the income.

- If applicable, input the commission taken by the rideshare company.

- Input the commission taken by your employer, if you are not directly associated with the rideshare company.

- Add any other expenses incurred throughout the week.

- Review the output.

### Output

When you first open the app, it will display a message indicating that you have no earnings and prompting you to add an income value.

Based on the calculations, the output message will vary:

- If your net income is positive, the app will display: **You have earned X this week!**
- If your net income is negative, the app will display: **You have spent X more than you've earned!**

Where **X** is the calculated amount based on your inputs.

## Deployment

The Rideshare Copilot app is deployed using [Render](https://render.com/).

### Instructions

1. **Create a Render Account**: Sign up for a free account at [Render](https://render.com/) or login with your Github account.

2. **New Web Service**: In the Render dashboard, click on "New" and select "Web Service".

3. **Connect Repository**: Connect your GitHub repository to Render by following the prompts.

4. **Configure Build and Start Commands**:

   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

5. **Deploy**: Click on "Create Web Service" to deploy your app. Render will automatically build and deploy your app whenever you push changes to the connected repository.

For more detailed instructions, refer to the [Render documentation](https://render.com/docs).
