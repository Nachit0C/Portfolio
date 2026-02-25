from flask import Blueprint
from controllers.visits_controller import VisitsController
from db.db import db
from db.persistence import Persistence

visits_bp = Blueprint('visits', __name__, url_prefix='/visits')

persistance = Persistence(db)

visits_view = VisitsController.as_view('visits_view', visit_persistence=persistance)

visits_bp.add_url_rule('/', view_func=visits_view, methods=['POST'])
visits_bp.add_url_rule('/', view_func=visits_view, methods=['GET'])