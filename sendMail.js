// this is for sending mail via Node js // https://nodemailer.com/about/

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
    // ur account (the sender)
    from:'alimeailer@gmail.com',   
    // (the receiver)
    to:'',   // */ anyMail
    
    // titile
    subject:'testing node mailer', 

    //body message // for multi lines use this symbol ` `
    text:`Hi Ali testing mailer 
            from node JS` , 
    
    //attachments   https://nodemailer.com/message/attachments/
    attachments: [
        {   // file on disk as an attachment
            filename: 'theFileName.pdf',
            path: __dirname+'/theFileName.pdf' // stream this file
        }
    ]

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