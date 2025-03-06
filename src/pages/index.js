import { authRedirect } from "@/lib/middlewares";

export async function getServerSideProps({ req }) {
  return authRedirect(req);
}

export default function HomePage() {
  return <h1>Welcome to Home</h1>;
}
