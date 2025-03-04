

// Gestion du loader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 1250);
    }, 0000);
});

// gestions du bouttons chargements 
document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    
    // Simuler un chargement qui dure 5 secondes
    setTimeout(function() {
      loading.classList.add('hidden');
    }, 0000);
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
}

// Afficher le premier onglet par défaut au chargement
window.addEventListener('DOMContentLoaded', function() {
    afficherTab('tab1');
});