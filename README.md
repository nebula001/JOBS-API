# JOBS-API

A RESTful API for job listings and management, allowing companies to post job openings and job seekers to search and apply for positions.

## Live Demo

**Deployed Website:** [Jobs API](https://jobs-api-url.com)

Check out the live application to see the API in action!

## Features

- ✅ User Registration & Login with JWT
- ✅ Protected Routes for Job Operations
- ✅ Create / Read / Update / Delete (CRUD) Jobs
- ✅ Secure API (rate-limiting, sanitization, CORS, etc.)
- ✅ Swagger UI Documentation
- ✅ Error Handling Middleware

## Tech Stack

- Node.js and Express.js for the API framework
- MongoDB for database storage
- JWT for authentication
- Mongoose ODM for database modeling
- Error handling middleware
- Input validation and sanitization

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local instance or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/nebula001/JOBS-API.git
   cd JOBS-API
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_LIFETIME=1d
   ```

4. Start the server:

   ```
   npm start
   ```

   For development with automatic restarts:

   ```
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login user

### Jobs

- `POST /api/v1/jobs` - Create a new job listing
- `GET /api/v1/jobs` - Get all jobs
- `GET /api/v1/jobs/:id` - Get a specific job
- `PATCH /api/v1/jobs/:id` - Update a job
- `DELETE /api/v1/jobs/:id` - Delete a job

## Error Handling

The API uses a centralized error handling mechanism. All errors are formatted consistently and include:

- Status code
- Error message
- Error details (in development)

## Security Features

- Password hashing
- JWT token expiration
- XSS protection
- Rate limiting
- Data validation and sanitization

## Documentation

API documentation is available at `/api-docs` when the server is running.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all the contributors who have helped with this project
- Special thanks to the Node.js and Express.js communities for their excellent documentation
