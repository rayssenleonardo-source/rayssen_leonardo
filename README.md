# rayssen_leonardo

Portfólio de Rayssen Leonardo — Designer Gráfico.
Publicado em: https://rayssenleonardo-source.github.io/rayssen_leonardo/

## Stack

- [React](https://react.dev/) 18
- [Vite](https://vite.dev/) 6

## Desenvolvimento

```bash
npm install     # instala as dependências
npm run dev     # servidor de desenvolvimento (http://localhost:5173/rayssen_leonardo/)
npm run build   # build de produção em ./dist
npm run preview # pré-visualiza o build
```

## Estrutura

```
index.html              # entrada do Vite
src/
  main.jsx              # ponto de montagem do React
  App.jsx               # layout principal das seções
  index.css             # estilos (migrados do projeto original)
  data/portfolio.js     # conteúdo (projetos, skills, serviços, etc.)
  components/           # componentes de cada seção
  hooks/                # tema, efeito de digitação, seção ativa
legacy/                 # versão original em HTML/CSS/JS puro
```

O deploy é feito automaticamente para o GitHub Pages via
`.github/workflows/deploy.yml` a cada push no branch `main`.
