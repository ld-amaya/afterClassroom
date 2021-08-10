import React, {useContext, useState} from 'react';
import UserContext from '../context/UserContext';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function TopicHeader({id, topic, deleteTopic}) {
    const { user, isTeacher } = useContext(UserContext);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleDelete = (e) => {
        deleteTopic(id);
    }

    if (user && !isTeacher) {
        return(
            <div className='exam'>
                <NavLink exact to = {`/topics/${topic}/exam`}>Take Exam</NavLink>
            </div>
        )
    }
    if (user && isTeacher) {
        return (
            <div className='edit'>
                <NavLink exact to={`/topics/edit/${topic}/${id}`} ><i className="far fa-edit"></i></NavLink>
                <Typography
                    aria-owns={open ? 'delete-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    <button onClick={handleDelete} className='btn btn-sm'> <i className="far fa-trash-alt"></i> </button>
                </Typography>
                <Popover
                    id="delete-over-popover"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography>
                        Warning: Deleting topic will delete all questions related to the topic
                    </Typography>
                </Popover>
            </div>
        )
    }
    return null
}

export default TopicHeader