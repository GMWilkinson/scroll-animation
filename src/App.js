import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    const frameCount = 143;
    const currentFrame = index => (
      // `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
      `/images/frame_${index.toString().padStart(3, '0')}_delay-0.04s.gif`
    )

    const preloadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        console.log(currentFrame(i))
        img.src = currentFrame(i);
      }
    };

    const img = new Image()
    img.src = currentFrame(1);
    canvas.width=1158;
    canvas.height=770;
    img.onload=function() {
      context.drawImage(img, 0, 0, img.width = 1000, img.height = 1000);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, img.width = 1000, img.height = 1000);
    }
    
    window.addEventListener('scroll', () => {  
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );
      
      requestAnimationFrame(() => updateImage(frameIndex + 1))
    });

    preloadImages()
  }
  
  render() {
    return (
      <div className="App">
        <div className="body">
          <canvas id="hero-lightpass" />
        </div>
        <div className="text-box">
          <p>
            It's peanut butter jelly time!
            Peanut butter jelly time!
            Peanut butter jelly time!
          </p>
          <p>
            Now Where he at?
            Where he at?
            Where he at?
            Where he at?
            NowThere he go
            There he go
            There he go
            There he go
          </p>
          <p>
            Do the Peanut butter jelly
            Peanut butter jelly
            Peanut butter jelly with a baseball bat
            Do the Peanut butter jelly
            Peanut butter jelly
            Peanut butter jelly with a baseball bat
          </p>
          <p>
            Now break it down and freeze
            Take it down to your knees
            Now lean back and squeeze
            Now get back up and scream
          </p>
          <p>
            Now sissy walk
            Sissy walk
            Sissy walk
            Sissy walk
            Now sissy walk
            Sissy walk
            Sissy walk
            Sissy walk
          </p>
          <p>
            Now walk walk walk walk
            Stomp stomp stomp stomp
            Slide slide slide slide
            Back it up one more time
            Now walk walk walk walk
            Stomp stomp stomp stomp
            Peanut butter jelly break it…
          </p>
        </div>
      </div>
    );
  }
}

export default App;
