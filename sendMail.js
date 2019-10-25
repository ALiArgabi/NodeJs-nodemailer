// this is for sending mail via Node js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    // do not forget to give permission for third party in gmail
    /*
     1- login in in ur gmail via ur browser
     2- after ur loged in Paste in ur browser this link  https://myaccount.google.com/lesssecureapps
     3- Allow less secure apps: ON
    */

    service: 'gmail',
    auth:{
        user: 'alimeailer@gmail.com', // ur Email account
        pass:'' // ur email passowrd
    }
});

const mailOptions ={
    from:'alimeailer@gmail.com',   // ur account (the sender)

    to:'anyMail@gmail.com',  // (the receiver)

    subject:'testing node mailer', // titile

    //body message
    text:`Hi Ali testing mailer 
            from node JS` // for multi lines `` 
};

transporter.sendMail(mailOptions,(errorHappned,info)=>{
    if(errorHappned)
    {
        console.log(errorHappned);
    }
    else
    {
        console.log('Email sent: '+ info.response);
    }
    
});