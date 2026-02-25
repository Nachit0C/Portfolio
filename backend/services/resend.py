import resend
import os
from .I_email_service import IEmailService

class ResendService(IEmailService):
    def __init__(self):
        resend.api_key = os.getenv("RESEND_API_KEY")
        self.sender = "onboarding@resend.dev"

    def send(self, to_email, from_email, subject, content):
        try:
            resend.Emails.send({
                "from": self.sender,
                "to": to_email,
                "subject": subject,
                "reply_to": from_email,
                "html": content
            })
            return True
        except Exception as e:
            print(f"Error sending email: {e}")
            return False