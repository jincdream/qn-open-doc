
import app from './app.worker';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'worker-react-render';
import Mock from '../../mock/qnmock'


setTimeout(()=>{
  if(!window.workbench){
    // mock data
    let apis = {}
    let qn = window._QN_Open_SDK.QN
    window._QN_Open_SDK.QN = window._QN_Open_SDK.QN_T
    Object.keys(window._QN_Open_SDK.QN).map(name => {
      apis[name] = function(params){
        if(Mock[name]){
          return new Promise((resolve,reject)=>{
            resolve(Mock[name])
          })
        }else{
          return qn[name]
        }
      }
    })
    window._QN_Open_SDK.QN = apis
  }
  const renderer = render({
    workers: [{
        el:'container',
        worker:app() 
    }],
    vdom: React,
    vdomRender: ReactDOM, 
    uiFrameworks: [window.Next,{
      Kf:window._QN_Open_Componets
    }],
    context: window._QN_Open_SDK
  });
},1000)

