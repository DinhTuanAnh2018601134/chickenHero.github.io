import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="banner container mb-3">
                <div className="row">
                    <div className="col-sm-8 pl-4 mx-auto">
                    <div id="carouselId" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to={0} className="active" />
                        <li data-target="#carouselId" data-slide-to={1} />
                        <li data-target="#carouselId" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner img-fluid" role="listbox">
                        <div className="carousel-item active">
                            <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/iPhone_11_690x300-2.png" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/20-u-5g690x300.png" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/TX3-690x300.png" alt="Third slide" />
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;