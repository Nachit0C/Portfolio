import os
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db(app):
    load_dotenv()
    url = os.getenv('DB_URL')

    if not url:
        raise ValueError("Error: La variable de entorno DB_URL no está configurada o está vacía.")

    if url.startswith("postgres://"):
        url = url.replace("postgres://", "postgresql://", 1)

    
    app.config['SQLALCHEMY_DATABASE_URI'] = url
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db.init_app(app)

    try:
        with app.app_context():
            from db.models import Visit, Message
            db.create_all()
            print("Tablas creadas/verificadas exitosamente.")
    except Exception as e:
        print(f"Error específico al crear tablas: {e}")
        raise e
