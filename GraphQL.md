# GraphQL API Documentation

## Table of Contents

- [Types](#types)
- [Mutations](#mutations)
- [Queries](#queries)
- [Subscriptions](#subscriptions)

## Mutations

1. **REGISTER** - Create a new user account

### Request Body:
```javascript
register(
  phone: "+254798675342",
  email: "andrewk@gmail.com",
  dateOfBirth: `2001-06-30T17:30:00+03:00`,
  isMuslim: "true" or "false",
  password: "Andrew123",
)
```
### Response :
 ```json
 "register": {
    "message": "Registered successfully",
    "status": 201,
    "body": {
      "authToken": "....."
    }
 }
```

2. **SIGN IN** - Log in to the user account

### Request Body:
```javascript
signIn(input: {
  phone: String,
  password: String
})
```

### Response Body
```json
"signIn": {
  "message": "Sign In Successfully",
  "status": 200,
  "body": {
    "authToken": "...."
  }
}
```

3. **RESET PASSWORD** - Reset the user's password using the provided OTP, new password, and phone number

### Request Body:
```javascript
resetPassword(
  otp: 1234,
  password: "Andrew2023",
  phone: "+254798675342"
)
```
### Response:
```json
"resetPassword": {
    "message": "You have reset your password",
    "status": "200"
}
```

4. **SEND OTP** - Send an OTP (One-Time Password) to the user's phone number for verification.

### Request Body:

```javascript
sentOtp(phone: "+254798675342")
```

### Response:
```json
"sentOtp":{
    "message": "OTP has been sent to your phone",
    "status": "200"
  }
```

5. **VERIFY OTP** - Verify the OTP sent to the user
### Request Body:

```javascript
verifyOtp(otp: 1023, phone: "+254798675342")
```

### Response:
```json
"verifyOtp":{
    "message": "....",
    "status": "200",
    "body": null
  }
```
