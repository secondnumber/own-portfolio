import { connect } from 'react-redux';
import ContactsPage from './ContactsPage';

let mapStateToProps = (state: any) => {
    return {
        about: state.about,
    };
};

export default connect(
    mapStateToProps,
    null
)(ContactsPage);
