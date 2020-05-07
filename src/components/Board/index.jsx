import React, { useState } from 'react';

import BoardContext from './context';

import List from '../List';

import loadLists from '../../services/api';

import Container from './styles';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    const dragged = lists[fromList].cards[from];

    lists[fromList].cards.splice(from, 1);
    lists[toList].cards.splice(to, 0, dragged);

    setLists([...lists]);
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
