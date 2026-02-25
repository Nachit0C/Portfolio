from abc import ABC, abstractmethod

class IDataValidator(ABC):
    @abstractmethod
    def validate_message(self, name: str, email: str, content: str) -> tuple[bool, str]:
        pass