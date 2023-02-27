import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'info@brandonperfetti.com', // Your email where you'll receive emails
      from: 'info@brandonperfetti.com', // your website email address here
      subject: `[Message from BP Spotlight] : ${req.body.subject}`,
      html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
            <head>
                <meta charset="utf-8" />

                <title>Message for Brandon</title>
                <meta name="description" content="Message for Brandon" />
                <meta name="author" content="SitePoint" />
                <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

                <link rel="stylesheet" href="css/styles.css?v=1.0" />
            </head>

            <body>
                <div class="img-container" style="display: flex; justify-content: center; align-items: center; border-radius: 5px; overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
                <div class="container" style="margin-left: 20px; margin-right: 20px;">
                    <h3>
                        You've got a message from ${req.body.fullname}.<br /><br />
                        Their email address is:<br />✉️ ${req.body.email}
                    </h3>
                    <div style="font-size: 16px;">
                        <p>What they had to say:</p>
                        <p>${req.body.message}</p>
                        <br />
                    </div>
                    <img src="https://en.gravatar.com/userimage/38880172/2fb4ae18b897802d801ec45c517814a9.jpeg" class="logo-image" style="height: 50px; width: 50px; border-radius: 5px; overflow: hidden;" />
                    <p class="footer" style="font-size: 16px; padding-bottom: 20px; border-bottom: 1px solid #d1d5db;">
                        Best Regards,<br />
                        Brandon Perfetti Info Bot
                    </p>
                    <div class="footer-links" style="display: flex; justify-content: center; align-items: center;">
                        <a href="https://github.com/brandonperfetti/" style="text-decoration: none; margin: 8px; color: #9ca3af;">
                            <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
                                <path
                                    fill-rule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                ></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/brandonperfetti/" style="text-decoration: none; margin: 8px; color: #9ca3af;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="24" focusable="false">
                                <path
                                    d="M14 0H2a1 1 0 00-1 1v15l3-2h10a1 1 0 001-1V1a1 1 0 00-1-1zM5 12H3V5h2zM4 4.2A1.27 1.27 0 012.75 3a1.25 1.25 0 012.5 0A1.27 1.27 0 014 4.2zm9 7.8h-2V8.73c0-.79-.18-1.93-1.34-1.93A1.74 1.74 0 008 8.61V12H6V5h1.85v1a2.72 2.72 0 012.29-1.2C12.27 4.8 13 6.09 13 8.29z"
                                    fill="#0a66c2"
                                ></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/brandonperfetti/" style="text-decoration: none; margin: 8px; color: #9ca3af;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="none" class="u01b__icon-home">
                                <path opacity="0" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </body>
        </html>
      `
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
