# DevStore E-commerce Website

## Description
This is a fully functional e-commerce website developed using HTML, CSS, JavaScript, Firebase, Express.js, Node.js, and integrated with the Stripe Payment gateway. It allows users to browse products, add them to their cart, and make secure payments.

## Video Demo

[![Watch the video](https://img.youtube.com/vi/14STub3MX_Q/0.jpg)](https://youtu.be/14STub3MX_Q)

Click the image above to watch a demo of the project on YouTube.
YouTube Video Link- https://youtu.be/14STub3MX_Q




## Screenshots
Signup Page
![Project Logo](https://blogger.googleusercontent.com/img/a/AVvXsEiUzs6IZd26Z6d9ZlRERZSmw0mvifBq3TDiI9ZKVhRFI5wlqP73YWTXuou4MgDNafC-Yr_Ec9zEQQuNBjQVd9Eu44xsD-NLG8lT-G3hYXpSFZovZ8W_G6YaUx1DaigcQSAd1Yo003Xe52R8atT_jdAefSKFXUd21QYLV09Bc6_QsOdy5-9oR1SQ3qu_uEM=s16000)


Login Page
![Project Logo](https://blogger.googleusercontent.com/img/a/AVvXsEgHWtQrr_UEREj1BiO19EecM3pIf04IBgyve8glD0XQ-W2OM9aNVgBa10-ofFoFRHy43emsAgZR57jvbUc11aFnIvATN9JggEIrLcFmWpQ8YWTQuzHoso2UGsb19oMmwtsV5PH899Gm6Bgp5GGbfW1AGEPdjpTItCreDtinmMvMHF7_h0RMnYzGm8104yw=s16000)


Home Page


![Project Logo](https://blogger.googleusercontent.com/img/a/AVvXsEjMULFTJGuSDNqFHaSlzuAHNHehx_GVIITGX1EEA4KlzmfDnjUk51hjTJMpdSOIMOsImqqz30JdrRcmSvmJqChiljSAOuKS1DBMYFOoJDSZVJVlws3Bg8Uce4SuFEaHOUKlxxQiBYLc9xUkzNqMfno-baa-d3WCL3mmOJl8iYRfNYHqRKffQbTsAFWSML0=s16000)

Product Page


![Project Logo](https://blogger.googleusercontent.com/img/a/AVvXsEgPqYWj4Gm1J2o2gPYLmhX-9JYDA3gVYs1J-Ofr36c_rYwd8KYat5QFXutuLfq8IwaYfZagIGBCSs7Jzr7YmUoKzsSr5iUbAK6axPYych7OJvogJUr-X55fBCD6DlCbJ6gjcyrqDe1PsKC1n_OptPgqVgKpAL7vCdgoJJbpC2nFW6A0qcg9vrnrImYl760=s16000)




## Features
- **Product Catalog:** Browse and search for products with detailed descriptions and images.
- **Shopping Cart:** Add products to the cart, update quantities, and remove items as needed.
- **Secure Payments:** Process payments using the Stripe Payment Gateway for a safe and seamless checkout experience.
- **User Authentication:** Register, log in, and manage user accounts.
- **Admin Panel:** Access an admin panel to manage products, orders, and users.
- **Real-time Updates:** Stay updated with real-time changes to product availability and order status thanks to Firebase.
- **Responsive Design:** Enjoy a user-friendly experience on both mobile and desktop devices.

## Technologies Used
- **Frontend:**
  - HTML
  - CSS
  - JavaScript
- **Backend:**
  - Firebase for real-time database and authentication
  - Express.js and Node.js for server-side functionality
  - Stripe Payment Gateway for secure transactions

## Installation

Follow these steps to set up and run the project on your local machine:

1. **Clone the repository:** git clone https://github.com/codeswithadarsh/devStore.git

2. **Navigate to the project directory:** cd ecommerce-website

3. **Install dependencies:** npm install

4. **Configure your Firebase project:**
- Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
- Add your Firebase credentials in the `firebaseConfig` object in `src/firebase.js`.

5. **Configure your Stripe API keys:**
- Sign up for a Stripe account at [https://stripe.com/](https://stripe.com/)
- Add your Stripe API keys in the appropriate files.

6. **Start the application:** npm start

7. **Open your web browser and visit:** http://localhost:3000

8. **For testing purposes, use the following test card details for Stripe payments:**
- Card Number: `4242 4242 4242 4242`
- Expiry Date: Any future date
- CVC: Any 3-digit number

Now you should have the project up and running locally, and you can explore its features.


## Usage

1. **Visit the Local Development Server:**
   - Open your web browser and go to: `http://localhost:3000`

2. **Browse Products:**
   - Explore the product catalog and click on products to view details.

3. **Add Products to Cart:**
   - Add desired products to your shopping cart by clicking the "Add to Cart" button.

4. **View and Edit Cart:**
   - Click on the cart icon to view and edit your cart items. You can update quantities or remove items.

5. **Checkout with Stripe:**
   - When you're ready to make a purchase, proceed to checkout. For testing purposes, use the following test card details for Stripe payments:
     - Card Number: `4242 4242 4242 4242`
     - Expiry Date: Any future date
     - CVC: Any 3-digit number

6. **Admin Panel (For Admins):**
   - Explore the admin panel at `/dashboard.html` (e.g., `http://localhost:3000/dashboard.html`) to manage products, orders, and users.

7. **Explore and Enjoy!**
   - Take your time to explore the website and enjoy a seamless shopping experience.

## Contact

If you have any questions, feedback, or need assistance, feel free to reach out:

- **Your Name**
- **GitHub:** [codeswithadarsh](https://github.com/codeswithadarsh)
- **Email:** meadarshpandey@gmail.com
