from flask import Flask, jsonify
from flask_cors import CORS
app=Flask(__name__)
CORS(app)

@app.get("/api/weather")
def get_weather():
 weather=[
    {
       "name": "Москва",
       "description": "Температура: 20°C. Состояние: Облачно.  Влажность: 65%. Ветер: 5 км/ч",
       "date": "26.03.2025"
    },
    {
       "name": "Санкт-Петербург",
       "description": "Температура: 18°C. Состояние: Дождь. Влажность: 70%. Ветер: 10 км/ч",
       "date": "26.03.2025"
    },
    {
           "name": "Златоуст",
           "description": "Температура: 15°C. Состояние: Ясно. Влажность: 50%. Ветер: 7 км/ч",
           "date": "26.03.2025"
        },
   ]
 return jsonify(weather)
def main():
    app.run("0.0.0.0", 8000, debug=True)
 
    
if __name__ == "__main__":
    main()