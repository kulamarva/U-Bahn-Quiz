const uBahnData = {
	"Linien": {
		"U1": [
			{"station": "Oberlaa", "intersections": []},
			{"station": "Neulaa", "intersections": []},
			{"station": "Alaudagasse", "intersections": []},
			{"station": "Altes Landgut", "intersections": []},
			{"station": "Troststraße", "intersections": []},
			{"station": "Reumannplatz", "intersections": []},
			{"station": "Keplerplatz", "intersections": []},
			{"station": "Südtiroler Platz-Hauptbahnhof", "intersections": []},
			{"station": "Taubstummengasse", "intersections": []},
			{"station": "Karlsplatz", "intersections": ["U2", "U4"]},
			{"station": "Stephansplatz", "intersections": ["U3"]},
			{"station": "Schwedenplatz", "intersections": ["U4"]},
			{"station": "Nestroyplatz", "intersections": []},
			{"station": "Praterstern", "intersections": ["U2"]},
			{"station": "Vorgartenstraße", "intersections": []},
			{"station": "Donauinsel", "intersections": []},
			{"station": "Kaisermühlen-VIC", "intersections": []},
			{"station": "Alte Donau", "intersections": []},
			{"station": "Kagran", "intersections": []},
			{"station": "Kagraner Platz", "intersections": []},
			{"station": "Rennbahnweg", "intersections": []},
			{"station": "Aderklaaer Straße", "intersections": []},
			{"station": "Großfeldsiedlung", "intersections": []},
			{"station": "Leopoldau", "intersections": []}
		],
		"U2": [
			{"station": "Karlsplatz", "intersections": ["U1", "U4"]},
			{"station": "Museumsquartier", "intersections": []},
			{"station": "Volkstheater", "intersections": ["U3"]},
			{"station": "Rathaus", "intersections": []},
			{"station": "Schottentor", "intersections": []},
			{"station": "Schottenring", "intersections": ["U4"]},
			{"station": "Taborstraße", "intersections": []},
			{"station": "Praterstern", "intersections": ["U1"]},
			{"station": "Messe-Prater", "intersections": []},
			{"station": "Krieau", "intersections": []},
			{"station": "Stadion", "intersections": []},
			{"station": "Donaumarina", "intersections": []},
			{"station": "Donaustadtbrücke", "intersections": []},
			{"station": "Stadlau", "intersections": []},
			{"station": "Hardeggasse", "intersections": []},
			{"station": "Donauspital", "intersections": []},
			{"station": "Aspernstraße", "intersections": []},
			{"station": "Hausfeldstraße", "intersections": []},
			{"station": "Aspern Nord", "intersections": []},
			{"station": "Seestadt", "intersections": []}
		],
		"U3": [
			{"station": "Simmering", "intersections": []},
			{"station": "Enkplatz", "intersections": []},
			{"station": "Zippererstraße", "intersections": []},
			{"station": "Gasometer", "intersections": []},
			{"station": "Erdberg", "intersections": []},
			{"station": "Schlachthausgasse", "intersections": []},
			{"station": "Kardinal-Nagl-Platz", "intersections": []},
			{"station": "Rochusgasse", "intersections": []},
			{"station": "Landstraße", "intersections": ["U4"]},
			{"station": "Stubentor", "intersections": []},
			{"station": "Stephansplatz", "intersections": ["U1"]},
			{"station": "Herrengasse", "intersections": []},
			{"station": "Volkstheater", "intersections": ["U2"]},
			{"station": "Neubaugasse", "intersections": []},
			{"station": "Zieglergasse", "intersections": []},
			{"station": "Westbahnhof", "intersections": ["U6"]},
			{"station": "Schweglerstraße", "intersections": []},
			{"station": "Johnstraße", "intersections": []},
			{"station": "Hütteldorfer Straße", "intersections": []},
			{"station": "Kendlerstraße", "intersections": []},
			{"station": "Ottakring", "intersections": []}
		],
		"U4": [
			{"station": "Hütteldorf", "intersections": []},
			{"station": "Ober St. Veit", "intersections": []},
			{"station": "Unter St. Veit", "intersections": []},
			{"station": "Braunschweiggasse", "intersections": []},
			{"station": "Hietzing", "intersections": []},
			{"station": "Schönbrunn", "intersections": []},
			{"station": "Meidling Hauptstraße", "intersections": []},
			{"station": "Längenfeldgasse", "intersections": ["U6"]},
			{"station": "Margaretengürtel", "intersections": []},
			{"station": "Pilgramgasse", "intersections": []},
			{"station": "Kettenbrückengasse", "intersections": []},
			{"station": "Karlsplatz", "intersections": ["U1", "U2"]},
			{"station": "Stadtpark", "intersections": []},
			{"station": "Landstraße", "intersections": ["U3"]},
			{"station": "Schwedenplatz", "intersections": ["U1"]},
			{"station": "Schottenring", "intersections": ["U2"]},
			{"station": "Roßauer Lände", "intersections": []},
			{"station": "Friedensbrücke", "intersections": []},
			{"station": "Spittelau", "intersections": ["U6"]},
			{"station": "Heiligenstadt", "intersections": []}
		],
		"U6": [
			{"station": "Siebenhirten", "intersections": []},
			{"station": "Perfektastraße", "intersections": []},
			{"station": "Erlaaer Straße", "intersections": []},
			{"station": "Alterlaa", "intersections": []},
			{"station": "Am Schöpfwerk", "intersections": []},
			{"station": "Tscherttegasse", "intersections": []},
			{"station": "Philadelphiabrücke", "intersections": []},
			{"station": "Niederhofstraße", "intersections": []},
			{"station": "Längenfeldgasse", "intersections": ["U4"]},
			{"station": "Gumpendorfer Straße", "intersections": []},
			{"station": "Westbahnhof", "intersections": ["U3"]},
			{"station": "Burggasse-Stadthalle", "intersections": []},
			{"station": "Thaliastraße", "intersections": []},
			{"station": "Josefstädter Straße", "intersections": []},
			{"station": "Alser Straße", "intersections": []},
			{"station": "Michelbeuern-AKH", "intersections": []},
			{"station": "Währinger Straße-Volksoper", "intersections": []},
			{"station": "Nußdorfer Straße", "intersections": []},
			{"station": "Spittelau", "intersections": ["U4"]},
			{"station": "Jägerstraße", "intersections": []},
			{"station": "Dresdner Straße", "intersections": []},
			{"station": "Handelskai", "intersections": []},
			{"station": "Neue Donau", "intersections": []},
			{"station": "Floridsdorf", "intersections": []}
		]
	}
};

