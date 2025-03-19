// Simuler la détection d'une chute (en situation réelle, ceci serait remplacé par un système de détection)
document.addEventListener('DOMContentLoaded', function() {
    // Afficher l'alerte immédiatement au chargement de la page
    showFallAlert(); // <--- Cette ligne est déplacée ici
    
    // Ajouter un écouteur d'événement au bouton d'urgence pour tester manuellement
    document.getElementById('urgence-btn').addEventListener('click', showFallAlert);
    
    // Fermer l'alerte
    document.getElementById('close-btn').addEventListener('click', hideFallAlert);
    
    // Configurer les boutons d'urgence
    document.getElementById('sos-famille').addEventListener('click', function() {
        window.location.href = "tel:+33612345678"; // Remplacez par le vrai numéro
    });

    document.getElementById('sos-18').addEventListener('click', function() {
        window.location.href = "tel:18";
    });

    document.getElementById('sos-15').addEventListener('click', function() {
        window.location.href = "tel:15";
    });
});


// Afficher l'alerte de chute
function showFallAlert() {
    document.getElementById('alertPopup').style.display = 'flex';
    
    // En situation réelle, ici on récupérerait les informations du résident depuis une base de données
    document.getElementById('resident-name').textContent = "Martin Dupont";
    document.getElementById('room-number').textContent = "203";
    
    // Jouer un son d'alerte
    playAlertSound();
}

// Masquer l'alerte de chute
function hideFallAlert() {
    document.getElementById('alertPopup').style.display = 'none';
}

// Fonction pour jouer un son d'alerte
function playAlertSound() {
    // Créer un élément audio et jouer un son d'alerte
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/beep-07.mp3');
    audio.play();
}

// Fonction pour la connexion à un système de détection réel
function connectToDetectionSystem() {
    // Cette fonction serait utilisée pour se connecter à un système de détection réel
    // (capteurs de mouvement, accéléromètres, etc.)
    console.log("Connexion au système de détection de chutes...");
}
