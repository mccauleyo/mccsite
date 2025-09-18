# EmailJS Setup Guide

## 🚀 Quick Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the Service ID

### 3. Create Email Templates

#### Template 1: Welcome Email (for new signups)
1. Go to "Email Templates"
2. Click "Create New Template"
3. Name it "Welcome Email"
4. Use this template:

**Subject:** New User Signup - {{user_name}}

**Body:**
```
Hello!

A new user has signed up for MCCSITE:

Name: {{user_name}}
Email: {{user_email}}
Signup Date: {{signup_date}}
Signup Time: {{signup_time}}

You can view their profile and activity in your admin panel.

Best regards,
MCCSITE System
```

#### Template 2: Contact Form (for feedback)
1. Create another template
2. Name it "Contact Form"
3. Use this template:

**Subject:** Contact Form: {{subject}}

**Body:**
```
New contact form submission:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}
Message: {{message}}
Newsletter: {{newsletter}}
Time: {{timestamp}}

You can reply directly to: {{from_email}}

Best regards,
MCCSITE Contact System
```

4. Save both templates and copy their Template IDs

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your Public Key

### 5. Update Your Code

#### In `index.html` (welcome emails):
```javascript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");

// Replace YOUR_SERVICE_ID with your service ID
// Replace YOUR_TEMPLATE_ID with your welcome email template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

#### In `contact.html` (contact form emails):
```javascript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");

// Replace YOUR_SERVICE_ID with your service ID
// Replace YOUR_CONTACT_TEMPLATE_ID with your contact form template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_CONTACT_TEMPLATE_ID', templateParams)
```

### 6. Test the Setup
1. Open your website
2. Create a new user profile
3. Check your email for the welcome message

## 📧 Email Template Variables

### Welcome Email Variables:
- `{{user_name}}` - User's display name
- `{{user_email}}` - User's email address
- `{{signup_date}}` - Date they signed up
- `{{signup_time}}` - Time they signed up
- `{{from_name}}` - Always "MCCSITE System"

### Contact Form Variables:
- `{{from_name}}` - Person's name who submitted the form
- `{{from_email}}` - Person's email address
- `{{subject}}` - Subject of their message
- `{{message}}` - Their message content
- `{{newsletter}}` - "Yes" or "No" for newsletter subscription
- `{{timestamp}}` - Date and time of submission
- `{{reply_to}}` - Email address to reply to

## 🔧 Advanced Configuration

### Custom Email Template
You can customize the email template with:
- HTML formatting
- Additional user data
- Company branding
- Links to your admin panel

### Multiple Recipients
To send to multiple email addresses, modify the template:

```javascript
const templateParams = {
  to_email: 'mccodonn@gmail.com,admin@yoursite.com',
  // ... other parameters
};
```

### Error Handling
The system logs errors to the console. Check browser console for:
- Invalid API keys
- Template errors
- Service connection issues

## 💡 Tips

1. **Test in development** before going live
2. **Check spam folder** for test emails
3. **Monitor email limits** (free plan has limits)
4. **Use descriptive subjects** for easy identification
5. **Set up email filters** to organize signup notifications

## 🚨 Troubleshooting

### Common Issues:
1. **"Invalid API key"** - Check your public key
2. **"Service not found"** - Verify service ID
3. **"Template not found"** - Check template ID
4. **"Email not sending"** - Check service configuration

### Support:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

## 📊 Monitoring

### EmailJS Dashboard:
- View sent emails
- Monitor delivery status
- Check error logs
- Track usage limits

### Your Email:
- Set up filters for signup notifications
- Create labels for organization
- Set up auto-replies if needed

## 🎯 Next Steps

1. Set up your EmailJS account
2. Configure the email service
3. Create the email template
4. Update the code with your keys
5. Test the signup process
6. Start receiving welcome emails! 📧