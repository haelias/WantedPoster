import {useState} from 'react'

function App() {

  const [userImg, setUserImg] = useState(null)

  return (
    <div className="App">
      <h1>henlo</h1>
            <img src={userImg} />
            <h1>Select Image</h1>
            <input type="file" onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setUserImg(e.target.value)
            }}} />
    </div>
  );
}

export default App;
