from db.interface import IPersistence
from .models import Message, Visit

class Persistence(IPersistence):
    def __init__(self, db):
        self.db = db

    def save_message(self, name, email, content):
        new_message = Message(name=name, email=email, content=content)
        self.db.session.add(new_message)
        self.db.session.commit()

    def save_visit(self, ip_hashed):
        new_visit = Visit(ip_hashed=ip_hashed)
        self.db.session.add(new_visit)
        self.db.session.commit()

    def get_visit(self, ip_hashed):
        return self.db.session.query(Visit).filter_by(ip_hashed=ip_hashed).first()

    def rollback(self):
        self.db.session.rollback()