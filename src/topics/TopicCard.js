import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './topicCard.css';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function TopicCard({ id, topic, deleteTopic }) {
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
    return (
        <div className='topicCard col-5 m-1'>
            <div className='edit'>
                <NavLink exact to={`/topics/edit/${topic}/${id}`} ><i class="far fa-edit"></i></NavLink>
                <Typography
                    aria-owns={open ? 'delete-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    <button onClick={handleDelete} className='btn btn-sm'> <i class="far fa-trash-alt"></i> </button>
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
            <h4>
                <NavLink exact to={`/topics/questions/${topic}`} >
                    {topic.toUpperCase()}
                </NavLink>
            </h4>
        </div>
        
    )
}
export default TopicCard;