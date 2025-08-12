// src/components/InstagramPost.jsx
import { useEffect } from "react";

export default function InstagramPost({ url, maxWidth = 540 }) {
  useEffect(() => {
    const scriptId = "instagram-embed";
    const existing = document.getElementById(scriptId);

    const process = () => window.instgrm && window.instgrm.Embeds.process();

    if (!existing) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      s.onload = process;
      document.body.appendChild(s);
    } else {
      process();
    }
  }, [url]);

  const permalink = url.split("?")[0].replace(/\/$/, "") + "/";

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{
        background: "#fff",
        border: 0,
        margin: "16px auto",
        maxWidth: `${maxWidth}px`,
        width: "100%",
      }}
    />
  );
}
