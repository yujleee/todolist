# TODO LIST

리액트로 만들어본 투두 리스트

🔗 https://todolist-phi-rouge.vercel.app/


![스크린샷 2022-12-06 오후 8 04 55](https://user-images.githubusercontent.com/82587107/205900990-16e822ab-4e32-45cb-a382-b3d6bb82b341.png)

<br/>
<br/>

## 🗂 디렉토리 구조

```
📦public
 ┣ 📂favicon
 ┗ 📜index.html
📦src
 ┣ 📂components
 ┃ ┣ 📜TodoCreate.js
 ┃ ┣ 📜TodoItem.js
 ┃ ┗ 📜TodoList.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```

- favicon : 파비콘 관련 파일 디렉토리
- components : 여러 차례 쓰이는 컴포넌트 디렉토리

</br>

### 📦 분리한 컴포넌트

#### 📍 TodoList

![image](https://user-images.githubusercontent.com/82587107/205858415-96bf8df4-da19-4bd5-9095-40578b6d32fd.png)

진행중이거나 완료된 투두리스트를 렌더링하는 컴포넌트 입니다.
두 개의 리스트가 동일한 구조이기 때문에 하나의 컴포넌트로 만들어 제목(listTitle)과 필터링된 투두리스트를 넘겨서 렌더링할 수 있도록 했습니다.

```
const TodoList = ({ listTitle, todos, onToggle, onDelete }) => {
  return (
    <ListWrapper>
      <h2>{listTitle}</h2>
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
    </ListWrapper>
  );
};

```

<br/>
<br/>

#### 📍 TodoItem

![image](https://user-images.githubusercontent.com/82587107/205859575-84a2b616-26b1-4ae1-a05b-2aca6ef885f3.png)

각각의 작성한 투두에 해당하는, 가장 많이 재사용되는 컴포넌트입니다.

```
const TodoItem = ({ title, body, id, isDone, onToggle, onDelete }) => {
  return (
    <TodoItemBlock key={id} isDone={isDone}>
      {isDone && <BsPatchCheckFill size={32} color={'#10c7a2'} cursor={'pointer'} onClick={() => onToggle(id)} />}
      {!isDone && <BsPatchCheckFill size={32} color={'#ddd'} cursor={'pointer'} onClick={() => onToggle(id)} />}
      <div className="contents">
        <p>
          <strong>{title}</strong>
        </p>
        <p>{body}</p>
      </div>
      <BsTrashFill size={24} color={'#ccc'} cursor={'pointer'} onClick={() => onDelete(id)} />
    </TodoItemBlock>
  );
};
```

`isDone`의 클릭 여부에 따라서 색상이 있는 아이콘, 없는 아이콘이 렌더링 되도록 했습니다.

<br/>
<br/>
