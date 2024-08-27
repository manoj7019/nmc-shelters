import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import HangingGardens from '/hero11.jpg'
import REXFelicity from '/hero10.avif'
import Property3 from '/hero9.jpg'
import Property4 from '/hero8.avif'

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
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
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, service, age } = steps;

    this.setState({ name, service, age });
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
              <td>Age</td>
              <td>{age.value}</td>
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
      <ChatBot
        headerTitle="Namo 1.0"
        speechSynthesis={{ enable: true, lang: 'en' }}
        steps={[
          {
            id: '1',
            message: "Hey! Welcome to NMC. I'm Namo 1.0 Your assistant. May I know your name?",
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What you looking for?',
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
              { value:'plot3', label:'Property 3', trigger: 'show-plot3'},
              { value:'plot4', label:'Property 4', trigger: 'show-plot4'},
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
                        <h1 className='text-7'>REX Felicity</h1>
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
                        <h1 className='text-7'>Property 3</h1>
                        <img className='rounded-5' src={Property3} alt="" />
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
                        <h1 className='text-7'>Property 4</h1>
                        <img className='rounded-5' src={Property4} alt="" />
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
          
        //   {
        //     id: 'property',
        //     validator: (value) => {
        //         if(value == 'plot1') {
        //             return (
        //                 <Link to='/plotInfo'>
        //                     <p>Hanging Gardens</p>
        //                 </Link>
        //             )
        //         } else if(value == 'plot2') {
        //             return (
        //                 <Link to='/plotInfo'>
        //                     <p>REX Felicity</p>
        //                 </Link>
        //             )
        //         } else if(value == 'plot3') {
        //             return (
        //                 <Link to='/plotInfo'>
        //                     <p>Property 3</p>
        //                 </Link>
        //             )
        //         } else if(value == 'plot4') {
        //             return (
        //                 <Link to='/plotInfo'>
        //                     <p>Property 4</p>
        //                 </Link>
        //             )
        //         }
        //         return true;
        //     },
        //     // component: (
        //     //     <Link to='/plotInfo'>
        //     //         <p>Hanging Gardens</p>
        //     //     </Link>
        //     // )
        //   },
        //   {
        //     id: 'age',
        //     user: true,
        //     trigger: '7',
        //     validator: (value) => {
        //       if (isNaN(value)) {
        //         return (
        //             <Link to='/plotInfo'>
        //                 <p>Hanging Gardens</p>
        //             </Link>
        //             )
        //       } else if (value < 0) {
        //         return 'value must be positive';
        //       } else if (value > 120) {
        //         return `${value}? Come on!`;
        //       }

        //       return true;
        //     },
        //   },
        //   {
        //     id: '7',
        //     message: 'Great! Check out your summary',
        //     trigger: 'review',
        //   },
        //   {
        //     id: 'review',
        //     component: <Review />,
        //     asMessage: true,
        //     trigger: 'update',
        //   },
        //   {
        //     id: 'update',
        //     message: 'Would you like to update some field?',
        //     trigger: 'update-question',
        //   },
        //   {
        //     id: 'update-question',
        //     options: [
        //       { value: 'yes', label: 'Yes', trigger: 'update-yes' },
        //       { value: 'no', label: 'No', trigger: 'end-message' },
        //     ],
        //   },
        //   {
        //     id: 'update-yes',
        //     message: 'What field would you like to update?',
        //     trigger: 'update-fields',
        //   },
        //   {
        //     id: 'update-fields',
        //     options: [
        //       { value: 'name', label: 'Name', trigger: 'update-name' },
        //       { value: 'gender', label: 'Gender', trigger: 'update-gender' },
        //       { value: 'age', label: 'Age', trigger: 'update-age' },
        //     ],
        //   },
        //   {
        //     id: 'update-name',
        //     update: 'name',
        //     trigger: '7',
        //   },
        //   {
        //     id: 'update-gender',
        //     update: 'gender',
        //     trigger: '7',
        //   },
        //   {
        //     id: 'update-age',
        //     update: 'age',
        //     trigger: '7',
        //   },
        //   {
        //     id: 'end-message',
        //     message: 'Thanks! Your data was submitted successfully!',
        //     end: true,
        //   },
        ]}
        floating={true}
      />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;