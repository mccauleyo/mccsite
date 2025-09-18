// EmailJS Configuration Update Script
// Run this in your browser console after getting your EmailJS credentials

function updateEmailJSConfig() {
    // Replace these with your actual EmailJS credentials:
    const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY"; // From step 4
    const SERVICE_ID = "YOUR_SERVICE_ID"; // From step 2
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // From step 3
    
    console.log("Please replace the placeholder values with your actual EmailJS credentials:");
    console.log("1. PUBLIC_KEY:", PUBLIC_KEY);
    console.log("2. SERVICE_ID:", SERVICE_ID);
    console.log("3. TEMPLATE_ID:", TEMPLATE_ID);
    console.log("\nThen update these in your index.html file:");
    console.log("- Line 312: emailjs.init(\"" + PUBLIC_KEY + "\");");
    console.log("- Line 453: '" + SERVICE_ID + "',");
    console.log("- Line 454: '" + TEMPLATE_ID + "',");
}

updateEmailJSConfig();

