import React from 'react';
import './Home.css';

// import Card from "../Card/Card";

function Home() {
    return (
        // <div>
        //     <div className="cardList">
        //         <Card title="Indudini"
        //               para="This is para 1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
        //           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
        //         <Card title="Madhusha"
        //               para="This is para 2.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
        //           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
        //         <Card title="Indu"
        //               para="This is para 3 .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
        //           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
        //         <Card title="Madhus"
        //               para="This is para 4.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
        //           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
        //         <Card title="Indudini"
        //               para="This is para 5.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
        //           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
        //         <Card title="Madhusha"
        //               para="This is para 6.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
        //           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
        //         <Card title="Indu"
        //               para="This is para 7 .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
        //           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
        //         <Card title="Madhus"
        //               para="This is para 8.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis
        //           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>
        //     </div>
        //     <button className="btn btn-outline-primary">Submit</button>
        // </div>
        <div>
            <div className="row">
                <div className="col-6 bg-danger">Column 01</div>
                <div className="col-6 bg-primary">Column 02</div>
            </div>
            <div className="row">
                <div className="col-4 bg-warning">Column 03</div>
                <div className="col-4 bg-success">Column 06</div>
                <div className="col-4 bg-warning">Column 07</div>
            </div>

            <div className="row">
                <div className="col-4 bg-danger">Column 04</div>
                <div className="col-4 bg-primary">Column 08</div>
                <div className="col-4 bg-dark text-white">Column 09</div>
            </div>

            <div className="row">
                <div className="col-4 bg-success">Column 05</div>
                <div className="col-4 bg-warning">Column 10</div>
                <div className="col-4 bg-primary">Column 11</div>
            </div>

        </div>

    )
        ;
}

export default Home;