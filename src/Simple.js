import React from "react";

export default class Simple extends React.Component {
    constructor(props) {
        super(props);
        //console.log('constructor',this.props)
    }

    render() {
        //console.log('Simple')
        return (
            <div>simple  {JSON.stringify(this.props.totallayout.cols)}</div>
        )
    }
}