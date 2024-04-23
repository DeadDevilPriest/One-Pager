alert('Hallo Welt!');

//Externe Anbindung//
src="https://cdn.jsdelivr.net/npm/chart.js"
// JavaScript-Funktion zum Initialisieren der Standardansicht
function initializeDefaultView() {
    // Verstecke die Inhalte von upcoming und prognosis
    const upcomingSection = document.querySelector('.upcoming');
    const prognosisSection = document.querySelector('.prognosis');

    if (upcomingSection) {
        upcomingSection.style.display = 'none';
    }

    if (prognosisSection) {
        prognosisSection.style.display = 'none';
    }

    // Zeige den Inhalt von previous an (standardmäßig ausgewählt)
    const previousSection = document.querySelector('.previous');
    if (previousSection) {
        previousSection.style.display = 'block';
    }
}

// JavaScript-Funktion zum Austauschen des Inhalts basierend auf der ausgewählten Klasse
function changeContent(className) {
    // Verstecke alle Abschnitte
    const sections = document.querySelectorAll('.previous, .upcoming, .prognosis');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Zeige den ausgewählten Abschnitt basierend auf der übergebenen Klasse an
    const selectedSection = document.querySelector(`.${className}`);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Event-Listener für Klickereignisse auf die Schaltflächen
document.addEventListener('DOMContentLoaded', () => {
    // Initialisiere die Standardansicht
    initializeDefaultView();

    // Finde die Schaltflächen mit den entsprechenden IDs
    const previousBtn = document.getElementById('previous');
    const upcomingBtn = document.getElementById('upcoming');
    const prognosisBtn = document.getElementById('prognosis');

    // Füge Klickereignis-Handler hinzu, um den Inhalt zu ändern
    previousBtn.addEventListener('click', () => {
        changeContent('previous');
    });

    upcomingBtn.addEventListener('click', () => {
        changeContent('upcoming');
    });

    prognosisBtn.addEventListener('click', () => {
        changeContent('prognosis');
    });
});
// Difinieren der Arrays
let arr1 = ["a", "b", "c", "d", "e", "f", "g"];
let arr2 = ["A", "B", "C", "D", "E", "F", "G"];
let arr3 = [7, 2, 6, 5, 4, 2, 3];
let arr4 = [5, 6, 8, 3, 2, 4, 5];

// Funktion zum Erstellen und Anzeigen des Gamecharts (Kurvendiagramm)
function createGameChart() {
    // Daten für das Diagramm (Beispielwerte)
    const gameData = {
        labels: [arr1, arr2,],  // Labels for the X-Axis
        datasets: [
            {
                label: 'Bewertung',
                data: [arr3,], // Bewertungen von 0 bis 8, letzter Punkt ist null
                borderColor: 'rgba(75, 192, 192, 1)', // Linienfarbe für die ersten vier Punkte
                borderWidth: 2, // Linienbreite
                pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Punkt-Farbe
                pointRadius: 5, // Punkt-Radius
                pointHoverRadius: 8, // Punkt-Radius bei Hover
                fill: false // Keine Füllung unter der Linie
            },
            {
                label: 'Bewertung (dotted)',
                data: [arr4,], // Null-Werte für die ersten vier Punkte, Bewertung für den letzten Punkt
                borderColor: 'rgba(75, 192, 192, 1)', // Linienfarbe für den letzten Punkt
                borderWidth: 2, // Linienbreite
                borderDash: [6, 3], // Linienmuster (Dotted) für den letzten Punkt
                pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Punkt-Farbe für den letzten Punkt
                pointRadius: 5, // Punkt-Radius für den letzten Punkt
                pointHoverRadius: 8, // Punkt-Radius bei Hover für den letzten Punkt
                fill: false // Keine Füllung unter der Linie
            }
        ]
    };

            // Optionen für das Diagramm
            const gameOptions = {
                scales: {
                    y: {
                            min: 0,
                            
                            max: 8 // Maximale y-Achsenwert      
                    },

                    x: {
                        min: 0,
                            
                        max: 8 // Maximale x-Achsenwert
                    }
               }
            };

            // Canvas-Element für das Diagramm
            const ctx = document.getElementById('gameChart').getContext('2d');

            // Erstellen des Kurvendiagramms (Liniendiagramms) mit Chart.js
            const chart = new Chart(ctx, {
            type: 'line', // Typ des Diagramms: Kurve (Liniendiagramm)
            data: gameData,
            options: gameOptions
        });
}

// Event-Listener für das Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    // Funktion aufrufen, um das Diagramm zu erstellen und anzuzeigen
    createGameChart();
});