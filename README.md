# SQUARE — Plataforma de Inteligência Operacional

Landing page moderna para a plataforma SQUARE de monitoramento e inteligência operacional, construída com **React** + **Vite** + **TypeScript** + **Tailwind CSS** + **Framer Motion**.

## Stack

| Tecnologia | Uso |
|---|---|
| **React 19** | UI component-based |
| **Vite** | Build tool e dev server |
| **TypeScript** | Tipagem estática |
| **Tailwind CSS v4** | Estilização utility-first |
| **Framer Motion** | Animações e transições |

## Como Rodar

```bash
npm install          # Instala dependências
npm run dev          # Dev server (geralmente :5173)
npm run build        # Build de produção
npm run preview      # Preview do build de produção
```

## Estrutura do Projeto

```
├── index.html                 # HTML raiz
├── package.json               # Dependências e scripts
├── vite.config.ts             # Configuração do Vite
├── tsconfig.json              # Configuração do TypeScript
├── src/
│   ├── main.tsx               # Entry point — monta o React no DOM
│   ├── App.tsx                # Componente raiz — compõe todas as seções
│   ├── index.css              # Tailwind + tema customizado (cores, fontes, scrollbar)
│   └── components/
│       ├── AccordionSection/  # Accordion interativo com métricas de capacidade
│       ├── Architecture/      # Grid de módulos da arquitetura (cards)
│       ├── Charts/            # Componentes reusáveis de gráficos (AreaChart, ProgressBar, MiniBarChart)
│       ├── CommandCenter/     # Painel com tabs (Visão Geral, Operações, Segurança, SLA)
│       ├── Contact/           # Formulário de contato e informações
│       ├── FAQ/               # Perguntas frequentes com busca e accordion
│       ├── Footer/            # Rodapé com links e redes sociais
│       ├── Gallery/           Galeria visual com padrões abstratos
│       ├── Hero/              # Seção principal — título, CTA e preview do dashboard
│       ├── Insights/          # Cards de artigos/conteúdo
│       ├── Manifesto/         # Seção editorial com frase de impacto
│       ├── MetricsSection/    # KPIs, gráficos de barras, tabela de serviços e histórico
│       ├── Navbar/            # Barra de navegação com menu mobile e scroll detection
│       ├── ProcessSection/    # Etapas do processo (Diagnóstico → Operação)
│       └── StatsCredibility/  # Estatísticas de confiança (500+ empresas, 99.9% uptime, etc.)
```

## Componentes

### Core
- **`Navbar`** — Navegação fixa com blur no scroll, menu mobile com animação, smooth scroll para seções
- **`Hero`** — Seção principal com título, descrição, CTAs e um preview de dashboard animado (mini bar chart, service metrics, indicador "tempo real")

### Dados e Métricas
- **`MetricsSection`** — KPI cards com sparklines SVG (uptime, latência, eficiência, throughput), gráfico de barras por serviço, barras de progresso de recursos, tabela de status de serviços e gráfico de área histórico
- **`CommandCenter`** — Painel interativo com 4 tabs intercambiáveis (Visão Geral, Operações, Segurança, SLA), cada uma com gráfico de área e cards de métricas específicos
- **`Charts`** — Componentes reusáveis: `AreaChart` (Catmull-Rom spline), `ProgressBar` (animada), `MiniBarChart` (para cards)

### Conteúdo
- **`Architecture`** — Seções dos módulos core da plataforma em grid de cards (Observability, Data Pipeline, Control Center, Alert Engine, Analytics, Decision Support)
- **`AccordionSection`** — Accordion interativo com os 5 pilares de capacidade (Governança, Integração, Inteligência, Segurança, Escalabilidade), cada um com métrica destacada
- **`ProcessSection`** — Grid 2x2 mostrando as 4 etapas: Diagnóstico → Arquitetura → Implementação → Operação Contínua
- **`Insights`** — 3 cards de conteúdo/artigos nas categorias Operações, Observabilidade e Governança
- **`FAQ`** — Perguntas frequentes com busca integrada e accordion
- **`Manifesto`** — Seção editorial centralizada com frase de impacto da marca
- **`Gallery`** — 4 cards visuais com padrões geométricos (grid, ondas, pontos, linhas)
- **`StatsCredibility`** — Números de confiança: 500+ empresas, 99.9% uptime, 24/7, 12 países
- **`Contact`** — Layout split com informações de contato e formulário completo
- **`Footer`** — Rodapé com logo, colunas de links (Produto, Recursos, Empresa, Legal) e redes sociais
