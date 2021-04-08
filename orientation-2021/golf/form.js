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
