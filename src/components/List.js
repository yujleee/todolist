import TodoList from './TodoList';

import styled from 'styled-components';

const List = ({ listTitle, todos, onToggle, onDelete }) => {
  return (
    <ListWrapper>
      <h2>{listTitle}</h2>
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.section`
  margin-bottom: 6rem;

  h2 {
    color: #222;
  }
`;