let currentGame = {
	line: null,
	difficulty: 1,
	currentStation: null,
	direction: null,
	score: 0,
	maxScore: 0,
	passedStations: [],
	stations: []
};

const difficultySlider = document.getElementById('difficulty-slider');
const difficultyLabel = document.getElementById('difficulty-label');
const restartBox = document.getElementById('restartbox');

function selectLine(line) {
	document.querySelectorAll('.line-button').forEach(button => button.style.opacity = '0.4');
	document.querySelector(`.line-button.${line.toLowerCase()}`).style.opacity = '1';
	initializeQuiz(line);
	document.getElementById('setupScreen').style.display = 'none';
	document.getElementById('quizScreen').style.display = 'flex';
}

function initializeQuiz(line) {
	const difficulty = parseInt(difficultySlider.value);

	currentGame = {
		line,
		difficulty,
		currentStation: null,
		direction: null,
		score: 0,
		maxScore: 0,
		passedStations: [],
		stations: uBahnData.Linien[line]
	};

	const startStation = getStartStation(line, difficulty);
	currentGame.currentStation = startStation.station;
	currentGame.direction = startStation.direction;
	// Stationen abhängig von der Richtung als passiert markieren
	if (currentGame.direction === 1) {
		// Vorwärts: Alle Stationen bis zur Startstation
		currentGame.passedStations = currentGame.stations
		.slice(0, currentGame.stations.findIndex(s => s.station === startStation.station) + 1)
		.map(s => s.station);
	} else {
		// Rückwärts: Alle Stationen ab der Startstation
		currentGame.passedStations = currentGame.stations
		.slice(currentGame.stations.findIndex(s => s.station === startStation.station))
		.map(s => s.station);
	}

	updateProgressBar();
	showNextQuestion();
	document.getElementById('score').textContent = ` `;
}

