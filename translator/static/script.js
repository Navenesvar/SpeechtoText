document.getElementById('recordButton').onclick = function() {
    document.getElementById('status').innerText = "Listening...";

    fetch('/translate/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'language=' + document.getElementById('language').value,
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('status').innerText = "Error: " + data.error;
        } else {
            document.getElementById('inputText').innerText = data.input_text;
            document.getElementById('translatedText').innerText = data.translated_text;
            document.getElementById('status').innerText = "Translation complete";
        }
    });
};

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
