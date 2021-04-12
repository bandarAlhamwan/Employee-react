import './App.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css'
import ListEmployeee from './component/ListEmployeee';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddEmployee from './component/ِِAddEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
            <div className="container">
              <Switch>
                  <Route exact path="/" component={ListEmployeee}></Route>
                  <Route path="/add" component={AddEmployee}></Route>
                  <Route path="/employee/edit/:id" component={AddEmployee}></Route>
                  <ListEmployeee/>
              </Switch>
            </div>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
