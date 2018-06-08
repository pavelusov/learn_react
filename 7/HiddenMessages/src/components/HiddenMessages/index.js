import {Component} from 'react';

class HiddenMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: (props.hide) ? props.hide : true
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({hidden: nextProps.hide});
        console.log(nextProps)
    }
    render() {
        const {children} = this.props;
        const {hidden} = this.state;
        return (
            <p>
                {
                    (hidden) ?
                        children.replace(/\w/g, 'x'):
                        children
                }
            </p>
        );
    }
}

export default class HiddenMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                "My message 1",
                "Your message 2",
                "Our message 3"
            ],
            showing: -1
        }
    }
    componentWillMount() {
        this.interval = setInterval(() => {
            let {showing, messages} = this.state;
            showing = (++showing >= messages.length) ?
                -1 : showing;

            console.log(showing);
            this.setState({showing});
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {messages, showing} = this.state;
        return (
            <div className="hidden-messages">
                {
                    messages.map((message, i) =>
                        <HiddenMessage key={i} hide={(i !== showing)}>
                            {message}
                        </HiddenMessage>
                    )
                }
            </div>
        );
    }
}
