// import {Button,Radio,Input,Select} from '@alife/next';
import React, { Component } from 'worker-react';
import Runtime, { render } from 'worker-react-runtime';
import './index.less';

/**
 * API调用示例
 */
// 千牛API调用
Runtime.invokePromise('QN.getActiveUser').then(res=>{
  console.log(res)
})

class Test extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      counter: 1,
    };
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillReceiveProps(nextProps) {
    console.log('in Test nextProps :', nextProps);
        // debugger;
    this.setState({

    });
  }
  componentWillUnmount() {
    console.log('in Test componentWillUnmount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate!!! test');
  }
  render() {
    const { count } = this.props;
    return (<button onClick={() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }}
    >teest {count} counter!!! state counter :{this.state.counter}</button>);
  }
}


function generateRandomData(len, dataIndexs) {
  const ret = [];
  for (let i = 0; i < len; i++) {
    ret.push(dataIndexs.reduce((obj, item) => {
      obj[item.dataIndex] = 10000 * Math.random() + 100;
      return obj;
    }, {}));
  }
  return ret;
}
const dataIndexs = [{
  dataIndex: 'a',
  title: 'a',
}, {
  dataIndex: 'b',
  title: 'b',
}, {
  dataIndex: 'c',
  title: 'c',
}, {
  dataIndex: 'd',
  title: 'd',
}, {
  dataIndex: 'e',
  title: 'e',
}, {
  dataIndex: 'f',
  title: 'f',
}, {
  dataIndex: 'g',
  title: 'g',
}, {
  dataIndex: 'h',
  title: 'h',
}];

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '洛丹',
      count: 0,
      tableData: generateRandomData(10, dataIndexs),
      radioValue: 'orange',
      show: true,
    };
  }
  componentWillReceiveProps(nextProps) {
  }

  componentDidUpdate() {
        // console.log('componentDidUpdate');
  }
  loadData() {
    this.setState({
      tableData: generateRandomData(30, dataIndexs),
    });
        // setTimeout(this.loadData.bind(this),20);
  }
  componentDidMount() {
        // this.loadData()
  }
  renderList() {
    const ret = [];
    for (let i = 0; i < 2000; i++) {
      ret.push(<li key={i}>{i}</li>);
    }
    return ret;
  }
  render() {
    const { value, show, count, tableData } = this.state;
    const { children } = this.props;
    return (<div
      styleName="test"
      style={{ padding: '12px' }}
      onClick={() => {
        console.log('out click');
      }}
    >
      <table dataSource={tableData}>
        {
            dataIndexs.map((item, itemIndex) => <table-column key={itemIndex} dataIndex={item.dataIndex} title={item.title} />)
        }
      </table>
      <button type="primary">按钮1234</button>
      <Test
        ref={(instance) => {
          console.log('instance :', instance);
        }}
        count={count}
      />
    </div>);
  }
}

export default App;
