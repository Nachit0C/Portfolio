from flask import Blueprint
from db.db import db
from flask import jsonify
from sqlalchemy import text

healthcheck_bp = Blueprint('healthcheck', __name__, url_prefix='/healthcheck')

@healthcheck_bp.route('/')
def healthcheck():
    try:
        db.session.execute(text('SELECT 1'))
        
        return jsonify({
            "status": "success",
            "api": "ok",
            "database": "ok"
        }), 200
    except Exception as e:
        return jsonify({
            "status": "error",
            "api": "ok",
            "database": "disconnected",
            "details": str(e)
        }), 503
