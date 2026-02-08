export const metadata = {
  title: "Menu",
};

export default function MenuPage() {
  const LOGO_BOX_HEIGHT = 56;
  const LOGO_BOX_WIDTH = 320;
  const LOGO_OFFSET_X = 0;

  return (
    <main
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <header
        style={{
          height: 72,
          padding: "6px 12px",
          borderBottom: "1px solid rgba(11,15,25,0.10)",
          background: "#ffffff",
          color: "#0b0f19",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: 0,
            height: "100%",
          }}
        >
          <div
            style={{
              height: LOGO_BOX_HEIGHT,
              width: LOGO_BOX_WIDTH,
              maxWidth: "58vw",
              display: "flex",
              alignItems: "center",
              transform: `translateX(${LOGO_OFFSET_X}px)`,
            }}
          >
            <img
              src="/vrundavan-logo-1.png"
              alt="Vrundavan Restaurant"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
                objectPosition: "left center",
                display: "block",
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            href="/menu.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "7px 10px",
              borderRadius: 10,
              background: "#eef1f6",
              color: "#0b0f19",
              textDecoration: "none",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Open
          </a>
          <a
            href="/menu.pdf"
            download
            style={{
              padding: "7px 10px",
              borderRadius: 10,
              background: "#2b59ff",
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Download
          </a>
        </div>
      </header>

      <section style={{ flex: 1, minHeight: 0, background: "#0b0f19" }}>
        <iframe
          title="Menu PDF"
          src="/menu.pdf#view=FitH&toolbar=1&navpanes=0"
          style={{ width: "100%", height: "100%", border: 0, display: "block" }}
        />
      </section>
    </main>
  );
}
