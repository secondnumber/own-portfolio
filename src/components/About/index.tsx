import { connect } from 'react-redux';
import AboutPage from './AboutPage';

let mapStateToProps = (state: any) => {
    return {
        about: state.about,
    };
};

export default connect(
    mapStateToProps,
    null
)(AboutPage);
