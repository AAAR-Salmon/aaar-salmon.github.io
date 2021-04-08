window.addEventListener('load', event => {
	const selectorProblems = document.getElementById("post_problem");
	const problemsRef = db.collection("problems");
	problemsRef.orderBy("id", "asc").get().then(res => {
		res.forEach(doc => {
			const nodeOptionProblem = document.createElement("option");
			nodeOptionProblem.value = doc.id;
			nodeOptionProblem.textContent = doc.data().title;
			selectorProblems.appendChild(nodeOptionProblem);
		});
	});
});

const formPost = document.forms.post;
formPost.addEventListener('submit', event => {
	console.log("submit event called.");
	db.collection("submissions").doc().set({
		problem: db.collection("problems").doc(formPost.problem.value),
		score: parseInt(formPost.score.value),
		language: formPost.language.value,
		contestant: formPost.contestant.value,
		timestamp: new Date(formPost.timestamp.value),
		url: formPost.url.value
	}).then(res => {
		window.alert("送信が完了しました。");
		formPost.reset();
	}).catch(res => {
		window.alert("送信に失敗しました。");
	});
	event.preventDefault();
}, {
	passive: false
});
