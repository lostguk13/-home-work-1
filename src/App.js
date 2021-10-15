import ProfileFunction from "./Profile/ProfileFunction";
import ProfileClass from "./Profile/ProfileClass";

function App() {
  return (
   <>
     <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 6, 22)} />
     <ProfileFunction name="Вася Пупкин" registredAt={new Date(2021, 6, 22)} />
   </>
  );
}

export default App;
