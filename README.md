<img src="https://github.com/smack-apps/smack-chat/blob/main/client/src/assets/logo.png" width=250px align=right alt="Smack Chat"/>

# Smack Chat

![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

This project uses `socket.io` with `React` to create a chat application. You can enter a room number and a username and this allows you to chat to anyone else who is in the same room.

#

### How We Work

When preparing to undertake a project, Diana researches the technologies involved and produces helpful documentation to enable both her and Zan to understand the full technological picture. Typically, Zan acts as the driver for any pair-programming, while Diana navigates. Approving pull requests is done together after they have discussed the results of each change a particular merge will bring.

### ✔️ 1. CLONE THE REPO
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

Terminal Commands:
```
$ git clone https://github.com/smack-apps/smack-chat.git
$ cd smack-chat
$ code .
```

### ✔️ 2. INSTALL DEPENDENCIES AND RUN THE PROJECT
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

In order to run this project locally you will need to install dependencies in both the backend folder `server`, and in the frontend folder `client`. Similarly, you will need to run the backend and frontend separately for the app to work. You can do this as follows:

```
$ cd server
$ npm install
$ npm start
```

Once the dependencies are installed and the server is running, navigate to the other folder and run the same commands:
```
$ cd ../client
$ npm install
$ npm start
```

Your default browser will open to the chat page.

### ✔️ 3. USAGE
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white) ![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white) ![Brave](https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white) ![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white) ![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)

You can open additional browser tabs or windows to the same chat page and send messages between them. Each instance creates its own connection to the server. This connection is ended if you refresh the page or navigate elsewhere. 
