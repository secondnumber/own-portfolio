import { connect } from 'react-redux';
import HomePage from './HomePage';

let mapStateToProps = (state: any) => {
    return {
        about: state.about,
    };
};

export default connect(
    mapStateToProps,
    null
)(HomePage);
