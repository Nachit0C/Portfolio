from flask import Blueprint
from controllers.messages_controller import MessagesController
from db.db import db
from db.persistence import Persistence
from services.resend import ResendService
from services.data_validator import DataValidator

message_bp = Blueprint('messages', __name__, url_prefix='/messages')

email_service = ResendService()
persistance = Persistence(db)
data_validator = DataValidator()

message_view = MessagesController.as_view('message_view', email_service=email_service, message_persistence=persistance, data_validator=data_validator)

message_bp.add_url_rule('/', view_func=message_view, methods=['POST'])