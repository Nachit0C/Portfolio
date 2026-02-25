import { useState } from 'react';

export function useContactForm(initialState = { name: '', email: '', message: '' }) {
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [formStatus, setFormStatus] = useState({ type: 'success', msg: '', open: false });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleClear = () => setFormData(initialState);

    const closeStatus = () => setFormStatus(prev => ({ ...prev, open: false }));

    const sendEmail = async (successMsg, errorMsg) => {
        setLoading(true);
        try {
            const response = await fetch(import.meta.env.VITE_BACKEND_URL_MESSAGE, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error();

            setFormStatus({ type: 'success', msg: successMsg, open: true });
            handleClear();
            return true;
        } catch (error) {
            setFormStatus({ type: 'error', msg: errorMsg, open: true });
            console.error('Error sending email:', error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { 
        formData, loading, formStatus, 
        handleChange, handleClear, sendEmail, closeStatus 
    };
}