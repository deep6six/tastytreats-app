# TastyTreat - Restaurant Management System

## Overview

TastyTreat is a web application designed to streamline restaurant operations, including customer management, order processing, and employee management. This system provides an efficient way for users to interact with the restaurant, whether they are customers placing orders, employees managing their schedules, or administrators overseeing operations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- User Registration and Login
- Menu Display with Dynamic Updates
- Shopping Cart Functionality
- Secure Payment Processing
- Customer Feedback System
- Employee Management Tools for Scheduling and Payroll

## Technologies Used

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Spring Boot, Java
- **Database**: MongoDB
- **Tools**: Git, Maven, Postman

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tastytreat.git
   ```

## Usage

- User Registration and Login: Saftely store user credentials, track order history and give a personalized user account.
- Menu Display and Dynamic Updates: Use of a dynamic interface to update items based on avilability and special offers.
- Shopping Cart Functionality: Allow customers to modify the addition or removal of items in their shopping cart, giving a smoother experience.
- Secure Payment Processing: Reliable payment gateways to handle varied payment methods, ensuring data security.
- Customer FeedBack System: Lets customers leave reviews that provides valuable insights for the team.
- Employee Managment Tools for Scheduling/Payroll: Create and manage employee schedules, track work hours, and deals with employee payroll.
- Order Confirmation and CheckoutFeatures: Display order summaries and confirming details to reduce customer errors.

### Running the Application

After completing the installation steps, you can start the application by running the frontend and backend servers:

```bash
# Frontend
cd frontend
npm start

# Backend
cd backend
mvn spring-boot:run
```

## API Documentation

The backend API provides endpoints for the following features:

- **User Management**:

  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Log in as an existing user

- **Menu Management**:

  - `GET /api/menu` - Retrieve a list of available menu items
  - `POST /api/menu` - Add a new menu item (Admin only)

- **Order Management**:

  - `POST /api/orders` - Place an order
  - `GET /api/orders/:id` - Retrieve order details

- **Employee Management**:
  - `GET /api/employees` - Retrieve employee information (Admin only)

For a full list of available endpoints, view the API documentation in `docs/api-docs.md` or open the API collection in Postman.

---

### Contributing

Outline guidelines for contributing to the project.

```markdown
## Contributing

We welcome contributions to TastyTreat! To contribute:

1. **Fork** the repository.
2. **Clone** your fork to your local environment.
3. **Create a branch** for your feature or bug fix:
```

```bash
   git checkout -b feature/your-feature-name
```

## Contact

If you have any questions, suggestions, or feedback, feel free to reach out!

- **Randy Kim**
  - Email: [randykim2@csus.edu](mailto:randykim2@csus.edu)
  - GitHub: [deep6six](https://github.com/deep6six)
- **Tim Yang**
  - Email: [timyang@csus.edu](mailto:timyang@csus.edu)
  - GitHub: [Tim Yang](https://github.com/timyang-bait)
    **Gurinderpreet Singh**
  - Email: [gsingh31@csus.edu](mailto:gsingh31@csus.edu)
  - GitHub: [GurinderpreetSingh](https://github.com/GurinderpreetSingh)

Feel free to open an issue on the repository for bugs or feature requests.
