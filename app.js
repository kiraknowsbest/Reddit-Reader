import React, { Component } from 'react';
import Header from './headerBar';
import UserSubs from './dropdown.js';
import Search from './filter';
import Title from './pageTitle';
import RedditsWrapper from './results';
import AddCustom from './addReddit';
import UserReddit from './userAddedReddit';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      normal: ['hot', 'new', 'rising', 'controversial', 'promoted'],
      user: [],
      ignored: [],
      clicked: false,
      current: 'hot',
      dataStorage: [],
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.userRedditClick = this.userRedditClick.bind(this);
    this.normalClick = this.normalClick.bind(this);
    this.filter = this.filter.bind(this);
    this.focused = this.focused.bind(this);
    this.add = this.add.bind(this);
    this.clickRemove = this.clickRemove.bind(this);
  }

  componentDidMount () {
    let val = {
      target: {
        innerText: 'hot'
      }
    };
    this.normalClick(val);
  }

  handleClick () {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  userRedditClick (e) {
    let val = e.target.innerText;
    let url = 'https://www.reddit.com/r/' + val + '.json';
    let data;
    let context = this;
    axios.get(url)
      .then(function (resJson) {
        context.setState({
          dataStorage: resJson.data.data.children,
          data: resJson.data.data.children
        });
      })
      .catch(function (err) {
        console.error(err);
      });

    this.setState({
      current: val
    });
  }

  clickRemove (val) {
    this.setState({
      user: this.state.user.filter((item) => item !== val)
    });
  }

  normalClick (e) {
    let val = e.target.innerText;
    var urlPlacer = '';
    if (val === 'promoted') {
      urlPlacer = 'ads';
    } else if (val === 'wiki') {
      urlPlacer = 'wiki/index';
    } else {
      urlPlacer = val;
    }
    let url = 'https://www.reddit.com/' + urlPlacer + '.json';
    let data;
    let context = this;
    axios.get(url)
      .then(function (resJson) {
        context.setState({
          dataStorage: resJson.data.data.children,
          data: resJson.data.data.children
        });
      })
      .catch(function (err) {
        console.error(err);
      });

    this.setState({
      current: val
    });
  }

  add () {
    var element = document.getElementById('add-text');
    if (element !== '') {
      var text = element.value.toLowerCase();
      this.setState({
        user: this.state.user.concat([text])
      });
      element.value = '';
    }
  }

  focused () {
    var text = document.getElementById('search-text').value;
    if (text === '') {
      this.setState({
        data: this.state.dataStorage
      });
    }
  }

  filter () {
    var text = document.getElementById('search-text').value.toLowerCase();
    this.setState({
      data: this.state.dataStorage.filter(function (item) {
        return item.data.title.toLowerCase().indexOf(text) !== -1;
      })
    });
  }

  render () {
    var context = this;
    let userRedditList = this.state.user.map(function (item) {
      return <UserReddit key={item} item={item} clickRemove={context.clickRemove} click={context.userRedditClick}/>
    });
    userRedditList.unshift(<AddCustom key="addCustom" add={this.add}/>);
    if (this.state.clicked) {
      return (
        <div>
          <div className="nav-wrapper">
            <UserSubs user={this.state.user} click={this.handleClick}/>
            <Header normal={this.state.normal} click={this.normalClick}/>
          </div>
          <Search filter={this.filter} focused={this.focused}/>
          <Title title={this.state.current}/>
          <aside className="side-wrapper">
            { userRedditList }
          </aside>
          <RedditsWrapper links={this.state.data}/>
        </div>
      );
    } else {
      return (
        <div>
          <div className="nav-wrapper">
            <UserSubs user={this.state.user} click={this.handleClick}/>
            <Header normal={this.state.normal} click={this.normalClick}/>
          </div>
          <Search filter={this.filter} focused={this.focused}/>
          <Title title={this.state.current}/>
          <RedditsWrapper links={this.state.data}/>
        </div>
      );
    }
  }
}

export default App;