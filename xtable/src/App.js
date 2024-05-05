import logo from './logo.svg';
import './App.css';

function App() {
  var dates = 
  [
      { date: "2022-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-02", views: 150, article: "Article 2" },
      { date: "2023-09-02", views: 120, article: "Article 3" },
      { date: "2020-09-03", views: 200, article: "Article 4" }
  ];
  function sortdate(){

  }
  function sortViews(){
    
  }
  return (
    <div className="">
      <h1>Date and Views Table</h1>
      <button onClick={sortdate}>Sort by Date</button>
      <button onClick={sortViews}>Sort by Views</button>
      <table>
        <thead>
        <th>Date</th><th>Views</th><th>Article</th>
        </thead>
        <tbody>
        {dates.map((date)=>(<tr><td>{date.date}</td><td>{date.views}</td><td>{date.article}</td></tr>))}
          <tr><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
