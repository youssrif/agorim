import React from 'react'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
//icons
import bath from '../../assets/bath.png'
import plannig from '../../assets/plannig.png'
import house from '../../assets/house.png'
import '../../styles/Card.css'

function Cards() {
    return (
        <div className="cards-container">
            <div className="card">
                <div className="card-image">
                    <img src={img2} alt="image2"/>
                </div>
                <div className="card-footer">
                    <div>
                        <h2>Old Vicarage</h2>
                        <div className="card-info">
                            <div className="font">
                                <img src={plannig} alt="planning"/><span>250m’</span>  
                                <div></div>
                            </div>
                             <div className="font">
                                 <img src={house} alt="house"/> <span>3</span>
                                 <div></div>
                             </div>
                             <div className="font">
                                 <img src={bath} alt="bath" width={30}/><span>3</span>
                             </div>

                        </div>
                    </div>
                    <div>
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
            </div>

              <div className="card">
                <div className="card-image">
                    <img src={img3} alt="image2"/>
                </div>
                <div className="card-footer">
                    <div>
                        <h2>Old Vicarage</h2>
                        <div className="card-info">
                            <div className="font">
                                <img src={plannig} alt="planning"/><span>250m’</span>  
                                <div></div>
                            </div>
                             <div className="font">
                                 <img src={house} alt="house"/> <span>3</span>
                                 <div></div>
                             </div>
                             <div className="font">
                                 <img src={bath} alt="bath" width={30}/><span>3</span>
                             </div>

                        </div>
                    </div>
                    <div>
                      <i className="far fa-heart"></i>
                    </div>
                </div>
            </div>


              <div className="card">
                <div className="card-image">
                    <img src={img4} alt="image2"/>
                </div>
                <div className="card-footer">
                    <div>
                        <h2>Old Vicarage</h2>
                        <div className="card-info">
                            <div className="font">
                                <img src={plannig} alt="planning"/><span>250m’</span>  
                                <div></div>
                            </div>
                             <div className="font">
                                 <img src={house} alt="house"/> <span>3</span>
                                 <div></div>
                             </div>
                             <div className="font">
                                 <img src={bath} alt="bath" width={30}/><span>3</span>
                             </div>

                        </div>
                    </div>
                    <div>
                       <i className="far fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
