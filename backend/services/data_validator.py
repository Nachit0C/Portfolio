import re
from .I_data_validator import IDataValidator

class DataValidator(IDataValidator):
    def validate_message(self, name, email, content):
        if not name or len(name.strip()) == 0:
            return False, "El nombre es obligatorio."
        if len(name) > 50:
            return False, "El nombre no puede superar los 50 caracteres."

        if not email or len(email.strip()) == 0:
            return False, "El email es obligatorio."
        if len(email) > 100:
            return False, "El email no puede superar los 100 caracteres."
        
        email_regex = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if not re.match(email_regex, email):
            return False, "El formato del email es inválido."

        if not content or len(content.strip()) == 0:
            return False, "El mensaje no puede estar vacío."
        if len(content) > 3000:
            return False, "El mensaje es demasiado largo (máximo 3000 caracteres)."

        return True, ""