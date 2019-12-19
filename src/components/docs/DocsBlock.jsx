import React, { Component } from 'react'

class DocsBlock extends Component {
    render() {
        let {id, title, img, body} = this.props
        return(
            <div id={id} className="section scrollspy">
                <a name={id}></a>
                {!!title && <h5>{title}</h5>}
                {
                    !!img 
                    ?
                    <div className="row">
                        <div className="col s12 m4 l4">
                            {
                                img.map((item, index) => {
                                    return <p key = {`imgChanck_${index}`}>
                                                <img 
                                                    className="responsive-img z-depth-3 materialboxed" 
                                                    src={item}
                                                />
                                            </p>
                                })
                            }
                        </div>
                        <div className="col s12 m8 l8">
                            {
                                body.map((item, index) => {
                                    return <div key = {`docsChanck_${index}`}>{item}</div>
                                })
                            }
                        </div>
                    </div>
                    :
                    body.map((item, index) => {
                        return <div key = {`docsChanck_${index}`}>{item}</div>
                    })
                }
            </div>
        )
    }
}

export default DocsBlock