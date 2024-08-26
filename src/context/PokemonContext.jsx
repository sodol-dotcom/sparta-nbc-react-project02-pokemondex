import React, { createContext, useContext, useState } from 'react';

// Context 생성
const PokemonContext = createContext();

// 사용자 정의 훅
export function usePokemon() {
    return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
    const [selectedPokemon, setSelectedPokemon] = useState([]);

    // 포켓몬을 선택하는 로직
    const addPokemon = (pokemon) => {
        // add ligcic here
        if (selectedPokemon.length >= 6) {
            alert('최대 6개의 포켓몬만 선택할 수 있습니다.');
            return;
        }
        setSelectedPokemon((prev) => [...prev, pokemon]);
    };


    
    // 포켓몬을 제거하는 로직
    const removePokemon = (pokemon) => {
        // remove rogic here
        setSelectedPokemon((prev) => prev.filter(p => p !== pokemon))
    };

    return (
        <PokemonContext.Provider value={{ selectedPokemon, addPokemon, removePokemon }}>
        {children}
        </PokemonContext.Provider>
    );
}

// const handleAdd = (pokemon) => {
//     // 선택된 포켓몬 목록에 해당 포켓몬이 이미 있는지 확인
//     const isAlreadySelected = selectedPokemon.some(
//       (selected) => selected.id === pokemon.id
//     );

//     if (isAlreadySelected) {
//       // 이미 선택된 포켓몬인 경우는 경고 메세지 표시
//       alert(`${pokemon.korean_name}은(는) 이미 선택된 포켓몬입니다.`);
//     } else {
//       addPokemon(pokemon); // 이미 선택된 포켓몬 목록에 없는 경우에만 추가
//     }
//   };


  // // useState를 사용하여 선택된 포켓몬 관리하는 상태 생성 -> 빈 배열?[], 빈 객체?{}
  // const [selectedPokemon, setselectedPokemon] = useState([]);

  // // 포켓몬을 선택하는 로직
  // const addPokemon = (pokemon) => {
  //   if (selectedPokemon.length >= 6) {
  //     alert('최대 6개의 포켓몬만 선택할 수 있습니다.');
  //     return;
  //   }
  //   setselectedPokemon([...selectedPokemon, pokemon])
  // };

  // // 포켓몬을 제거하는 로직(필터)
  // const removePokemon = (pokemon) => {
  //   setselectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  // };
