import React from 'react';
import './Home.css';

// import Card from "../Card/Card";

function Home() {
    return (
         <div>
            {/*<div className="cardList">*/}
        {/*         <Card title="Indudini"*/}
        {/*               para="This is para 1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis*/}
        {/*           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>*/}
        {/*         <Card title="Madhusha"*/}
        {/*               para="This is para 2.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis*/}
        {/*           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>*/}
        {/*         <Card title="Indu"*/}
        {/*               para="This is para 3 .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis*/}
        {/*           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>*/}
        {/*         <Card title="Madhus"*/}
        {/*               para="This is para 4.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis*/}
        {/*           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>*/}
        {/*         <Card title="Indudini"*/}
        {/*               para="This is para 5.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis*/}
        {/*           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>*/}
        {/*         <Card title="Madhusha"*/}
        {/*               para="This is para 6.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis*/}
        {/*           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>*/}
        {/*         <Card title="Indu"*/}
        {/*               para="This is para 7 .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis*/}
        {/*           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>*/}
        {/*         <Card title="Madhus"*/}
        {/*               para="This is para 8.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error facilis*/}
        {/*           molestiae natus nulla quas quos. Adipisci amet animi consequuntur enim eos excepturi facere facilis!"/>*/}
        {/*    </div>*/}
        {/*     <button className="btn btn-outline-primary">Submit</button>*/}


            {/*<div className="row">*/}
            {/*    <div className="col-6 bg-danger">Column 01</div>*/}
            {/*    <div className="col-6 bg-primary">Column 02</div>*/}
            {/*</div>*/}
            {/*<div className="row">*/}
            {/*    <div className="col-4 bg-warning">Column 03</div>*/}
            {/*    <div className="col-4 bg-success">Column 06</div>*/}
            {/*    <div className="col-4 bg-warning">Column 07</div>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <div className="col-4 bg-danger">Column 04</div>*/}
            {/*    <div className="col-4 bg-primary">Column 08</div>*/}
            {/*    <div className="col-4 bg-dark text-white">Column 09</div>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <div className="col-4 bg-success">Column 05</div>*/}
            {/*    <div className="col-4 bg-warning">Column 10</div>*/}
            {/*    <div className="col-4 bg-primary">Column 11</div>*/}
            {/*</div>*/}

            <div className="container">
                <div className="formMainDiv">
                    <div className="m-auto col-8">
                        <h1 className="text-center">Customer Details</h1>
                        <form className="form">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" id="name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                <input type="text" name="mobile" className="form-control" id="mobile"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text-area" name="address" className="form-control" id="address"/>
                            </div>
                            <div className="w-100 d-flex justify-content-center align-items-center">
                                <button type="submit" className="btn btn-primary col-3">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="tableMainDiv">
                    <div className="m-auto col-10">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;