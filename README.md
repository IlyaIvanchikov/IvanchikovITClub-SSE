# IvanchikovITClub-SSE

This project demonstrates the use of **Server-Sent Events (SSE)** to deliver real-time updates from a Node.js server to a web client.

## Project Overview

The server utilizes Express.js to serve static files and provides real-time updates through the `/events` endpoint using Server-Sent Events. The frontend client listens to this SSE stream and dynamically displays updates without polling.

## Project Structure

```
IvanchikovITClub-SSE/
├── public/
│   └── index.html
├── server.js
├── package.json
├── pnpm-lock.yaml
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- pnpm (alternatively npm or yarn)

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd IvanchikovITClub-SSE
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

### Running the Application

Start the Node.js server with:

```sh
pnpm start
```

Your application will now be running locally, typically at:

```
http://localhost:3000
```

## How It Works

- **Server-side**: The server maintains an open HTTP connection to the clients via the `/events` endpoint. It sends events as plain text over the HTTP connection using SSE.

- **Client-side**: The client connects to the `/events` endpoint and listens for real-time messages, displaying received updates immediately on the webpage.

## Advantages Demonstrated

- Efficient real-time communication without polling.
- Lightweight protocol suitable for resource-sensitive applications.
- Automatic reconnection handled by browsers, enhancing reliability.

## Useful Commands

| Command         | Description                           |
|-----------------|---------------------------------------|
| `pnpm install`  | Installs project dependencies         |
| `pnpm start`    | Starts the Node.js SSE server         |

## License

MIT License

---

Created by IvanchikovITClub.