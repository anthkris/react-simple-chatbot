import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MicrolinkCard from 'react-microlink';
import ChatBot from '../../lib/index';
import '../styles/index.css';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
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
              <td>Gender</td>
              <td>{gender.value}</td>
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

class XAPIBot extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Howdy! It\'s ID Bot here. What\'s your name?',
            trigger: 'name'
          },
          {
            id: 'name',
            user: true,
            placeholder: 'Type your name ...',
            trigger: 'niceToMeet',
          },
          {
            id: 'niceToMeet',
            message: 'Nice to meet you, {previousValue}! Listen, I also need an email to get this party started.',
            trigger: 'beFake',
            delay: 1200
          },
          {
            id: 'beFake',
            message: 'It can even be a fake email. I won\'t tell anybody.🤫',
            trigger: 'email',
            delay: 1200
          },
          {
            id: 'email',
            user: true,
            placeholder: 'Type a valid email address ...',
            trigger: '3',
          },
          {
            id: '3',
            message: 'So, I\'m assuming that you\'d like to learn more about xAPI?',
            trigger: 'learnMore'
          },
          {
            id: 'learnMore',
            options: [
              { value: 'Yup', label: 'Yes', trigger: 'yesLearn' },
              { value: 'Nope', label: 'Nope', trigger: 'noLearn' }
            ]
          },
          {
            id: 'yesLearn',
            message: 'A\.Maz\.Ing! So, where would you like to start\?',
            trigger: 'whatToLearn',
            delay: 1400
          },
          {
            id: 'noLearn',
            message: 'Welp... too bad, friend. Helping folks find xAPI resources is kinda my whole thing.',
            trigger: 'learnAnyway',
            delay: 1400
          },
          {
            id: 'learnAnyway',
            message: 'So, where would you like to start\?',
            trigger: 'whatToLearn',
            delay: 1400
          },
          {
            id: 'try-again',
            message: 'Great! What can I help you learn about?',
            trigger: 'whatToLearn',
          },
          {
            id: 'whatToLearn',
            options: [
              { value: 'What is xAPI?', label: 'What is xAPI?', trigger: 'definition' },
              { value: 'Where can I learn about xAPI?', label: 'Where can I learn about xAPI?', trigger: 'resources' },
              { value: 'Which elearning tools are xAPI-enabled?', label: 'Which elearning tools are xAPI-enabled?', trigger: 'tools' },
              { value: 'I\'m good thanks', label: 'I\'m good thanks', trigger: 'sure-quit' }
            ]
          },
          {
            id: 'definition',
            message: 'Well, xAPI is a standard that\'s all about data interoperability and a way to collect data about experiences, online and offline.',
            trigger: 'definition2',
          },
          {
            id: 'definition2',
            message: 'The promise of xAPI is that, as an instructional designer, you could gain a more holistic view of learners because you could get data about learners from a variety of experiences.',
            trigger: 'tellMore',
            delay: 1400
          },
          {
            id: 'tellMore',
            options: [
              { value: 'Tell me more', label: 'Tell me more', trigger: 'definitionMore' }
            ]
          },
          {
            id: 'definitionMore',
            message: 'Probably the hardest and most important part of xAPI for you as an instructional designer is learning the skills to plan out what data you want to capture, including structuring xAPI statements.',
            trigger: 'id-xapi-responsibilities',
            delay: 1400
          },
          {
            id: 'id-xapi-responsibilities',
            message: 'There may be a few new skills you need to pick up, such as understanding JSON (javascript object notation) and thinking more about data: how to get at it, how to get answers to your questions, and more.',
            trigger: 'id-resources',
            delay: 1400
          },
          {
            id: 'id-resources',
            options: [
              { value: 'Where can I learn about xAPI?', label: 'Where can I learn about xAPI?', trigger: 'resources' },
              { value: 'Where can I learn more about the ID\'s role in using xAPI?', label: 'Where can I learn more about the ID\'s role in using xAPI?', trigger: 'id-role-resources' },
              { value: 'Which elearning tools are xAPI-enabled?', label: 'Which elearning tools are xAPI-enabled?', trigger: 'tools' },
              { value: 'I\'m good thanks', label: 'I\'m good thanks', trigger: 'sure-quit' }
            ]
          },
          {
            id: 'id-role-resources',
            message: 'Here are a few good resources:',
            trigger: 'id-link-one',
          },
          {
            id: 'id-link-one',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'Practicing ID with xAPI'}} url='http://xapiquarterly.com/2015/09/practicing-instructional-design-with-xapi-veterinary-technician-certification/' target='_blank' />,
            asMessage: false,
            trigger: 'id-link-two',
            delay: 1400
          },
          {
            id: 'id-link-two',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'What does an ID need to know?'}} url='https://www.slideshare.net/torrancelearning/xapi-what-does-an-instructional-designer-need-to-know' target='_blank' />,
            asMessage: false,
            trigger: 'id-link-three',
            delay: 1400
          },
          {
            id: 'id-link-three',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'What does xAPI mean for IDs?'}} url='https://www.sproutlabs.com.au/blog/what-does-xapi-mean-for-instructional-designers/' target='_blank' />,
            asMessage: false,
            trigger: 'id-link-four',
            delay: 1400
          },
          {
            id: 'id-link-four',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'Learning Design Transformed'}} url='https://xapi.com/learning-design-transformed/' target='_blank'/>,
            asMessage: false,
            trigger: 'anyMore',
            delay: 1400
          },
          {
            id: 'anyMore',
            message: 'Be sure to check out those resources. Got more questions?',
            trigger: 'anyMoreChoice',
            delay: 1400
          },
          {
            id: 'anyMoreChoice',
            options: [
              { value: 'Yup', label: 'Yes', trigger: 'try-again' },
              { value: 'Nope', label: 'Nope', trigger: 'sure-quit' }
            ]
          },
          {
            id: 'resources',
            message: 'Oooh, there\'s a lot of folks writing about xAPI. Would you like to look at beginner resources or more intermediate and advanced?',
            trigger: 'beginnerOrAdvanced',
            delay: 1200
          },
          {
            id: 'beginnerOrAdvanced',
            options: [
              { value: 'Beginner', label: 'Beginner', trigger: 'beginnerResources' },
              { value: 'Advanced', label: 'Advanced', trigger: 'advancedResources' }
            ]
          },
          {
            id: 'beginnerResources',
            message: 'Okay! Here are a few good resources to get you started:',
            trigger: 'beginner-resources-one',
          },
          {
            id: 'beginner-resources-one',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'Learn xAPI'}} url='https://learnxapi.com/' target='_blank' />,
            asMessage: false,
            trigger: 'beginner-resources-two',
            delay: 1400
          },
          {
            id: 'beginner-resources-two',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'xAPI Cohort'}} url='http://www.torrancelearning.com/xapi-cohort/' target='_blank' />,
            asMessage: false,
            trigger: 'beginner-resources-three',
            delay: 1400
          },
          {
            id: 'beginner-resources-three',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'xAPI Intro'}} url='https://www.yetanalytics.com/xapi-an-introductory-guide-ebook' target='_blank' />,
            asMessage: false,
            trigger: 'anyMore',
            delay: 1400
          },
          {
            id: 'advancedResources',
            message: 'Since you\'re a mover and a shaker 👨‍💻👩‍💻, try these resources on for size:',
            trigger: 'advanced-resources-one',
          },
          {
            id: 'advanced-resources-one',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'Anatomy of an xAPI Statement'}} url='https://xapi.com/ebook/' target='_blank' />,
            asMessage: false,
            trigger: 'advanced-resources-two',
            delay: 1400
          },
          {
            id: 'advanced-resources-two',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'Run your own LRS'}} url='https://www.ht2labs.com/resources/free-lrs-mooc/#.WdPCsRNSzGI' target='_blank' />,
            asMessage: false,
            trigger: 'anyMore',
            delay: 1400
          },
          {
            id: 'tools',
            message: 'Nice to meet you, {previousValue}! So, I\'m assuming that you\'d like to learn more about xAPI?',
            trigger: 'learnMore',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'done' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'sure-quit',
            message: 'Awww... Are you sure?',
            trigger: 'confirm-quit',
          },
          {
            id: 'confirm-quit',
            options: [
              { value: 'Yup', label: 'Yup', trigger: 'done' },
              { value: 'Nope', label: 'Nope', trigger: 'try-again' },
            ],
          },
          {
            id: 'done',
            message: 'Thanks! Your data was submitted successfully! 👋🏽',
            end: true,
          }
        ]}
      />
    );
  }
}

export default XAPIBot;