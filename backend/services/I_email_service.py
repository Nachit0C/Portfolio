from abc import ABC, abstractmethod

class IEmailService(ABC):
    @abstractmethod
    def send(self, to_email, from_email, subject, content):
        pass
