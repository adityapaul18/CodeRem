import { useState ,useEffect} from 'react';
import React from 'react';
import './App.css';
import {IconButton} from "@material-ui/core";
import Ongoingcards from './Ongoingcards.js'
import Upcomingcards from './Upcomingcards.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {  Tab, Tabs, TabList, TabPanel} from 'react-tabs';
// import 'react-tabs/style/react-tabs.css'; 
import Navbar from './Navbar'
import About from './About'
function App() {
  const [data, setData] = useState(null);
 
    useEffect(() => {
 
    const fetchData = async() => {
        fetch(
            `https://contesttrackerapi.herokuapp.com/`
            )
        .then(response => response.json())
        .then(result => {
          setData(result)
         })
         console.log(data)
     }
     fetchData();
     
    },[])

    console.log(data?.result)

    if(!data) {
      return(
        <About/>
      );
    }


  return (
    <div className="App">
        <div className="AppHeader">
          <Router>
               <Navbar/>
            <Switch>
              <Route path='/' />
            </Switch>
          </Router>
          <h1 className="header">Code-Rem</h1>
      </div>
      <div className="AppBody">
          <Tabs className="tabs" defaultIndex={0} onSelect={index => console.log(index)}>
           <center>
           <TabList className="tablist">
            <Tab className="tab">
                   Ongoing   
            </Tab>
            <Tab className="tab">
                   Upcoming
            </Tab>
            </TabList>
           </center>
            <TabPanel>
             <center>
             <div className="ongoing_cont">
              {data?.result.ongoing.map(item => (
               <Ongoingcards data={item}/>
                ))
              }
          </div>
             </center>
            </TabPanel>
            <TabPanel>
            <div className="upcoming_cont">
              <center>
              {data?.result.upcoming.map(item => (
                <Upcomingcards data={item}/>
                ))
              }
              </center>
          </div>
            </TabPanel>
          </Tabs>

         Updated : {data?.result.timestamp}        
         
      </div>
      
    </div>
  );
}

export default App;