function getStartStation(line, difficulty) {
	const stations = uBahnData.Linien[line];
	const endStations = [stations[0].station, stations[stations.length - 1].station];

	switch(difficulty) {
		case 1:
			const startEnd = endStations[Math.floor(Math.random() * 2)];
			return {
				station: startEnd,
				direction: startEnd === endStations[0] ? 1 : -1
			};

		case 2:
			const candidates = stations.filter(s => 
			s.intersections.length > 0 || endStations.includes(s.station)
			);
			const station = candidates[Math.floor(Math.random() * candidates.length)];
			const dir = endStations.includes(station.station) ? 
			(station.station === endStations[0] ? 1 : -1) :
			(Math.random() < 0.5 ? 1 : -1);
			return {
				station: station.station,
				direction: dir
			};

		case 3:
			const randomIndex = Math.floor(Math.random() * stations.length);
			return {
				station: stations[randomIndex].station,
				direction: Math.random() < 0.5 ? 1 : -1
			};
	}
}

function getNextTarget(stationIndex) {
	const stations = currentGame.stations;

	switch(currentGame.difficulty) {
		case 1: {
			const targetIndex = currentGame.direction === 1 
				? stations.length - 1 
				: 0;
			// Hier stationIndex (Funktionsparameter) verwenden, nicht currentIndex
			return stationIndex === targetIndex 
				? null 
				: stations[targetIndex];
			}

		case 2: // Findet nächste Kreuzung/Endstation
			let nextIndex = stationIndex;
			while(true) {
				nextIndex += currentGame.direction;
				if(nextIndex < 0 || nextIndex >= stations.length) return null;
				const s = stations[nextIndex];
				if(s.intersections.length > 0 || 
				nextIndex === 0 || 
				nextIndex === stations.length - 1) {
					return s;
				}
			}

		case 3: // Immer nächste Station
			return stations[stationIndex + currentGame.direction];
	}
}

