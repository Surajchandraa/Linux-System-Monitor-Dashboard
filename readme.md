# Linux System Monitor Dashboard
This project provides a web-based dashboard to visualize various Linux system metrics via an API endpoint.

## Features
- ***System Information**: Real-time data on RAM, battery, disk usage, and system uptime.
- ***API Endpoint**: Access system information through a RESTful API.

## Prerequisites
Ensure your Linux system meets the following requirements:

- ***Node.js**: Ensure you have Node.js installed.
- ***Express.js**: Required for running the web server.
- ***Cors package**: Used to handle cross-origin requests.

## Installation
- Clone this repository.
- Install dependencies using `npm install`.
- Run the application with `npm start`.

## Usage

***Starting the Application***
- Execute npm start to initiate the server. Access the dashboard by navigating to http://localhost:5000/ in your web browser.

***API Endpoint***
- The endpoint /resource delivers JSON data containing various system metrics:

- ***RAM Information:** Free and total memory.
- **Battery Information:** Percentage, time to full/empty, status, health, power consumption, technology, and cycle count.
- **System Uptime:** Duration the system has been running.
- **Disk Usage:** Percentage and absolute usage of the root directory.

Send a GET request to /resource to access this information programmatically.


## Notes and Warnings
- **Compatibility:** This application is optimized for Linux-based systems. Ensure you're using a   compatible Linux distribution for accurate system information.
- **Security Considerations:** Exposing system information via an API may pose security risks. Ensure the server is secure and properly configured, especially if deployed in production.
- **Dependency Versions:** Keep Node.js and other dependencies updated for compatibility and security reasons.

## Contributing
- Contributions are welcome! Feel free to open issues or submit pull requests.

## Note
- This project is currently under active development. Expect changes and improvements as we continue to work on it.




## Screenshots
![Dashboard Overview](/pictures/Screenshot%20from%202024-01-07%2000-23-41.png)
![Dashboard Overview](/pictures/Screenshot%20from%202024-01-07%2000-24-30.png)
![Dashboard Overview](/pictures/Screenshot%20from%202024-01-07%2000-24-43.png)
![Dashboard Overview](/pictures/Screenshot%20from%202024-01-07%2000-24-51.png)