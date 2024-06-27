import React from 'react';

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  };

  render() {
    const { screenWidth, screenHeight } = this.state;
    return (
      <div
     style={{
       backgroundImage: "url('./background.jpg')",
        backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    // backgroundSize: '800px 600px',
 }}
    />
    );
  }
}

export default Background;
