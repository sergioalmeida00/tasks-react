import { ThemeProvider } from 'styled-components';
import defaultTheme from './assets/styles/theme/default';
import GlobalStyles from './assets/styles/global';

import { Header } from './components/Header/Header'
import { HeaderTask } from './components/HeaderTask/HeaderTask'
import { TaskProvider } from './TaskContext';

function App() {
  return (
    <TaskProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
        <Header/>
        <HeaderTask/>
      </ThemeProvider>
    </TaskProvider>
  )
}

export default App
