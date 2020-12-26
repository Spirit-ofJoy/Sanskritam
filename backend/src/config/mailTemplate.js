require('dotenv').config()
const mailer = require('./nodeMailer');

exports.emailVerification = (email, name, link) => {
    var mailOptions = {
        to: email,
        from: process.env.EMAIL_ADDR,
        subject: "Email Account Verification",
        text:   "Hello " + name + " !!" +
                "\nTo proceed with the registration process, please click on the link below to verify your google account!!\n" +
                "Link : " + link
    }

    mailer.sendMail(mailOptions, (err) => {
        if(err)
            console.log("Error Sending Email, Retry!!")
        else
            console.log("Confirmation Email Sent!!")
    }) 
}

exports.welcomeEmail = (email, name) => {
    var mailOptions = {
        to: email,
        from: process.env.EMAIL_ADDR,
        subject: "Welcome To Sanskritam",
        text:  "Welcome " + name + "!!\n" +
                "We whole heartedly welcome you to the DevHub family. I hope you will make great connections through us!!\nWe kindly request you to like our Facebook page & follow us on instagram\n" +
                "We is a platform for professionals, to aid in your professional reach to people\nWishing you a great day!!"
    }

    mailer.sendMail(mailOptions, (err) => {
        if(err)
            console.log("Cannot Send Welcome Email!!")
        else
            console.log("Welcome Email Sent!!")
    })
}

exports.forgetPassMail = (email, link) => {
    var mailOptions = {
        to: email,
        from: process.env.EMAIL_ADDR,
        subject: "Password Reset Confirmation",
        text:
            "This email has been sent in response to the request made to your account to reset your password!!\n" +
            "If it was you click on the link below, otherwise it will expire in next 1 hour\n" + "Link : " + link
    }

    mailer.sendMail(mailOptions, (err) => {
        if(err)
            return res.status(500).json({err: err, success: false})
        console.log("Password Reset Mail Sent!!")
    })
}