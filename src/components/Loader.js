import React, {Component} from "react";
import PropTypes from "prop-types";

class Loader extends Component {
    static defaultProps = {
        text: 'Loading',
        speed: 300
    };

    static propTypes = {
        text: PropTypes.string.isRequired,
        speed: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
        this.originalText = this.props.text;
        this.state = {
            text: this.props.text
        };
        this.loadingTextModifier = this.loadingTextModifier.bind(this);
    }

    loadingTextModifier() {
        let stopper = this.originalText + '...';
        if (this.state.text === stopper) {
            this.setState({
                text: this.originalText
            });
        } else {
            this.setState({
                text: this.state.text + '.'
            });
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(this.loadingTextModifier, this.props.speed);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <h3>
                    {this.state.text}
                </h3>
            </div>
        );
    }
}

export default Loader;
