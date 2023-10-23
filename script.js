// your code here
const btn = document.getElementById('button');
		const text = document.querySelector('.text');
		const num = document.querySelector('.number');
		const head = document.getElementById('url');
		btn.addEventListener('click', function() {
			if(text.value && num.value) {
				 head.textContent = `https://localhost:8080/?name=${text.value}&year=${num.value}`;
			}else if(text.value) {
				head.textContent = `https://localhost:8080/?name=${text.value}`;
			}else if(num.value) {
				head.textContent = `https://localhost:8080/?year=${num.value}`;
			}else {
				head.textContent = `nigga`;
			}
		})