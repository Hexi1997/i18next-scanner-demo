import './App.css';
import { i18next, switchLanguage, t, useTranslation } from './i18n';


function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <div>{t('title',{ns:'pages'})}</div>
        <div>{t('title',{ns:'common'})}</div>
        <div>{t('color',{ns:'common',defaultValue:'red_en'})}</div>
        <div>{t('say',{ns:'common',msg:'wtf'})}</div>
        <br />
        <button onClick={testFunc}>test</button>
        <br />
        <button onClick={()=>{
          switchLanguage(i18next.language === 'zh'?"en-US":"zh")
        }}>toggle language</button>
      </header>
    </div>
  );
}

function testFunc() {
  alert(t('test',{ns:'common',defaultValue:'test'}))
}

export default App;
