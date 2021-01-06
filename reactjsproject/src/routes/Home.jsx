import React from 'react';
import img from '../../src/img2.jpg'

function Home() {
    return (


        <div class="container-fluid ">
            <div class="carousel-inner">
                <div class="item active">
                    <img src={img} alt="Los Angeles" width="100%" height="570px" />
                    <div class="carousel-caption text-primary text-md text-center">
                        <h2>Welcome to School Management System</h2>
                        
                    </div>
                </div>


            </div>
        </div>

    );
}

export default Home;
