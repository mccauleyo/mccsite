# EmailJS Setup Guide

To enable real email functionality for your website, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** Verify Your Email - {{site_name}}

**Content:**
```
Hello {{to_name}},

Thank you for signing up for {{site_name}}!

Please click the link below to verify your email address:
{{verification_link}}

If you didn't create an account, please ignore this email.

Best regards,
The {{site_name}} Team
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

## 5. Update Your Website
Replace these placeholders in your HTML files:

- Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key
- Replace `YOUR_SERVICE_ID` with your service ID  
- Replace `YOUR_TEMPLATE_ID` with your template ID

## 6. Test the Email Functionality
1. Sign up for a new account on your website
2. Go to Profile Settings
3. Click "Send Verification Email"
4. Check your email inbox for the verification email

## Free Tier Limits
- 200 emails per month
- Perfect for testing and small websites
- Upgrade for more emails if needed

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is properly connected
- Test with a real email address
