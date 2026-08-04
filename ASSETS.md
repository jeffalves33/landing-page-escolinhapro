# Inventário de assets

A landing voltou a usar **ilustrações desenvolvidas em React e CSS**. As telas do produto não dependem de screenshots estáticos e mantêm proporção controlada no responsivo.

| Arquivo | Finalidade | Dimensões/proporção | Local | Uso | Status |
|---|---|---:|---|---|---|
| `brand-mark.png` | Símbolo oficial do Escolinha Pro | 512×512, fundo transparente | `public/marketing/images/` | Header, footer, mockups e Apple icon | Final, criado a partir do símbolo fornecido |
| `favicon.ico` | Ícone do navegador | múltiplas resoluções até 256×256 | `public/` | Metadata/favicon | Final |
| `og-escolinha-pro.png` | Imagem de compartilhamento | 1200×630 | `public/marketing/images/` | Open Graph e Twitter | Final cenográfico |
| `video-poster.svg` | Capa do vídeo de primeiros passos | 1280×720 | `public/marketing/images/` | Área de documentação | Placeholder profissional |
| `primeiros-passos-demo.mp4` | Prévia do player de documentação | 1280×720 | `public/marketing/videos/` | Modal de vídeo | Substituir pelo tutorial oficial quando existir |
| `ProductMockup.tsx` | Ilustrações de dashboard, alunas, chamadas e financeiro | Responsivas | `src/features/marketing/components/` | Hero, tour e dispositivos | Final em React/CSS com dados cenográficos |

## Dados cenográficos

Os nomes, números, turmas, valores e indicadores exibidos nas ilustrações são fictícios. Nenhuma imagem expõe dados reais de alunas, responsáveis ou instituições.

## Substituições futuras

A landing não exige screenshots do sistema para funcionar. Somente o vídeo demonstrativo pode ser substituído mantendo o mesmo nome e caminho:

```text
public/marketing/videos/primeiros-passos-demo.mp4
```

## Dependences Install
```
npm ci --loglevel verbose --timing --foreground-scripts --no-audit --no-fund
```

4. Cadastrar os cinco vídeos

Abra:

src/features/marketing/data/content.ts

Localize:

export const videoItems = [
  {
    title: "Primeiros passos",
    duration: "Prévia de 00:08",
    status: "available",
    icon: "rocket",
  },
  {
    title: "Como organizar turmas",
    duration: "Tutorial em preparação",
    status: "soon",
    icon: "school",
  },
  {
    title: "Como configurar cobranças",
    duration: "Tutorial em preparação",
    status: "soon",
    icon: "wallet",
  },
  {
    title: "Como registrar chamadas",
    duration: "Tutorial em preparação",
    status: "soon",
    icon: "check",
  },
  {
    title: "Como acompanhar o financeiro",
    duration: "Tutorial em preparação",
    status: "soon",
    icon: "chart",
  },
] as const;

Substitua por:

export const videoItems = [
  {
    title: "Primeiros passos",
    duration: "Tutorial introdutório",
    status: "available",
    icon: "rocket",
    src: "/marketing/videos/primeiros-passos.mp4",
    poster: "/marketing/images/videos/primeiros-passos.webp",
  },
  {
    title: "Como organizar turmas",
    duration: "Organização de turmas",
    status: "available",
    icon: "school",
    src: "/marketing/videos/organizar-turmas.mp4",
    poster: "/marketing/images/videos/organizar-turmas.webp",
  },
  {
    title: "Como configurar cobranças",
    duration: "Mensalidades e recebimentos",
    status: "available",
    icon: "wallet",
    src: "/marketing/videos/configurar-cobrancas.mp4",
    poster: "/marketing/images/videos/configurar-cobrancas.webp",
  },
  {
    title: "Como registrar chamadas",
    duration: "Chamadas e presenças",
    status: "available",
    icon: "check",
    src: "/marketing/videos/registrar-chamadas.mp4",
    poster: "/marketing/images/videos/registrar-chamadas.webp",
  },
  {
    title: "Como acompanhar o financeiro",
    duration: "Financeiro e relatórios",
    status: "available",
    icon: "chart",
    src: "/marketing/videos/acompanhar-financeiro.mp4",
    poster: "/marketing/images/videos/acompanhar-financeiro.webp",
  },
] as const;
5. Fazer cada card abrir seu próprio vídeo

Atualmente, o componente utiliza apenas um estado booleano:

const [open, setOpen] = useState(false);

E o vídeo está fixo em:

<source
  src="/marketing/videos/primeiros-passos-demo.mp4"
  type="video/mp4"
/>

Por isso, apenas o primeiro vídeo funciona.

Abra:

src/features/marketing/components/VideoGallery.tsx

Substitua o arquivo inteiro por:

"use client";

import { useEffect, useRef, useState } from "react";
import { videoItems } from "../data/content";
import { Icon } from "./Icon";
import styles from "../styles/marketing.module.css";

type VideoItem = (typeof videoItems)[number];

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] =
    useState<VideoItem | null>(null);

  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedVideo) return;

    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedVideo]);

  return (
    <>
      <div className={styles.videoGrid}>
        {videoItems.map((video, index) => (
          <article
            className={`${styles.videoCard} ${
              index === 0 ? styles.videoCardFeatured : ""
            }`}
            key={video.title}
          >
            <div
              className={styles.videoThumb}
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(31, 19, 57, 0.25),
                    rgba(31, 19, 57, 0.42)
                  ),
                  url("${video.poster}")
                `,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className={styles.videoThumbGrid} />

              <div className={styles.videoThumbIcon}>
                <Icon name={video.icon} />
              </div>

              {video.status === "available" ? (
                <button
                  type="button"
                  aria-label={`Reproduzir ${video.title}`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <Icon name="play" />
                </button>
              ) : (
                <span>Em breve</span>
              )}
            </div>

            <div className={styles.videoMeta}>
              <span>
                {video.status === "available"
                  ? "DEMONSTRAÇÃO"
                  : "EM PRODUÇÃO"}
              </span>

              <h3>{video.title}</h3>
              <p>{video.duration}</p>
            </div>
          </article>
        ))}
      </div>

      {selectedVideo && (
        <div
          className={styles.modalBackdrop}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedVideo(null);
            }
          }}
        >
          <div
            className={styles.videoModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <span>TUTORIAL ESCOLINHA PRO</span>

                <h2 id="video-modal-title">
                  {selectedVideo.title}
                </h2>
              </div>

              <button
                ref={closeRef}
                type="button"
                aria-label="Fechar vídeo"
                onClick={() => setSelectedVideo(null)}
              >
                <Icon name="close" />
              </button>
            </div>

            <video
              key={selectedVideo.src}
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster={selectedVideo.poster}
            >
              <source
                src={selectedVideo.src}
                type="video/mp4"
              />

              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

O uso de:

key={selectedVideo.src}

é importante. Ele força o navegador a trocar corretamente o arquivo quando você abre outro tutorial.