<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Auth Demo</title>
        <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        rel="stylesheet"
        />
        <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
        />
        <link
        href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.css"
        rel="stylesheet"
        />
        <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
        ></script>
        <link href="./index.css" rel="stylesheet" />
    </head>
    <body class="d-flex justify-content-center p-5">
        <div class="card">
            <div class="card-header">
                <center><h3>Login Form</h3></center>
            </div>
            <form class="card-body px-5 py-4">
                <label class="custom-field">
                    <input type="text" class="input" required />
                    <span class="placeholder">Email Id</span>
                </label><br />
                <label class="custom-field">
                    <input type="password" class="input" required />
                    <span class="placeholder">Password</span>
                </label><br /><br/>
                <center><button type="submit" class="btn btn-primary">Login</button></center>
            </form>
        </div>
    </body>
</html>
