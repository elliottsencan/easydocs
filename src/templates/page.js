const page = ({ meta }, content, sidebar) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${meta.docsDescription}" />
        <link rel="stylesheet" href="../assets/styles/main.css">
        <title>${meta.docsName}</title>
    </head>
    <body>
        <header>
        </header>    
        <div class="main">
            ${sidebar}
            <article>
                <pre id="json">${JSON.stringify(content, undefined, 2)}</pre>
            </article>
        </div>
    </body>
</html>
`;

export default page;


