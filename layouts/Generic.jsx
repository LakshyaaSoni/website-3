import '../scss/main.scss'

class GenericLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default GenericLayout;