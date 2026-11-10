<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

       <style>
        .geral {
            background-color: #4f46e5;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: calc(100vh - 56px);
            margin: 0;

        }

        .teladelogin {
            background-color: white;
            text-align: center;
            padding: 40px;
            border-radius: 15px;
            width: 350px;
            box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.25);
        }

        .nomeinicial {
            margin-bottom: 25px;
            color: #4f46e5;
        }

        .form-control {
            margin-bottom: 15px;
        }

        .botao {
            background-color: #4f46e5;
            color: white;
            border: none;
            padding: 10px;
            width: 100%;
            border-radius: 8px;
        }

        .botao:hover {
            background-color: #3730a3;
        }
        .minha-navbar {
    background-color: #fcfcfc;
        }
        .minha-navbar .navbar-brand{
            color: black;
        }
        .minha-navbar .nav-link{
            color: black;
        }
        .minha-navbar .nav-link:hover {
            color:#4f46e5 ;
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    
  <nav class="navbar navbar-expand-lg navbar-dark minha-navbar">

    <div class="container-fluid">

        <a class="navbar-brand" href="#">Educonnect</a>

        <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu">

            <span class="navbar-toggler-icon"></span>

        </button>

        <div class="collapse navbar-collapse" id="menu">

            <div class="navbar-nav ms-auto">

                <a class="nav-link" href="#">Home</a>
                <a class="nav-link" href="telainicial.html">Home</a>

                <a class="nav-link" href="#">Sobre nós</a>

                <a class="nav-link" href="#">Entre em contato</a>

            </div>

        </div>

    </div>

   </nav>


    <!-- Tela de Login -->
    <div class="geral">
    <div class="teladelogin">
      <h1 class="nomeinicial">Login</h1>
      <form class="form">
        <label for="matricula"> Matricula:</label><br>
        <input type="text" class="form-control" id="matricula" name="matricula" placeholder="Digite sua matricula"> 
        <label for="senha"> Senha: </label>
        <input type="text" class="form-control" id="senha" name="senha" placeholder="Digite sua senha">
        <button type="submit" class="botao">Entrar</button>

       </form>
    </div>
    </div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script></body>
</html>
