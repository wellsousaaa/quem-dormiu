import { useEffect, useState } from "react";
import Srand from "seeded-rand";
import { items } from "./data";

export default function Game({ data }) {
  const [gameData, setGameData] = useState({
    state: null,
    objects: null,
    adjectives: null,
  });

  const [showSelected, setShowSelected] = useState(false);

  useEffect(() => {
    Srand.seed(data.code);

    const players = Array.from(
      { length: Number(data.players) },
      (_, i) => i + 1
    );
    const asleep = Srand.sample(players, Number(data.sleep));

    console.log("ID DO JOGADOR: ", data.order);
    console.log("JOGADORES: ", players);
    console.log("DORMINDO: ", asleep);

    const isAsleep = asleep.includes(Number(data.order));

    console.log(isAsleep ? "DORMINDO" : "ACORDADO");

    const objects = Srand.sample(items.objetos, 4);
    const adjectives = Srand.sample(items.adjetivos, 4);

    const selected = `${Srand.sample(objects, 1)} ${Srand.sample(
      adjectives,
      1
    )}`;

    setGameData({
      state: isAsleep ? "asleep" : "awake",
      objects,
      adjectives,
      selected,
    });
  }, [data.code]);

  if (gameData.state === "asleep")
    return (
      <div>
        <h1 style={{ fontSize: "3rem" }}>Você dormiu!</h1>
        <p>
          Você dormiu e agora precisa fingir que estava acordado para que o
          chefe não descubra.
        </p>
      </div>
    );

  if (gameData.state === "awake")
    return (
      <div>
        <h1 style={{ fontSize: "1.8rem" }}>Você estava acordado!</h1>

        <table>
          <tbody>
            {gameData.objects.map((object, i) => (
              <tr key={i}>
                <td>
                  <div className="index">{i + 1}</div>
                  {object}
                </td>
                <td>
                  <div className="index">{i + 1}</div>
                  {gameData.adjectives[i]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h4 style={{ opacity: showSelected ? 1 : 0 }}>{gameData.selected}</h4>
          <button onClick={() => setShowSelected((s) => !s)}>👁️👁️</button>
        </div>
      </div>
    );

  return <div>Carregando...</div>;
}
