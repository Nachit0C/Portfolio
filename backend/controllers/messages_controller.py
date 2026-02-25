import os
from flask import jsonify, request
from flask.views import MethodView
from db.interface import IPersistence
from services.I_email_service import IEmailService
from services.I_data_validator import IDataValidator

class MessagesController(MethodView):
    def __init__(self, email_service: IEmailService, message_persistence: IPersistence, data_validator: IDataValidator):
        self.email_service = email_service
        self.message_persistence = message_persistence
        self.data_validator = data_validator

    def post(self):
        data = request.json
        name = data.get('name')
        email = data.get('email')
        content = data.get('message')

        is_valid, error_message = self.data_validator.validate_message(name, email, content)
        if not is_valid:
            return jsonify({"status": "error", "message": error_message}), 400
        
        try:
            self.message_persistence.save_message(name=name, email=email, content=content)
            
            mail_sent = self.email_service.send(
                to_email=os.getenv("MY_EMAIL"),
                from_email=email,
                subject=f"Mensaje de {name} enviado desde el portfolio",
                content=f"<p>{content}</p><p>Enviado por: {name} ({email})</p>"
            )

            if not mail_sent:
                raise Exception("El servicio de mail falló")

            return jsonify({"status": "success", "message": "Enviado"}), 200
        
        except Exception as e:
            self.message_persistence.rollback()
            return jsonify({"status": "error", "message": str(e)}), 500