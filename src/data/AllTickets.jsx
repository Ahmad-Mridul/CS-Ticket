const tickets = () => {
    const data = [
        {
            "id": 1,
            "title": "Login page validation error",
            "description": "Users are able to submit the login form without entering an email address.",
            "customer": "Acme Corp",
            "priority": "High",
            "status": "Open",
            "createdAt": "2026-03-01T09:15:00Z"
        },
        {
            "id": 2,
            "title": "Dashboard loading slowly",
            "description": "Dashboard takes more than 10 seconds to load after login.",
            "customer": "TechNova Ltd",
            "priority": "Medium",
            "status": "In-Progress",
            "createdAt": "2026-03-01T10:30:00Z"
        },
        {
            "id": 3,
            "title": "Password reset email not sent",
            "description": "Customers are not receiving password reset emails.",
            "customer": "Bright Solutions",
            "priority": "High",
            "status": "Open",
            "createdAt": "2026-03-01T11:45:00Z"
        },
        {
            "id": 4,
            "title": "UI alignment issue on mobile",
            "description": "Buttons overlap on smaller screen devices.",
            "customer": "Skyline Inc",
            "priority": "Low",
            "status": "In-Progress",
            "createdAt": "2026-03-01T13:00:00Z"
        },
        {
            "id": 5,
            "title": "API returning 500 error",
            "description": "GET /api/orders endpoint throws internal server error.",
            "customer": "Global Mart",
            "priority": "Critical",
            "status": "In-Progress",
            "createdAt": "2026-03-01T14:20:00Z"
        },
        {
            "id": 6,
            "title": "Profile picture upload failed",
            "description": "Users cannot upload profile images larger than 1MB.",
            "customer": "NextGen IT",
            "priority": "Medium",
            "status": "Open",
            "createdAt": "2026-03-01T15:10:00Z"
        },
        {
            "id": 7,
            "title": "Notification emails delayed",
            "description": "System notification emails are delayed by 30 minutes.",
            "customer": "Urban Retail",
            "priority": "Medium",
            "status": "In-Progress",
            "createdAt": "2026-03-01T16:25:00Z"
        },
        {
            "id": 8,
            "title": "Search functionality not filtering",
            "description": "Search results are not filtered based on keyword input.",
            "customer": "FinEdge",
            "priority": "High",
            "status": "Open",
            "createdAt": "2026-03-02T08:40:00Z"
        },
        {
            "id": 9,
            "title": "Export to CSV not working",
            "description": "Export button does not generate CSV file.",
            "customer": "EduSmart",
            "priority": "Low",
            "status": "In-Progress",
            "createdAt": "2026-03-02T09:55:00Z"
        },
        {
            "id": 10,
            "title": "Incorrect total calculation",
            "description": "Invoice total is calculated incorrectly when discount is applied.",
            "customer": "MarketHub",
            "priority": "High",
            "status": "In-Progress",
            "createdAt": "2026-03-02T11:05:00Z"
        },
        {
            "id": 11,
            "title": "Session timeout too short",
            "description": "Users are logged out after 5 minutes of inactivity.",
            "customer": "Alpha Systems",
            "priority": "Medium",
            "status": "Open",
            "createdAt": "2026-03-02T12:20:00Z"
        },
        {
            "id": 12,
            "title": "Broken link in footer",
            "description": "Privacy policy link in footer leads to 404 page.",
            "customer": "BlueWave",
            "priority": "Low",
            "status": "In-Progress",
            "createdAt": "2026-03-02T13:35:00Z"
        },
        {
            "id": 13,
            "title": "Database connection timeout",
            "description": "Application loses database connection during peak hours.",
            "customer": "DataCore",
            "priority": "Critical",
            "status": "In-Progress",
            "createdAt": "2026-03-02T14:50:00Z"
        },
        {
            "id": 14,
            "title": "Role-based access issue",
            "description": "Admin users cannot access the settings page.",
            "customer": "SecureNet",
            "priority": "High",
            "status": "Open",
            "createdAt": "2026-03-02T16:10:00Z"
        },
        {
            "id": 15,
            "title": "Page title not updating",
            "description": "Browser tab title does not update on route change.",
            "customer": "WebFusion",
            "priority": "Low",
            "status": "In-Progress",
            "createdAt": "2026-03-02T17:25:00Z"
        }
    ]
    return data;
};

export default tickets;