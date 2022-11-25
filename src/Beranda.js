import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import {Card} from 'react-bootstrap';
import { Data } from "./Data";

function Beranda() {
    const [likes, setLikes] = useState(Data.likes);

    return (
        <>
        {Data.map((item) => (
            <Card style={{ width: '24rem', borderRadius: '8px', overflow: 'hidden' }}>
                <div className='d-flex bg-success'>
                    <div className='col-3 p-3'>
                        <div style={{borderRadius: '50%', overflow: 'hidden'}}>
                            <img alt='' src={item.user_image} style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className='col-4 align-item-center'>
                        <p>Card Title</p>
                    </div>
                </div>
                <Card.Img variant="top" src={item.post_image} style={{ width: '100%' }} />
                <button>Like</button>
                <Card.Body>
                    <Card.Title>{item.likes} Likes</Card.Title>
                    <span className="fw-semibold">{item.username}</span> <span>{item.description}</span>
                    <Card.Text className="fw-semibold text-secondary">
                    View all {item.comment} comments
                    </Card.Text>
                </Card.Body>
            </Card>
        ))}
            
        </>
        
    );
}

export default Beranda;