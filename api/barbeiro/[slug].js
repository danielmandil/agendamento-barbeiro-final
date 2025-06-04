// Dados dos barbeiros (em produção, isso viria de um banco de dados)
const barbeiros = {
  'joao-barbeiro': {
    nome: 'João Silva',
    whatsapp: '5531999999999',
    slug: 'joao-barbeiro',
    servicos: ['Corte', 'Barba', 'Corte + Barba']
  }
};

export default function handler(req, res) {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const { slug } = req.query;
  
  if (req.method === 'GET') {
    const barbeiro = barbeiros[slug];
    
    if (!barbeiro) {
      return res.status(404).json({ error: 'Barbeiro não encontrado' });
    }
    
    return res.status(200).json(barbeiro);
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
