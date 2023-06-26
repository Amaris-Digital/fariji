# GraphQL API Documentation

## Mutations

1. REGISTER - Register a new user with the provided information

Post data:

    register(
        phone: "+254798675342",
        email: "andrewk@gmail.com",
        dateOfBirth: `2001-06-30T17:30:00+03:00`,
        isMuslim: "true" or "false",
        password: "Andrew123",
    )

Response :
 
 "register": {
    "message": "Registered successfully",
    "status": "200"
 }


2. RESET PASSWORD - Reset the user's password using the provided OTP, new password, and phone number

Post data:

     resetPassword(
       otp: 1234,
       password: "Andrew2023",
       phone: "+254798675342"
       )

Resonse:

   "resetPassword": {
    "message": "You have reset your password",
    "status": "200"
   }


3. SEND OTP - Send an OTP (One-Time Password) to the user's phone number for verification.

Post data:

    sentOtp(
        phone: "+254798675342"
    )

Response:

  "sentOtp":{
    "message": "OTP has been sent to your phone",
    "status": "200"
  }


