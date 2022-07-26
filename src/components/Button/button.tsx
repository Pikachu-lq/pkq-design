/*
 * @Author       : liqiao
 * @Date         : 2022-07-24 22:28:36
 * @LastEditors  : liqiao
 * @LastEditTime : 2022-07-24 22:29:57
 * @Description  : Do not edit
 * @FilePath     : /pkq-design/src/components/Button/button.tsx
 */import React from 'react';
 export interface PropsModel {
 [key: string]: any;
 }
 const TestView: React.FC<PropsModel> = (props) => {
 return <div className='view-content'>TestView</div>;
 };
 export default TestView;