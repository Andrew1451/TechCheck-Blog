/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from 'gatsby-theme-blog/src/components/header';

export default props => (
    <div sx={{backgroundColor: 'black'}}>
        <Header {...props} />
    </div>
)