import {Component} from 'react';

class Inner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.isShow
        };
    }
    componentWillReceiveProps(nextProps) {
        // извращенцы( обновлять state при изменении props
        this.setState({show: nextProps.isShow})
    }
    render() {
        const {show} = this.state;
        const {text} = this.props;
        return (
            <div>
                {
                    (show) ?
                        "Show " + text:
                        "hide "
                }

            </div>
        )
    }
}


export default class Outer extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.state = {
            texts: ['1 sdasda', '2 qwee'],
            show: true
        }
    }
    add() {
        const {_text} = this.refs;
        if (_text.value === 'show') {
            this.setState({show: true})

        } else {
            this.setState({show: false})
        }

    }
    render() {
        console.log(this.state.show)
        const {texts, show} = this.state;
        return (
            <div className="outer">
                <input type="text" ref="_text"/>
                <button onClick={this.add}>add</button>
                {
                    texts.map((text,i) =>
                        <Inner key={i} isShow={show} text={text}/>
                    )
                }
            </div>
        );
    }
}
