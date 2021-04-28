import React from 'react';
import { connect } from 'dva';
import Styles from "./products.js";

function Products() {
    return (<div className="P-products">我是列表页</div>);
}

Products.propTypes = {

};

export default connect()(Products);