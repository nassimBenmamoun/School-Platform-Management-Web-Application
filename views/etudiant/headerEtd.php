<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>Scolarité</title>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-primary px-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="fas fa-graduation-cap" style="color: #ffffff;"></i> Scolarité
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="afficherMdl.php">Afficher Modules</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="afficherEtdMdl.php">Afficher Mes Modules</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="afficheEtdEval.php">Afficher Mes Evaluation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="afficherEtdNotes.php">Afficher Mes Notes</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li class="dropdown-item">Name pre</li>
              <li><a class="dropdown-item" href="profileEtd.html">Modifier profile</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Se Deconnecter</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>