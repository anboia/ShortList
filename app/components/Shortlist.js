import React from 'react';
import { IndexLink, Link } from 'react-router';
import reactCSS from 'reactcss'


class Shortlist extends React.Component {
  render() {
    return (
      <div className='shortlist' >
        <div className='listTitle' >Your Shortlist</div>

        <div className='cardList' >
          <div className='card' >
            {/*CardHeader (cover, avatar, title, subtitile)*/}
            <div className='cover' ></div>
            <div className='avatar' ></div>
            <div className='cardTitle' >Jane 1</div>
            <div className='cardSubtitle' >28 Years Old, 1 km Away</div>

            {/*CardText*/}
            <div className='cardText' >
              <p><mark>Intrested in: </mark>Waiters & Waitresses</p>
              <p><mark>From: </mark>Darlington, NSW</p>
              <p><mark>Work History: </mark></p>
              <ul>
                <li>Bartender at Manchester Press Club <mark>1-2 Years</mark></li>
                <li>Bartender/waitress at L'amour Catering <mark>0-3 Months</mark></li>
                <li>Head Waitress at Sapporo Teppanyaki Restaurant Manchester <mark>6-12 Months</mark></li>
              </ul>
            </div>

            {/*CardActions*/}
            <div className='cardActions' >
              <div className='flatButton' >Show More</div>
              <div className='iconButton' >
                <img src="/img/chat.svg" alt="Send message" />
              </div>
              <div className='iconButton' >
                <img src="/img/call.svg" alt="Make a call" />
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Shortlist;
