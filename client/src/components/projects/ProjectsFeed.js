import React from "react";
import {withRouter} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../common/GridItem";
import GridContainer from "../../common/GridContainer";
import Table from "../../common/Table/Table.jsx";
import Card from "../../common/Card/Card.jsx";
import CardHeader from "../../common/Card/CardHeader.jsx";
import CardBody from "../../common/Card/CardBody.jsx";
import CustomInput from "../../common/CustomInput/CustomInput.jsx"
import Button from "../../common/CustomButtons/Button.jsx"
import Search from "@material-ui/icons/Search";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "600",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function ProjectsFeed(props) {
  const {classes} = props;
  const {projects} = props;
  const handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  const handleProjectClick = (projectId) => {
    props.history.push(`/project/${projectId}`);
  }
  
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>LATEST PROJECTS</h4>
            <p className={classes.cardCategoryWhite}>
              Here are your last projects, search to find others
            </p>
            <div className={classes.searchWrapper}>
              <CustomInput
                name="searchProjects"
                value="I need a state"
                onChange={handleChange}
                formControlProps={{
                className: classes.margin + " " + classes.search
              }}
                inputProps={{
                placeholder: "Search",
                inputProps: {
                  "aria-label": "Search"
                }
              }}
                white/>
              <Button color="white" aria-label="edit" justIcon round>
                <Search/>
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Project", "Description", "Customer", "Budget"]}
              tableData={projects} handleRowClick={handleProjectClick} /> {/*rowLink="/projects"*/}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withRouter(withStyles(styles)(ProjectsFeed));
