This is a donation website created for a competition. It is built with MUI and React (app directory). It is currently hosted [here](https://donation-app.pages.dev/)



## Running the server locally
First, run the development server:

```bash

npm run dev

```

## Most important libraries used
- [Material UI](https://mui.com/) : Handles most of the website's styling and design

  
## Project Structure
This is the current structure of the */src* directory 

- `pages` Includes all the website's React components ( Donation Form, Progress, Faqs, Rewards, Notifications )
- `configs`Includes information to update values as per campaigns (Rewards List, Faq List, Donation Info)
- `theme.jsx` Includes the basic theme of (colors, fonts) used across the application

## Backend Repo
- [Github Link](https://github.com/Avradip08/donation-app-backend) - currently deployed on (render.com) and is not expected work properly
- Handles payment through stripe checkout api

## Future Scope
- Make the Donation Form to accept payments on the Page using Stripe's Payment Element on a Modal
- Dynamically configure notifications ( Database/stripe webhook implementation would be needed )
- Dynamically populate the progressbar
- Add send email functionality to the further queries section under FAQs
- Add Further validations to forms
