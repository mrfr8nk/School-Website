
# St. Mary's High School Website - User Documentation

## Table of Contents
1. [System Overview](#system-overview)
2. [Getting Started](#getting-started)
3. [Student Portal](#student-portal)
4. [Teacher Portal](#teacher-portal)
5. [Admin Portal](#admin-portal)
6. [Public Website Features](#public-website-features)
7. [Authentication System](#authentication-system)
8. [Report & Application Systems](#report--application-systems)
9. [Troubleshooting](#troubleshooting)
10. [Technical Support](#technical-support)

---

## System Overview

The St. Mary's High School website is a comprehensive school management system that serves multiple user types:

- **Public Visitors**: Access general school information
- **Students**: Personal dashboards, report cards, applications
- **Teachers**: Class management, grade entry, student reports
- **Administrators**: Full system management and oversight

### Key Features
- Multi-user authentication system
- Real-time data management with Firebase
- PDF generation for reports and documents
- Responsive design for all devices
- Dark/Light theme support
- AI-powered school assistant

---

## Getting Started

### System Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- JavaScript enabled

### First-Time Setup
1. **Visit the Website**: Navigate to the school's website
2. **Choose Your Portal**: Select from Student, Teacher, or Admin login
3. **Create Account**: Register using the appropriate signup form
4. **Email Verification**: Check your email for verification (if required)
5. **Complete Profile**: Fill in required profile information

---

## Student Portal

### Accessing the Student Portal
- **Login URL**: `/login`
- **Signup URL**: `/signup`
- **Dashboard URL**: `/dashboard`

### Student Features

#### 1. Student Dashboard
- **Personal Information**: View and update profile
- **Academic Overview**: Current grades and performance
- **Announcements**: School news and updates
- **Quick Actions**: Access frequently used features

#### 2. Report Cards
- **Access**: Click "My Report Card" from dashboard
- **Features**:
  - View current grades by subject
  - Download PDF reports
  - Track academic progress
  - View attendance records

#### 3. Applications
- **Student Applications**: Submit various school applications
- **Form Fields**:
  - Personal information
  - Academic background
  - Supporting documents upload
  - Parent/guardian information

#### 4. Incident Reporting
- **Access**: `/report`
- **Features**:
  - Anonymous reporting option
  - Incident description
  - Evidence upload (photos/documents)
  - Status tracking

#### 5. School Information
- **News & Events**: Latest school updates
- **Academic Calendar**: Important dates
- **Faculty Directory**: Teacher information
- **School Policies**: Rules and regulations

### Student Account Management
1. **Profile Updates**: Change personal information
2. **Password Reset**: Use forgot password feature
3. **Theme Settings**: Switch between light/dark modes
4. **Logout**: Secure session termination

---

## Teacher Portal

### Accessing the Teacher Portal
- **Login URL**: `/teacherslogin`
- **Signup URL**: `/teacherssignup`
- **Dashboard URL**: `/teachersdashboard`

### Teacher Features

#### 1. Teacher Dashboard
- **Class Overview**: Assigned classes and students
- **Quick Stats**: Student counts, performance metrics
- **Recent Activity**: Latest grade entries and reports
- **Administrative Tools**: Access to teacher functions

#### 2. Grade Management (`/setreportcard`)
- **Student Selection**: Choose from assigned classes
- **Grade Entry**: Input marks by subject
- **Grade Scales**: 
  - O-Level: A (70-100), B (60-69), C (50-59), D (40-49), U (0-39)
  - A-Level: A (76-98), B (67-74), C (55-64), D (45-54), F (35-44), O (0-34)
  - ZJC: A (75-100), B (65-74), C (50-64), D (40-49), U (0-39)
- **Comments**: Add teacher remarks
- **Report Generation**: Create PDF report cards

#### 3. Class Management (`/myclass`)
- **Student Lists**: View all assigned students
- **Attendance Tracking**: Mark present/absent
- **Performance Analytics**: Class-wide statistics
- **Individual Reports**: Student-specific information

#### 4. Report Card Generation
- **Process**:
  1. Select student from class list
  2. Enter grades for all subjects
  3. Add comments and remarks
  4. Generate PDF report
  5. Download or print

#### 5. Student Applications Review
- **Access**: Review student-submitted applications
- **Actions**: Approve, reject, or request modifications
- **Comments**: Add feedback for applications

### Teacher Account Features
- **Profile Management**: Update teaching information
- **Class Assignments**: View assigned classes
- **Password Security**: Change login credentials
- **System Preferences**: Configure dashboard settings

---

## Admin Portal

### Accessing the Admin Portal
- **Login URL**: `/teacherslogin` (with admin credentials)
- **Admin Panel**: `/admin`
- **User Management**: `/teacherusers`, `/studentusers`

### Admin Features

#### 1. User Management
- **Teacher Accounts** (`/teacherusers`):
  - Create new teacher accounts
  - Assign classes to teachers
  - Manage teacher permissions
  - View teacher activity logs

- **Student Accounts** (`/studentusers`):
  - Bulk student registration
  - Class assignment management
  - Student data import/export
  - Profile verification

#### 2. System Configuration
- **Grading Scales**: Configure grade boundaries
- **Academic Terms**: Set current term/semester
- **School Information**: Update school details
- **System Settings**: Global configuration options

#### 3. Application Management (`/adminapplication`)
- **Student Applications**: Review and process
- **Application Status**: Track application workflow
- **Document Management**: Handle supporting documents
- **Communication**: Send updates to applicants

#### 4. Reports Management (`/viewreports`)
- **Incident Reports**: Review student reports
- **Status Updates**: Mark reports as resolved
- **Analytics**: Report trends and statistics
- **Response Management**: Administrative actions

#### 5. Academic Management
- **Grade Settings**: Configure grading systems
- **Class Structure**: Manage forms and streams
- **Subject Management**: Add/remove subjects
- **Academic Calendar**: Set important dates

### Admin Tools
- **Data Export**: Generate system reports
- **Backup Management**: Data security measures
- **User Analytics**: System usage statistics
- **Security Settings**: Access control management

---

## Public Website Features

### Main Website (`/`)
- **School Information**: About, history, mission
- **Academic Programs**: Curriculum details
- **Admissions**: Requirements and processes
- **News & Events**: Latest updates
- **Contact Information**: How to reach the school

### Academic Sections
- **STEM Program** (`/stem`): Science, Technology, Engineering, Math
- **Arts & Humanities** (`/arts`): Creative and cultural studies
- **Commercial Sciences** (`/commercial`): Business and economics

### Information Pages
- **About Us** (`/about`): School history and achievements
- **Faculty** (`/staff`): Teaching staff directory
- **Campus** (`/schoolview`): Facilities and environment
- **Calendar** (`/calendar`): Academic calendar and events
- **News** (`/news`, `/allnews`): School news and updates
- **Contact** (`/contact`): Contact forms and information

### Interactive Features
- **AI Assistant** (`/ai`): School chatbot for queries
- **Virtual Tours**: Campus exploration
- **Application Forms**: Online application submission
- **Fee Information** (`/fees`): Payment details and schedules

---

## Authentication System

### Account Types
1. **Student Accounts**
   - Email/password authentication
   - Google Sign-in integration
   - Profile verification required

2. **Teacher Accounts**
   - Admin-created accounts
   - Email verification
   - Class assignment required

3. **Admin Accounts**
   - Super-admin privileges
   - Full system access
   - Security audit trails

### Security Features
- **Password Requirements**: Strong password enforcement
- **Two-Factor Authentication**: Optional 2FA setup
- **Session Management**: Automatic logout
- **Password Recovery**: Email-based reset system

### Account Recovery
1. **Forgot Password**: Use email reset option
2. **Account Lockout**: Contact admin for assistance
3. **Email Changes**: Verify new email addresses
4. **Profile Issues**: Submit support request

---

## Report & Application Systems

### Student Report System
- **Incident Reporting**: Anonymous or identified reports
- **Evidence Upload**: Photo and document support
- **Status Tracking**: Monitor report progress
- **Resolution Updates**: Receive feedback

### Application System
- **Online Forms**: Digital application submission
- **Document Upload**: Supporting materials
- **Status Tracking**: Application progress
- **Communication**: Updates and notifications

### Report Card System
- **Grade Entry**: Teacher input interface
- **PDF Generation**: Automated report creation
- **Grade Calculations**: Automatic GPA/average calculation
- **Print Options**: Various format options

---

## Troubleshooting

### Common Issues

#### Login Problems
- **Forgot Password**: Use password reset feature
- **Account Not Found**: Check email spelling
- **Access Denied**: Verify account type/permissions
- **Session Expired**: Login again

#### Technical Issues
- **Page Not Loading**: Clear browser cache
- **Features Not Working**: Enable JavaScript
- **PDF Not Downloading**: Check popup blockers
- **Upload Failures**: Check file size limits

#### Data Issues
- **Missing Grades**: Contact teacher/admin
- **Incorrect Information**: Submit correction request
- **Report Not Available**: Check term/date settings
- **Application Status**: Contact admissions

### Browser Compatibility
- **Recommended**: Chrome, Firefox, Safari, Edge (latest versions)
- **JavaScript**: Must be enabled
- **Cookies**: Allow for proper functionality
- **Pop-ups**: Allow for PDF downloads

### Mobile Usage
- **Responsive Design**: Works on all screen sizes
- **Touch Navigation**: Optimized for touch devices
- **Performance**: Optimized for mobile data
- **App-like Experience**: Progressive web app features

---

## Technical Support

### Getting Help

#### Student Support
- **Technical Issues**: Contact IT support
- **Academic Questions**: Contact teachers directly
- **Account Problems**: Contact school administration
- **General Inquiries**: Use school contact form

#### Teacher Support
- **System Training**: Request training sessions
- **Grade Entry Help**: Contact admin
- **Technical Problems**: IT support available
- **Feature Requests**: Submit through admin

#### Contact Information
- **Email**: admin@stmaryshigh.edu.zw
- **Phone**: School main number
- **Office Hours**: Monday-Friday, 8:00 AM - 4:00 PM
- **Emergency**: Principal's direct line

### System Maintenance
- **Scheduled Downtime**: Announced in advance
- **Updates**: Regular system improvements
- **Backup Schedule**: Daily data backups
- **Security Updates**: Applied automatically

### Data Privacy
- **GDPR Compliance**: Data protection standards
- **Student Privacy**: Protected academic records
- **Secure Storage**: Encrypted data storage
- **Access Logs**: Monitored system access

---

## Additional Resources

### Training Materials
- **Video Tutorials**: Available on school website
- **User Guides**: Downloadable PDF guides
- **Quick Start Cards**: Printed reference materials
- **Workshop Sessions**: Scheduled training events

### System Updates
- **Release Notes**: Feature updates and changes
- **Bug Fixes**: Issue resolution updates
- **New Features**: Enhancement announcements
- **Maintenance Schedule**: Planned system work

### Best Practices
- **Regular Backups**: Save important work
- **Strong Passwords**: Use secure credentials
- **Regular Updates**: Keep browsers updated
- **Safe Computing**: Follow security guidelines

---

**Document Version**: 1.0  
**Last Updated**: January 2025  
**Next Review**: June 2025

For the most current information and updates, please visit the school website or contact the IT department directly.
