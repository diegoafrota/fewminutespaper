import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'Resumo: Inteligência Artificial na Saúde',
    image: 'https://source.unsplash.com/featured/?healthcare',
    views: 1520,
  },
  {
    id: 2,
    title: 'Resumo: Mudanças Climáticas e Políticas Públicas',
    image: 'https://source.unsplash.com/featured/?climate',
    views: 890,
  },
  {
    id: 3,
    title: 'Resumo: Economia Digital e o Futuro do Trabalho',
    image: 'https://source.unsplash.com/featured/?technology',
    views: 2430,
  },
];

function ArticleGrid() {
  const sortedArticles = [...articles].sort((a, b) => b.views - a.views);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Artigos em Destaque</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedArticles.map((article) => (
          <Link
            key={article.id}
            to={`/artigo/${article.id}`}
            className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-500">Acessos: {article.views.toLocaleString()}</p>
          </Link>
        ))}
      </div>

      <FeedSubscription />
    </div>
  );
}

function ArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Link to="/" className="text-blue-600 hover:underline">← Voltar</Link>
      <div className="max-w-3xl mx-auto mt-6 bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-700">Aqui vai o resumo.</p>
      </div>
    </div>
  );
}

function FeedSubscription() {
  return (
    <div className="mt-10 text-center">
      <h2 className="text-xl font-semibold mb-3">Fique por dentro das novidades</h2>
      <p className="text-gray-600 mb-4">Assine o feed e receba novos resumos automaticamente.</p>
      <div className="flex justify-center gap-4">
        <a
          href="/feed.xml"
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          📡 Assinar via RSS
        </a>
        <a
          href="/newsletter"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ✉️ Assinar por e-mail
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleGrid />} />
        <Route path="/artigo/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}