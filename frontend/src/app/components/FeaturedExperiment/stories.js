import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FeaturedExperiment from './index';
import LayoutWrapper from '../LayoutWrapper';

const experiment = {
  title: 'Voice Fill',
  description: 'This is a different experiment This Source Code Form is subject to the terms of the Mozilla Public This Source Code Form is subject to the terms of the Mozilla Public This Source Code Form is subject to the terms of the Mozilla Public.',
  subtitle: 'A subtitle',
  slug: 'voice-fill',
  enabled: true,
  platforms: ['addon'],
  survey_url: 'https://example.com',
  created: '2010-06-21T12:12:12Z',
  modified: '2010-06-21T12:12:12Z',
  video_url: 'https://www.youtube.com/embed/wjvM18UWMmM'
};

const baseProps = {
  experiment,
  hasAddon: false,
  enabled: false,
  isFirefox: true,
  isMinFirefox: true,
  eventCategory: 'storybook',
  getExperimentLastSeen: () => Date.now(),
  isExperimentEnabled: (e) => e.enabled === true,
  isAfterCompletedDate: () => false,
  sendToGA: action('sendToGA'),
  navigateTo: action('navigateTo'),
  clientUUID: '867-5309'
};

storiesOf('FeaturedExperiment', module)
  .addDecorator(story =>
    <div className="blue" style={{ padding: 10 }} onClick={action('click')}>
      <div className="stars" />
      <LayoutWrapper flexModifier="card-list">
        {story()}
      </LayoutWrapper>
    </div>
  )
  .add('not enabled, no addon, isFirefox', () =>
    <FeaturedExperiment
      {...baseProps}
    />
  )
  .add('has addon, not enabled', () =>
    <FeaturedExperiment {...baseProps}
      hasAddon={true}
    />
  )
  .add('has addon, enabled', () =>
    <FeaturedExperiment {...baseProps}
     hasAddon={true} enabled={true}
    />
  )
  .add('not firefox', () =>
    <FeaturedExperiment {...baseProps}
     isFirefox={false}
    />
  );
