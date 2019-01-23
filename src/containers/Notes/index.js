import {PureComponent} from 'react';
import { connect } from "react-redux";
import {addNote, editNote, deleteNote} from './actions';

const mapStateToProps = state => ({
  notes: state.notes
});

const mapActionsToProps = {
  addNote,
  editNote,
  deleteNote
};

class Notes extends PureComponent {
  render() {
    const {notes, addNote, editNote, deleteNote} = this.props;
    return this.props.children({notes, addNote, editNote, deleteNote});
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Notes);