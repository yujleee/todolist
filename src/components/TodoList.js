import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoListWrapper = styled.ul`
  flex: 1;
  padding: 20px 0;
`;

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          body={todo.body}
          isDone={todo.isDone}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
