// Send POST request to api server.
const baseUrl = "http://localhost/backend/PHP/index.php?";

export function postData(userData, invokeCall) {
	let url = baseUrl + invokeCall + "=1";
	var request = {
		method: "POST",
		body: JSON.stringify(userData)
	};

	return fetch(url, request)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				return response;
			}
		})
		.catch(error => {
			console.log(error);
		});
}

// Send get request to api server.
export function getData(invokeCall, urlParams = "") {
	let url = "";
	if (urlParams != "") {
		url =
			"http://localhost/backend/PHP/index.php?" +
			invokeCall +
			"=1&" +
			urlParams;
	} else {
		url = "http://localhost/backend/PHP/index.php?" + invokeCall + "=1";
	}

	console.log(url);
	var getRequest = {
		method: "GET",
		credentials: "same-origin"
	};

	return fetch(url, getRequest)
		.then(response => {
			return response.json();
		})
		.catch(error => {
			console.log(error);
		});
}
