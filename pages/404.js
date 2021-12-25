import Link from "next/link";
export default function Custom404() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Back To Home</a>
      </Link>
    </div>
  );
}
