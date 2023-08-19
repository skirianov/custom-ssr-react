export const document = (content, initialData) => {
  return `
    <!Doctype html >
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.__SSR_DATA__ = ${JSON.stringify(initialData)}</script>
        <script src="static/client_bundle.js"></script>
      </body>
    </html>
    `;
}