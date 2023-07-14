import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import img1 from '../../Assets/images/Group 7508-2.png'
import img2 from '../../Assets/images/Group 7508-1.png'
import img3 from '../../Assets/images/Group 7508.png'
import img4 from '../../Assets/images/Mask Group.png'
import img5 from '../../Assets/images/Mask Group-1.png'

import './About.css'
const AboutUs = () => {
  return (
    <div className='abt'>
    <MenuIcon id="ham-menu"/>  
    <h1>Team full of enthusiasm <br></br>and creativity</h1>
    <img src={img1} alt="" srcset="" />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, facilis non. Asperiores sequi ex ipsum itaque iure dolorum atque assumenda debitis placeat, sed, tempora accusamus quis, et aliquid praesentium. Atque consequuntur quae earum corrupti velit numquam dolore reiciendis, aspernatur architecto minus excepturi voluptas asperiores, doloribus ratione incidunt aperiam in id! Earum, explicabo sequi blanditiis numquam fuga dolorum, corporis veritatis repellendus pariatur consectetur ab ratione aperiam assumenda officiis ducimus culpa placeat voluptates magnam quaerat. Laudantium incidunt porro vel tempora blanditiis aut architecto minus magni ad provident. Harum corrupti blanditiis sed quam quidem sunt? Libero velit laborum sit, quasi quidem, vitae, dicta aspernatur eligendi est nulla cum qui cupiditate earum voluptates officiis eaque sapiente. Dicta perferendis, consequatur quod dolorem amet atque, excepturi, nostrum eos velit necessitatibus mollitia autem maiores illum quis eveniet deserunt temporibus. Sapiente distinctio obcaecati fugit libero alias reiciendis nisi doloremque vel debitis id non quas ullam a fugiat, magnam aliquam nostrum facilis. Eligendi voluptatibus natus aliquid ipsum id molestias vel corporis eaque ducimus nemo libero, a perferendis neque. Excepturi sapiente sequi voluptates minus ad nisi corporis accusantium? Doloribus sit doloremque unde accusantium laboriosam tempora quos quae impedit facilis neque blanditiis molestiae et ratione suscipit, corporis odio vel dolore pariatur sed nisi, officiis culpa inventore eaque. Doloremque excepturi cupiditate officiis aliquid cum ut dolor animi voluptates, deleniti explicabo perspiciatis tempora non fugiat alias corrupti iure numquam esse eligendi asperiores maxime delectus dolorum magni molestias qui. Nisi, harum et! Perferendis officiis dolores dolorem quia est repudiandae laboriosam eos voluptas similique, voluptates beatae omnis nihil id inventore? Recusandae animi natus velit libero quis sapiente consequuntur quae. Unde tenetur cumque vel asperiores expedita, quaerat sint quae deleniti, fuga odio nulla laudantium quis rerum suscipit vitae, magni debitis animi sed repellat natus similique est reiciendis at? Quidem nulla, reiciendis vero earum dolorem vel dolores?</p>
    <div className="collage">
    <img src={img2} alt="" srcset="" />
    <img src={img5} alt="" srcset="" />
    <img src={img3} alt="" srcset="" />
    <img src={img4} alt="" srcset="" />
    </div>
    </div>
  )
}

export default AboutUs
