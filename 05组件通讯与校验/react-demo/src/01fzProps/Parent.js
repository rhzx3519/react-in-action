import React, { Component } from 'react'
import Son from './Son'

export class Parent extends Component {
    state = {
        name: '前端大佬',
        msg: '这是一个资深前端大佬'
    }

    // 如果要让子组件改父组件的值的话，就需要定义这个函数
    parentChange(data) {
        console.log(data)   // 接收到从子组件传给父组件的值之后，我们就可以改变父组件的值了
        this.setState({msg: data})
    }

    render() {
        let { name, msg } = this.state
        return (
        <div>
            <h1>parent page</h1>
            <p>姓名: {name}</p>
            <p>介绍: {msg}</p>
            {/* 子组件改变父组件的值，那么就把父组件的改值函数传给子组件 */}
            <Son {...this.state} parentChange={this.parentChange.bind(this)}/>
        </div>
        )
    }
}

export default Parent
