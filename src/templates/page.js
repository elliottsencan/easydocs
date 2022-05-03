const page = ({ meta }, content, sidebar) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${meta.docsDescription}" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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


