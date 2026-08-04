# Arquitetura do módulo de marketing

## Estrutura

```text
src/
  app/
    page.tsx
    termos/page.tsx
    privacidade/page.tsx
    layout.tsx
    sitemap.ts
    robots.ts
  features/
    marketing/
      MarketingPage.tsx
      components/
        Header.tsx
        Footer.tsx
        FeatureTour.tsx
        ProductMockup.tsx
        VideoGallery.tsx
        FaqAccordion.tsx
        LegalPage.tsx
        Reveal.tsx
        SectionHeading.tsx
        Icon.tsx
        Logo.tsx
      data/
        config.ts
        content.ts
        plans.ts
        legal.ts
      styles/
        marketing.module.css
public/
  marketing/
    images/
    videos/
```

## Limites do módulo

O módulo não contém autenticação, acesso a banco, integrações, lógica administrativa, manifest PWA ou service worker. Ele apenas direciona para `/login` e `/criar-conta`.

O projeto e exportado como site estatico. Quando incorporado ao SaaS, os chunks usam o prefixo `/landing-build` para nao colidir com o runtime Next.js do aplicativo. O SaaS hospeda somente o resultado de `out/`; nenhuma dependencia ou componente deste projeto atravessa essa fronteira.

## Dados centralizados

- `config.ts`: domínio, contatos e rotas.
- `plans.ts`: preços, limites, recursos e condições comerciais.
- `content.ts`: navegação, módulos, fluxo, tour, confiança, vídeos e FAQ.
- `legal.ts`: estrutura inicial das páginas jurídicas.

## Componentes com estado

- `Header`: navegação desktop resumida, menu mobile e acessibilidade por teclado.
- `Reveal`: entrada progressiva com Intersection Observer.
- `FeatureTour`: sincronização do texto com os estados visuais sticky.
- `VideoGallery`: modal acessível e estado de vídeo disponível/em breve.
- `FaqAccordion`: disclosure controlado com `aria-expanded`.

## Estilos

O sistema visual está isolado em CSS Module. O arquivo global contém apenas fonte local, box-sizing, regras de elementos básicos e scroll behavior.
