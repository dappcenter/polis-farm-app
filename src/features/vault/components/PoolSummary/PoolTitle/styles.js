const styles = (theme) => ({
  container: {
    display: 'flex',
  },
  texts: {
    marginLeft: '20px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    lineHeight: '18px',
    letterSpacing: 0,
    minWidth: '150px',
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: '400',
    color: theme.palette.text.secondary,
    lineHeight: '14px',
    letterSpacing: 0,
  },
  url: {
    fontSize: '16px',
    fontWeight: '600',
    color: theme.palette.text.primary,
    lineHeight: '14px',
    letterSpacing: 0,
    '&:hover,&:focus': {
      color: theme.palette.text.secondary,
    },
  },
  icon: {
    color: theme.palette.text.primary,
    marginLeft: '4px',
  },
});

export default styles;
