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
  
  title: {
    fontSize: '24px!important',
    fontWeight: 'bold!important',
    marginBottom: '12px!important',
  },

  textField: {
    width: '100%',
    marginBottom: '14px'
  },

  button: {
    backgroundColor: "#1976D2",
    border: 0,
    borderRadius: 4,
    color: "white",
    height: 48,
    padding: "0 30px",
  }
});

export default useStyles;