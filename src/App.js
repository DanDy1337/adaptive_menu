import './style.css';
import LastBody from './LastBody';
import LastBodyMobile from './LastBodyMobile';

function App() {
  return (
    <div style={{
      height:'100%',
      width:'100%',
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center'
      }}>

      <h1> &lt;== УМЕНЬШИ СТРАНИЦУ</h1>
      <LastBody />
      <LastBodyMobile />

    </div>
  );
}

export default App;
