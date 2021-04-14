import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const PoolTitle = ({ name, logo, description, launchpool, buyTokenUrl, addLiquidityUrl }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid item xs={3} className={classes.container}>
      <Avatar
        alt={name}
        variant='square'
        imgProps={{ style: { objectFit: 'contain' } }}
      />
      <div className={classes.texts}>
        <Typography className={classes.title} variant='body2' gutterBottom>
          {name}
        </Typography>
        <Typography className={classes.subtitle} variant='body2'>
          {description}
        </Typography>
        <div style={{ display: 'flex', marginTop: '6px' }}>
          {buyTokenUrl ? (
            <a className={classes.url}
               href={buyTokenUrl}
               target='_blank'
               rel='noopener noreferrer'
            >
              <span>{name === 'WBNB' ? t('Wrap-BNB') : t('Buy-Token')}</span>
              {'\u00A0\u00A0'}
            </a>
          ) : (
            ''
          )}
          {addLiquidityUrl ? (
            <a
              className={classes.url}
              href={addLiquidityUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>{t('Add-Liquidity')}</span>
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </Grid>
  );
};

export default memo(PoolTitle);
