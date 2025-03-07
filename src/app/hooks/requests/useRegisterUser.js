import { API_PATHS } from "@/lib/constants";
import useFetch from "@hooks/useFetch";

export default function useRegisterUser() {
  const { fetch, loading } = useFetch();

  const request = async (payload) => {
    const { data } = await fetch(API_PATHS.AUTH.USER_REGISTER, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    return Boolean(data);
  };

  return { fetch: request, loading };
}
