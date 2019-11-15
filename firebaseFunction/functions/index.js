const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const xoauth2 = require('xoauth2');
var smtpTransport = require('nodemailer-smtp-transport');

admin.initializeApp();

let transporter = nodemailer.createTransport(smtpTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'sakhiepimail@gmail.com',
            clientId: '589056039847-ceqn67eiojkf10o9fkjc958tg03me19i.apps.googleusercontent.com',
            clientSecret: 'ewV28s5ch95iS2ddJBO7Djqw',
            refreshToken: '1/uPA8j3POhoQ89KRaIdgasMFtbwbEvJk1skGRI7V1R5I'
            })
    }
}));

exports.sendMail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        
        let soup = request.query.so;
        let sides = request.query.ga;
        let mains = request.query.ma;
        let dessert = request.query.de;
        let salads = request.query.sa;
        let name = request.query.nm;
        let address = request.query.ad;
        let id = request.query.rid;
        let phone = request.query.ph;
        let date = request.query.dt;
        let email = `${request.query.em}, acbka@ua.fm`;

        let textMsg = `Dear ${name}!\n\n\n` +
        `Your order is confirmed. We will cook your meals for the next week on exactly ${date}.\n` +
        `All the dishes will be delivered to you fresh and delicious!\n\n\n\n` +
        `Here are your order details\n\n` +
        `Order reference id: ${id}.\n` +
        `Order delivery date: ${date}.\n` +
        `Order delivery address: ${address}.\n` +
        `Client phone number: ${phone}.\n\n` +
        `Your order includes:\n` +
        `\t1. Main dishes: ${mains} (1 kilogram each);\n` +
        `\t2. Soups: ${soup} (1 litre each);\n` +
        `\t3. Side dishes: ${sides} (1 kg each);\n` +
        `\t4. Salad: ${salads} (1 kilogram);\n` +
        `\t5. Dessert: ${dessert} (1 kilogram).\n\n` +
        `\n\nEnjoy your meal!`;

        const mailOptions = {
            from: 'sakhiepimail@gmail.com',
            to: email,
            subject: 'Your Russian granny is cooking your meal.',
            text: textMsg
        };

        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                //console.log(error.tolet());
                return response.send(error.tolet());
            }
            //console.log('sent');
            return response.send('Sent');
        });
    });
});
