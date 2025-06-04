// Armazenamento temporário em memória (em produção, use um banco de dados)
// Como cada função é stateless, isso será resetado a cada deploy
let agendamentos = [];

export default function handler(req, res) {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const { barbeiro_slug, data } = req.query;
  
  if (req.method === 'GET') {
    // Filtrar agendamentos do barbeiro e data específicos
    const agendamentosDoDia = agendamentos.filter(a => 
      a.barbeiro_slug === barbeiro_slug && a.data === data
    );
    
    return res.status(200).json(agendamentosDoDia);
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
