import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import ProgButton from "../components/progressButton";
import {EmailInput, InvalidateEmailInput} from "../components/otherComponents"



storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <ProgButton onClick={action('clicked')}>Hi!</ProgButton>)
    .add('primary style',          () => <ProgButton variant='primary_style' disabled={false} onClick={action('clicked')}>Hi Red</ProgButton>)
    .add('primary style disabled', () => <ProgButton variant='primary_style' disabled='true'  onClick={action('clicked')}>Bye Red</ProgButton>)
    .add('with some emoji', () => (
        <ProgButton onClick={action('clicked')}>
          <span role="img" aria-label="so cool">
            😀 😎
          </span>
        </ProgButton>
        )
    ); //.add()

storiesOf('EmailInput', module)
    .add('Email Input With Default', () => <EmailInput key='1' defaultEmail="thisDefault@email.test" />)
    .add('Disabled Input', () => <InvalidateEmailInput key='2' defaultEmail="thisDefault@email.test" />);
