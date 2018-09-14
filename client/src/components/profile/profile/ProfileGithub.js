import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../../../common/GridContainer';
import GridItem from '../../../common/GridItem';
import {Paper, Divider, Button, Typography, Chip} from '@material-ui/core'
import {SubHeader} from '../../../common/SubHeader';

class ProfileGithub extends Component {
  state = {
    clientId: '73a3ff2f838cf06566a2',
    clientSecret: 'c2196b71eb06001440684710c04d4b6212b2d389',
    count: 5,
    sort: 'created: asc',
    repos: []
  }

  componentDidMount() {
    const {username} = this.props;
    const {count, sort, clientId, clientSecret} = this.state;

    fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
      .then(res => res.json())
      .then(data => {
        if(!data.message){
          if (this.refs.myRef) {
            this.setState({repos: data});
          }
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const {repos} = this.state;
    console.log(this.state.repos)
    const repoItems = repos.map((repo, index) => (
      <div key={repo.id}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer>
              <GridItem xs={12} sm={3} md={3} style={{textAlign:'center'}}>
                <a href={repo.html_url} target="_blank">
                  <Button variant="extendedFab" color="primary">{repo.name}</Button>
                </a>
              </GridItem>
              <GridItem xs={12} sm={2} md={2} style={{textAlign:'center', marginTop:'6px'}}>
                <Typography variant="body2">
                <Chip
                  label={repo.language}
                  variant="outlined"
                  style={{
                  margin: '2px 5px'
                  }}
                  color="secondary"/> 
                        
                </Typography>
              </GridItem>
              <GridItem xs={12} sm={7} md={7}>
                <Typography variant="body2" style={{marginTop:'6px'}}>
                {repo.description}                  
                </Typography>
              </GridItem>
            </GridContainer>

          </GridItem>
        </GridContainer>

        {(repos.length - 1) > index
          ? (<Divider style={{
            margin: '8px 0'
          }}/>)
          : null}
      </div>
    ))
    return (
      <div ref="myRef">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Paper
              style={{
              backgroundColor: '#e0e0e0',
              padding: '10px'
            }}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <SubHeader paperColor="#F9A825" title="Latest GitHub repositories"/>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <Paper
                        style={{
                        padding: '8px',
                        margin: '5px 0'
                      }}>
                        {repoItems.length > 0
                          ? (repoItems)
                          : (
                            <p>No repositories listed</p>
                          )
}
                      </Paper>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </Paper>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
}


export default ProfileGithub
