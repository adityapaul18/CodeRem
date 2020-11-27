import React from 'react';
import './Ongoingcards.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Ongoingcards(props) {
    
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      };
      
    return (
        <div className="Card_body">
            <h2 className="platform">
                                     {(props.data.Platform === 'CODECHEF')  && <img className="img1" src="/logos/Codechef_logo.svg.png"></img>}
                                     {(props.data.Platform === 'HACKEREARTH')  && <img className="img1" src="/logos/logo_new.png"></img>}
                                     {(props.data.Platform === 'CODEFORCES')  && <img className="img1" src="/logos/1200px-Codeforces_logo.svg.png"></img>}
                                     {(props.data.Platform === 'OTHER')  && <img className="img1" src="/logos/logo_c4l_horizontal.png"></img>}
            </h2>
            <h3>{truncate(props.data.Name,80)}</h3>
            <div><b>Ends:</b> {props.data.EndTime} hrs</div> 
            <center>
            <a target="label" href={props.data.url}>
            <h3 className="goto">link <ArrowForwardIcon/></h3>
            </a>

            </center>

        </div>
    )
}

export default Ongoingcards
