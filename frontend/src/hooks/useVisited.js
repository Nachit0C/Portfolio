import { useState, useEffect } from 'react'

export function useVisited() {
    const [liked, setLiked] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
    const checkLikeStatus = async () => {
        try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL_VISIT);
        if (response.ok) {
            setLiked(true);
        }
        } catch (error) {
        console.error("Error al verificar el estado del like:", error);
        }
    };
    checkLikeStatus();
    }, []);
    
    const saveVisit = async () => {
        if (liked || isPending) return false;
        setError(null);
        setIsPending(true);
        setLiked(true);

        try {
            const response = await fetch(import.meta.env.VITE_BACKEND_URL_VISIT, {
                method: 'POST'
            });
            if (!response.ok){
                throw new Error("Error en el servidor");
            }
            
            return true;
        } catch (err) {
            console.error("Error al registrar el like:", err);
            setError("Error al registrar el Like, intenta de nuevo mas tarde.");
            setLiked(false);
            return false;
        } finally {
            setIsPending(false);
        }
    }

    return { liked, saveVisit, error };
}