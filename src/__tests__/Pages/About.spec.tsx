import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../pages/Profile/About';

describe('testing info at About Page', () => {
  it('Should initialize Profile Page', () => {
    const wrapper = render(<About />);

    expect(wrapper).toBeDefined();
  });

  it('Should initialize  info at About Page', () => {
    render(<About />);
    expect(
      screen.queryByText('Os jogos originais de Pokémon são japoneses'),
    ).toBeInTheDocument();
    expect(
      screen.queryByText('Criados por Satoshi Tajiri'),
    ).toBeInTheDocument();
    expect(screen.queryByText('Console Game Boy')).toBeInTheDocument();
    expect(screen.queryByText('Jogos de RPGs')).toBeInTheDocument();
    expect(screen.queryByText('Traduções para o inglês')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'A série Pokémon começou com o lançamento de Pocket Monsters Red e Green para o Game Boy no Japão',
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'A versão original "Green" nunca foi lançada fora do Japão',
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Esta primeira geração de jogos introduziu as 151 espécies originais de Pokémon',
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Uma encarnação 3D do Nintendo 64 do mesmo sistema de batalha dos RPGs portáteis',
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'No Nintendo Space World em 2000, um jogo foi revelado brevemente com Meowth e Equipe Rocket cantando uma música',
      ),
    ).toBeInTheDocument();
  });
});
