// 📌 Gestion du loader (écran de chargement)
window.addEventListener('load', function() { // Attendre que toute la page soit chargée
    setTimeout(function() { // Délai avant de commencer à masquer le loader
        document.getElementById('loader').style.opacity = '0'; // Rendre le loader progressivement invisible

        setTimeout(function() { // Attendre encore un peu avant de le supprimer complètement
            document.getElementById('loader').style.display = 'none'; // Cacher totalement l'élément pour qu'il ne prenne plus de place
        }, 1250); // Temps d'attente après l'op785*4acité 0 (1.25s)
    }, 0000); // Délai initial avant de commencer l'animation (actuellement 0 ms)
});

// 📌 Gestion du bouton de chargement
document.addEventListener('DOMContentLoaded', function() { // Exécuter quand le HTML est chargé (avant les images)
    const loading = document.getElementById('loading'); // Récupérer l'élément #loading

    setTimeout(function() { // Attendre un certain temps avant de cacher le bouton
        loading.classList.add('hidden'); // Ajouter la classe CSS 'hidden' (qui masque l'élément)
    }, 0000); // Délai avant de masquer le bouton (actuellement 0 ms)
});

// 📌 Fonction pour afficher les onglets
function afficherTab(tabId) { // Fonction qui affiche un onglet selon son ID
    // 🔹 Cacher tous les onglets
    var tabs = document.getElementsByClassName('contenu-tab'); // Sélectionner tous les onglets
    for (var i = 0; i < tabs.length; i++) { // Boucler sur tous les onglets
        tabs[i].classList.remove('active'); // Retirer la classe 'active' pour les masquer
    }

    // 🔹 Désélectionner tous les boutons
    var boutons = document.getElementsByClassName('bouton'); // Sélectionner tous les boutons d'onglet
    for (var i = 0; i < boutons.length; i++) { // Boucler sur tous les boutons
        boutons[i].classList.remove('bouton-active'); // Retirer la classe 'bouton-active'
    }

    // 🔹 Afficher l'onglet sélectionné
    document.getElementById(tabId).classList.add('active'); // Ajouter la classe 'active' à l'onglet cliqué

    // 🔹 Mettre en surbrillance le bouton correspondant
    var boutonActif = document.querySelector('.bouton[href="#' + tabId + '"]'); // Trouver le bouton lié à l'onglet
    if (boutonActif) { // Vérifier si le bouton existe
        boutonActif.classList.add('bouton-active'); // Ajouter la classe 'bouton-active'
    }

    // 🔹 Sur mobile, faire défiler la page jusqu'au contenu
    if (window.innerWidth <= 1768) { // Vérifier si la largeur de l'écran est de 768px ou moins (mobile/tablette)
        document.querySelector('.contenu-container').scrollIntoView({ // Faire défiler jusqu'au contenu des onglets
            behavior: 'smooth' // Effet de défilement fluide
        });
    }
}

// 📌 Afficher le premier onglet par défaut au chargement de la page
window.addEventListener('DOMContentLoaded', function() { // Quand le HTML est chargé
    afficherTab('tab1'); // Afficher automatiquement l'onglet avec l'ID 'tab1'
});
