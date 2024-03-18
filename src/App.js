import './App.css';
import img from './Img/182885.jpg';
import mail from './Img/mail.png';
import address from './Img/address.png';
import call from './Img/call.png';
import fa from './Img/fa.png';

function App() {
  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="circle-left"></div>
          <div className='circle-center'/>
          <div>
            <img src={img} className="overlay"></img>
          </div>
          
          <div className="name">
            <h1>Soratun</h1>
            <h1>Areesinpithak</h1>
            <p>สรธัญ อารีสินพิทักษ์</p>
          </div>
          <div className="Address">
            <div className="container_image">
              <img src={mail} className="image" />
              <p className="mail">areesinpithak_s@silpakorn.edu</p>
            </div>
            <div className="container_image">
              <img src={address} className="image"/>
             <p className="address">64/7 หมู่ที่3 ซอยเลียบวารี27 ถนนเลียบวารี แขวงโคกแฝด เขตหนองจอก กรุงเทพมหานคร 10530</p>
            </div>
            <div className="container_image">
              <img src={call} className="image"/>
              <p className="phone">091-007-3680</p>
            </div>
            <div className="container_image_fa">
              <img src={fa} className="image"/>
              <p className="fa">Sorathun Areesipithak</p>
            </div>
          </div>
          <div className="circle-small"/>
          <div className="line_train"/>
          <div className="train">
            <div className="container_train_box">
              <div className="train_box"></div>
              <p>การฝึกอบรม/ประกาศนียบัตร</p>
            </div>
            <div className ='train_list'>
                <p>GitHub for Developer | borntodev</p>
                <p>ChatGPT for Developers | borntodev</p>
                <p>Get started with TypeScript | borntodev</p>
                <div className='circle_list_train1'/>
                <div className="line_train1"/>
                <div className='circle_list_train2'/>
                <div className="line_train2"/>
                <div className='circle_list_train3'/>
            </div>
            <div className='circle-big'></div>
          </div>
          <div className="circle-left-end"> </div>
        </div>
        <div className='vertical-line'></div>
        
        <div className="right">
          <div className="circle-right" />
          <div className ="objective">
            <div className='circle-center1'/>
            <div className="container_objective_box">
              <div className="objective_box"></div>
              <p>จุดประสงค์</p>
            </div>
            <p>ฉันมีความกระตือรือร้นที่จะเข้าร่วมทีมที่มุ่งมั่นในการพัฒนาโปรแกรมที่นำเสนอความสร้างสรรค์และติดตามเทคโนโลยีใหม่อย่างต่อเนื่อง ด้วยความรู้และทักษะที่มีอยู่ ฉันพร้อมที่จะท้าทายตนเองและมองหาโอกาสในการเรียนรู้เพื่อพัฒนาทักษะและสร้างประสบการณ์ผู้ใช้ที่น่าทึ่งขึ้นอีกต่อไป ฉันเชื่อว่าการเข้าร่วมทีมนี้จะเป็นการสนับสนุนในการเติบโตทางอาชีพและการนวัตกรรมอย่างมีความหมาย</p>
          </div>
          <div className="ed">
            <div className='circle-ed1'/>
              <div className='circle-ed2'/>
              <div className="line_ed1"/>
            <div className="container_ed_box">
              <div className="ed_box"></div>
              <p>ประวัติการศึกษา</p>
            </div>
            <div className="ed_un">
              
                <p>2564-ปัจจุบัน</p>
                <p className='ed_level'>ปริญญาตรี</p>
            </div>
            <p className="ed_name">มหาวิทยาลัยศิลปากร</p>
            <p className='ed_gpa'>เกรด 2.55</p>
            <div className='ed_un'>
              <p>2563-2564</p>
              <p className='ed_level'>ประกาศนียบัตร</p>
            </div>
            <p className="ed_name">โรงเรียนมัธยมวัดหนองจอก</p>
            <p className='ed_gpa'>เกรด 3.16</p>
          </div>
          <div className="skill">
            <div className="container_skill_box">
              <div className="skill_box"></div>
              <p>ทักษะทางเทคนิค</p>
            </div>
            <div className='skill_list'>
              <p>Programming Languages: Java, PHP, HTML, CSS, Javascript, TypeScript, SQL </p>
              <p className='skill_list_1'>Python, Golang</p>
              <p>Tools: microsoft visual studio code</p>
              <p>Systems/Frameworks: Windows, Cypress, React  </p>
            </div>
            <div className="circle-skill1"/>
            <div className="line_skill1"/>
            <div className="circle-skill2"/>
            <div className="line_skill2"/>
            <div className="circle-skill3"/>
          </div>
          <div className='soft'>
            <div className="circle-soft1"/>
            <div className="circle-soft2"/>
            <div className="circle-soft3"/>
            <div className="line_soft1"/>
            <div className="line_soft2"/>
            <div className="container_soft_box">
              <div className="soft_box"></div>
              <p>ทักษะความสามารถ</p>
            </div>
            <div className='soft_list'>
            <p>ทักษะด้านภาษา : ภาษาไทย ภาษาอังกฤษ</p>
            <div className='soft_list_content'>
              <p>ทักษะ Computer Skills</p>
              <div className = "soft_list_1">
                <p>MS Word</p>
                <p>MS Excel</p>
                <p>Photoshop</p>
                <p>Illustrator</p>
              </div>
            </div>
            <div className='soft_list_content'>
              <p>ทักษะ Soft Skills</p>
              <div className='soft_list_2'>
                <p>ทำงานได้หลากหลาย</p>
                <p>มีความเป็นผู้นำ</p>
                <p>ทำงานภายใต้แรงกดดันได้ดี</p>
                <p>ทำงานเป็นทีมได้</p>
                <p>ปรับตัวได้ดี</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-right-end"></div>
    </div>
  );
}

export default App;
