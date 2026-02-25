from abc import ABC, abstractmethod

class IPersistence(ABC):
    @abstractmethod
    def save_message(self, name, email, content): pass
    
    @abstractmethod
    def save_visit(self, ip_hashed): pass

    @abstractmethod
    def get_visit(self, ip_hashed):pass
    
    @abstractmethod
    def rollback(self): pass