import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Gestão de Lanchonete Comunitária</h1>
      <div className="mt-4">
        <Link to="/login">
          <Button className="mr-2">Login</Button>
        </Link>
        <Link to="/register">
          <Button>Cadastro</Button>
        </Link>
      </div>
    </div>
  );
}

function Login() {
  return (
    <Card className="w-96 p-4 mx-auto mt-20">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" />
        <input type="password" placeholder="Senha" className="w-full mb-2 p-2 border rounded" />
        <Link to="/dashboard">
          <Button className="w-full">Entrar</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function Register() {
  return (
    <Card className="w-96 p-4 mx-auto mt-20">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Cadastro</h2>
        <input type="text" placeholder="Nome" className="w-full mb-2 p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" />
        <input type="password" placeholder="Senha" className="w-full mb-2 p-2 border rounded" />
        <Link to="/dashboard">
          <Button className="w-full">Cadastrar</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Painel da Lanchonete</h2>
      <ul className="mt-4 space-y-2">
        <li><Link to="/estoque"><Button>Controle de Estoque</Button></Link></li>
        <li><Link to="/vendas"><Button>Registrar Venda</Button></Link></li>
        <li><Link to="/historico"><Button>Histórico de Vendas</Button></Link></li>
      </ul>
      <Link to="/">
        <Button className="mt-4">Sair</Button>
      </Link>
    </div>
  );
}

function Estoque() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Pão de Queijo", quantidade: 50 },
    { id: 2, nome: "Coxinha", quantidade: 30 },
    { id: 3, nome: "Refrigerante", quantidade: 20 }
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Controle de Estoque</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>{produto.nome} - Quantidade: {produto.quantidade}</li>
        ))}
      </ul>
    </div>
  );
}

function Vendas() {
  const [historico, setHistorico] = useState([]);
  const [produto, setProduto] = useState("");

  const realizarVenda = () => {
    if (produto) {
      const novaVenda = { id: historico.length + 1, data: new Date().toLocaleString(), item: produto };
      setHistorico([...historico, novaVenda]);
      setProduto("");
    } else {
      alert("Selecione um item para vender");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Registrar Venda</h2>
      <select className="w-full mb-2 p-2 border rounded" value={produto} onChange={(e) => setProduto(e.target.value)}>
        <option value="">Selecione um produto</option>
        <option value="Pão de Queijo">Pão de Queijo</option>
        <option value="Coxinha">Coxinha</option>
        <option value="Refrigerante">Refrigerante</option>
      </select>
      <Button onClick={realizarVenda} className="mt-2">Confirmar Venda</Button>
    </div>
  );
}

function Historico() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Histórico de Vendas</h2>
      <p>Aqui serão listadas as vendas realizadas.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </Router>
  );
}
