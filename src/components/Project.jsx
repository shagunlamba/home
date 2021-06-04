import React from 'react';


const Project = () => {
    return (
        <div style={{backgroundColor:'#f8a1d1'}} id="projects">
        <div className="container">
            <h1 className="display-4 py-5 text-center">Recent Projects</h1>
            
            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">THE SOCIAL HELPER</h5>
                            <p className="card-text">The Social Helper is a senior citizen friendly website, built during Codecell Hackathon TSEC, March 2020.
                            It connects an elderly with the nearest registered volunteer, has a chat feature as well. Built with Express, NodeJS and MongoDB.</p>
                            <a href="https://github.com/shagunlamba/the-social-helper-og">Link to Repo</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">SHOPPING-APP : React Native Application</h5>
                            <p className="card-text">A shopping app made using React Native, Redux, Redux-Thunk and Firebase. The app consists of an authentication screen to log in or sign up, the shop screen to see all products and product details. The user can add/remove products to/from cart and order them. The admin can create, update and delete products.</p>
                            <a href="https://github.com/shagunlamba/shop-app">Link to Repo</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">Social Media - Unify</h5>
                            <p className="card-text">A social media app, made using HTML, CSS, Javascript, ReactJs, MYSQL, where users can post and interact with other users. 
                            The user has an option to sign up, create posts, like and comment, as well as preview the post before posting.</p>
                            <a href="https://github.com/shagunlamba/social-media-react">Link to Repo</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">The Burger Builder</h5>
                            <p className="card-text">A Burger builder Application built using React Js and ReduxJs. A single page, fully responsive application which uses authentication and form validation, and implements routing uses React Router.</p>
                            <a href="https://github.com/shagunlamba/the-burger-builder">Link to Repo</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                 <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">Recipe-App : React Native Application</h5>
                            <p className="card-text">A React-Native recipe app , which uses React Navigation v4 and Redux. It displays recipes by category, the user can add a recipe to favorites.
                            The app also has an option for Filtering recipes (gluten-free, lactose-free, vegan & vegetarian).</p>
                            <a href="https://github.com/shagunlamba/recipe-native-app">Link to Repo</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">Data structures in C++</h5>
                            <p className="card-text">Implemented Data structures in C++ from scratch.</p>
                            <a href="https://github.com/shagunlamba/DataStructuresCpp">Link to Repo</a>
                        </div>
                    </div>
                </div>

                
            </div>

            
        </div>
        </div>
    )
}

export default Project;
