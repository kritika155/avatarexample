import React,{Component} from 'react';
import './Avatar.css';
import AvatarList from './AvatarList';
import 'tachyons';
class Avatar extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'Welcome to Avatar World'
        }

    }
    namechange(){
        this.setState({
            name:'Subscribe to Avatar World'
        })
    }
 render(){
    const avatarlistarray=[
        {
            id:1,
            name:'Kritika',
            work:'Web Developer'
        },
        {
            id:2,
            name:'Ashish',
            work:'FrontEnd'
        },
        {
            id:3,
            name:'Athira',
            work:'Database'
        },
        {
            id:4,
            name:'Vivaan',
            work:'BackEnd'
        }
    ]
    const arrayavatarcard=avatarlistarray.map((avatarcard,i)=>{
return <AvatarList key={i} id={avatarlistarray[i].id}
                   name={avatarlistarray[i].name}
                   work={avatarlistarray[i].work}/>
    })
  return (
  <div className='mainpage' >
<h1 >{this.state.name}</h1>
{arrayavatarcard}
<div className='tc'><button id="subscribe" onClick={()=>this.namechange()}>Subscribe</button>
</div>
  </div>
  );
}
}
// }

// const Avatar =(props) =>{
    
//     const avatarlistarray=[
//         {
//             id:1,
//             name:'Kritika',
//             work:'Web Developer'
//         },
//         {
//             id:2,
//             name:'Ashish',
//             work:'FrontEnd'
//         },
//         {
//             id:3,
//             name:'Athira',
//             work:'Database'
//         },
//         {
//             id:4,
//             name:'Vivaan',
//             work:'BackEnd'
//         }
//     ]
//     const arrayavatarcard=avatarlistarray.map((avatarcard,i)=>{
// return <AvatarList key={i} id={avatarlistarray[i].id}
//                    name={avatarlistarray[i].name}
//                    work={avatarlistarray[i].work}/>
//     })
//   return (
//   <div className='mainpage' >
// <h1 >Welcome to Avatar World</h1>
// {arrayavatarcard}
// <div className='tc'><button>Subscribe</button>
// </div>
//   </div>
//   );
// }

export default Avatar;
