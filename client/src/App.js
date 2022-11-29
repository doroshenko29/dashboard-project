import { useContext, useEffect } from 'react';
import { Context } from '.';
import './App.sass';
import './fonts.sass';
import Dashboadr from './Components/Dashboadr';
import SideBar from './Components/SideBar';
import { fetchGroups, fetchMetrics } from './http/api';

const App = () => {
  const {storeGroup, storeMetrics} = useContext(Context);
  useEffect(() => {
    fetchGroups().then((res) =>storeGroup.setGroups(res))
    fetchMetrics().then((res) =>storeMetrics.setMetrics(res))
    let timer = setInterval(() => {
      fetchGroups().then((res) =>storeGroup.setGroups(res))
      fetchMetrics().then((res) =>storeMetrics.setMetrics(res))
    }, 1000 * 60);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <SideBar />
      <Dashboadr />
    </div>
  );
}

export default App;
