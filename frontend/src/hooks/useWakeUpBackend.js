export async function useWakeUpBackend() {
  const url = import.meta.env.VITE_API_URL_HEALTHCHECK;
  try {
    const response = await fetch(url);
    if (response.ok) console.log("Backend está despierto 🚀");
  } catch (error) {
    console.error("Error al despertar el backend:", error);
  }
  return;
};
