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

### installation

## Installation

Access the deployed static version of the a [Ridesharing Copilot](https://rideshare-copilot.onrender.com/) app or follow the insturctions.

<details><summary><b>Show instructions</b></summary>

1. Clone the repository into your local machine or manually download the zip file.

```sh
   git clone https://github.com/ai/size-limit.git
```

2. Make sure you're in the project's directory and start the React.js app.

```sh
   npm run start
```

</details>

## Usage

1. Input the income value displayed on the app.
   NOTE: Some of the ridesharing apps already subtract their commission (e.g. 25%) when displaying the income.

2. If necessary input the Rideshare company comission.

3. Input the comission that you're employer takes. (If you're not directly associated with the Rideshare company)

4. Add any other expenses made throughout the week.

5. Analyze the your below listed net income.
