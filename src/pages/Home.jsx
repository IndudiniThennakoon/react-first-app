import React from 'react';
import './Home.css';
import Card from "../Card/Card";

function Home() {
    return (
        <div>
            <div className="cardList">
                <Card title="Indudini"
                      para="This is para 1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
                  molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
                <Card title="Madhusha"
                      para="This is para 2.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
                  molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
                <Card title="Indu"
                      para="This is para 3 .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
                  molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
                <Card title="Madhus"
                      para="This is para 4.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
                  molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
                <Card title="Indudini"
                      para="This is para 5.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
                  molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
                <Card title="Madhusha"
                      para="This is para 6.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
                  molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
                <Card title="Indu"
                      para="This is para 7 .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
                  molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
                <Card title="Madhus"
                      para="This is para 8.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
                  molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
            </div>
            <button className="btn btn-outline-primary">Submit</button>
        </div>
    );
}

export default Home;