 # 🎉 EventFest – College Events Website

A responsive and interactive college events website designed for **Sanjivani College of Engineering**. The website provides students with information about upcoming college events and allows them to register online through a simple and user-friendly interface.

---

## 📌 Project Overview

**EventFest** is a college event management website developed to provide a centralized platform for students to explore and register for various college activities.

The website includes event information, registration functionality, college information, and contact details, all presented through a responsive and modern interface.

---

## ❓ Problem Statement

College events are often communicated through multiple channels such as notice boards, social media, and messaging groups. This can make it difficult for students to find complete event information and register conveniently.

The objective of this project is to develop a centralized college event website where students can:

* View available college events
* Learn about the event details
* Register for events online
* Access college and event-related information
* Find contact information easily

---

## 💡 Project Description

**EventFest** is a responsive front-end web application created for managing and promoting college events.

The website provides dedicated pages for:

* 🏠 Home
* 🎪 Events
* 📝 Registration
* ℹ️ About
* 📞 Contact Details

Students can fill out the registration form by providing their name, email, phone number, college ID, year of study, branch, and selected event.

Registration data is stored locally in the browser using **localStorage**, making the project suitable as a front-end demonstration without requiring a backend database.

---

## 🛠️ Technologies Used

| Technology          | Purpose                               |
| ------------------- | ------------------------------------- |
| **HTML5**           | Website structure and content         |
| **CSS3**            | Custom styling and responsive design  |
| **JavaScript**      | Form validation and functionality     |
| **Bootstrap 5.3**   | Responsive UI components              |
| **Bootstrap Icons** | Interface icons                       |
| **LocalStorage**    | Client-side registration data storage |
| **VS Code**         | Development environment               |

---

## ✨ Features

### 🏠 Home Page

* Attractive event landing page
* Hero section with event banner
* Navigation to different sections
* Responsive design

### 🎪 Events Page

* Displays available college events
* Event-focused cards and information
* Easy navigation to registration

### 📝 Event Registration

Students can register by entering:

* Full Name
* Email Address
* Phone Number
* College ID
* Year of Study
* Branch
* Event Selection

The form includes client-side validation to ensure that required information is entered correctly.

### 💾 Local Registration Storage

Registration information is stored in the browser using JavaScript's `localStorage`.

### ℹ️ About Page

Provides information about **EventFest** and its purpose.

### 📞 Contact Page

Provides basic contact information for event-related queries.

### 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

### 🎨 Modern UI

* Bootstrap-based layout
* Gradient backgrounds
* Cards with shadows
* Responsive navigation bar
* Event imagery
* Clean typography

---

## 📂 Project Structure

```text
College-events-website-main/
│
├── index.html              # Home page
├── events.html             # Events page
├── register.html           # Event registration page
├── about.html              # About EventFest page
├── contact.html            # Contact page
│
├── css/
│   └── style.css           # Custom CSS styles
│
├── js/
│   └── script.js           # JavaScript functionality
│
├── images/
│   ├── banner.jpg          # Website banner
│   ├── college.jpg         # College image
│   ├── event1.jpg          # Event image
│   ├── event2.jpg          # Event image
│   └── event3.jpg          # Event image
│
└── .vscode/
    └── launch.json         # VS Code configuration
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/College-events-website.git
```

### 2. Open the Project

Navigate to the project directory:

```bash
cd College-events-website
```

### 3. Open in VS Code

```bash
code .
```

### 4. Run the Website

Since this is a front-end project, no server or database installation is required.

You can simply open:

```text
index.html
```

in your web browser.

### Recommended Method

Install the **Live Server** extension in VS Code and right-click `index.html` → **Open with Live Server**.

---

## 🚀 How to Use

1. Open the website.
2. Navigate to the **Events** section.
3. Explore the available college events.
4. Go to **Registration**.
5. Enter your personal and academic details.
6. Select an event.
7. Submit the registration form.
8. The registration information is stored in the browser's localStorage.
9. A confirmation message is displayed after successful registration.

---

## 🧪 Validation

The registration form performs client-side validation for:

* Required fields
* Valid email address
* 10-digit phone number
* College ID
* Year of study
* Branch
* Event selection

Invalid forms are prevented from being submitted until the required information is correctly entered.

---

## 🔮 Future Enhancements

The project can be further improved by adding:

* 🔐 Admin login and dashboard
* 🗄️ Backend database integration
* 📊 Registration management system
* 📧 Email confirmation after registration
* 🔍 Event search and filtering
* 👤 Student login and profiles
* 📱 Progressive Web App (PWA) support
* 📈 Event registration analytics
* ☁️ Cloud-based data storage

---

## 📚 Learning Outcomes

Through this project, we gained practical experience in:

* Front-end web development
* HTML page structuring
* CSS styling and responsive design
* Bootstrap framework
* JavaScript DOM manipulation
* Form validation
* Browser localStorage
* Multi-page website development
* Git and GitHub repository management

---

