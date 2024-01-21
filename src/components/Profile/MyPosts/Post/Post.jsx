import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://www.sunhome.ru/i/wallpapers/180/prekrasnaya-neitiri-avatar.orig.jpg'></img>
            { props.message } {props.likesCounts}
            <div>
                <span>like</span>
            </div>
        </div>
       
     );
}


export default Post;