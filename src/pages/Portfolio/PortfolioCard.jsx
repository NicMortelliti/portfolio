import React from 'react';
import PropTypes from 'prop-types';

// Styled components
import {
  Card,
  CardTop,
  CardFlex,
  CardLink,
  CardTitle,
  CardDescription,
  Tech,
  TechCont,
} from '../../components/styles/Portfolio/PortfolioCard.styled';
import useFeature from '../../hooks/useFeature';

function PortfolioCard({ project: { github, to, image, text, description, techNames } }) {
  // Render each tech name
  const RenderTechNames = () => techNames.map((name, index) => <Tech key={index}>{name}</Tech>);

  return (
    <Card>
      <CardTop>
        <CardFlex borderColor='purple' flex='1' direction='column'>
          <CardFlex>
            <CardFlex align='center'>
              <CardTitle>{text}</CardTitle>
            </CardFlex>
            <CardFlex align='center' justify='end'>
              <CardLink href={github} target='_blank' rel='noreferrer'>
                Github
              </CardLink>
              {useFeature('linksToProjects') && (
                <CardLink href={to} target='_blank' rel='noreferrer'>
                  Demo
                </CardLink>
              )}
            </CardFlex>
          </CardFlex>
          <CardFlex>
            <CardFlex align='center'>
              <CardDescription>{description}</CardDescription>
            </CardFlex>
            <TechCont>
              <RenderTechNames />
            </TechCont>
          </CardFlex>
        </CardFlex>
      </CardTop>
      <img src={image} alt='screenshot' />
    </Card>
  );
}

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    github: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PortfolioCard;
