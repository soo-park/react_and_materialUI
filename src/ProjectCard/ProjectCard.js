import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './ProjectCard.css';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


const ProjectCard = ({data}) => (
  <Card position="static" className='card' id={data.id}>
    <CardContent>
      <Typography className="title" variant="subheading">
        {data.name}
      </Typography>
      <Typography className="detail" color="textSecondary">
        {data.detail}
      </Typography>
    </CardContent>
  </Card>
);

export default withStyles(styles)(ProjectCard);
