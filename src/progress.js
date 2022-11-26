// HTML

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//   </head>
//   <body>
//     <progress value="0" max="100"></progress>
//     <script type="module" src="./src/index.js" ></script>
//   </body>
// </html>

// JS

export default () => {
    const progress = document.querySelector('progress');
    let value = progress.getAttribute('value');
    const maxValue = progress.getAttribute('max');
  
    setInterval(() => {
      if (value < maxValue) {
        progress.setAttribute('value', ++value)
      }
    }, 1000);
  };