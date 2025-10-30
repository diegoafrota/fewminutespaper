import express from "express";

const app = express();

const articles = [
  { id: 1, title: "Inteligência Artificial na Saúde" },
  { id: 2, title: "Mudanças Climáticas e Políticas Públicas" },
  { id: 3, title: "Economia Digital e o Futuro do Trabalho" },
];

app.get("/feed.xml", (req, res) => {
  res.type("application/rss+xml");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Resumos de Artigos</title>
      <link>https://seudominio.com</link>
      <description>Atualizações automáticas dos resumos publicados</description>
      ${articles
        .map(
          (a) => `
        <item>
          <title>${a.title}</title>
          <link>https://seudominio.com/artigo/${a.id}</link>
          <description>Aqui vai o resumo...</description>
        </item>`
        )
        .join("")}
    </channel>
  </rss>`;
  res.send(xml);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor RSS rodando na porta ${PORT}`));
