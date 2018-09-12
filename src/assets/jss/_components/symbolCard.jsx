export default {
  SymbolCard: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  SymbolCardHeader: {
    display: 'flex',
    '& >:first-child': {
      flex: '20%',
      '& img:first-child': {
        marginTop:'-20px',
        marginLeft:'20px'
      },
      '& img:nth-child(2)': {
        marginTop:'0px',
        marginLeft:'60px'
      },
      '& img': {
        position: 'absolute',
      }
    },
    '& >:last-child': {
      flex: '80%',
      paddingRight: 40,
      textAlign: 'right'
    }
  }
}
