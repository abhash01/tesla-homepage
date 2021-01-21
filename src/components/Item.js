import React from 'react';
import Button from './Button';
import './Item.css'

const Item = ({title, desc, desclink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first}) => {
    return(
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className='item_container'>
                <div className="item_text">
                    <p>{title}</p>
                    <div className='item_textDesc'>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className='item_lowerThird'>
                    <div className='item_buttons'>
                        <Button inp='primary' text={leftBtnTxt} link={leftBtnLink}/>
                        {twoButtons && (
                            <Button inp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item