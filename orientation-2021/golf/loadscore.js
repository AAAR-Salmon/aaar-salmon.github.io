// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyApSAjkIgvaVl1uuIb4ysU8yVIQ-eASIoc",
	authDomain: "salmon-githubio.firebaseapp.com",
	projectId: "salmon-githubio",
	storageBucket: "salmon-githubio.appspot.com",
	messagingSenderId: "909200478002",
	appId: "1:909200478002:web:c6a2c4c0ae70c1c833512b",
	measurementId: "G-KB84M5ZL7B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

const leaderboard = document.getElementById("leaderboard");
const submissionsRef = db.collection("submissions");
const problemsRef = db.collection("problems");
const parsRef = db.collection("pars");
for (let id of ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]) {
	problemsRef.where("id", "==", id).get().then(res => {
		return new Promise((resolve, reject) => {
			const prob = res.docs[0];
			resolve([prob.id, prob.data().title, prob.data().url]);
		});
	}).then(([probId, probTitle, probUrl]) => {
		const promiseSubmissions = submissionsRef.where("problem", "==", problemsRef.doc(probId)).get();
		const promisePars = parsRef.where("problem", "==", problemsRef.doc(probId)).get();
		Promise.all([
			promiseSubmissions,
			promisePars
		]).then(([resSubmissions, resPars]) => {
			let shortest = null;
			let par = null;
			if (resSubmissions.docs.length > 0) {
				shortest = resSubmissions.docs[0];
				resSubmissions.forEach(doc => {
					if (doc.data().score < shortest.data().score || doc.data().score == shortest.data().score && doc.data().timestamp < shortest.data().timestamp) {
						shortest = doc;
					}
				});
			}
			if (resPars.docs.length > 0) {
				par = resPars.docs[0];
			}

			const nodeRow = document.createElement("tr");
			// problem
			const nodeProbrem = document.createElement("td");
			const nodeProbremLink = document.createElement("a");
			const nodeProbremTitle = document.createTextNode(probTitle);
			nodeProbremLink.href = probUrl;
			nodeProbremLink.appendChild(nodeProbremTitle);
			nodeProbrem.appendChild(nodeProbremLink);
			nodeRow.appendChild(nodeProbrem);
			// par
			const nodePar = document.createElement("td");
			const nodeParScore = document.createTextNode("");
			nodePar.appendChild(nodeParScore);
			nodeRow.appendChild(nodePar);
			// par language
			const nodeParLanguage = document.createElement("td");
			const nodeParLanguageName = document.createTextNode("");
			nodeParLanguage.appendChild(nodeParLanguageName);
			nodeRow.appendChild(nodeParLanguage);
			// shortest
			const nodeShortest = document.createElement("td");
			const nodeShortestScore = document.createTextNode("");
			nodeShortest.appendChild(nodeShortestScore);
			nodeRow.appendChild(nodeShortest);
			// contestant
			const nodeContestant = document.createElement("td");
			const nodeContestantName = document.createTextNode("");
			nodeContestant.appendChild(nodeContestantName);
			nodeRow.appendChild(nodeContestant);
			// language
			const nodeLanguage = document.createElement("td");
			const nodeLanguageName = document.createTextNode("");
			nodeLanguage.appendChild(nodeLanguageName);
			nodeRow.appendChild(nodeLanguage);

			if (shortest !== null) {
				nodeShortestScore.textContent = shortest.data().score;
				nodeContestantName.textContent = shortest.data().contestant;
				nodeLanguageName.textContent = shortest.data().language;
			}

			if (par !== null) {
				nodeParScore.textContent = par.data().score;
				nodeParLanguageName.textContent = par.data().language;
			}

			leaderboard.appendChild(nodeRow);
		});
	});
}
