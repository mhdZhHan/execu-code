# Execu-Code
Welcome to the Execu-Code repository! Execu-Code is an online code compiler built with Node.js, designed to compile and run C++ and Python code. 
In the future, we plan to include support for more programming languages.

## Installation
To install Execu-Code and its dependencies, follow these steps:

### 1. Clone the repository:

```shell
git clone https://github.com/mohammedshajahan7/execu-code.git
```

### 2. Navigate to the project directory:

```shell
cd execu-code
```

### 3. Install the required dependencies:

```shell
npm install
```

### 4. Install the development dependencies (optional):

```shell
npm install --save-dev nodemon
```

# Running the Application

To run the Execu-Code application, you have two options:

### 1. Start the application in production mode:

```shell
npm start
```

### 2. Start the application in development mode with automatic server restart (using nodemon):

```shell
npm run dev
```
The application will be running at http://localhost:9000.

## Dependencies

Execu-Code relies on the following dependencies:

- bull: A Redis-based queue library for Node.js.
- cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.
- express: Fast, unopinionated, minimalist web framework for Node.js.
- mongoose: MongoDB object modeling tool for Node.js.
- uuid: Simple and efficient universally unique identifier (UUID) generator.

## Development Dependencies

The following development dependency is used:

- nodemon: Utility that automatically restarts the server during development.

## Configuration

The package.json file contains the project configuration:

```json
"projectConfig": {
  "serverIp": "localhost",
  "serverPort": 9000,
  "mongoConnectionUrl": "mongodb://127.0.0.1:27017/"
}
```

- `serverIp`: The IP address of the server. By default, it is set to "localhost".
- `serverPort`: The port on which the server will be running. By default, it is set to 9000.
- `mongoConnectionUrl`: The URL for connecting to MongoDB. By default, it is set to "mongodb://127.0.0.1:27017/".

Please ensure that you have MongoDB running locally and update the configuration if necessary.

Thank you for choosing Execu-Code! If you have any questions or need assistance, feel free to reach out. Happy coding!
