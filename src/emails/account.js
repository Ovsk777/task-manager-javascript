const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'palpal1235@gmail.com',
        subject: 'Welcome to Task Manager App, '+name+'.',
        text: `Welcome to Task Manager Official App, ${name}. Please reach out to me in case you need any info.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'palpal1235@gmail.com',
        subject: 'Sorry to see you go, '+name+'.',
        text: `Hi, ${name}. Please tell us why did you choose to part with us and how can we improve in future.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}