# B43_WEB_179_WebProject174
Tenant-Landlord Communication Platform

Introduction
This platform facilitates efficient interaction between tenants and landlords, allowing tenants to report issues, track maintenance requests, and communicate seamlessly with landlords. It simplifies property management, improves transparency, and enhances communication regarding maintenance requests and rent payments.

Project Type
Fullstack
The backend focuses on handling communication, maintenance request tracking, and payment monitoring, while the frontend provides an intuitive interface for both tenants and landlords.

Deployed App
Frontend: https://gleaming-toffee-f031ab.netlify.app/


Directory Structure
my-app/
├─ backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ ...
├─ frontend/
│  ├─ assets/
│  ├─ components/
│  ├─ ...

Video Walkthrough of the Project
https://youtu.be/vSSw_kxuUHU

Video Walkthrough of the Codebase
(https://youtu.be/1BaMAN8oWeA)

Features
- Maintenance Request System: Submit and track maintenance requests with details and categories.
- Messaging System: Real-time tenant-landlord messaging with push notifications.
- Rent Payment Tracker: Track rent payments, payment history, and send payment reminders.
- Issue Tracking Dashboard: View and filter maintenance requests with progress tracking.
- Mobile-Optimized: Responsive design with a mobile-first approach.

Design Decisions or Assumptions
- Tenants and landlords are registered users.
- Real-time messaging system is handled via WebSockets.
- Maintenance requests are categorized by type and urgency.
- AI enhancements for assistance and voice command are under development.

Installation & Getting Started
1. Clone the repository:
    git clone https://github.com/vishal7it/B43_WEB_179_WebProject174.git
2. Navigate to the project directory:
    cd my-app
3. Install dependencies:
    npm install
4. Start the backend:
    cd backend
    npm start
5. Start the frontend:
    cd frontend
    npm start

Usage
To submit a maintenance request:
# Example endpoint:
POST /api/maintenance/request
{
  "category": "plumbing",
  "urgency": "high",
  "description": "Leaky faucet in the kitchen."
}

Credentials
- Tenant Login: tenant@example.com / password123
- Landlord Login: landlord@example.com / password123

APIs Used
- Google Maps API: For property location mapping.
- Twilio API: For SMS notifications.

API Endpoints
- GET /api/maintenance: Retrieve all maintenance requests.
- POST /api/maintenance/request: Submit a new maintenance request.
- GET /api/rent/payment: View rent payment status and history.
- POST /api/message/send: Send a message in the tenant-landlord chat.

Technology Stack
- Backend: Node.js, Express.js, MongoDB
- Frontend: HTML, CSS, JavaScript
- Database: MongoDB
