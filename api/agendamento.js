// Este seria um armazenamento global compartilhado
// IMPORTANTE: Em produção, use um banco de dados real (PostgreSQL, MongoDB, etc.)
// O Vercel não mantém estado entre requisições
const agendamentos = [];

export default function handler(req, res) {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Lidar com preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'POST') {
    const { barbeiro_slug, data, horario, cliente_whatsapp, servico } = req.body;
    
    // Validações básicas
    if (!barbeiro_slug || !data || !horario || !cliente_whatsapp || !servico) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    
    // Criar novo agendamento
    const novoAgendamento = {
      id: Date.now().toString(),
      barbeiro_slug,
      data,
      horario,
      cliente_whatsapp,
      servico,
      status: 'confirmado',
      criado_em: new Date().toISOString()
    };
    
    // Adicionar à lista (em produção, salvar no banco de dados)
    agendamentos.push(novoAgendamento);
    
    return res.status(201).json({ 
      success: true, 
      agendamento: novoAgendamento 
    });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
