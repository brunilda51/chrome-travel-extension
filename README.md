
## Travel Sustainably Browser Extension

### Description

The TravelSustainably Browser Extension enhances the user experience for travelers searching for air options on popular travel websites such as Skyscanner and Kayak. 

## Features

- Destination Recognition: The extension reads out the user's origin, destination, departure and arrival dates directly from the website, eliminating the need for manual input.

- Sustainability Insights: Users receive sustainability information about their trip. This information is sourced from a database and can include a sustainability score for the destination. The data is immediately saved as long as it is an original search. 

- Tooltip Functionality: When hovering over the sustainability score you can read additional info about what the score means.

- Options page Dashboard: When going to my dashboard users have the possibility to see the air quality information for the last week of their five more recent searched destinations in the dashboard via a bar chard produced with chart.js

- Options page My Flights: When going to my flights users have the possibility to see their flight search history, date searched and the sustainability score of each one.

- Options page Profile: When going to my profile users have the possibility to see their own info.
## Technologies

The project was cloned from https://github.com/ecomio/extension-challenge and it was integrated into the frontend side of the final result. 

extension-app/

```bash
── backend
   ├── extension
   │   ├── db.sqlite3
   │   ├── extension
   │   │   ├── models.py
   │   │   ├── openapi.yaml
   │   │   ├── settings.py
   │   │   ├── urls.py
   │   │   ├── views
   │   │   │   ├── search_view.py
   │   │   │   └── user_view.py
   │   │   └── wsgi.py
   │   └── manage.py
   └── requirements.txt
```
The backend is build in Django and has the 2 relevant models, an openapi specification for a possible swagger website in the future, the urls.py with the specified access routes and the views where the implementation of the logic happens. 

To set it up, you need to have python and mysql db installed. After that run:

```
pip install virtualenv

virtualenv myenv

source myenv2/bin/activate

pip install mysql, setuptools, django

python manage.py makemigrations

python manage.py migrate 

python manage.py runserver

```

For good user experience set up an initial user:

curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "name": "name",
    "email": "email",
    "last_name": "lastname",
    "username": "username",
    "password": "password"
  }' \
  http://localhost:8000/users

Your db should be setup with an initial user and your backend should be up and running. :)

```bash
── frontend
    ├── LICENSE
    ├── README.md
    ├── dist
    ├── jest-puppeteer.config.ts
    ├── jest.config.ts
    ├── jest.setup.js
    ├── openapi-config.ts
    ├── openapi.yaml
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── manifest.json
    ├── src
    │   ├── assets
    │   ├── background
    │   │   ├── index.d.ts
    │   │   └── index.ts
    │   ├── content
    │   │   ├── index.d.ts
    │   │   ├── index.ts
    │   │   └── tests
    │   │       └── flightData.test.ts
    │   ├── options
    │   │   ├── components
    │   │   │   ├── App.d.ts
    │   │   │   ├── App.tsx
    │   │   │   ├── dashboard
    │   │   │   │   └── Dashboard.tsx
    │   │   │   ├── drawer
    │   │   │   │   └── Drawer.tsx
    │   │   │   ├── flights
    │   │   │   │   └── MyFlights.tsx
    │   │   │   ├── main
    │   │   │   │   └── Main.tsx
    │   │   │   └── profile
    │   │   │       └── Profile.tsx
    │   │   ├── index.d.ts
    │   │   └── index.tsx
    │   ├── popup
    │   │   ├── components
    │   │   │   ├── App.d.ts
    │   │   │   ├── App.tsx
    │   │   │   └── FlightCard
    │   │   │       └── FlightCard.tsx
    │   │   ├── index.d.ts
    │   │   └── index.tsx
    │   ├── services
    │   │   ├── airquality.service.ts
    │   │   ├── search.service.ts
    │   │   ├── urlHelper.ts
    │   │   └── user.service.ts
    │   ├── sharedComponents
    │   │   ├── SustainabilityScore.tsx
    │   │   └── utils.ts
    │   ├── styles
    │   │   └── globals.css
    │   └── types.ts
    ├── tsconfig.json
    └── webpack
        ├── webpack.common.js
        └── webpack.dev.js
```

The frontend is made up of:

- The content script which gets activated when the pages initially loads and takes care of the url processing and the forwarding of the search data.
- The background script, which then receives it and calls the service to store the object to the database. 

In the backend a short check is made to ensure no duplicates are saved.
The extension has two html entry points (both built in React with Material UI as a UI framework):

- The popup html which calls the backend for the latest search information this time including the sustainability score and and option to redirect to the options page.

- The options page which includes a sidebar with 3 views. Dashboard, Searches and Profile.

- Services folder where the services interacting with the backend are located. ( an implementation with RTK Queries and a Redux store was also possible but services are more flexible to work with when interacting with non React components. ) A third service with the open API https://api.waqi.info/ was implemented to draw weekly air quality data for the destinations.

- Shared components, globals css etc

To run:

```
npm install

npm run watch 

```

# Test coverage

Unit tests were written to cover the most critical part of the extension the data retrieval from the url in content js.

## Side branches

- Tailwind implementation
- Side notification within the browser when a page is loaded (when the chrome notifications are on you can also see one on the main branch)
