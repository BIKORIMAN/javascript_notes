<!DOCTYPE html>
<html>
<head>
  <title>Logo with JavaScript</title>
</head>
<body>

<div id="logo-container"></div>

<script>
  const logo = document.createElement("img");
  logo.src = "https://example.com/logo.png";  // Replace with your logo URL
  logo.alt = "My Logo";
  logo.width = 200;

  document.getElementById("logo-container").appendChild(logo);
</script>

</body>
</html>
