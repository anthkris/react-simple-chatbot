import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MicrolinkCard from 'react-microlink';
import ChatBot from '../../lib/index';
import '../styles/index.css';

class XAPIBot extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Howdy! It\'s xAPIBot here. What\'s your name?',
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
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'Mel\'s Big List of xAPI Resources'}} url='http://melslearninglab.com/2018/07/02/big-xapi-list/' target='_blank' />,
            asMessage: false,
            trigger: 'beginner-resources-four',
            delay: 1400
          },
          {
            id: 'beginner-resources-four',
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
            message: 'This is a great question! There are lots of ways to tackle it. Are you looking for a big list of tools that have adopted xAPI or more of a \"state of the elearning authoring tools\"?',
            trigger: 'allToolsOrAuthoringTools',
            delay: 1400
          },
          {
            id: 'allToolsOrAuthoringTools',
            options: [
              { value: 'Gimme all the Tools!', label: 'Gimme all the Tools! 🛠', trigger: 'allTools' },
              { value: 'Authoring tools FTW!', label: 'Authoring tools FTW! 📝', trigger: 'authoringTools' }
            ]
          },
          {
            id: 'allTools',
            message: 'Tools for every shape and size! 🔧🔨⚙️ I recommend checking out these links:',
            trigger: 'tool-resources-one',
          },
          {
            id: 'tool-resources-one',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'ADL xAPI Adopters List'}} url='https://adopters.adlnet.gov/adopters/0' target='_blank' />,
            asMessage: false,
            trigger: 'tool-resources-two',
            delay: 1400
          },
          {
            id: 'tool-resources-two',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'xAPI.com Adopters List'}} url='https://xapi.com/adopters/' target='_blank' />,
            asMessage: false,
            trigger: 'tool-resources-one',
            delay: 1400
          },
          {
            id: 'authoringTools',
            message: 'Interested in authoring tools? I gotcha covered. I recommend checking out the xAPI Out of the Box article on Learning Solutions Mag. This work is taken up by the xAPI Cohort community regularly to keep everyone up-to-date on changes in the way popular authoring tools handle xAPI:',
            trigger: 'authoring-tool-resources-one',
            delay: 1400
          },
          {
            id: 'authoring-tool-resources-one',
            component: <MicrolinkCard className='link-preview' prerender="auto" data={{title: 'xAPI Out of the Box'}} url='https://www.learningsolutionsmag.com/articles/xapi-out-of-the-box' target='_blank' />,
            asMessage: false,
            trigger: 'authoringToolAnyMore',
            delay: 1400
          },
          {
            id: 'authoringToolAnyMore',
            message: 'Be sure to check out that article. And give them a friendly hint that they need to make a website!😉 Got more questions?',
            trigger: 'anyMoreChoice',
            delay: 1400
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
            message: 'Thanks for chatting with me! And hey, you just sent a bunch of xAPI statements! How cool is that? 👋🏽',
            end: true,
          }
        ]}
      />
    );
  }
}

export default XAPIBot;