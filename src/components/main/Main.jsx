import React from 'react'
import './Main.css'
import { useContext } from "react";
import { assets } from '../../assets/assets'
import {context} from '../../context/Context'

const Main = () => { 

  const {onSent, recentPrompt, showRes, input, setInput, resData, loading} = useContext(context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="main-container">

        {!showRes
        ?<>
            <div className="greet">
              <p><span>Hello, Dev.</span></p>
              <p>How can I help you today?</p>
          </div>
          <div className="cards">
              <div className="card">
                  <p>Suggest beautiful places to visit on road trip</p>
                  <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                  <p>Briefly summarize this concept: Urban Planning</p>
                  <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                  <p>Brainstorm team bonding activites for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="" />
              </div>
          </div>
        </>
        :<div className="result">
          <div className="res-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className='res-data'>
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?<div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
            :<p dangerouslySetInnerHTML={{__html:resData}}></p>
            }
            
          </div>
        </div>

        }

        
        <div className="main-btm">
            <div className="srch-box">
                <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="btm-info">
                Gemini may display inaccurate info, including about people, double-check its respons. Your privacy and Gemini Apps
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
