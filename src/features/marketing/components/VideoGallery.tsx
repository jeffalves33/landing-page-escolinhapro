"use client";

import { useEffect, useRef, useState } from "react";
import { videoItems } from "../data/content";
import { Icon } from "./Icon";
import styles from "../styles/marketing.module.css";

export function VideoGallery() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className={styles.videoGrid}>
        {videoItems.map((video, index) => (
          <article className={`${styles.videoCard} ${index === 0 ? styles.videoCardFeatured : ""}`} key={video.title}>
            <div className={styles.videoThumb}>
              <div className={styles.videoThumbGrid} />
              <div className={styles.videoThumbIcon}><Icon name={video.icon}/></div>
              {video.status === "available" ? (
                <button type="button" aria-label={`Reproduzir ${video.title}`} onClick={() => setOpen(true)}><Icon name="play"/></button>
              ) : <span>Em breve</span>}
            </div>
            <div className={styles.videoMeta}><span>{video.status === "available" ? "DEMONSTRAÇÃO" : "EM PRODUÇÃO"}</span><h3>{video.title}</h3><p>{video.duration}</p></div>
          </article>
        ))}
      </div>
      {open && (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <div className={styles.videoModal} role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
            <div className={styles.modalHeader}><div><span>PRÉVIA LOCAL</span><h2 id="video-modal-title">Primeiros passos no Escolinha Pro</h2></div><button ref={closeRef} type="button" aria-label="Fechar vídeo" onClick={() => setOpen(false)}><Icon name="close"/></button></div>
            <video controls autoPlay playsInline preload="metadata" poster="/marketing/images/video-poster.svg">
              <source src="/marketing/videos/primeiros-passos-demo.mp4" type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
