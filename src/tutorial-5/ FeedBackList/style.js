import { Flex } from "@chakra-ui/layout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    marginBottom: '60px',
    padding: '15px',
    width: '50%',
    background: "white",
    border: '1px solid #eee',
    borderRadius: '8px'
  },

  commentItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },

  date: {
    fontSize: '12px',
    color: "#999"
  },

  button: {
    backgroundColor: "grey",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px",
    color: "black",
    height: 48,
    padding: "0 30px",
    margin: 10
  }
});

export default useStyles;