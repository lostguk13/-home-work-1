import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

  container: {
    background: '#F8F8F8',
    maxWidth: '960px'
  },
  
  box: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10vh'
  }

});

export default useStyles;