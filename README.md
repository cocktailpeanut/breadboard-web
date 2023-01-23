# Breadboard Web

> Run breadboard on a remote server

# Install

To install the server:

```
git clone https://github.com/cocktailpeanut/breadboard-web && cd breadboard-web && npm install
```

# Usage

## 1. Start the server

To start the server, run:

```
npm start
```

Now open http://localhost:4200 and you will see breadboard running.

## 2. Connect folders

All the configuration is stored in [breadboard.yaml](breadboard.yaml).

By default, it suggests two recommended folders, but you can add as many folders as you want.

After updating the folders list, restart the server. You will now see the updated "recommended" list.

Click "connect" to connect the folders to breadboard.

## 3. Authentication

By default, everything is publicly accessible.

When you're using Breadboard locally as a desktop app, this is not a problem since nobody can access your breadboard server. But when you're running breadboard on a public web server, anyone who knows the URL can access your breadboard.

To password-protect the access, uncomment the `accounts` attributes in [breadboard.yaml](breadboard.yaml) and set your own custom username/password pairs.

You can add as many accounts as you want.

Once you finish updating the [breadboard.yaml](breadboard.yaml) file, restart the server. It will ask you to enter the username and password.
