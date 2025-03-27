import { API_PATHS } from "@/lib/constants";
import useFetch from "@hooks/useFetch";

export default function useLogout() {
  const { fetch, loading } = useFetch();

  const request = async () => {
    const { error } = await fetch(API_PATHS.AUTH.LOGOUT, {
      method: "POST",
      body: null,
    });

    if (error) throw new Error("Error al cerrar sesión", error);

    return;
  };

  return { fetch: request, loading };
}
