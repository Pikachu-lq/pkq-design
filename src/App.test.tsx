/*
 * @Author       : liqiao
 * @Date         : 2022-07-24 19:21:31
 * @LastEditors  : liqiao
 * @LastEditTime : 2022-07-26 13:52:08
 * @Description  : Do not edit
 * @FilePath     : /pkq-design/src/App.test.tsx
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
