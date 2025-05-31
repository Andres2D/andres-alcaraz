import React from 'react';
import ReactDOM from 'react-dom';

export const options: any = {
  botBubble: { simStream: true },
  audio: { disabled: false },
  theme: {
    primaryColor: '#111933',
    secondaryColor: '#3953AB',
  },
  header: {
    title: (
      <h3
        style={{ cursor: 'pointer', margin: 0 }}
        onClick={() => window.open('https://github.com/andres2d/')}
      >
        Andres' Bot
      </h3>
    ),
  },
  fileAttachment: {
    disabled: true,
  },
  tooltip: {
    mode: 'CLOSE',
    text: 'Hey, any questions?',
  },
  chatHistory: {
    disabled: true,
  },
};

export const mapAnswers: {[key: string ]: any } = {
  'Biography': `
    Andres is a software engineer with 5+ years of experience from Colombia 🇨🇴, 
    he is currently living in Toronto, Canada 🇨🇦. Andres is committed to his work. 
    he enjoys learning new ways to write code and to improve his skills. 
    Every day Andres tries to do it better than the day before. 
    Moreover, He enjoys music, playing video games and football.
  `,
  'Work history': `
    <p> Andres has worked for 5 companies: </p>
    <ul>
      <li><a href="https://motofox-belen.netlify.app/" target="_blank">Motofox</a> 🇨🇴: Cashier in a family business from 2015 to 2018.</li>
      <li><a href="https://www.numrot.com/" target="_blank">Numrot</a> 🇨🇴: Fullstack developer in a electronic billing company from 2019 to 2021</li>
      <li><a href="https://www.accenture.com/co-es" target="_blank">Accenture</a> 🇨🇴: Frontend developer in a multinational from 2021 to 2024</li>
      <li><a href="https://www.monsterplow.ca/" target="_blank">Monster plowing company</a> 🇨🇦: Frontend developer in a Snow plowing company since 2024</li>
      <li><a href="https://atlantixmedia.ca/" target="_blank">Atlantix Media Inc</a> 🇨🇦: Fullstack developer in a Digital Marketing finance company</li>
    </ul>
  
    <p>For sure is been a journey to become a Senior web developer.</p>
  `,
  'Projects': `
    <p>Andres is a enthusiastic for learning new tech and applying that knowledge
    into real projects.</p>

    <p>Work projects:</p>

    <ul>
      <li><a href="https://www.numrot7.net/vsdc/login" target="_blank">NumrotWeb</a>: Billing platform</li>
      <li><a href="https://www.kavak.com/mx" target="_blank">Kavak</a>: Car dealership</li>
      <li><a href="https://the.smartwater-stream.com/" target="_blank">Ecopetrol water management</a>: Water management platform</li>
    </ul>

    <p>And outside of work:</p>

    <ul>
      <li><a href="https://cotejoapp.vercel.app/" target="_blank">CotejoApp</a></li>
      <li><a href="https://playlist-master.vercel.app/" target="_blank">Playlist master</a></li>
      <li><a href="https://meaningful-one.vercel.app/" target="_blank">Meaningful</a></li>
      <li><a href="https://wordle-clone-vue-five.vercel.app/" target="_blank">Wordle clone</a></li>
      <li><a href="https://countries-app-2d.netlify.app/countries" target="_blank">Countries App</a></li>
    </ul>  
    
    <p>Please check the projects section in this page to see more information.</p>
  `,
  'Contact info': `
    <p>All Andres' links:</p>

    <ul>
      <li><a href="https://github.com/Andres2D" target="_blank">Github</a></li>
      <li><a href="https://www.linkedin.com/in/andres-alcaraz/" target="_blank">Linkedin</a></li>
      <li><a href="https://www.facebook.com/andres.alcaraz.794" target="_blank">Facebook</a></li>
      <li><a href="https://www.instagram.com/andres.2d" target="_blank">Instagram</a></li>
      <li><a href="https://twitter.com/Andres_2D_" target="_blank">Twitter X</a></li>
      <li><a href="https://discord.com/users/Andres2D#0838" target="_blank">Discord</a></li>
    </ul>
  `,
  'Open to work, schedule an interview': `
    <p>Right now I'm looking for a new employer</p>
    <p>You can reach me at:</p>

    <ul>
      <li>By phone (call me or message me): +1 437 439 4403</li>
      <li>By email: <a href="mailto:andres2d1997.1206@gmail.com" target="_blank">andres2d1997.1206@gmail.com</a></li>
      <li>By linkedIn: <a href="https://www.linkedin.com/in/andres-alcaraz/" target="_blank">Linkedin</a></li>
    </ul>
  `
};

// , 'Open to work, schedule an interview'
export const flow = {
  start: {
    message: "Hi, let's talk. What's your name?",
    path: 'greet_user',
  },
  greet_user: {
    message: (params: any) => `
      Nice to meet you ${params.userInput}. 
      What would you like to know about Andres Alcaraz?
    `,
    options: ['Biography', 'Work history', 'Projects', 'Contact info'],
    chatDisabled: true,
    path: 'display'
  },
  new_question: {
    options: ['Biography', 'Work history', 'Projects', 'Contact info'],
    chatDisabled: true,
    path: 'display',
  },
  display: {
    render: (params: any) => (
      <div 
        style={{ 
          padding: '20px', 
          color: 'white', 
          background: '#3953AB', 
          borderRadius: '22px',
          margin: '10px' 
        }}
        dangerouslySetInnerHTML={{__html: mapAnswers[params.userInput]}} 
      />
    ),
    options: ['New question', 'End chat'],
    path: (params: any) => {
      return params.userInput === 'New question' ? 'new_question' : 'say_goodbye'
    },
    chatDisabled: true,
  },
  say_goodbye: {
    message: () => `Great to know you, hope to see you again!`,
    chatDisabled: true
  }
};
