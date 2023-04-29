import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import TwelveJanggi from "./routes/TwelveJanggi";
import Menu from "./components/Menu";
import CodeDiary from "./routes/CodeDiary";
import ReactTodolist from "./routes/ReactTodolist";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
          <Route path="twelveJanggi" element={<TwelveJanggi />}></Route>
          <Route path="reactTodolist" element={<ReactTodolist />}></Route>
          <Route path="codeDiary" element={<CodeDiary />}></Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
