import React from 'react';
import { Container } from 'react-bootstrap';
import './Services.css';
import img from "./images/img.jpg";

export const Services = () => (
    <>
        <div className="con_2_1">
            <h1 className="h1_2_1">Services Details</h1>
            <button className="button_2_1">Home → Services Details</button>
        </div> 
        <Container>
            <div style={{ 'position': 'relative'}} >
            <h3 style={{ 'margin-top': '250px','margin-left': '570px'}}>House Cleaning</h3>
            <p style={{'padding-top': '390px','left': '480px'}} className="p_2_1"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br/> 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto <br/>
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut<br/>  
                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
            <img className="img_2_1" src={img} alt="img"/>
            <h3 style={{ 'margin-top': '-60px','margin-left': '570px'}}>Why Choose Our Services</h3>
            <p className="p_2_1" style={{'padding-top': '80px','left': '480px'}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain<br/>
             was born and I will give you a complete account of the system, and expound the actual<br/>
             teachings of the great explor er of the truth, the master-builder of human happiness.</p>
             <div class="circle_1" style={{ 'margin-bottom': '-150px'}}></div>
            <p className="p_2_1" style={{'margin-top': '110px','left': '540px'}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis<br/>
                  praesentium luptatum deleniti atque corrupti quos dolores.</p>
            <div class="circle_1" style={{ 'margin-bottom': '-150px'}}></div>
            <p className="p_2_1" style={{'margin-top': '110px','left': '540px'}}>Facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est<br/>
             eligendi optio cumque nihil impedit quo minus id quod maxime</p>
            <div class="circle_1"></div>
            <p className="p_2_1" style={{'margin-top': '-38px','left': '540px'}}>Sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur<br/>
             aut prefer endis doloribus asperiores repellat.</p>
             <table>
                <tr>
                    <td>
                    <img className="img_2_2" src={img} alt="img"/>
                    </td>
                    <td>
                    <img className="img_2_2" src={img} alt="img"/>
                    </td>
                </tr> 
            </table>
            <h3 style={{ 'margin-top': '-50px','margin-left': '570px'}}>Core Features</h3>
            <p className="p_2_1" style={{'padding-top': '90px','left': '480px'}}> But ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br/>
             laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto <br/>
             beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut<br/>
              odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br/>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.<br/><br/>
              ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis<br/>
               nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi<br/>
               consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.</p></div>
        </Container>   
        <Container>
            <div className="brd_1">
               <h5 style={{'margin-top': '30px'}}>Our Services</h5>
               <hr />
               <p>Deep Cleaning</p><br/>
               <p>Housekeeping</p><br/>
               <p>Window Cleaning</p><br/>
               <p>Cloth Washing</p><br/>
               <p>Regular Cleaning</p><br/>
               <p>Dish Wash</p><br/>
            </div>
        </Container>  
        <Container>
            <div className="brd_2">
            <div className="circle_4"></div>
               <h5 style={{'margin-top': '40px','margin-left': '50px','padding-bottom': '15px'}}>Christian Dayton</h5>
                <p>Will must explain to you how all this<br/>
                       mistaken idea of denouncing<br/>
                      pleasure and praising pain was born<br/>
                         and I will give complete account</p><br/>
                         <p><a href="">facebook-f</a> <a href="">behance</a> <a href="">youtube</a> <a href="">linkedin</a></p>
            </div>
        </Container>  
        <Container className="brd_3">
        <button href="" variant="primary" style={{'position': 'relative','z-index': '1','margin-left':'-240px','top':'-150px'}} >New Detergent</button>
        <img className="img_2_3" src={img} />
        </Container>  
    </>
)    