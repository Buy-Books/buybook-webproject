# BuyBook

## Installation

To run BuyBook.lk locally on your machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Buy-Books/buybook-webproject.git
```

### 2. Install Dependencies

#### Client (Frontend)

```bash
cd buybook-webproject/client
npm install
```

#### Server (Backend)

```bash
cd buybook-webproject/server
npm install
```

### 3. Configure Environment Variables

#### Server

Create a `.env` file in the `server` directory and add the following environment variables:

```plaintext
PORT=3001
MONGODB_URI=mongodb://localhost:27017/buybook
SECRET_KEY=your_secret_key
```

Replace `your_secret_key` with your preferred secret key for JWT token generation.

### 4. Start the Development Servers

#### Client (Frontend)

```bash
cd buybook-webproject/client
npm start
```

The client will run at `http://localhost:3000`.

#### Server (Backend)

```bash
cd buybook-webproject/server
npm start
```

The server will run at `http://localhost:3001`.

### 5. Open BuyBook.lk in Your Browser

Visit `http://localhost:3000` in your web browser to access BuyBook.lk and start exploring!
