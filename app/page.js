import Link from "next/link";

export default function Home() {
  const LOGO_OFFSET_X = 0;

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <section style={{ width: "100%", maxWidth: 720 }}>
        <div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
          <div style={{ transform: `translateX(${LOGO_OFFSET_X}px)` }}>
            <img
              src="/vrundavan-logo-1.png"
              alt="Vrundavan Restaurant"
              style={{ height: 64, width: "auto", objectFit: "contain", display: "block" }}
            />
          </div>
        </div>
        <p style={{ opacity: 0.85, lineHeight: 1.5, marginTop: 12 }}>
          Open the menu here:
        </p>
        <Link
          href="/menu"
          style={{
            display: "inline-block",
            marginTop: 12,
            padding: "12px 16px",
            borderRadius: 12,
            background: "#2b59ff",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          View Menu
        </Link>
      </section>
    </main>
  );
}
