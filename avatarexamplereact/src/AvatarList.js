import React from 'react';
import './Avatar.css';
import 'tachyons';

const AvatarList =(props)=>{
    return(
        
        <div className='AvatarStyle ma4 bg-light-purple dib pa3 tc grow shadow'>
<img  src={`https://joeschmoe.io/api/v1/${props.name}`} alt='Avatar'/>
{/* <p className='tc' >{props.id}</p> */}
<p className='tc' >{props.name}</p>
<p className='NameStyle'>{props.work}</p>
</div>

        
    )
}
export default AvatarList; 