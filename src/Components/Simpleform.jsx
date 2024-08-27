import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import HangingGardens from '/hero11.jpg'
import REXFelicity from '/hero10.avif'
import BrijTown from '/hero9.jpg'
import DeoneInfra from '/hero8.avif'

const theme = {
    background: '#f5f8fb',
    fontFamily: 'sans-serif',
    headerBgColor: '#f97316',
    headerFontColor: '#fff',
    headerFontSize: '25px',
    botBubbleColor: '#f2f2f2',
    botFontColor: '#000000',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      service: '',
      property: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, service, property } = steps;

    this.setState({ name, service, property });
  }

  render() {
    const { name, service, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Service</td>
              <td>{service.value}</td>
            </tr>
            <tr>
              <td>Property</td>
              <td>{property.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
      <ChatBot className=''
        headerTitle="Namo 1.0 "
        botAvatar='/chatbot.gif'
        speechSynthesis={{ enable: true, lang: 'en' }}
        steps={[
          {
            id: '1',
            message: "Hey! Welcome to NMC. May I know your name?",
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: "Hi {previousValue}! I'm Namo 1.O. Your assistant. May I know what you looking for?",
            trigger: 'service',
          },
          {
            id: 'service',
            options: [
              { value: 'sell', label: 'Property Marketing / Sales', trigger: '5' },
              { value: 'buy', label: 'Property Buying', trigger: '5' },
              { value: 'rent', label: 'Property Rent / Lease', trigger: '5' },
              { value: 'dev', label: 'Property Development / Construction', trigger: '5' },
              { value: 'manage', label: 'Property Management', trigger: '5' },
              { value: 'commercial', label: 'Commercial Properties', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'Great! Please select the plot below',
            trigger: 'plot',
          },
          {
            id: 'plot',
            options: [
              { value:'plot1', label:'Hanging Gardens', trigger: 'show-plot1'},
              { value:'plot2', label:'REX Felicity', trigger: 'show-plot2'},
              { value:'plot3', label:'Brij Twon', trigger: 'show-plot3'},
              { value:'plot4', label:'Deone Infrastructures', trigger: 'show-plot4'},
            ],
          },
          {
            id: 'show-plot1',
            component: 
                <Link to='/plotInfo'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-7'>Hanging Gardens</h1>
                        <img className='rounded-5' src={HangingGardens} alt="" />
                        <button className='text-5 text-white flex justify-center items-center bg-orange-500 gap-3 p-3 rounded-5'>Click to explore<AdsClickOutlinedIcon /></button>
                    </div>
                </Link>,
            trigger: 'explore'
          },
          {
            id: 'show-plot2',
            component: 
                <Link to='/plotInfo'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-7'>RAK Felicity</h1>
                        <img className='rounded-5' src={REXFelicity} alt="" />
                        <button className='text-5 text-white flex justify-center items-center bg-orange-500 gap-3 p-3 rounded-5'>Click to explore<AdsClickOutlinedIcon /></button>
                    </div>
                </Link>,
            trigger: 'explore'
          },
          {
            id: 'show-plot3',
            component: 
                <Link to='/plotInfo'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-7'>Brij Town</h1>
                        <img className='rounded-5' src={BrijTown} alt="" />
                        <button className='text-5 text-white flex justify-center items-center bg-orange-500 gap-3 p-3 rounded-5'>Click to explore<AdsClickOutlinedIcon /></button>
                    </div>
                </Link>,
            trigger: 'explore'
          },
          {
            id: 'show-plot4',
            component: 
                <Link to='/plotInfo'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-7'>Deone Infrastructures</h1>
                        <img className='rounded-5' src={DeoneInfra} alt="" />
                        <button className='text-5 text-white flex justify-center items-center bg-orange-500 gap-3 p-3 rounded-5'>Click to explore<AdsClickOutlinedIcon /></button>
                    </div>
                </Link>,
            trigger: 'explore'
          },
          {
            id: 'explore',
            message: 'Click on the property and close button to explore.',
            trigger: 'plot',
          },
        ]}
        floating={true}
      />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;