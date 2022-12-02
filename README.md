# Getting Started

## **Prerequisites**

`Dotenv`

To get the React frontend up and running, you'll need to create a **.env** file in you root project directory (on the same level as .gitignore). It's the same file we've created in the backend (with the database config). For the frontend, we only need to define the API_URL indicating where the backend is running.

```
API_URL=http://localhost:5000
```

## **Starting the frontend**

Open a bash terminal inside the folder that contains "app.py" and execute the following commands:

```
> python -m pip install flash (if not already installed)
> python -m pip install -U flask-cors (if not already installed)
> export FLASK_APP=app.py (or when using PowerShell: set FLASK_APP=app.py)
> export FLASK_ENV=development (or when using PowerShell: set FLASK_ENV=development)
> flask run
```

You can now use http://127.0.0.1:5000/players to access the backend

## **Starting the frontend**

First you will need to start a backend Express server. Open your backend project in a seperate vscode window and make sure it's running (on same port you defined in API_URL in .env).

Run the following commands in a terminal (project root folder) to install all required node packages en get the server up and running:

```
> npm install

> npm start
```

This will start a React frontend running on http://localhost:8001.

