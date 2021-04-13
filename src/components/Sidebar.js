import React from 'react'
import Sidebar from './TvPrograms'



const Sidebar = () =>{
    return(
        <div class="menu">
            <a class="menu__link" href="/svt1" onClick= {() => setChannel("SVT 1")}>SVT 1</a>
            <a class="menu__link" href="/svt2" onClick= {() => setChannel("SVT 2")}>SVT 2</a>
            <a class="menu__link" href="">SVT Barn</a> 
            <a class="menu__link" href="">Kunskapskanalen</a>
            <a class="menu__link" href="">SVT 24</a>        
        </div>
    )
}
//exporteras som en JavaScript komponent
export default Sidebar