import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Styles from "../Styles/styles.scss";
import Loading from './Loading';
import SetTimer from './SetTimer';
import AnalogTimer from './AnalogTimer';
import DigitalTimer from './DigitalTimer';
import VisualTimer from './VisualTimer';
import AlarmTimer from './AlarmTimer';
import PauseTimer from './PauseTimer';

export default function App() {
    return (
        <div className={Styles.body}>
          <Router>
            <main>
              <Routes>
                <Route path="/" element={<Loading />} />
                <Route path="/SetTimer" element={<SetTimer />} />
                <Route path="/AnalogTimer" element={<AnalogTimer />} />
                <Route path="/DigitalTimer" element={<DigitalTimer />} />
                <Route path="/VisualTimer" element={<VisualTimer />} />
                <Route path="/AlarmTimer" element={<AlarmTimer />} />
                <Route path="/PauseTimer" element={<PauseTimer />} />
              </Routes>
            </main>
          </Router>
        </div>
      );
} 