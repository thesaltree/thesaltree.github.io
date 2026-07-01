import React, { useState } from 'react';

const DEVELOPER_KOANS = [
  "Write code that is easy to delete, not easy to extend.",
  "The most reliable code is the code that doesn't exist.",
  "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
  "Complexity is easy; simplicity is hard.",
  "Before you change the system, understand why the system is the way it is (Chesterton's Fence).",
  "Duplication is far cheaper than the wrong abstraction.",
  "A senior engineer spends 80% of their time reading, thinking, and deleting code.",
  "If you cannot explain it to a six-year-old, you don't understand it yourself.",
  "Be conservative in what you send, and liberal in what you accept (Postel's Law).",
  "Good design is more about what you leave out than what you put in."
];

// Mahjong symbols: Fa (Green Dragon), Chun (Red Dragon), 1 Bamboo (Bird), White Dragon
const MAHJONG_SYMBOLS = ['🀅', '🀄', '🀐', '🀆'];

export const MahjongTile: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [koanIndex, setKoanIndex] = useState(0);
  const [symbolIndex, setSymbolIndex] = useState(0);

  const handleTileClick = () => {
    if (isFlipped) {
      // Pick a new symbol and koan for the next flip
      setTimeout(() => {
        setKoanIndex((prev) => (prev + 1) % DEVELOPER_KOANS.length);
        setSymbolIndex((prev) => (prev + 1) % MAHJONG_SYMBOLS.length);
      }, 300); // half-way through the flip
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-16 pt-8 border-t border-academic-border-light dark:border-academic-border-dark">
      <div className="text-center mb-6">
        <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
          Mahjong Tile of Dev Wisdom
        </h4>
        <p className="text-xs font-sans text-gray-500 dark:text-gray-400">
          Click the tile to flip it and reveal engineering philosophy
        </p>
      </div>

      {/* 3D Tile Container */}
      <div 
        onClick={handleTileClick}
        className="w-60 h-80 perspective-1000 cursor-pointer group"
      >
        <div 
          className={`w-full h-full relative transform-style-3d transition-transform duration-700 ease-out ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT of the Tile: Ivory/Cream Face */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl bg-[#fdfaf2] border-4 border-[#e6dec9] text-[#1c3d27] flex flex-col justify-between p-6 pixel-shadow select-none">
            {/* Tile Corner Marks */}
            <div className="flex justify-between text-xs font-mono text-[#b0a080]">
              <span>{MAHJONG_SYMBOLS[symbolIndex]}</span>
              <span>N</span>
            </div>

            {/* Main Center Engraved Symbol */}
            <div className="flex justify-center items-center flex-grow text-8xl filter drop-shadow-[2px_2px_0px_#104d2a]">
              {MAHJONG_SYMBOLS[symbolIndex]}
            </div>

            {/* Bottom Corner Marks */}
            <div className="flex justify-between text-xs font-mono text-[#b0a080] items-end">
              <span>S</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold">Dev Dragon</span>
            </div>
          </div>

          {/* BACK of the Tile: Jade Green Sandwich Back */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-[#0b4d3a] border-4 border-[#073327] text-white flex flex-col justify-between p-6 pixel-shadow select-none">
            {/* Decorative Top */}
            <div className="flex justify-between items-center border-b border-[#146e53] pb-2 text-[10px] font-mono tracking-widest text-[#00ff87]">
              <span>KOAN #{koanIndex + 1}</span>
              <span>🀅</span>
            </div>

            {/* Wisdom Text in Middle */}
            <div className="flex-grow flex items-center justify-center py-4">
              <p className="text-center font-serif text-sm md:text-md leading-relaxed italic text-[#f4fffa] px-2">
                &ldquo;{DEVELOPER_KOANS[koanIndex]}&rdquo;
              </p>
            </div>

            {/* Bottom Accent */}
            <div className="text-center border-t border-[#146e53] pt-3 text-[10px] font-mono tracking-widest text-[#00ff87] hover:text-[#00ff87]/80">
              CLICK TO FLIP BACK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
