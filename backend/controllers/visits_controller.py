import hashlib
import os
from dotenv import load_dotenv
from flask import jsonify, request
from flask.views import MethodView
from db.interface import IPersistence
from db.models import Visit

load_dotenv()

class VisitsController(MethodView):
    def __init__(self, visit_persistence: IPersistence):
        self.visit_persistence = visit_persistence
    
    def _get_ip_hash(self, ip_address):
        salt = os.getenv('IP_SALT', 'default_salt')
        return hashlib.sha256((ip_address + salt).encode()).hexdigest()
    
    def _get_client_ip(self):
        if request.headers.getlist("X-Forwarded-For"):
            return request.headers.getlist("X-Forwarded-For")[0].split(',')[0].strip()
        return request.remote_addr
    
    def post(self):
        ip_address = self._get_client_ip()
        ip_hashed = self._get_ip_hash(ip_address)
        self.visit_persistence.save_visit(ip_hashed)
        return jsonify({"status": "success"}), 200
    
    def get(self):
        ip_address = self._get_client_ip()
        ip_hashed = self._get_ip_hash(ip_address)
        visit = self.visit_persistence.get_visit(ip_hashed)
        if not visit:
            return jsonify({"status": "error", "message": "Visit not found"}), 404
        return jsonify({"status": "success"}), 200
