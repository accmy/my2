    
        fetch('https://api.jsonstorage.net/v1/json/4e66c686-c852-4cf9-a34d-5d7c2476219b/6b3875d0-9bad-4350-97b8-a54f84bab547')
            .then(response => response.text())
            .then(data => {
                document.getElementById('marquee').innerHTML = data;
            })
            .catch(error => {
                document.getElementById('error-message').innerText = 'Error loading text file: ' + error;
                new bootstrap.Modal(document.getElementById('errorModal')).show();
            });
    
