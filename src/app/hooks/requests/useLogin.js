import { API_PATHS } from "@/lib/constants";
import useFetch from "@hooks/useFetch";

export default function useLogin() {
  const { fetch, loading } = useFetch();

  const request = async (payload) => {
    const { error } = await fetch(API_PATHS.AUTH.LOGIN, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    console.log('error',error);
    

    if (error) throw new Error("Error de autenticacion");

    return;
  };

  return { fetch: request, loading };
}
