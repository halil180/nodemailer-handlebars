import express from 'express'
import fs from 'fs/promises';
import handlebars from 'handlebars';
import { sendMailWith } from './sendmail.js';
const app = express();
app.get('/', async (req, res) => {
    try {
        // Read the template file asynchronously and wait for it to complete
        const templateFile = await fs.readFile('./templates/welcome.handlebars', 'utf-8');

        // Compile the template
        const template = handlebars.compile(templateFile);

        // Continue with the rest of the code
        const data = {
            heading: 'Welcome to Handlebars',
            content: 'Handlebars is a popular templating engine for JavaScript.',
            items: ['Item 1', 'Item 2', 'Item 3']
        };
        const htmlContent = template(data);

        // Send the response with the generated HTML content
        sendMailWith(htmlContent)
        res.send(htmlContent);
    } catch (err) {
        console.error(err);
        // Send an error response if something goes wrong
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000,() => {
    
    console.log('====================================');
    console.log("server started on port 3000");
    console.log('====================================');
})