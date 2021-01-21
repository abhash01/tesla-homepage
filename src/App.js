import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Accessories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
// import Teslalogo from '../assets/teslaLogo.svg';
// import TeslalogoSmall from '../assets/teslaLogoSmall.svg';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_itemsContainer">
        
        <Item 
          title="Model3"
          desc="Money-back gurantee"
          desclink=''
          backgroundImg={Model3}
          leftBtnTxt='CUSTOMER ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item 
          title="Model S"
          desc="Money-back gurantee"
          desclink=''
          backgroundImg={ModelS}
          leftBtnTxt='CUSTOMER ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item 
          title="Model X"
          desc="Money-back gurantee"
          desclink=''
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOMER ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item 
          title="Model Y"
          desc="Money-back gurantee"
          desclink=''
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOMER ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item 
          title="Lower Cost Panels in America"
          desc="Money-back gurantee"
          desclink=''
          backgroundImg={SolarPanels}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item 
          title="Solar Roof"
          desc="Money-back gurantee"
          desclink=''
          backgroundImg={SolarRoof}
          leftBtnTxt='CUSTOMER ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item 
          title="Accessories"
          desc="Money-back gurantee"
          desclink=''
          backgroundImg={Accessories}
          leftBtnTxt='CUSTOMER ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons=''
          first
        />
      </div>
    </div>
  );
}

export default App;
