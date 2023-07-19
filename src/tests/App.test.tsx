import React from 'react';
import { render as RenderWithProvider, screen } from '@testing-library/react';
import App from 'app/App';
import { UserProvider } from 'context';
import { BrowserRouter } from 'react-router-dom';


const render = (component: JSX.Element) => {
  return RenderWithProvider(
    <BrowserRouter>
      <UserProvider>
        {component}
      </UserProvider>
    </BrowserRouter>
  )
}

test('renders App component', () => {
  render(<App />);
  const inputElm = screen.getByTitle(/Filter users by name/i);
  expect(inputElm).toBeInTheDocument();
});
