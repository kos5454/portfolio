// Gestion du loader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 1250);
    }, 0000); // Vous pouvez augmenter ce délai pour voir l'écran de chargement plus longtemps
});

// Gestion du bouton de chargement 
document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    
    // Simuler un chargement qui dure quelques secondes
    setTimeout(function() {
      loading.classList.add('hidden');
    }, 0000); // Vous pouvez augmenter ce délai pour voir l'animation plus longtemps
});

// Fonction pour afficher les onglets
function afficherTab(tabId) {
    // Cacher tous les onglets
    var tabs = document.getElementsByClassName('contenu-tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Retirer la classe active de tous les boutons
    var boutons = document.getElementsByClassName('bouton');
    for (var i = 0; i < boutons.length; i++) {
        boutons[i].classList.remove('active');
    }
    
    // Afficher l'onglet sélectionné
    document.getElementById(tabId).classList.add('active');
    
    // Ajouter la classe active au bouton cliqué
    var boutonActif = document.querySelector('.bouton[href="#' + tabId + '"]');
    if (boutonActif) {
        boutonActif.classList.add('active');
    }
    
    // Faire défiler jusqu'au contenu de l'onglet sur mobile
    if (window.innerWidth <= 768) {
        document.querySelector('.contenu-container').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Afficher le premier onglet par défaut au chargement
window.addEventListener('DOMContentLoaded', function() {
    afficherTab('tab1');
    
    // Gestion du redimensionnement
    window.addEventListener('resize', function() {
        // Vous pouvez ajouter des ajustements spécifiques ici si nécessaire
    });
});
