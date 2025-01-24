import React, { useState, useRef } from "react";

const sounds = [
  { id: 1, name: "Airhorn", file: "/sounds/airhorn.wav" },
  { id: 2, name: "Aplausos", file: "/sounds/applause.mp3" },
  { id: 3, name: "Risada", file: "/sounds/laugh.wav" },
  { id: 4, name: "Gato Rindo", file: "/sounds/cat-laugh.mp3" }, // Novo áudio
];

function App() {
  const [currentAudio, setCurrentAudio] = useState(null); // Para controlar o áudio atual
  const audioRef = useRef(null); // Referência para o áudio

  const playSound = (file) => {
    if (currentAudio) {
      currentAudio.pause(); // Pausar o áudio atual
    }
    const audio = new Audio(file);
    setCurrentAudio(audio);
    audioRef.current = audio; // Atualiza a referência do áudio
    audio.play();
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      <h1 className="text-5xl font-extrabold text-center mb-8 drop-shadow-md">
        🎵 Noise Playground 🎵
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8 w-full">
        {sounds.map((sound) => (
          <button
            key={sound.id}
            className="px-8 py-4 text-xl font-semibold bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition duration-200"
            onClick={() => playSound(sound.file)}
          >
            {sound.name}
          </button>
        ))}
      </div>

      <div className="flex gap-6">
        <button
          className="px-6 py-3 text-lg font-semibold bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition duration-200"
          onClick={pauseAudio}
        >
          Pausar Áudio
        </button>
      </div>
    </div>
  );
}

export default App;
 