import headshot from '../about/Headshots.png'
import { Link } from 'react-router-dom'
import {LinkedinLogo, GithubLogo, FileArrowDown, Code} from 'phosphor-react'
import resume from '../about/AdrianRojo.pdf'
export default function About(){
    return(
        <div className="bg-zinc-900">
            <div className="text-center ">
                <br></br>
                <img src={headshot} className="rounded-full w-40 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2 text-white">Adrian Rojo</h5>
                <p className="text-gray-300">Web developer</p>
            </div>
            <br></br>
            <div className='text-white container text-center'> 
            <p>My name is Adrian Rojo, a software engineer consistently acknowledged by leadership for meeting high standards. I possess a strong willingness to learn and aspire to establish a long-term career. I am proficient in making swift decisions and thrive in high-pressure environments. My work reflects my dedication to quality, and I strive to maintain this standard in any position I hold.</p>
            <p>As a recent graduate of General Assembly's Software Engineering Immersive program, I specialize in web development and possess proficiency in various software development forms. I am currently seeking my first position and have designed a "mock" e-commerce site to showcase my skills in this area.</p>
            <br></br>

            <ul className="flex justify-center items-center mr-4 lg:mr-6 xl:mr-8">
                        <li className="p-1">
                            <a href="https://github.com/AdrianRRojo" target="_blank" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <GithubLogo size="24" />
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="https://www.linkedin.com/in/adrianrrojo/" target="_blank" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <LinkedinLogo size={24} />
                            </a>
                        </li>
                        <li className="p-1">
                            <a href={resume} target="_blank" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <FileArrowDown size={24} />
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="https://adrirojo.vercel.app/" target="_blank" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <Code size={24} />
                            </a>
                        </li>
                    </ul>
        <div className="mt-8 text-base text-zinc-600 dark:text-zinc-400">
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body bg-zinc-800">
                            <h5 className="card-title text-white">Programming Languages</h5>
                            <p className="card-text">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>Currently Learning C++</li>
                                </ul>
                            </p>
                </div>
                    </div>
                        </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body bg-zinc-800">
                        <h5 className="card-title text-white">Frameworks</h5>
                        <p className="card-text">
                        <ul>
                                    <li>Node</li>
                                    <li>React</li>
                                    <li>Next.Js</li>
                                    <li>Express</li>
                                    <li>TensorFlow</li>
                                </ul>
                        </p>
            </div>
                </div>
                    </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body bg-zinc-800">
                        <h5 className="card-title text-white">Databases</h5>
                        <p className="card-text">
                        <ul>
                            <br></br>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>Cloudinary</li>
                                    <br></br>
                                </ul>
                        </p>
            </div>
                </div>
                    </div>

                    {/* //! Needs to be changed */}
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body bg-zinc-800">
                        <h5 className="card-title text-white">My Links</h5>
                        <p className="card-text">
                            <br></br>
                        <ul>
                                    <li><Link to="https://adrirojo.vercel.app/" target="_blank">Portfolio</Link></li>
                                    <li><Link to="https://www.linkedin.com/in/adrianrrojo/" target="_blank">LinkedIn</Link></li>
                                    <li><Link to="https://github.com/AdrianRRojo" target="_blank">GitHub</Link></li>
                                    
                                </ul>
                                
                        </p>
                        <br></br>
            </div>
                </div>
                    </div>
        </div>
        </div>
        </div>
        </div>
    )
}