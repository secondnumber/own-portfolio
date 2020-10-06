import { connect } from 'react-redux';
import ProjectsPage from './ProjectsPage';

let mapStateToProps = (state: any) => {
    return {
        about: state.about,
    };
};

export default connect(
    mapStateToProps,
    null
)(ProjectsPage);
