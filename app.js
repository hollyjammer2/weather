const weatherForm = document.getElementById('weatherForm');

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Замените на ваш реальный API, если нужно

async function submitWeatherData(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const temperature = document.getElementById('temperature').value;
    const condition = document.getElementById('condition').value;
    const humidity = document.getElementById('humidity').value;
    const wind = document.getElementById('wind').value;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                city,
                temperature,
                condition,
                humidity,
                wind,
                userId: 1 // Если нужно, можно оставить или убрать
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка при отправке данных');
        }

        const newWeatherData = await response.json();
        alert(`Данные о погоде добавлены с ID: ${newWeatherData.id}`);
        weatherForm.reset();
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Не удалось добавить данные о погоде');
    }
}

weatherForm.addEventListener('submit', submitWeatherData);
