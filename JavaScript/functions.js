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

// Function to sort the arrays and create the game charts
function sortAndCreateGameCharts() {
  // Create the game chart for arr1 and arr3
  createGameChart('gameChart1', arr1, arr3);

  // Create the game chart for arr2 and arr4
  createGameChart('gameChart2', arr2, arr4);
}

// Function to create a game chart with the given chartId and arrays
function createGameChart(chartId, arr1, arr3) {
  // Daten für das Diagramm (Beispielwerte)
  const gameData = {
    labels: arr1,
    datasets: [
      {
        label: 'Bewertung',
        data: arr3,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: false
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
        ticks: {},
        min: 0,
        max: 8 // Maximale x-Achsenwert
      }
    }
  };

  // Canvas-Element für das Diagramm
  const ctx = document.getElementById(chartId).getContext('2d');

  // Erstellen des Kurvendiagramms (Liniendiagramms) mit Chart.js
  const chart = new Chart(ctx, {
    type: 'line',
    data: gameData,
    options: gameOptions
  });
}

// Event-Listener für das Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
  // Sort the arrays and create the game charts
  sortAndCreateGameCharts();
});