import './App.css';
import { i18next, switchLanguage, useTranslation } from './i18n';


function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <div>{t('homepage')}</div>
        <button onClick={()=>{
          switchLanguage(i18next.language === 'zh'?"en-US":"zh")
        }}>toggle language</button>
      </header>
    </div>
  );
}

export default App;
