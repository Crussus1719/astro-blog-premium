# 🚀 Astro Blog Premium

Bem-vindo ao seu novo blog ultra-performático! Construído com a stack premium solicitada: **Astro**, **Tailwind CSS**, **Decap CMS**, **Pagefind** e **Giscus**.

## 🛠️ Como Começar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Explore seu blog em:** `http://localhost:4321`

## 📦 Stack Detalhada

- **Astro 5**: O motor de geração estática de última geração.
- **Tailwind 4**: Estilização moderna e rápida.
- **Decap CMS**: Gerencie conteúdo no Github sem escrever código (Acesse em `/admin`).
- **Pagefind**: Motor de busca ultra rápido que roda 100% no cliente.
- **Giscus**: Comentários via GitHub Discussions.
- **Netlify**: Hospedagem global escalável.
- **Cloudflare**: Segurança e DNS de elite.

## 🔗 Configurações Necessárias

### 1. Decap CMS (GitHub Identity)
Para o painel administrativo funcionar em produção, você deve:
- Habilitar o **Netlify Identity** no painel da Netlify.
- Em **Identity > Services**, selecione **Git Gateway** e conecte seu repositório.

### 2. Giscus (Comentários)
No arquivo `src/components/Giscus.astro`, substitua os campos `data-repo`, `data-repo-id` e `data-category-id` com os IDs gerados no site oficial do [Giscus](https://giscus.app/).

### 3. Pagefind (Busca)
O motor de busca é indexado durante o build. Execute:
```bash
npm run build
```
O comando de build está configurado para rodar `pagefind` automaticamente e gerar os índices necessários.

---
Crafted for Excellence. 🌌
