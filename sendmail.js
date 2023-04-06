import nodemailer from 'nodemailer';

export async function sendMailWith(html){

    const transporter  = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
        user:"user ",
        pass:"password here"
        }
    })

    const info = await transporter.sendMail({
        from:"your email address",
        to:"to",
        subject:"Hello",
        text:"Hello world",
        html:html
    })

    console.log('====================================');
    console.log('message sent: %s', info.messageId);
    console.log('====================================');
}