from datetime import datetime
from .db import db

class Visit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip_hashed = db.Column(db.String(70), nullable=False)
    fecha = db.Column(db.DateTime, default=datetime.utcnow)

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    fecha = db.Column(db.DateTime, default=datetime.utcnow)