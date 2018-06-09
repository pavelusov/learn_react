import {Component} from 'react';
import fetch from 'isomorphic-fetch';

const DataComponent = (HighComponent, url) =>
  class DataComponent extends Component {
    constructor(props) {
        super(props);
        this.url = url + props.count;
        this.state = {
            data: [],
            loading: false
        };
    }
    componentWillMount() {
        this.setState({loading: true});
        fetch(this.url)
            .then(response => response.json())
            .then(data => this.setState({data: data.results, loading: false}));
    }
    render() {
        const {data, loading} = this.state;
        return (loading) ?
            <p>Loading...</p>:
            <HighComponent data={data}/>;
    }
  };

export default DataComponent;
