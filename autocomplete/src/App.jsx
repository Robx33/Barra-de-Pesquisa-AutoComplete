import SearchBar from "./components/SearchBar"

import Searchs from './db.json'

function App() {
  

  return (
    <div className="App">
      <SearchBar data={Searchs} />
    </div>
  )
}

export default App
