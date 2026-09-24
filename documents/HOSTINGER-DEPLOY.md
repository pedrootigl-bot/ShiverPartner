# Deploy Hostinger — ShiverPartner

Site estático (Vite). A pasta `dist/` sai pronta para upload.

**Produção atual:** [https://tradingsettings.com/shiverpartner/](https://tradingsettings.com/shiverpartner/)  
Pasta no servidor: `public_html/shiverpartner/`  
Build obrigatório com `BASE_PATH=/shiverpartner` (sem isso → tela branca: JS/CSS em `/assets/...` em vez de `/shiverpartner/assets/...`).

## Gerar (produção)

```powershell
# Windows PowerShell
$env:BASE_PATH="/shiverpartner"; npm run build
```

```bash
# bash
BASE_PATH=/shiverpartner npm run build
```

Isso roda `vite build` + `scripts/prepare-dist.cjs` (gera `.htaccess` com `RewriteBase /shiverpartner/`, `index.php` e preview).

## Upload (produção)

1. No FTP/Gerenciador, abra `public_html/shiverpartner/`
2. Apague o conteúdo antigo do site
3. Envie **todo o conteúdo interno** de `dist/` para `public_html/shiverpartner/`

Estrutura correta:

```text
public_html/shiverpartner/
  index.html
  index.php
  .htaccess
  assets/
  favicon.ico
  favicon-32.png
  favicon-48.png
  favicon-192.png
  icons.svg
```

**Errado:** enviar a pasta `dist` inteira → ficaria `public_html/shiverpartner/dist/...`  
**Errado:** `npm run build` sem `BASE_PATH` → paths absolutos na raiz do domínio

## Alternativa — raiz do domínio

Se o site for para a raiz (`public_html/`):

```bash
npm run build
```

(sem `BASE_PATH`) e envie o conteúdo de `dist/` para `public_html/`.

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
