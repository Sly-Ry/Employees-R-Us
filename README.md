# Employees-R-Us
Created by: Ryan A Williams | Github: Sly-Ry | Email: ryan.williams93@aol.com


## Description

A team generator that takes user input and generates an index.html with style included.

## Installation

Use the package manager [yarn](https://yarnpkg.com/getting-started/usage) to install yarn.

```bash
npm install yarn -g
```

## Usage
Watch for instructions: [Demonstration](https://watch.screencastify.com/v/wEZqhOaWBMUiSNPXRUiw)

To initiate application:
```bash
node index
```
```bash
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Employees-R-Us</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <header>
          <div class="container flex-row justify-space-between align-center py-3">
              <h1 class="page-title text-secondary bg-dark py-2 px-3">Happy Tappy Inc.</h1>
          </div>
      </header>
      <main class="container my-5">

          <div class="card display-inline-block">
              <div class="card-header">
                  <h2>Ryan</h2>
                  <h5>-Manager-</h5>
              </div>
              <div class="card-body">
                  <h4>ID#: 1234</h4>
                  <a href="sendto:ryan@email.com">Email: ryan@email.com</a>
                  <p>Office#: 13</p>
              </div>
          </div>,   
          <div class="card display-inline-block">
              <div class="card-header">
                  <h2>Kim</h2>
                  <h5>-Engineer-</h5>
              </div>
              <div class="card-body">
                  <h4>ID#: 1234</h4>
                  <a href="sendto:kim@eamil.com">Email: kim@eamil.com</a>
                  <p>Username: kimhub</p>
              </div>
          </div>,   
          <div class="card display-inline-block">
              <div class="card-header">
                  <h2>Raul</h2>
                  <h5>-Intern-</h5>
              </div>
              <div class="card-body">
                  <h4>ID#: 1234</h4>
                  <a href="sendto:raul@email.com">Email: raul@email.com</a>
                  <p>University: raul school of schools</p>
              </div>
          </div>
      </main>
      <footer class="container text-center py-3">
          <p class="text-dark">&copy; 2022</p>
      </footer>
    </body>
    </html>
```

## Contributing
Pull requests are welcome.

Please make sure to update tests as appropriate.

##Support
- Andrew Wales
- Dave Gauthier

