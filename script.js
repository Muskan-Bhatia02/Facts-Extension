const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ada3920camsh547b4aee2e690e1p1be6a6jsncc40c1bba7e1',
		'X-RapidAPI-Host': 'random-facts2.p.rapidapi.com'
	}
};

fetch('https://random-facts2.p.rapidapi.com/getfact', options)
	.then(response => response.json())
	


.then(factData => {
        const factText = factData.Fact;
        const factElement = document.getElementById('factElement');

        factElement.innerHTML = factText;
    })




	.catch(err => console.error(err));






    // .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));