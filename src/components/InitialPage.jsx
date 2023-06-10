import { useState } from "react";

function InitialPage({ setInfo }) {
  const [data, setData] = useState({
    code: "",
    players: null,
    order: null,
    sleep: null,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const generateCode = () => {
    const code = Math.floor(Math.random() * (100000000 - 1000) + 1000);
    setData({ ...data, code });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.order > data.players) {
      alert("A ordem não pode ser maior que o número de jogadores");
      return;
    }

    if (data.order < 1 || data.players < 1 || data.sleep < 1) {
      alert("Valores incorretos");
      return;
    }

    setInfo(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ fontSize: "2.5rem", width: "100%" }} className="absolute">
        Alguém dormiu 💤
      </h1>
      <p>Preencha os dados para gerar as informações da partida:</p>

      <div className="flex" style={{ gap: "2rem" }}>
        <input
          type="text"
          inputMode="numeric"
          placeholder="Código da partida"
          style={{ width: "75vw" }}
          name="code"
          value={data.code}
          onChange={handleChange}
          required
        />

        <button type="button" onClick={generateCode}>
          💱
        </button>
      </div>

      <div className="flex" style={{ margin: "1rem 0" }}>
        <input
          style={{ width: "28%" }}
          placeholder="Nº jogadores"
          type="number"
          inputMode="numeric"
          name="players"
          value={data.players}
          onChange={handleChange}
          required
        />

        <input
          style={{ width: "28%" }}
          placeholder="Ordem"
          type="number"
          inputMode="numeric"
          name="order"
          value={data.order}
          onChange={handleChange}
          required
        />

        <input
          style={{ width: "28%" }}
          placeholder="Dormindo"
          type="number"
          inputMode="numeric"
          name="sleep"
          value={data.sleep}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default InitialPage;
