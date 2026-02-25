from flask import Flask
from flask_cors import CORS
from db.db import init_db
from dotenv import load_dotenv

from routes.visits_routes import visits_bp
from routes.messages_routes import message_bp

load_dotenv()
app = Flask(__name__)
CORS(app)

try:
    init_db(app)
    print("Conexión a la base de datos exitosa")
except Exception as e:
    print(f"Error al conectar a la base de datos: {str(e)}")

app.register_blueprint(message_bp)
app.register_blueprint(visits_bp)

@app.route('/')
def home():
    return "Servidor Activo con PostgreSQL conectado"

if __name__ == '__main__':
    app.run(debug=True, port=5001)