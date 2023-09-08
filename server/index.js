const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const app_pass = 'u d x m g r y k t n z y u e z j';

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ariel.agawin.calipay@gmail.com',
        pass: app_pass
    }
});

app.post('/send-email', (req, res) => {
    const { firstName, lastName, phone, email, message } = req.body;

    const mailOptions = {
        from: 'ariel.agawin.calipay@gmail.com',
        to: 'arielcalipay2@gmail.com',
        subject: 'Get In Touch',
        html: `<h4><strong>Name: </strong>${firstName} ${lastName}</h4><h4><strong>Phone: </strong>${phone}</h4><h4><strong>Email: </strong>${email}</h4><h4><strong>Message: </strong>${message}</h4>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error on sending email');
        } else {
            console.log('Email sent: ', info.response);
            res.status(200).send('Email sent successfully');
        }
    })

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
