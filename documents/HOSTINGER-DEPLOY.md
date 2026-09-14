# Deploy Hostinger — ShiverPartner

Site estático (Vite). A pasta `dist/` sai pronta para upload.

## Gerar

```bash
npm install
npm run build
```

Isso roda `vite build` + `scripts/prepare-dist.cjs` (gera `.htaccess`, `index.php` e preview).

## Upload (importante)

### Opção A — raiz do domínio (padrão)

1. No FTP/Gerenciador, abra `public_html/`
2. Apague o conteúdo antigo (ou só os arquivos do site anterior)
3. Envie **todo o conteúdo interno** de `dist/` para `public_html/`

Estrutura correta:

```text
public_html/
  index.html
  index.php
  .htaccess
  assets/
  favicon.svg
  icons.svg
```

**Errado:** enviar a pasta `dist` inteira → ficaria `public_html/dist/...`

### Opção B — subpasta (ex.: `/shiverpartner/`)

```bash
# Windows PowerShell
$env:BASE_PATH="/shiverpartner"; npm run build
```

```bash
# bash
BASE_PATH=/shiverpartner npm run build
```

Envie o conteúdo de `dist/` para `public_html/shiverpartner/`.

## Preview no PC

```bash
npm run preview:static
```

- Build na raiz → `http://localhost:4173/site/`
- Build com `BASE_PATH=/shiverpartner` → `http://localhost:4173/shiverpartner/`

## Erros comuns

| Sintoma | Causa |
|---|---|
| 403 | Pasta vazia ou sem `index.html` / `.htaccess` |
| Página sem CSS/JS | Build com `base` errado ou upload na pasta errada |
| Rotas `#contato` ok, mas refresh 404 | `.htaccess` não enviado (SPA fallback) |
| Abrir HTML no Explorer | Não funciona — use preview ou Hostinger |
