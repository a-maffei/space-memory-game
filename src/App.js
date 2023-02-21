import Background from './components/Background';
import Settings from './components/Settings/Settings';
import useGetImages from './hooks/useGetImages';
import { useState } from 'react';
import Board from './components/Board/Board';

function App() {
    const [gameOptions, setGameOptions] = useState(null);

    const startGame = options => {
        setGameOptions(options);
    };

    const restartGame = () => {
        setGameOptions(null);
    };

    return (
        <div classame="game-container">
            <Background />
            <h1>🪐 Space Memory Game 🌙</h1>
            {!gameOptions ? (
                <>
                    <Settings startGame={startGame} />
                    <div className="footer">
                        <p>
                            Built by <a href="https://github.com/a-maffei">Alessandra</a>, thanks to React and{' '}
                            <a href="https://www.pexels.com/">the Pexel Photo API</a>.{' '}
                        </p>
                    </div>
                </>
            ) : (
                <Board gameOptions={gameOptions} restartGame={restartGame} />
            )}
        </div>
    );
}

export default App;
