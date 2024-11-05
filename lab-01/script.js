document.getElementById("loginForm").addEventListener("submit", function(event) {
   event.preventDefault();

   const disableUsername = ["yopmail.com","jose.fr"]

   // 1. recuperation des données
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;

   const errorElement = document.getElementById("error");

   // 2. verification que le mail est correcte
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(username)){
        errorElement.textContent = "Veuillez entrer un mail valide"
        return;
    } else{

        // je verifie que le domaine du mail n'est pas dans la liste des refus de domaine
        if(disableUsername.includes(username.split('@')[1])){
            errorElement.textContent= "Domaine email non autorisé";
            return;
        }

    }
    /*
     * Cette regex exige un mot de passe avec :
     * - Au moins 10 caractères
     * - Au moins une lettre minuscule
     * - Au moins une lettre majuscule
     * - Au moins un chiffre
     * - Au moins un caractère spécial (@$!%*?&)
    */

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

    // verification que l'entrée utilisateur respecte la politique de sécurité de l'entreprise

    if (!passwordRegex.test(password)) {
        errorElement.textContent = "Le mot de passe doit contenir au moins 10 caractères, dont une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";
        return;
    }

    // si tout est ok
    errorElement.textContent="connexion reussie !";
    document.getElementById("loginForm").reset();

});