function shuffleArray(array) {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

function showNextQuestion() {
	const currentIndex = currentGame.stations.findIndex(s => s.station === currentGame.currentStation);
	const nextStation = getNextTarget(currentIndex);

	if (!nextStation) {
		endGame();
		return;
	}

	let question;
	switch(currentGame.difficulty) {
		case 1:
			const otherEnd = currentGame.direction === 1 
				? currentGame.stations[0].station 
				: currentGame.stations[currentGame.stations.length - 1].station;
			question = `Sie befinden sich in der Station ${currentGame.currentStation}. Wie heißt die andere Endstation?`;
			break;

		case 2:
			question = `Wo ist die nächste Umstiegs- oder Endstelle in Richtung ${getEndStation()}?`;
			break;

		case 3:
			question = `Wie heißt die nächste Station in Richtung ${getEndStation()}?`;
			break;
	}

	// Antwortgenerierung für Schwierigkeit 1
	const answers = currentGame.difficulty === 1
		? [getEndStation(), ...generateWrongEndstations(currentGame.line)]
		: [nextStation.station, ...generateRandomAnswers(nextStation.station)];

	document.getElementById('current-station').textContent = currentGame.currentStation;
	document.getElementById('question-text').textContent = question;

	displayAnswers(shuffleArray(answers), nextStation.station);
}

// Hilfsfunktionen für Antwortgenerierung
function generateWrongEndstations(currentLine) {
	const allEnds = Object.values(uBahnData.Linien)
		.map(line => [line[0].station, line[line.length-1].station])
		.flat()
		.filter(end => !uBahnData.Linien[currentLine].some(s => s.station === end));

	// Erst kopieren, dann mischen, dann zuschneiden
	const shuffled = shuffleArray([...allEnds]);
	return shuffled.slice(0, 3);
}

function generateRandomAnswers(correctAnswer) {
	const answers = [];
	while(answers.length < 3) {
		const randomLine = Object.keys(uBahnData.Linien)[Math.floor(Math.random() * 5)];
		const randomStation = uBahnData.Linien[randomLine][Math.floor(Math.random() * uBahnData.Linien[randomLine].length)].station;
		if(!answers.includes(randomStation) && randomStation !== correctAnswer) {
			answers.push(randomStation);
		}
	}
	return answers;
}

function displayAnswers(answers, correctAnswer) {
	const container = document.getElementById('answers');
	container.innerHTML = '';

	answers.forEach(answer => {
		const btn = document.createElement('button');
		btn.className = 'answer-btn';
		btn.textContent = answer;
		btn.onclick = () => handleAnswer(answer === correctAnswer);
		container.appendChild(btn);
	});
}

function showModal(message) {
	const modalOverlay = document.createElement('div');
	modalOverlay.className = 'modal-overlay';

	const modal = document.createElement('div');
	modal.className = 'modal modal_fade-in'; // Start with fade-in animation
	modal.textContent = message;

	document.body.appendChild(modalOverlay);
	document.body.appendChild(modal);

	// Automatically fade out and remove after 1.25s
	setTimeout(() => {
		modal.classList.add('modal_fade-out'); // Start fade-out animation
		setTimeout(() => {
			document.body.removeChild(modalOverlay);
			document.body.removeChild(modal);
		}, 300); // Wait for fade-out to finish before removing
	}, 1250);
}

function handleAnswer(isCorrect) {
	if(isCorrect) {
		currentGame.score++;
		currentGame.maxScore++;
		const currentIndex = currentGame.stations.findIndex(s => s.station === currentGame.currentStation);
		const nextIndex = currentIndex + currentGame.direction;
		const nextStation = getNextTarget(currentIndex);

		// Direkt zum Ziel springen
		currentGame.currentStation = nextStation.station;
		currentGame.passedStations = [
			...currentGame.passedStations,
			...getIntermediateStations(currentIndex, nextStation)
		];
		const newIndex = currentGame.direction === -1
			? currentGame.stations.length - currentGame.passedStations.length
			: currentGame.passedStations.length - 1

		if(currentGame.stations[newIndex].intersections.length > 0) {
			showTransferQuestion(currentGame.stations[newIndex]);
		} else {
			updateProgressBar();
			document.getElementById('score').textContent = `${currentGame.score} / ${currentGame.maxScore}`;
			showNextQuestion();
		}
	} else {
		currentGame.maxScore++;
		showModal('❌');
		updateProgressBar();
		showNextQuestion();
	}
}

function getIntermediateStations(fromIndex, toStation) {
	const toIndex = currentGame.stations.findIndex(s => s === toStation);
	const step = currentGame.direction > 0 ? 1 : -1;
	const stations = [];
	for(let i = fromIndex + step; i !== toIndex + step; i += step) {
		stations.push(currentGame.stations[i].station);
	}
	return stations;
}

function showTransferQuestion(station) {
	document.getElementById('answers').style.display = 'none';
	const transferDiv = document.getElementById('transfer-question');
	transferDiv.style.display = 'block';
	document.getElementById('current-station').textContent = station.station;
	document.getElementById('question-text').textContent = '';
	updateProgressBar();

	const optionsDiv = document.getElementById('transfer-options');
	optionsDiv.innerHTML = '';

	const allLines = ['U1', 'U2', 'U3', 'U4', 'U6'].filter(l => l !== currentGame.line);

	allLines.forEach(line => {
		const button = document.createElement('button');
		button.textContent = line;
		button.className = `transfer-btn line-button ${line.toLowerCase()}`; // Use existing styles
		button.style.opacity = '0.4'; // Default transparent

		button.onclick = () => {
			if (button.classList.contains('selected')) {
				button.classList.remove('selected');
				button.style.opacity = '0.4';
			} else {
				button.classList.add('selected');
				button.style.opacity = '1';
			}
		};
		optionsDiv.appendChild(button);
	});
}

function checkTransfer() {
	const selectedButtons = document.querySelectorAll('.transfer-btn.selected');
	const selectedLines = Array.from(selectedButtons).map(btn => btn.textContent);
	const correctLines = currentGame.stations.find(s => s.station === currentGame.currentStation).intersections;

	const isPerfectMatch = 
		selectedLines.length === correctLines.length &&
		selectedLines.every(line => correctLines.includes(line)) &&
		correctLines.every(line => selectedLines.includes(line));

	if (isPerfectMatch) {
		currentGame.score++;
		showModal('✅ +1');
	} else {
		showModal(`❌ ${correctLines.join(', ') || "keine"}`);
	}

	currentGame.maxScore++;
	document.getElementById('score').textContent = `${currentGame.score} / ${currentGame.maxScore}`;
	document.getElementById('answers').style.display = 'grid';
	document.getElementById('transfer-question').style.display = 'none';

	updateProgressBar();
	showNextQuestion();
}


function getEndStation() {
	return currentGame.direction === 1 
		? currentGame.stations[currentGame.stations.length - 1].station
		: currentGame.stations[0].station;
}

function updateProgressBar() {
	const progressLine = document.getElementById('progress-line');
	progressLine.innerHTML = ''; // Reset the progress line

	let startColorIndex = -1;
	let endColorIndex = -1;

	// Create colored progress line (initially hidden)
	const coloredPart = document.createElement('div');
	coloredPart.className = 'colored-progress';
	coloredPart.style.backgroundColor = `var(--${currentGame.line.toLowerCase()})`;
	coloredPart.style.left = '0';
	coloredPart.style.width = '0';
	progressLine.appendChild(coloredPart);

	currentGame.stations.forEach((station, index) => {
		// Create station circles
		const stationEl = document.createElement('div');
		stationEl.className = 'progress-station';
		stationEl.style.left = `${(index / (currentGame.stations.length - 1)) * 100}%`;

		if (currentGame.passedStations.includes(station.station)) {
			stationEl.style.backgroundColor = `var(--${currentGame.line.toLowerCase()})`;

			// Update start and end index for coloring the line
			if (startColorIndex === -1) {
				startColorIndex = index;
			}
			endColorIndex = index;
		} else {
			stationEl.style.backgroundColor = 'white';
		}

		progressLine.appendChild(stationEl);
	});

	// Adjust the colored progress part based on start and end index
	if (startColorIndex !== -1 && endColorIndex !== -1) {
		coloredPart.style.left = `${(startColorIndex / (currentGame.stations.length - 1)) * 100}%`;
		coloredPart.style.width = `${((endColorIndex - startColorIndex) / (currentGame.stations.length - 1)) * 100}%`;
	}
}

function endGame() {
	const percentage = ((currentGame.score / currentGame.maxScore) * 100).toFixed(0);
	const correct_ten = Math.floor(currentGame.score / 10).toString();
	const correct_one = (currentGame.score % 10).toString();
	const possible_ten = Math.floor(currentGame.maxScore / 10).toString();
	const possible_one = (currentGame.maxScore % 10).toString();

	document.getElementById("percentage").textContent = percentage;
	document.getElementById("correct_ten").textContent = correct_ten;
	document.getElementById("correct_one").textContent = correct_one;
	document.getElementById("possible_ten").textContent = possible_ten;
	document.getElementById("possible_one").textContent = possible_one;
	document.getElementById('quizScreen').style.display = 'none';
	document.body.style.backgroundColor = '#f00';
	document.body.style.border = '1vmax solid #f00';
	document.getElementById('endScreen').style.display = 'flex';
}

difficultySlider.addEventListener("input", function () {
	const value = difficultySlider.value;
	if (value == 1) difficultySlider.style.background = "green";
	else if (value == 2) difficultySlider.style.background = "orange";
	else if (value == 3) difficultySlider.style.background = "red";
});

restartBox.addEventListener("click", function () {
	location.reload()
});

introScreen.addEventListener("click", function () {
    document.getElementById('introScreen').style.display = 'none';
	document.getElementById('setupScreen').style.display = 'flex';
	document.body.style.backgroundColor = '#fff';
	document.body.style.border = '1vmax solid #fff';
	enterFullscreen();
});

//const timeoutID = setTimeout(() => {
//  introScreen.style.display = 'none';
//  document.body.style.backgroundColor = '#fff';
//  document.body.style.border = '1vmax solid #fff';
//  setupScreen.style.display = 'flex';
// }, 5000);

function enterFullscreen() {
	let elem = document.documentElement; // Fullscreen the entire page
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { // Firefox
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { // Chrome, Safari
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { // IE/Edge
		elem.msRequestFullscreen();
	}
    lockOrientation();
}

function lockOrientation() {
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock("landscape").catch((err) => console.warn("Orientation lock failed:", err));
    }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('ServiceWorker registered');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed:', err);
      });
  });
}