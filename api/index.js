export default function handler(req, res) {
  res.status(200).json({ 
    message: 'API Agendamento funcionando!',
    timestamp: new Date().toISOString(),
    endpoints: {
      barbeiro: '/api/barbeiro/[slug]',
      agendamentos: '/api/agendamentos/[barbeiro_slug]/[data]',
      criar_agendamento: '/api/agendamento (POST)'
    }
  });
}
