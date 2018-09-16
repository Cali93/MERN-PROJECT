import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from "../../assets/jss/material-kit-react/components/tableStyle";

function CustomTable({ ...props }) {
  const { classes, tableHead, tableData, tableHeaderColor, handleRowClick, rowLink } = props;

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
            { tableData ? 
            tableData.map((prop, key) => {
              if(prop){
                return (
                  // <Link key={prop._id} to={`${rowLink}/${prop._id}`}>
                  <TableRow key={prop._id} id={prop._id} onClick={()=>handleRowClick(prop._id)}>
                  {Object.keys(prop).map((objKey, key) => {
                    if (objKey !== '_id'){
                      return (
                          <TableCell className={classes.tableCell} key={key}>
                            {prop[objKey]}
                          </TableCell>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </TableRow>
                  // </Link>
                );
              } else {
                return <TableRow key={key}></TableRow>
              }
            }) : <TableRow></TableRow>
            }
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.object),
  handleRowClick: PropTypes.func,
  rowLink: PropTypes.string
};

export default withStyles(tableStyle)(CustomTable);
