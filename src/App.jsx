import TodoTitle from './Components/TodoTitle'
import TodoBar from './Components/TodoBar'
import ListItems from './Components/ListItems'



function App() {
  return (
    <div className=" bg-blue-600 absolute top-0 left-0 right-0 bottom-0">
      <div className="flex justify-center items-center h-screen">
      <div className="w-[1200px] h-[700px] bg-blue-200 rounded-3xl">
      <TodoTitle />
      <TodoBar />
      <ListItems />
      </div>
      </div>
      </div>
  
  );
}

export default App;
