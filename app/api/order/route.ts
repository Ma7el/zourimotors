import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    // Extract data
    const name = data.get('name');
    const phone = data.get('phone');
    const city = data.get('city');
    const address = data.get('address');
    const products = data.get('products'); // This is the formatted string from the frontend
    const totalItems = data.get('total_items');
    const cartSummary = data.get('cart_summary'); // Assuming this includes price if available

    // Validate
    if (!name || !phone || !city || !address) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    // Configure Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email Content
    const mailOptions = {
      from: `"Zouri Motors Order System" <${process.env.EMAIL_USER}>`,
      to: 'khazouri8@gmail.com', // The user's email
      subject: `New Order from ${name} - ${city}`,
      text: `
New Order Received!

CUSTOMER DETAILS:
Name: ${name}
Phone: ${phone}
City: ${city}
Address: ${address}

ORDER DETAILS:
Total Items: ${totalItems}

PRODUCTS:
${products}

SUMMARY:
${cartSummary}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #333; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">New Order Received</h2>
          
          <div style="background-color: #fff; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #555;">Customer Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Address:</strong> ${address}</p>
          </div>

          <div style="background-color: #fff; padding: 15px; border-radius: 5px;">
            <h3 style="margin-top: 0; color: #555;">Order Details</h3>
            <p><strong>Total Items:</strong> ${totalItems}</p>
            
            <div style="border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px;">
              <strong>Products:</strong>
              <pre style="background: #f0f0f0; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${products}</pre>
            </div>
            
             <div style="border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px;">
              <strong>Summary:</strong>
              <p>${cartSummary}</p>
            </div>
          </div>
          
          <p style="text-align: center; color: #888; font-size: 12px; margin-top: 30px;">
            Sent from Zouri Motors Website
          </p>
        </div>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    // Redirect to home with success (or return JSON if you want to handle it with JS on frontend)
    // Since the form uses standard action="", we can redirect.
    return NextResponse.redirect(new URL('/thank-you', request.url), 303);

  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json({ success: false, message: 'Failed to process order' }, { status: 500 });
  }
}
