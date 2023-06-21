import React, { Component } from 'react'

export class Son extends Component {

    constructor(props) {
        super()
        this.state = {
            name: "前端新手",
            msg: "这是一个前端新手",
            parentMsg: props.msg,
        }
    
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({parentMsg: value})
        this.props.parentChange(value)
    }

    render() {
        let { name, msg, parentMsg } = this.state
        let { name: pName, msg: pMsg} = this.props  // 用别名直接从props里取值
        // 在这种父子组件中需要用到同样属性名的时候，我们会选择用定义别名进行区分
        // 如果不想用别名，我们也可以直接用this.state.name, this.props.name
        return (
        <div>
            <h1>son page</h1>
            <p>姓名: {name}</p>
            <p>介绍: {msg}</p>
            <p>资深前端介绍信息：{parentMsg}--{pName}--{pMsg}</p>
            <input type='text' defaultValue={parentMsg} onChange={this.handleChange}/>
        </div>
        )
    }
}

export default Son
