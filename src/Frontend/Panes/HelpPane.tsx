import React from 'react';
import { ModalName, ModalPane, ModalHook } from '../Views/ModalPane';
import styled from 'styled-components';
import TutorialManager from '../../Backend/GameLogic/TutorialManager';
import { White } from '../Components/Text';
import dfstyles from '../Styles/dfstyles';

const HelpWrapper = styled.div`
  width: 36em;
  height: 30em;
  overflow-y: scroll;

  & p,
  ul {
    color: ${dfstyles.colors.subtext};
    margin-top: 0.5em;
    &.title {
      color: ${dfstyles.colors.text};
      text-decoration: underline;
      font-size: 1.5em;
    }
  }
  & ul {
    list-style: inside;
    list-style-position: outside;
    margin-left: 1em;
    margin-right: 1em;
    & > li {
      margin: 0 1em;
    }
  }

  & a {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const BlueBG = styled.span`
  background: ${dfstyles.colors.dfblue};
  color: ${dfstyles.colors.text};
`;

// TODO: make this pane aware of end time
export function HelpPane({ hook }: { hook: ModalHook }) {
  return (
    <ModalPane hook={hook} title='Help' name={ModalName.Help}>
      <HelpWrapper>
        <p>
          This window gives additional information about the game. When you are done reading, click
          the <White>X</White> in the upper-right corner to close this window.
        </p>
        {/*isOver && (
          <>
            <p className='title'>Round 1 Complete</p>
            <p>
              Dark Forest v0.6 Round 2 is now complete! Scores are being compiled and winners will
              be announced shortly. Also, Artifacts will no longer be mintable. Thanks for playing!
            </p>
          </>
        )*/}
        <p className='title'>Welcome to Dark Forest v0.6.0!</p>
        <p>
          This window gives additional information about the game. When you are done reading, click
          the <White>X</White> in the upper-right corner to close this window.
        </p>
        <p>
          You can reopen this window anytime by clicking the question mark icon on the{' '}
          <White>Menu Bar</White>, in the top left.
        </p>
        <p></p>
        <p className='title'>The Universe</p>
        <p>
          Dark Forest is a vast universe, obfuscated by zero-knowledge cryptography. Your{' '}
          <White>Explorer</White> explores the universe, searching for <White>Planets</White> and
          other players.
        </p>
        <p>
          All planets produce <White>Energy</White>. You can move energy from planets you own to new
          planets to conquer them.
        </p>
        <p>
          Also scattered through the universe are <White>Asteroid Fields</White>, which produce{' '}
          <White>Silver</White>. Silver can be sent to planets and can be spent on{' '}
          <White>Upgrades</White>. Withdrawing silver from spacetime rips increases your score.
        </p>
        <p>
          Some planets contain <White>Artifacts</White>. Artifacts can be harvested and deposited
          onto planets, buffing their stats. Harvesting artifacts increases your score! Artifacts
          are ERC721 tokens that can also be traded with other players.
        </p>
        <p>
          If you need help, click "Reset Tutorial" above, or check out the FAQ. You can also hold
          down <White>CTRL</White> and hover over anything that is highlighted <BlueBG>Blue</BlueBG>{' '}
          to learn more about it!
        </p>
        <p className='title'>Prizes and Scoring</p>
        <p>
          A snapshot of scores will be taken on <White>June 6, 2021</White>. At that time, the top
          63 highest-scoring players will be awarded prizes from a pool 63 prize planets. Your score
          is determined by the total amount of <White>Silver</White> you have withdrawn from the
          universe. You can see the current rankings by scrolling down on the landing page of the
          game.
        </p>

        <p className='title'>Some Links</p>
        <p>
          <a onClick={() => TutorialManager.getInstance().reset()}>Reset Tutorial</a>
        </p>
        <p>
          <a onClick={() => window.open('https://blog.zkga.me/df-05-faq')}>FAQ</a>
        </p>
      </HelpWrapper>
    </ModalPane>
  );
}
