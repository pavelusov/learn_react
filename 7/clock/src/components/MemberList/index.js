import {Component} from 'react';
import Member from "./Member";
import getFakeMembers from './getFakeMembers';

export default class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          members: [],
          loading: false,
          error: null
        };
    }
    componentWillMount() {
        console.log('WillMount lifecycle');
        this.setState({loading: true});
        getFakeMembers(this.props.count)
            .then(members => {
                this.setState({members, loading: false});
            });
    }
    componentWillUpdate() {
        console.log('updating lifecycle');
    }
    render() {
        const {members, loading, error} = this.state;
        return (
            <div>
                {
                    (loading) ?
                        "Members Loading...":
                        (members.length === 0) ?
                            "0 members loaded" :
                            members.map(member =>
                                <Member
                                    key={member.id.value}
                                    {...member}
                                />
                            )
                }
                {error ?
                    <p>Error loading members</p>: ""
                }
            </div>
        );
    }
}
