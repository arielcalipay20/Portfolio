const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

const corsOptions = {
    origin: 'https://arielcalipay20.github.io', // Change this to your frontend app's URL
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-email', (req, res) => {
    const { firstName, lastName, phone, email, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'arielcalipay2@gmail.com',
        subject: 'Get In Touch',
        html: `<h4><strong>Name: </strong>${firstName} ${lastName}</h4><h4><strong>Phone: </strong>${phone}</h4><h4><strong>Email: </strong>${email}</h4><h4><strong>Message: </strong>${message}</h4>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error on sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
