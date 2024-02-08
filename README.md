# NLW Node.js

This project was built from the [NLW Expert](https://www.rocketseat.com.br/) Node.js track. This application allows users to create and vote, real time on polls.

## Features

- Create polls: Easily create a custom poll with multiple options if needed.
- Vote: User can vote on existing polls
- Real-time: It updates in real-time as new votes come in.

## Technologies Used

- [Node.js](https://nodejs.org/en)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Hoppscotch](https://hoppscotch.io/)

## Installation

1. Clone this repository:

```
    git clone https://github.com/IgorDGomes/NLW14-Nodejs.git
```

2. Install dependencies:

```
    cd NLW14-Nodejs
    npm install
```

3. Set enviroment variables:

Create a '.env' file in the root directory and add the following:

```
    DATABASE_URL="postgresql://docker:docker@localhost:5432/polls?schema=public"
```

4. Run the application:

```
    npm run dev
```

5. Open Hoppscotch on the browser:

- Create POST:

Copy and paste this link as the URL: 

```
    http://localhost:3333/polls
```

And on the body, modify what's inside the ():

```
    {
    "title": "(Title of the poll)",
    "options": [(Your options)]
    }
```

- Create 2 GET requests:

- Get poll Request:

Copy and paste this link as the URL, modify what's inside the (): 

```
    http://localhost:3333/polls/(The ID of your poll)
```

- Vote on poll Request:

Copy and paste this link as the URL, modify what's inside the (): 

```
    http://localhost:3333/polls/(The ID of your poll)/votes
```

And on the body:

```
    {
    "pollOptionId": "(Your pollOptionId)"
    }
```

- On Real-time tab:

Copy, paste and modify what's inside the ():

```
    ws://localhost:3333/polls/(The ID of your poll)/results
```