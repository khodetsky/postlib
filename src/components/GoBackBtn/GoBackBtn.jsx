import PropTypes from 'prop-types';

import { ButtonStyled, ButtonLink, ButtonArrowSvg, ButtonIcon } from "./GoBackBtn.styled";
import svgSprite from '../../images/sprite.svg';

export const GoBackBtn = () => {

    return (
        <ButtonStyled>
            <ButtonLink to={'/posts'}>
                <ButtonArrowSvg>
                    <ButtonIcon href={svgSprite + '#arrow-left'}></ButtonIcon>
                </ButtonArrowSvg>
                Go back
            </ButtonLink>
        </ButtonStyled>
    )
}

GoBackBtn.propTypes = {
    location: PropTypes.arrayOf(PropTypes.object),
}