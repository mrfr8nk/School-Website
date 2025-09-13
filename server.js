const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Handle all the custom routes from your vercel.json/netlify.toml
const routes = [
  { path: '/academics', file: '/pages/academics.html' },
  { path: '/admissions', file: '/pages/admissions.html' },
  { path: '/news', file: '/pages/news.html' },
  { path: '/fees', file: '/pages/fees.html' },
  { path: '/schoolview', file: '/pages/environment.html' },
  { path: '/calendar', file: '/pages/calendar.html' },
  { path: '/about', file: '/pages/about.html' },
  { path: '/faculty', file: '/pages/faculty.html' },
  { path: '/ai', file: '/pages/ai.html' },
  { path: '/staff', file: '/pages/stuff.html' },
  { path: '/report', file: '/pages/reports.html' },
  { path: '/viewreports', file: '/pages/viewreports.html' },
  { path: '/contact', file: '/pages/contact.html' },
  { path: '/gallery', file: '/pages/gallery.html' },
  { path: '/apply', file: '/pages/student-application.html' },
  { path: '/adminapplication', file: '/pages/admin-application.html' },
  { path: '/reportcard', file: '/reportcard.html' },
  { path: '/setreportcard', file: '/pages/teacher-set-report.html' },
  { path: '/login', file: '/pages/student-login.html' },
  { path: '/signup', file: '/pages/student-signup.html' },
  { path: '/teacherslogin', file: '/admin/admin-login.html' },
  { path: '/admin', file: '/admin/admin.html' },
  { path: '/credits', file: '/admin/credits.html' },
  { path: '/teacherssignup', file: '/admin/admin-signup.html' },
  { path: '/teachersdashboard', file: '/admin/teachers-dashboard.html' },
  { path: '/dashboard', file: '/pages/student-dashboard.html' },
  { path: '/teacherusers', file: '/admin/teacher-users.html' },
  { path: '/studentusers', file: '/pages/student-users.html' }
];

// Set up all the routes
routes.forEach(route => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(__dirname, route.file));
  });
});

// Handle the PDF download redirect
app.get('/download-application', (req, res) => {
  res.redirect(302, 'https://github.com/mrfr8nk/sw-v2/raw/main/admin/stmarys_application_form.pdf');
});

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle 404 - serve 404.html for any unmatched routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access your app at: http://localhost:${PORT}`);
});