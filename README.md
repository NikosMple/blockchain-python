# Blockchain & Cryptocurrency Project

A full-stack project that demonstrates how to build a blockchain and cryptocurrency system using Python for the backend and JavaScript/React for the frontend. This project is an attempt to create a functional blockchain and cryptocurrency system, showcasing the core principles of blockchain technology

## 🛠 Technologies Used

### Backend (Blockchain & Cryptocurrency System)
- **Python** – Core logic and data structures.
- **Flask** – API for blockchain interaction.
- **Pub/Sub** – Network communication between blockchain nodes.
- **Pytest** – Unit testing the blockchain system.
- **RSA Cryptography** – Digital signatures and transactions.
- **Proof of Work (PoW)** – Mining system for block validation.

### Frontend (Blockchain & Crypto UI)
- **JavaScript (ES6+)** – Handles client-side logic.
- **React.js & React Hooks** – Frontend framework for UI components.
- **CORS Handling** – Enables cross-origin requests.

## 🔗 Architecture Overview

This project follows a client-server architecture, where multiple blockchain nodes communicate through API requests and WebSockets.

### Blockchain Network
- Each node maintains a copy of the blockchain.
- Nodes communicate using HTTP APIs and WebSockets.
- Transactions are signed using cryptographic key pairs and broadcasted across the network.
- Blocks are validated using Proof of Work (PoW) before being added to the blockchain.

### Frontend Interaction
- Users can send transactions using a React-based UI.
- The UI displays the blockchain, wallets, and transaction history.
- Transactions are submitted to a node, and the blockchain syncs across the network.

## 📜 Features Implemented
- ✅ **Blockchain Core** – Create and validate blocks with Proof of Work.
- ✅ **Cryptocurrency System** – Digital wallets, private/public keys, and signed transactions.
- ✅ **Blockchain Network** – Multiple peer nodes communicating through WebSockets.
- ✅ **Mining Mechanism** – Blocks are mined using computational work.
- ✅ **React.js Frontend** – A UI for interacting with the blockchain and cryptocurrency.
- ✅ **Transaction Handling** – Users can create transactions and validate balances.

## 🛠 Setup & Installation

### 1️⃣ Backend Setup

**Activate Virtual Environment**
```sh
source .env\Scripts\activate  # Windows
```

**Install Dependencies**
```sh
pip install -r requirements.txt
```

**Run Tests**
```sh
python -m pytest backend/tests
```

**Run the Blockchain API**
```sh
python -m backend.app
```

**Run a Peer Node**
```sh
export PEER=True && python -m backend.app 
```

**Seed the Blockchain with Sample Data**
```sh
export SEED_DATA=True && python -m backend.app
```

### 1️⃣ Frontend Setup

**Install Dependencies & Start React App**
```sh
cd frontend
npm install
npm start
```

### 📌 Future Improvements
🔹 Implement a Proof of Stake (PoS) mechanism instead of PoW.
🔹 Introduce a decentralized consensus protocol.
🔹 Enhance the UI/UX with real-time blockchain updates.
🔹 Improve transaction fee handling.

### 📄 Conclusion
```
This project was developed as part of a blockchain development course using Python and JavaScript.
It covers key concepts such as block validation, cryptographic transactions, and decentralized networking.
Through hands-on implementation, I gained a solid understanding of blockchain principles, cryptographic techniques,
and full-stack development, which has prepared me to build and expand decentralized systems.
```
