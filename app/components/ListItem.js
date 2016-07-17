
import React from 'react';
import {Card, CardHeader, CardActions, FlatButton} from 'material-ui/Card';
import {TextLine, TextList} from ''
import {FlatButton}
import FlatButton from 'material-ui/FlatButton';

const ListItem = () => (
  <Card>
    <CardHeader
      title="Jane 1"
      subtitle="28 Years Old, 1 km Away"
      avatar="http://lorempixel.com/100/100/nature/"
      cover="http://lorempixel.com/100/100/nature/"
    />
    <TextLine
      primaryText="Intrested in:"
      description="Waiters & Waitresses"
    />
    <TextLine
      primaryText="From:"
      description="Darlington, NSW"
    />
    <TextList
      primaryText="Work History:"
      list=[
        {
          description:"Bartender at Manchester Press Club",
          duration:"1-2 Years"
        }
      ]
    />

    <CardActions>
      <FlatButton label="Show More" />
      <IconButton iconClassName="chat" />
      <IconButton iconClassName="call" />
    </CardActions>
  </Card>
);

export default ListItem;
