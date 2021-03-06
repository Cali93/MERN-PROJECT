import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {isEmpty} from '../utils/is-empty';

export const ProfileBanner = ({profile, title, blob, actionButton, actionLink, textColor, paperColor}) => {
  const styles = {
    spaceBetween : {
      margin: '0 5px'
    }
  }
  return (
    <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Paper
            style={{
            textAlign: 'center',
            color: `${textColor}`,
            backgroundColor: `${paperColor}`
          }}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <div >
                {/* style={{
                  marginRight: '20%'
                }} */}
                  <h2>{title}</h2>
                  <div>{blob}</div>
                  {actionButton && 
                  <Link to={actionLink}>
                    <Button
                    style={{margin:'15px 0px'}}
                    color="secondary"
                    variant="extendedFab">
                    {/* onClick={actionClick} */}
                    {actionButton}
                  </Button>
                  </Link>}

                </div>
              </GridItem>
              {isEmpty(profile.social) ? null : (
                <GridItem xs={12} sm={12} md={12} style={{margin:'15px 0px'}}>
              {isEmpty(profile.website) ? null : (
                <a href={profile.website} style={styles.spaceBetween} target="_blank">
                  <Button variant="fab">
                    <svg style={{width:'42px',height:'42px'}} viewBox="0 0 24 24">
                    <path fill="#00000" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </Button>
                </a>
              )}

              {isEmpty(profile.social.facebook) ? null : (
                <a href={profile.social.facebook} style={styles.spaceBetween} target="_blank">
                <Button variant="fab" >
                  <svg style={{width:'42px',height:'42px'}} viewBox="0 0 24 24">
                  <path fill="#3B5998" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
                  </svg>
                </Button>
                </a>
              )}

              {isEmpty(profile.social.twitter) ? null : (
                <a href={profile.social.twitter} style={styles.spaceBetween} target="_blank">
                <Button variant="fab" >
                  <svg style={{width:'42px',height:'42px'}} viewBox="0 0 24 24">
                  <path fill="#1DA1F2" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                  </svg>
                </Button>
                </a>
              )}

              {isEmpty(profile.social.linkedin) ? null : (
                <a href={profile.social.linkedin} style={styles.spaceBetween} target="_blank">
                <Button variant="fab" >
                  <svg style={{width:'42px',height:'42px'}} viewBox="0 0 24 24">
                  <path fill="#0077B5" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                  </svg>
                </Button>
                </a>
              )}

              {isEmpty(profile.social.youtube) ? null : (
                <a href={profile.social.youtube} style={styles.spaceBetween} target="_blank">
                <Button variant="fab" >
                  <svg style={{width:'42px',height:'42px'}} viewBox="0 0 24 24">
                  <path fill="#ff0000" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                  </svg>
                </Button>
                </a>
              )}

              {isEmpty(profile.githubusername) ? null : (
                <a href={`https://github.com/${profile.githubusername}`} style={styles.spaceBetween} target="_blank">
                <Button variant="fab" >
                  <svg style={{width:'42px',height:'42px'}} viewBox="0 0 24 24">
                  <path fill="#333" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </Button>
                </a>
              )}
              </GridItem>
              )}
              
            </GridContainer>
          </Paper>
        </GridItem>
      </GridContainer>
    </div>
  )
}

ProfileBanner.propTypes = {
  title: PropTypes.string.isRequired,
  blob:PropTypes.object,
  prevButton:PropTypes.string,
  actionButton:PropTypes.string,
  actionLink:PropTypes.string,
  textColor:PropTypes.string,
  paperColor:PropTypes.string,
  profile:PropTypes.object.isRequired
}

ProfileBanner.defaultProps = {
  paperColor: '#f50057',
  textColor: 'white'
};
