import headshot from '../about/Headshots.png'
export default function About(){
    return(
        <div className="bg-zinc-900">
            <div className="text-center">
                <br></br>
                <img src={headshot} className="rounded-full w-40 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2 text-white">Adrian Rojo</h5>
                <p className="text-gray-300">Web developer</p>
            </div>
            <br></br>
            <div className='text-white'> 
            <p>My name is Adrian Rojo, a software engineer consistently acknowledged by leadership for meeting high standards. I possess a strong willingness to learn and aspire to establish a long-term career. I am proficient in making swift decisions and thrive in high-pressure environments. My work reflects my dedication to quality, and I strive to maintain this standard in any position I hold.</p>
            <p>As a recent graduate of General Assembly's Software Engineering Immersive program, I specialize in web development and possess proficiency in various software development forms. I am currently seeking my first position and have designed a "mock" e-commerce site to showcase my skills in this area.</p>
            <br></br>
            <div className="mt-8 text-base text-zinc-600 dark:text-zinc-400">
          <div className="row">
          <div className="column">
          <h1>Programming Languages</h1>
            &nbsp;
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>* Currently learning C++</p>
          </div>

          <div className="column">
          <p>Frameworks</p>
          &nbsp;
          <p>Node</p>
          <p>React</p>
          <p>Next.js</p>
          <p>Express</p>
          <p>TensorFlow</p>
          </div>
          <div className="column">
            <br></br>
          <p>Databases</p>
          &nbsp;
          <p> MySQL</p>
          <p>MongoDB</p>
          <p>Cloudinary</p>
          </div>
      </div> 
      </div>
            </div>    
        </div>
    )
}