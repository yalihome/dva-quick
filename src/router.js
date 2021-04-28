import React from 'react';
import { Router, Route, Switch } from 'dva/router';  //不就是 react-router
import IndexPage from './routes/IndexPage';
import Products from './routes/products';
// 可否异步，页面切换前验证权限
//@todo   页面切换时候的页面权限校验
//@todo   接口请求时候的权限校验：404/3
//@todo   页面切换时的身份校验
//@todo   考虑下工具动态生成 Route
//@todo   每个页面切换前可以

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
