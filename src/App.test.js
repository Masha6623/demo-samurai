import React from 'react';
import SamuraiJSApp from './App';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// test('renders learn react link', () => {
//   render(<SamuraiJSApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



test('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container); 
    root.render(<SamuraiJSApp tab="home" />);
    root.unmount();
});


// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<SamuraiJSApp />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });