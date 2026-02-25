import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLanguageStore = create(persist((set, get) => {
    return{
        language: 'es',
        toggleLanguage: () => {
            set(() => {
                return get().language === 'es' ? {language: 'en'} : {language: 'es'};
            })
        }
    }
}), {
    name: 'page-language'
});
