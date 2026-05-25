# Form Validation App

A production-quality client-side form validation app built with **vanilla HTML, CSS, and JavaScript**

<img width="1000" height="800" alt="form" src="https://github.com/user-attachments/assets/af4cb480-cae8-496e-9f8e-c3645ef67abe" />
<img width="1000" height="800" alt="formError" src="https://github.com/user-attachments/assets/2cdb4b24-bba1-49f1-9fb8-d940f4cf5a96" />

## Overview
 
This project demonstrates real-world form validation techniques without relying on any external validation library. Every check is hand-written, from regex patterns to file type verification, with a focus on clean UX feedback and accessible markup.

---
 
## Features
 
### Validation Logic
- **Real-time feedback** — fields validate on blur; errors clear as the user corrects them
- **Regex-powered** — username, phone, email, and password validated against strict patterns
- **Password strength enforcement** — requires lowercase, uppercase, digit, and special character
- **Password match check** — confirm password verified against original in real time
- **Age gate** — date of birth validated; users must be 18 or older
- **File validation** — checks file presence, type (`jpg`, `jpeg`, `png`), and size (max 2MB)
- **All-or-nothing submit** — form only submits when every field passes

### UX & Accessibility
- Visual error state (red border) and success state (green border) per field
- Descriptive, specific error messages — no generic "invalid input"
- Show/Hide password toggle
- Semantic HTML with proper `<label>` associations

### Styling
- Responsive layout using `clamp()` and flexbox — no media queries needed
- Google Font (Nunito) for a clean, modern typographic feel
- Smooth focus transitions with box-shadow glow
- Mobile-friendly

---

## Validated Fields
 
| Field | Rules |
|---|---|
| Full Name | Required |
| Username | 3–18 chars, letters/digits/underscore only |
| Gender | Selection required |
| Phone Number | Valid international format |
| Date of Birth | Valid date, user must be 18+ |
| Email | RFC-compliant regex pattern |
| Password | 8–32 chars, mixed case, digit, special char |
| Confirm Password | Must match password |
| Account Type | One radio option required |
| Terms Agreement | Must be checked |
| Profile Picture | Required, PNG/JPG only, max 2MB |
 
---


## How to Run

1. Clone the repository
2. Open the project folder
3. Run `index.html` in your browser

## Author

**Abdullah Ghazi** <br>
GitHub: https://github.com/Abdullah-Ghazi0 <br>
LinkedIn: https://www.linkedin.com/in/abdullah-ghazi-swe/
